"use client";

import { createContext, useContext, ReactNode, useState, useMemo, useCallback, useEffect } from "react";
import { Player, PlayerDocument, players as mockPlayers } from "@/lib/mock-data";

type PlayersContextType = {
  players: Player[];
  myProfile: Player | null;
  loading: boolean;
  addPlayer: (player: Omit<PlayerDocument, 'creatorEmail' | 'createdAt'>) => Promise<string>;
  deletePlayer: (playerId: string) => Promise<void>;
  updatePlayer: (playerId: string, playerData: Partial<PlayerDocument>) => Promise<void>;
  fetchMyProfile: () => Promise<void>;
};

const PlayersContext = createContext<PlayersContextType | undefined>(undefined);

export function PlayersProvider({ children }: { children: ReactNode }) {
  const [players, setPlayers] = useState<Player[]>(mockPlayers); // Keep mock data for dashboard
  const [myProfile, setMyProfile] = useState<Player | null>(null); // User's actual profile
  const [loading, setLoading] = useState(false);

  const fetchMyProfile = useCallback(async () => {
    const token = localStorage.getItem('token');
    if (!token) return;

    try {
      setLoading(true);
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/player/me`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        const player: Player = {
          id: data._id,
          name: data.name || '',
          sport: data.sport || 'Football',
          age: data.age || 0,
          gender: data.gender || 'Male',
          location: data.location || '',
          mobile: data.mobile || '',
          height: data.height || 0,
          weight: data.weight || 0,
          dreamClub: data.dreamClub || '',
          skills: data.skills || [],
          achievementsText: data.achievementsText || '',
          avatar: `https://picsum.photos/seed/${data._id}/200/200`,
          verified: false,
          achievementsImage: data.achievementsImage || '',
          performanceData: data.performanceData || [],
          creatorEmail: 'user@example.com',
          createdAt: data.createdAt || new Date().toISOString(),
        };
        setMyProfile(player);
        
        // Add user's profile to the players list (at the beginning) if not already there
        setPlayers(prev => {
          const filtered = prev.filter(p => p.id !== data._id);
          return [player, ...filtered];
        });
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const role = localStorage.getItem('userRole');
    if (role === 'player') {
      fetchMyProfile();
    }
  }, [fetchMyProfile]);

  const addPlayer = useCallback(async (playerData: Omit<PlayerDocument, 'creatorEmail' | 'createdAt'>): Promise<string> => {
    const newId = (Math.random() * 1000000).toFixed(0);
    const newPlayer: Player = {
        ...playerData,
        id: newId,
        creatorEmail: 'localuser@example.com',
        createdAt: new Date().toISOString(),
    };
    setPlayers(prev => [newPlayer, ...prev]);
    return newId;
  }, []);
  
  const deletePlayer = useCallback(async (playerId: string) => {
    setPlayers(prev => prev.filter(p => p.id !== playerId));
  }, []);
  
  const updatePlayer = useCallback(async (playerId: string, playerData: Partial<PlayerDocument>) => {
    const token = localStorage.getItem('token');
    if (!token) return;

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/player/me`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(playerData),
      });

      if (response.ok) {
        const result = await response.json();
        // Update local state with the response
        await fetchMyProfile();
      } else {
        throw new Error('Failed to update player');
      }
    } catch (error) {
      console.error('Error updating player:', error);
      throw error;
    }
  }, [fetchMyProfile]);

  const value = useMemo(() => ({
    players, // Mock data for dashboard browsing
    myProfile, // User's actual profile for profile page
    loading,
    addPlayer,
    deletePlayer,
    updatePlayer,
    fetchMyProfile,
  }), [players, myProfile, loading, addPlayer, deletePlayer, updatePlayer, fetchMyProfile]);

  return (
    <PlayersContext.Provider value={value}>
      {children}
    </PlayersContext.Provider>
  );
}

export function usePlayers() {
  const context = useContext(PlayersContext);
  if (context === undefined) {
    throw new Error("usePlayers must be used within a PlayersProvider");
  }
  return context;
}

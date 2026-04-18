
"use client";

import { createContext, useContext, ReactNode, useState, useMemo, useCallback, useEffect } from "react";
import { Club, ClubDocument, clubs as mockClubs, League } from "@/lib/mock-data";

type ClubsContextType = {
  clubs: Club[];
  myClub: Club | null;
  loading: boolean;
  addClub: (clubData: { name: string; league: League; location: string; description: string; scoutingFocus: string[]; creatorEmail: string;}) => Promise<string>;
  updateClub: (clubId: string, clubData: Partial<ClubDocument>) => Promise<void>;
  fetchMyClub: () => Promise<void>;
};

const ClubsContext = createContext<ClubsContextType | undefined>(undefined);

export function ClubsProvider({ children }: { children: ReactNode }) {
  const [clubs, setClubs] = useState<Club[]>(mockClubs); // Keep mock data for dashboard
  const [myClub, setMyClub] = useState<Club | null>(null); // User's actual club
  const [loading, setLoading] = useState(false);

  const fetchMyClub = useCallback(async () => {
    const token = localStorage.getItem('token');
    if (!token) return;

    try {
      setLoading(true);
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/club/me`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        const club: Club = {
          id: data._id,
          name: data.name || '',
          league: 'Premier League' as League,
          location: data.address || '',
          description: 'Club description',
          scoutingFocus: [],
          creatorEmail: data.contactEmail || 'club@example.com',
          logo: data.logo || `https://picsum.photos/seed/${data._id}/200/200`,
          verified: false,
          createdAt: data.createdAt || new Date().toISOString(),
          address: data.address || '',
          foundationDate: data.foundationDate || '',
          contactPerson: data.contactPerson || '',
          contactMobile: data.contactMobile || '',
          contactEmail: data.contactEmail || '',
        };
        setMyClub(club);
        
        // Add user's club to the clubs list (at the beginning) if not already there
        setClubs(prev => {
          const filtered = prev.filter(c => c.id !== data._id);
          return [club, ...filtered];
        });
      }
    } catch (error) {
      console.error('Error fetching club:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const role = localStorage.getItem('userRole');
    if (role === 'club') {
      fetchMyClub();
    }
  }, [fetchMyClub]);

  const addClub = useCallback(async (clubData: { name: string; league: League; location: string; description: string; scoutingFocus: string[]; creatorEmail: string;}) => {
    const newId = `club-${Date.now()}`;
    const newClub: Club = {
      id: newId,
      name: clubData.name,
      league: clubData.league,
      location: clubData.location,
      description: clubData.description,
      scoutingFocus: clubData.scoutingFocus,
      creatorEmail: clubData.creatorEmail,
      logo: `https://picsum.photos/seed/${newId}/200/200`,
      verified: false,
      createdAt: new Date().toISOString(),
      address: clubData.location,
      foundationDate: new Date().toISOString().split('T')[0],
      contactPerson: 'N/A',
      contactMobile: 'N/A',
      contactEmail: clubData.creatorEmail,
    };
    setClubs(prev => [newClub, ...prev]);
    return newId;
  }, []);

  const updateClub = useCallback(async (clubId: string, clubData: Partial<ClubDocument>) => {
    const token = localStorage.getItem('token');
    if (!token) return;

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/club/me`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(clubData),
      });

      if (response.ok) {
        await fetchMyClub();
      } else {
        throw new Error('Failed to update club');
      }
    } catch (error) {
      console.error('Error updating club:', error);
      throw error;
    }
  }, [fetchMyClub]);

  const value = useMemo(() => ({
    clubs, // Mock data for dashboard browsing
    myClub, // User's actual club for profile page
    loading,
    addClub,
    updateClub,
    fetchMyClub,
  }), [clubs, myClub, loading, addClub, updateClub, fetchMyClub]);

  return (
    <ClubsContext.Provider value={value}>
      {children}
    </ClubsContext.Provider>
  );
}

export function useClubs() {
  const context = useContext(ClubsContext);
  if (context === undefined) {
    throw new Error("useClubs must be used within a ClubsProvider");
  }
  return context;
}


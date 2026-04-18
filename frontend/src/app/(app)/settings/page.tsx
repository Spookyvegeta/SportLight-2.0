"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { usePlayers } from "@/hooks/use-players";
import { 
  Bell, 
  Moon, 
  Sun, 
  Globe, 
  Lock, 
  Eye, 
  Mail, 
  Shield,
  Trash2,
  LogOut,
  User
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function SettingsPage() {
  const router = useRouter();
  const { toast } = useToast();
  const { deletePlayer } = usePlayers();
  const [role, setRole] = useState<'player' | 'club' | null>(null);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isUpdatingPassword, setIsUpdatingPassword] = useState(false);

  // Settings state
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [profileVisibility, setProfileVisibility] = useState(true);
  const [matchAlerts, setMatchAlerts] = useState(true);
  const [messageNotifications, setMessageNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedRole = localStorage.getItem('userRole') as 'player' | 'club' | null;
    if (savedRole) {
      setRole(savedRole);
    } else {
      router.push('/login');
    }

    // Load saved settings
    const savedSettings = localStorage.getItem('appSettings');
    if (savedSettings) {
      const settings = JSON.parse(savedSettings);
      setEmailNotifications(settings.emailNotifications ?? true);
      setProfileVisibility(settings.profileVisibility ?? true);
      setMatchAlerts(settings.matchAlerts ?? true);
      setMessageNotifications(settings.messageNotifications ?? true);
      // Use saved dark mode setting
      setDarkMode(settings.darkMode ?? false);
    } else {
      // If no saved settings, check current theme from document
      const isDark = document.documentElement.classList.contains('dark');
      setDarkMode(isDark);
    }
  }, [router]);

  // Apply dark mode when it changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const saveSettings = () => {
    const settings = {
      emailNotifications,
      profileVisibility,
      matchAlerts,
      messageNotifications,
      darkMode,
    };
    localStorage.setItem('appSettings', JSON.stringify(settings));
    
    toast({
      title: "Settings Saved",
      description: "Your preferences have been updated successfully.",
    });
  };

  const handlePasswordChange = async () => {
    if (!newPassword || !confirmPassword) {
      toast({
        title: "Error",
        description: "Please fill in both password fields.",
        variant: "destructive",
      });
      return;
    }

    if (newPassword.length < 6) {
      toast({
        title: "Error",
        description: "Password must be at least 6 characters long.",
        variant: "destructive",
      });
      return;
    }

    if (newPassword !== confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match.",
        variant: "destructive",
      });
      return;
    }

    setIsUpdatingPassword(true);

    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/auth/change-password`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newPassword }),
      });

      if (response.ok) {
        toast({
          title: "Password Updated",
          description: "Your password has been changed successfully.",
        });
        setNewPassword("");
        setConfirmPassword("");
      } else {
        const data = await response.json();
        throw new Error(data.message || 'Failed to update password');
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to update password. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsUpdatingPassword(false);
    }
  };

  const handleDeleteAccount = async () => {
    try {
      const token = localStorage.getItem('token');
      
      if (role === 'player') {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/player/me`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to delete account');
        }
      } else {
        // For clubs, we'd need a similar endpoint
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/club/me`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to delete account');
        }
      }

      // Clear all local data
      localStorage.removeItem('token');
      localStorage.removeItem('userRole');
      localStorage.removeItem('appSettings');
      
      toast({
        title: "Account Deleted",
        description: "Your account has been deleted successfully.",
      });
      
      router.push('/login');
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to delete account. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    
    toast({
      title: "Logged Out",
      description: "You have been logged out successfully.",
    });
    
    router.push('/login');
  };

  if (!role) {
    return null;
  }

  return (
    <div className="container mx-auto max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold font-headline tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your account settings and preferences</p>
      </div>

      <div className="space-y-6">
        {/* Notifications Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Notifications
            </CardTitle>
            <CardDescription>
              Configure how you want to receive notifications
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-notifications">Email Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Receive email updates about your account activity
                </p>
              </div>
              <Switch
                id="email-notifications"
                checked={emailNotifications}
                onCheckedChange={(checked) => {
                  setEmailNotifications(checked);
                  toast({
                    title: checked ? "Email Notifications Enabled" : "Email Notifications Disabled",
                    description: checked 
                      ? "You will receive email updates" 
                      : "You won't receive email updates",
                  });
                }}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="match-alerts">
                  {role === 'player' ? 'Club Interest Alerts' : 'Player Match Alerts'}
                </Label>
                <p className="text-sm text-muted-foreground">
                  {role === 'player' 
                    ? 'Get notified when clubs view your profile'
                    : 'Get notified about potential player matches'}
                </p>
              </div>
              <Switch
                id="match-alerts"
                checked={matchAlerts}
                onCheckedChange={(checked) => {
                  setMatchAlerts(checked);
                  toast({
                    title: checked ? "Match Alerts Enabled" : "Match Alerts Disabled",
                  });
                }}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="message-notifications">Message Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Receive notifications for new messages
                </p>
              </div>
              <Switch
                id="message-notifications"
                checked={messageNotifications}
                onCheckedChange={(checked) => {
                  setMessageNotifications(checked);
                  toast({
                    title: checked ? "Message Notifications Enabled" : "Message Notifications Disabled",
                  });
                }}
              />
            </div>
          </CardContent>
        </Card>

        {/* Privacy Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Privacy & Security
            </CardTitle>
            <CardDescription>
              Control your profile visibility and security settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="profile-visibility">Public Profile</Label>
                <p className="text-sm text-muted-foreground">
                  Make your profile visible to {role === 'player' ? 'clubs and recruiters' : 'players'}
                </p>
              </div>
              <Switch
                id="profile-visibility"
                checked={profileVisibility}
                onCheckedChange={(checked) => {
                  setProfileVisibility(checked);
                  toast({
                    title: checked ? "Profile is Now Public" : "Profile is Now Private",
                    description: checked 
                      ? "Your profile is visible to everyone" 
                      : "Your profile is hidden from public view",
                  });
                }}
              />
            </div>
            <Separator />
            <div className="space-y-2">
              <Label>Change Password</Label>
              <div className="space-y-2">
                <Input 
                  type="password" 
                  placeholder="New password (min 6 characters)" 
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <Input 
                  type="password" 
                  placeholder="Confirm new password" 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <Button 
                  variant="outline" 
                  onClick={handlePasswordChange}
                  disabled={isUpdatingPassword}
                  className="w-full"
                >
                  <Lock className="mr-2 h-4 w-4" />
                  {isUpdatingPassword ? "Updating..." : "Update Password"}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Appearance Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {darkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              Appearance
            </CardTitle>
            <CardDescription>
              Customize how SportLight looks for you
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="dark-mode">Dark Mode</Label>
                <p className="text-sm text-muted-foreground">
                  Switch between light and dark theme
                </p>
              </div>
              <Switch
                id="dark-mode"
                checked={darkMode}
                onCheckedChange={(checked) => {
                  setDarkMode(checked);
                  toast({
                    title: checked ? "Dark Mode Enabled" : "Light Mode Enabled",
                    description: "Theme updated successfully",
                  });
                }}
              />
            </div>
          </CardContent>
        </Card>

        {/* Account Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Account
            </CardTitle>
            <CardDescription>
              Manage your account and data
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Profile Management</Label>
                <p className="text-sm text-muted-foreground">
                  Edit your profile information
                </p>
              </div>
              <Button variant="outline" onClick={() => router.push('/profile')}>
                <User className="mr-2 h-4 w-4" />
                Edit Profile
              </Button>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Sign Out</Label>
                <p className="text-sm text-muted-foreground">
                  Sign out from your account
                </p>
              </div>
              <Button variant="outline" onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-destructive">Delete Account</Label>
                <p className="text-sm text-muted-foreground">
                  Permanently delete your account and all data
                </p>
              </div>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete your
                      account and remove all your data from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDeleteAccount} className="bg-destructive text-destructive-foreground">
                      Delete Account
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </CardContent>
        </Card>

        {/* Save Button */}
        <div className="flex justify-end gap-4">
          <Button variant="outline" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button onClick={saveSettings}>
            Save Preferences
          </Button>
        </div>
      </div>
    </div>
  );
}

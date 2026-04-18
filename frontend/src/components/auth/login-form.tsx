"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SportlightLogo } from "@/components/icons";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { User, Briefcase } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { usePlayers } from "@/hooks/use-players";
import { ALL_SPORTS, ALL_LEAGUES } from "@/lib/mock-data";
import { useClubs } from "@/hooks/use-clubs";

type Role = 'player' | 'recruiter';

const playerSignupSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  sport: z.enum(ALL_SPORTS),
  age: z.coerce.number().min(1, "Age must be at least 1").max(120, "Age must be less than 120"),
  gender: z.enum(["Male", "Female"], { required_error: "Gender is required" }),
});

const recruiterSignupSchema = z.object({
  recruiterName: z.string().min(1, "Your name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});


export function LoginForm() {
  const router = useRouter();
  const { toast } = useToast();
  const [role, setRole] = useState<Role>('player');
  const { addPlayer } = usePlayers();
  const { addClub } = useClubs();

  const playerForm = useForm<z.infer<typeof playerSignupSchema>>({
    resolver: zodResolver(playerSignupSchema),
    mode: "onSubmit",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      sport: "Football",
      age: undefined,
      gender: undefined,
    },
  });

  const recruiterForm = useForm<z.infer<typeof recruiterSignupSchema>>({
    resolver: zodResolver(recruiterSignupSchema),
    mode: "onSubmit",
    defaultValues: {
      recruiterName: "",
      email: "",
      password: "",
    },
  });

  async function onPlayerSubmit(values: z.infer<typeof playerSignupSchema>) {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          password: values.password,
          role: 'player',
          sport: values.sport,
          age: values.age,
          gender: values.gender,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Signup failed');
      }

      // Store token and role
      localStorage.setItem('token', data.token);
      localStorage.setItem('userRole', data.role);

      toast({
        title: "Player Account Created",
        description: "Welcome! Your account has been created successfully.",
      });
      router.push(`/dashboard`);
    } catch(e: any) {
      console.error(e);
      toast({
        variant: "destructive",
        title: "Error creating account",
        description: e.message || "There was an issue creating your account.",
      });
    }
  }

  async function onRecruiterSubmit(values: z.infer<typeof recruiterSignupSchema>) {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: values.recruiterName,
          email: values.email,
          password: values.password,
          role: 'club',
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Signup failed');
      }

      // Store token and role
      localStorage.setItem('token', data.token);
      localStorage.setItem('userRole', data.role);

      toast({
        title: "Recruiter Account Created",
        description: `Welcome, ${values.recruiterName}! Your account has been created successfully.`,
      });
      router.push(`/dashboard`);
    } catch(e: any) {
      console.error(e);
      toast({
        variant: "destructive",
        title: "Error creating account",
        description: e.message || "There was an issue creating your account.",
      });
    }
  }

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Store token and role
      localStorage.setItem('token', data.token);
      localStorage.setItem('userRole', data.role);

      const roleName = data.role === 'player' ? 'Player' : 'Club';
      toast({
        title: `Signed In as ${roleName} Successfully`,
        description: "Redirecting you...",
      });

      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Login Failed",
        description: error.message || "Invalid credentials. Please try again.",
      });
    }
  };

  return (
    <Card className="w-full max-w-xl">
      <CardHeader className="text-center">
        <div className="flex justify-center items-center gap-2 mb-2">
          <SportlightLogo className="w-8 h-8" />
          <CardTitle className="font-headline text-3xl">Sportlight</CardTitle>
        </div>
        <CardDescription>
          Choose your role to sign in or create an account.
        </CardDescription>
      </CardHeader>

       <div className="px-6 pb-4">
        <div className="grid grid-cols-2 gap-4">
            <Card 
                className={cn("cursor-pointer transition-all", role === 'player' ? 'border-primary ring-2 ring-primary shadow-lg' : 'hover:shadow-md bg-card/50')}
                onClick={() => setRole('player')}
            >
                <CardHeader className="items-center p-4">
                    <User className="w-8 h-8 mb-2 text-primary" />
                    <CardTitle className="text-lg font-semibold">Player</CardTitle>
                </CardHeader>
            </Card>
            <Card 
                className={cn("cursor-pointer transition-all", role === 'recruiter' ? 'border-primary ring-2 ring-primary shadow-lg' : 'hover:shadow-md bg-card/50')}
                onClick={() => setRole('recruiter')}
            >
                <CardHeader className="items-center p-4">
                    <Briefcase className="w-8 h-8 mb-2 text-primary" />
                    <CardTitle className="text-lg font-semibold">Recruiter</CardTitle>
                </CardHeader>
            </Card>
        </div>
      </div>

      <Tabs
        defaultValue="signin"
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signin">Sign In</TabsTrigger>
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value="signin">
          <form id="signin-form" onSubmit={handleSignIn}>
            <CardContent className="space-y-4 pt-6">
              <div className="space-y-2">
                <Label htmlFor="email-signin">Email</Label>
                <Input
                  id="email-signin"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password-signin">Password</Label>
                <Input id="password-signin" name="password" type="password" required />
              </div>
            </CardContent>
            <CardFooter className="flex-col gap-4">
              <Button className="w-full" type="submit">
                Sign In as {role === 'player' ? 'a Player' : 'a Recruiter'}
              </Button>
            </CardFooter>
          </form>
        </TabsContent>
        <TabsContent value="signup">
          {role === 'player' ? (
            <Form {...playerForm}>
              <form onSubmit={playerForm.handleSubmit(onPlayerSubmit)}>
                <CardContent className="space-y-4 pt-6 max-h-[55vh] overflow-y-auto pr-4">
                    <FormField
                        control={playerForm.control}
                        name="name"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl><Input placeholder="e.g. Alex Johnson" {...field} /></FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <div className="grid grid-cols-2 gap-4">
                        <FormField
                            control={playerForm.control}
                            name="email"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl><Input type="email" placeholder="you@example.com" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <FormField
                            control={playerForm.control}
                            name="password"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl><Input type="password" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                    </div>
                   <FormField
                    control={playerForm.control}
                    name="sport"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Sport</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl><SelectTrigger><SelectValue placeholder="Select Sport" /></SelectTrigger></FormControl>
                            <SelectContent>
                                {ALL_SPORTS.map(sport => (
                                  <SelectItem key={sport} value={sport}>{sport}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <FormField control={playerForm.control} name="age"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Age</FormLabel>
                          <FormControl><Input type="number" placeholder="e.g. 22" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField control={playerForm.control} name="gender"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Gender</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl><SelectTrigger><SelectValue placeholder="Select gender" /></SelectTrigger></FormControl>
                            <SelectContent>
                              <SelectItem value="Male">Male</SelectItem>
                              <SelectItem value="Female">Female</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" type="submit">Create Player Account</Button>
                </CardFooter>
              </form>
            </Form>
          ) : (
            <Form {...recruiterForm}>
                <form onSubmit={recruiterForm.handleSubmit(onRecruiterSubmit)}>
                    <CardContent className="space-y-4 pt-6">
                        <FormField
                            control={recruiterForm.control}
                            name="recruiterName"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Your Name</FormLabel>
                                <FormControl><Input placeholder="e.g. John Doe" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <FormField
                            control={recruiterForm.control}
                            name="email"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl><Input type="email" placeholder="you@example.com" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <FormField
                            control={recruiterForm.control}
                            name="password"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl><Input type="password" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                    </CardContent>
                    <CardFooter>
                    <Button className="w-full" type="submit">
                        Create Recruiter Account
                    </Button>
                    </CardFooter>
                </form>
            </Form>
          )}
        </TabsContent>
      </Tabs>
    </Card>
  );
}

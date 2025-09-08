import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Separator } from "./ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { User, MapPin, Calendar, Trophy, Target, Settings, Edit, Share2, Crown } from "lucide-react";

export function Profile() {
  const userStats = {
    totalSteps: 156780,
    totalWorkouts: 45,
    caloriesBurned: 12450,
    streakDays: 12,
    level: 15,
    points: 2380,
    nextLevelPoints: 2500
  };

  const recentAchievements = [
    { name: "Naija Strong", icon: "💪", date: "2 days ago" },
    { name: "Jollof Master", icon: "🍚", date: "1 week ago" },
    { name: "First Steps", icon: "👶", date: "2 weeks ago" }
  ];

  const favoriteWorkouts = [
    "Afrobeats Dance Cardio",
    "Lagos Morning Run", 
    "Traditional Wrestling Moves",
    "Nollywood Star Abs"
  ];

  const friends = [
    { name: "Kemi", avatar: "K", status: "Just completed 10k steps!" },
    { name: "Chidi", avatar: "C", status: "Burned 400 calories today 🔥" },
    { name: "Amina", avatar: "A", status: "New personal record!" },
    { name: "Tunde", avatar: "T", status: "7-day streak! 💪" }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Profile Header */}
      <Card className="border-l-4 border-l-green-500">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <Avatar className="h-20 w-20 border-4 border-green-200">
              <AvatarImage src="/placeholder-avatar.jpg" />
              <AvatarFallback className="bg-green-100 text-green-700 text-xl font-bold">
                YO
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold">Your Name</h1>
                <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
                  <Crown className="w-3 h-3 mr-1" />
                  Level {userStats.level}
                </Badge>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  Lagos, Nigeria 🇳🇬
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  Joined January 2024
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Trophy className="h-4 w-4 text-yellow-600" />
                <span className="text-sm font-medium">{userStats.points} points</span>
                <div className="flex-1 max-w-32">
                  <Progress value={(userStats.points / userStats.nextLevelPoints) * 100} className="h-2" />
                </div>
                <span className="text-xs text-muted-foreground">{userStats.nextLevelPoints - userStats.points} to next level</span>
              </div>
            </div>

            <div className="flex gap-2">
              <Button size="sm" variant="outline">
                <Edit className="w-4 h-4 mr-1" />
                Edit
              </Button>
              <Button size="sm" variant="outline">
                <Share2 className="w-4 h-4 mr-1" />
                Share
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="text-center">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-600">{userStats.totalSteps.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">Total Steps</div>
          </CardContent>
        </Card>
        
        <Card className="text-center">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-blue-600">{userStats.totalWorkouts}</div>
            <div className="text-sm text-muted-foreground">Workouts</div>
          </CardContent>
        </Card>
        
        <Card className="text-center">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-red-600">{userStats.caloriesBurned.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">Calories Burned</div>
          </CardContent>
        </Card>
        
        <Card className="text-center">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-yellow-600">{userStats.streakDays}</div>
            <div className="text-sm text-muted-foreground">Day Streak 🔥</div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-yellow-600" />
            Recent Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentAchievements.map((achievement, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="text-2xl">{achievement.icon}</div>
                <div className="flex-1">
                  <div className="font-medium text-yellow-800">{achievement.name}</div>
                  <div className="text-sm text-muted-foreground">{achievement.date}</div>
                </div>
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                  Unlocked
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Favorite Workouts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-green-600" />
            Favorite Nigerian Workouts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {favoriteWorkouts.map((workout, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <span className="font-medium">{workout}</span>
                <Badge variant="outline" className="text-green-600 border-green-200">
                  <span className="mr-1">🇳🇬</span>
                  Favorite
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Friends Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5 text-blue-600" />
            Naija Fitness Friends
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {friends.map((friend, index) => (
              <div key={index}>
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-blue-100 text-blue-700 font-bold">
                      {friend.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="font-medium">{friend.name}</div>
                    <div className="text-sm text-muted-foreground">{friend.status}</div>
                  </div>
                  <Button size="sm" variant="outline">
                    Cheer
                  </Button>
                </div>
                {index < friends.length - 1 && <Separator className="mt-4" />}
              </div>
            ))}
          </div>
          
          <Button className="w-full mt-4" variant="outline">
            <User className="w-4 h-4 mr-1" />
            Find More Friends
          </Button>
        </CardContent>
      </Card>

      {/* Motivational Quote */}
      <Card className="bg-gradient-to-r from-green-500 to-yellow-500 text-white">
        <CardContent className="p-6 text-center">
          <h3 className="font-bold text-xl mb-2">Keep Pushing, Champion! 🇳🇬</h3>
          <p className="opacity-90">
            "Your body na your temple, treat am with respect and e go serve you well!"
          </p>
          <div className="mt-4">
            <Button variant="secondary" className="text-green-700">
              <Settings className="w-4 h-4 mr-1" />
              Account Settings
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
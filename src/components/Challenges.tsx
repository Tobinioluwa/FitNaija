import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Trophy, Users, Star, Target, Medal, Crown, Zap, Gift } from "lucide-react";

export function Challenges() {
  const activeChallenges = [
    {
      title: "Naija Hustle Challenge",
      description: "Walk 15,000 steps daily for 7 days straight",
      progress: 5,
      total: 7,
      reward: "500 points + Badge",
      difficulty: "Medium",
      participants: 1250,
      timeLeft: "2 days left"
    },
    {
      title: "Jollof Rice Burner",
      description: "Burn 400 calories daily this week",
      progress: 4,
      total: 7,
      reward: "300 points",
      difficulty: "Hard",
      participants: 890,
      timeLeft: "3 days left"
    },
    {
      title: "Weekend Warrior",
      description: "Complete 3 workouts this weekend",
      progress: 1,
      total: 3,
      reward: "200 points",
      difficulty: "Easy",
      participants: 2100,
      timeLeft: "1 day left"
    }
  ];

  const leaderboard = [
    { rank: 1, name: "Kemi_Lagos", points: 2850, badge: "👑", location: "Lagos" },
    { rank: 2, name: "Chidi_Fit", points: 2720, badge: "🥈", location: "Abuja" },
    { rank: 3, name: "Amina_Strong", points: 2650, badge: "🥉", location: "Kano" },
    { rank: 4, name: "Tunde_Warrior", points: 2580, badge: "⭐", location: "Ibadan" },
    { rank: 5, name: "Blessing_Power", points: 2450, badge: "⭐", location: "PH" },
    { rank: 6, name: "You", points: 2380, badge: "⭐", location: "Lagos", isCurrentUser: true }
  ];

  const achievements = [
    { name: "First Steps", icon: "👶", description: "Complete your first workout", unlocked: true },
    { name: "Naija Strong", icon: "💪", description: "7-day streak", unlocked: true },
    { name: "Jollof Master", icon: "🍚", description: "Log 50 Nigerian meals", unlocked: true },
    { name: "Community Leader", icon: "👥", description: "Help 10 friends", unlocked: false },
    { name: "Lagos Marathon", icon: "🏃‍♂️", description: "Walk 42km in total", unlocked: false },
    { name: "Naija Pride", icon: "🇳🇬", description: "30-day streak", unlocked: false }
  ];

  const nigerianMotivation = [
    "No retreat, no surrender! 💪",
    "Your body na your temple - maintain am well!",
    "Make we no gree for body to slack!",
    "Hustle hard, stay fit! 🔥",
    "Naija no dey carry last!"
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-green-600 bg-clip-text text-transparent">
          Challenges & Community 🏆
        </h1>
        <p className="text-muted-foreground">Compete with fellow Nigerians and unlock achievements!</p>
        <div className="bg-gradient-to-r from-yellow-50 to-green-50 p-3 rounded-lg border border-yellow-200">
          <p className="text-yellow-800 font-medium">
            {nigerianMotivation[Math.floor(Math.random() * nigerianMotivation.length)]}
          </p>
        </div>
      </div>

      <Tabs defaultValue="challenges" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="challenges">Active Challenges</TabsTrigger>
          <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>

        <TabsContent value="challenges" className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            {activeChallenges.map((challenge, index) => (
              <Card key={index} className="border-l-4 border-l-yellow-500">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Target className="h-5 w-5 text-yellow-600" />
                        {challenge.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">{challenge.description}</p>
                    </div>
                    <Badge 
                      variant={challenge.difficulty === 'Easy' ? 'secondary' : 
                              challenge.difficulty === 'Medium' ? 'default' : 'destructive'}
                    >
                      {challenge.difficulty}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{challenge.progress}/{challenge.total} days</span>
                    </div>
                    <Progress value={(challenge.progress / challenge.total) * 100} className="h-2" />
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>{challenge.participants.toLocaleString()} joined</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Gift className="h-4 w-4 text-yellow-600" />
                        <span className="text-yellow-600">{challenge.reward}</span>
                      </div>
                    </div>
                    <span className="text-red-600 font-medium">{challenge.timeLeft}</span>
                  </div>

                  <Button 
                    className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700"
                    disabled={challenge.progress === challenge.total}
                  >
                    {challenge.progress === challenge.total ? 'Completed! 🎉' : 'Join Challenge'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Featured Challenge */}
          <Card className="bg-gradient-to-r from-green-500 to-yellow-500 text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Crown className="h-6 w-6" />
                Special Challenge: Independence Day Fitness
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Celebrate Nigeria's independence with a month-long fitness challenge!</p>
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-xl font-bold">10,000 Points</div>
                  <div className="text-sm opacity-80">+ Exclusive Badge</div>
                </div>
                <Button variant="secondary" className="text-green-700">
                  Join Now 🇳🇬
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="leaderboard" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-yellow-600" />
                Nigeria Fitness Champions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {leaderboard.map((user, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                      user.isCurrentUser ? 'bg-green-50 border border-green-200' : 'bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{user.badge}</div>
                      <div>
                        <div className={`font-medium ${user.isCurrentUser ? 'text-green-700' : ''}`}>
                          {user.name}
                          {user.isCurrentUser && <span className="text-green-600 ml-1">👈</span>}
                        </div>
                        <div className="text-sm text-muted-foreground">{user.location}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-yellow-600">{user.points.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">points</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <Button variant="outline" className="border-green-200 text-green-600 hover:bg-green-50">
                  <Zap className="w-4 h-4 mr-1" />
                  View Full Leaderboard
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Regional Leaders */}
          <Card>
            <CardHeader>
              <CardTitle>Regional Champions 🌍</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { region: "Lagos", leader: "Kemi_Lagos", points: 2850 },
                  { region: "Abuja", leader: "Chidi_Fit", points: 2720 },
                  { region: "Kano", leader: "Amina_Strong", points: 2650 },
                  { region: "Ibadan", leader: "Tunde_Warrior", points: 2580 },
                  { region: "Port Harcourt", leader: "Blessing_Power", points: 2450 },
                  { region: "Enugu", leader: "Emeka_Fast", points: 2300 }
                ].map((region, index) => (
                  <div key={index} className="text-center p-3 border rounded-lg">
                    <div className="font-bold text-green-600">{region.region}</div>
                    <div className="text-sm">{region.leader}</div>
                    <div className="text-xs text-muted-foreground">{region.points} pts</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <Card key={index} className={achievement.unlocked ? 'border-green-200 bg-green-50' : 'border-gray-200'}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className={`text-2xl ${!achievement.unlocked ? 'grayscale opacity-50' : ''}`}>
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <div className={`font-medium ${achievement.unlocked ? 'text-green-700' : 'text-gray-500'}`}>
                        {achievement.name}
                        {achievement.unlocked && <span className="ml-2">✅</span>}
                      </div>
                      <div className="text-sm text-muted-foreground">{achievement.description}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="text-center">
            <CardContent className="p-6">
              <Medal className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Keep Going, Champion! 🇳🇬</h3>
              <p className="text-muted-foreground mb-4">
                You've unlocked 3 out of 6 achievements. More badges await!
              </p>
              <Button className="bg-green-600 hover:bg-green-700">
                <Star className="w-4 h-4 mr-1" />
                View All Achievements
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
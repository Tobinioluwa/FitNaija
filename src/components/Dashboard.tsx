import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { Activity, Footprints, Flame, Target, Clock, Zap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Dashboard() {
  const currentDate = new Date().toLocaleDateString('en-NG', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const motivationalPhrases = [
    "You dey do well! 💪",
    "No gree for anybody!",
    "Your body na your temple, take care of am!",
    "Make we continue to push am!",
    "Hustle no go kill you, but lazy fit kill you!"
  ];

  const todayPhrase = motivationalPhrases[new Date().getDay() % motivationalPhrases.length];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
          Welcome back, Champ! 🇳🇬
        </h1>
        <p className="text-muted-foreground">{currentDate}</p>
        <div className="bg-gradient-to-r from-green-50 to-yellow-50 p-3 rounded-lg border border-green-200">
          <p className="text-green-800 font-medium">{todayPhrase}</p>
        </div>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Steps */}
        <Card className="border-l-4 border-l-green-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Steps Today</CardTitle>
            <Footprints className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">8,547</div>
            <div className="text-xs text-muted-foreground mb-2">Goal: 10,000 steps</div>
            <Progress value={85} className="h-2" />
            <p className="text-xs text-green-600 mt-1">85% complete</p>
          </CardContent>
        </Card>

        {/* Calories */}
        <Card className="border-l-4 border-l-red-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Calories Burned</CardTitle>
            <Flame className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">420</div>
            <div className="text-xs text-muted-foreground mb-2">Goal: 500 calories</div>
            <Progress value={84} className="h-2" />
            <p className="text-xs text-red-600 mt-1">84% complete</p>
          </CardContent>
        </Card>

        {/* Active Minutes */}
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Minutes</CardTitle>
            <Clock className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">45</div>
            <div className="text-xs text-muted-foreground mb-2">Goal: 60 minutes</div>
            <Progress value={75} className="h-2" />
            <p className="text-xs text-blue-600 mt-1">75% complete</p>
          </CardContent>
        </Card>
      </div>

      {/* Weekly Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-green-600" />
            This Week's Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-2 mb-4">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
              <div key={day} className="text-center">
                <div className="text-xs text-muted-foreground mb-1">{day}</div>
                <div className={`h-8 rounded-md flex items-center justify-center text-xs font-medium ${
                  index < 4 ? 'bg-green-500 text-white' : 
                  index === 4 ? 'bg-yellow-500 text-white' : 
                  'bg-gray-200 text-gray-500'
                }`}>
                  {index < 4 ? '✓' : index === 4 ? '~' : '—'}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">5/7 days completed</span>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              <Zap className="w-3 h-3 mr-1" />
              On Fire! 🔥
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <Button className="h-16 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800">
          <div className="text-center">
            <Target className="h-6 w-6 mx-auto mb-1" />
            <div className="text-sm">Start Workout</div>
          </div>
        </Button>
        <Button variant="outline" className="h-16 border-green-200 hover:bg-green-50">
          <div className="text-center">
            <Activity className="h-6 w-6 mx-auto mb-1 text-green-600" />
            <div className="text-sm text-green-600">Log Food</div>
          </div>
        </Button>
      </div>

      {/* Workout Image */}
      <Card className="overflow-hidden">
        <div className="relative h-48">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1628970929344-2159ea6eb124?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwZml0bmVzcyUyMHdvcmtvdXQlMjBleGVyY2lzZXxlbnwxfHx8fDE3NTczMjU4Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="African fitness workout"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="font-bold">Ready for today's challenge?</h3>
            <p className="text-sm opacity-90">Let's make Naija proud! 🇳🇬</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
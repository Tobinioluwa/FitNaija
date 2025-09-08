import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Search, Plus, Utensils, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function NigerianMeals() {
  const popularMeals = [
    {
      name: "Jollof Rice",
      calories: 320,
      protein: 8,
      carbs: 65,
      fat: 4,
      category: "Main Dish",
      region: "West Africa",
      description: "Nigeria's beloved rice dish cooked in tomato sauce with spices"
    },
    {
      name: "Pounded Yam & Egusi",
      calories: 450,
      protein: 15,
      carbs: 70,
      fat: 12,
      category: "Main Dish", 
      region: "Southwest",
      description: "Traditional swallow with melon seed soup"
    },
    {
      name: "Suya",
      calories: 280,
      protein: 25,
      carbs: 5,
      fat: 18,
      category: "Snack",
      region: "Northern",
      description: "Spiced grilled meat skewers - perfect post-workout protein!"
    },
    {
      name: "Plantain (Fried)",
      calories: 180,
      protein: 2,
      carbs: 40,
      fat: 6,
      category: "Side Dish",
      region: "All Regions",
      description: "Sweet fried plantains - energy for your workout"
    },
    {
      name: "Pepper Soup",
      calories: 120,
      protein: 18,
      carbs: 8,
      fat: 3,
      category: "Soup",
      region: "All Regions", 
      description: "Spicy, warming soup perfect for recovery"
    },
    {
      name: "Moi Moi",
      calories: 200,
      protein: 12,
      carbs: 20,
      fat: 8,
      category: "Protein",
      region: "All Regions",
      description: "Steamed bean pudding packed with protein"
    }
  ];

  const todaysIntake = [
    { meal: "Jollof Rice", time: "Breakfast", calories: 320 },
    { meal: "Suya", time: "Lunch", calories: 280 },
    { meal: "Plantain", time: "Snack", calories: 180 }
  ];

  const totalCalories = todaysIntake.reduce((sum, meal) => sum + meal.calories, 0);

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-orange-600 bg-clip-text text-transparent">
          Naija Food Tracker 🍽️
        </h1>
        <p className="text-muted-foreground">Track your favorite Nigerian meals and stay healthy!</p>
        <div className="bg-gradient-to-r from-orange-50 to-green-50 p-3 rounded-lg border border-orange-200">
          <p className="text-orange-800 font-medium">
            "Good food na medicine for body!" - Track am well well! 💪
          </p>
        </div>
      </div>

      <Tabs defaultValue="meals" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="meals">Nigerian Meals</TabsTrigger>
          <TabsTrigger value="today">Today's Intake</TabsTrigger>
          <TabsTrigger value="add">Add Meal</TabsTrigger>
        </TabsList>

        <TabsContent value="meals" className="space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search Nigerian meals... (e.g., jollof, suya, egusi)" className="pl-9" />
          </div>

          {/* Meal Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {popularMeals.map((meal, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{meal.name}</CardTitle>
                      <Badge variant="secondary" className="mt-1 text-xs">
                        {meal.region}
                      </Badge>
                    </div>
                    <Badge className="bg-green-100 text-green-800 border-green-200">
                      {meal.calories} cal
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">{meal.description}</p>
                  
                  <div className="grid grid-cols-3 gap-2 mb-3 text-center">
                    <div className="bg-blue-50 p-2 rounded-md">
                      <div className="text-sm font-medium text-blue-700">{meal.protein}g</div>
                      <div className="text-xs text-blue-600">Protein</div>
                    </div>
                    <div className="bg-yellow-50 p-2 rounded-md">
                      <div className="text-sm font-medium text-yellow-700">{meal.carbs}g</div>
                      <div className="text-xs text-yellow-600">Carbs</div>
                    </div>
                    <div className="bg-red-50 p-2 rounded-md">
                      <div className="text-sm font-medium text-red-700">{meal.fat}g</div>
                      <div className="text-xs text-red-600">Fat</div>
                    </div>
                  </div>

                  <Button size="sm" className="w-full bg-green-600 hover:bg-green-700">
                    <Plus className="w-4 h-4 mr-1" />
                    Add to Today
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="today" className="space-y-4">
          {/* Today's Summary */}
          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                Today's Nutrition Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-green-600">{totalCalories}</div>
                <div className="text-sm text-muted-foreground">calories consumed</div>
                <div className="text-xs text-green-600 mt-1">Goal: 2000 calories</div>
              </div>
              
              <div className="space-y-3">
                {todaysIntake.map((entry, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-medium">{entry.meal}</div>
                      <div className="text-sm text-muted-foreground">{entry.time}</div>
                    </div>
                    <Badge variant="outline">{entry.calories} cal</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Food Image */}
          <Card className="overflow-hidden">
            <div className="relative h-48">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1741026079488-f22297dc3036?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOaWdlcmlhbiUyMGZvb2QlMjBqb2xsb2YlMjByaWNlJTIwcGxhbnRhaW58ZW58MXx8fHwxNzU3MzI1ODc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Nigerian jollof rice with plantain"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-bold">Eating right, feeling right! 🇳🇬</h3>
                <p className="text-sm opacity-90">Good food dey give energy for your hustle</p>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="add" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Utensils className="h-5 w-5 text-green-600" />
                Add Your Own Nigerian Meal
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Meal name (e.g., Amala & Ewedu)" />
                <Input placeholder="Calories per serving" type="number" />
                <Input placeholder="Protein (grams)" type="number" />
                <Input placeholder="Carbs (grams)" type="number" />
                <Input placeholder="Fat (grams)" type="number" />
                <Input placeholder="Region (e.g., Southwest)" />
              </div>
              <Input placeholder="Description..." />
              <Button className="w-full bg-green-600 hover:bg-green-700">
                <Plus className="w-4 h-4 mr-1" />
                Add to Database
              </Button>
              
              <div className="text-center text-sm text-muted-foreground mt-4">
                Help build the most comprehensive Nigerian food database! 🇳🇬
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
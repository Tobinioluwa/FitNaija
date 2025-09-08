import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Dashboard } from "./components/Dashboard";
import { NigerianMeals } from "./components/NigerianMeals";
import { Challenges } from "./components/Challenges";
import { Profile } from "./components/Profile";

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'meals':
        return <NigerianMeals />;
      case 'challenges':
        return <Challenges />;
      case 'profile':
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="pb-20">
        {renderContent()}
      </main>
    </div>
  );
}
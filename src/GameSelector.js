import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import DesignAdventureApp from "./App";

const GameSelector = () => {
  // Initialize state from URL hash or localStorage
  const [selectedGame, setSelectedGame] = useState(() => {
    const hash = window.location.hash.replace("#", "");
    const saved = localStorage.getItem("selectedGame");
    return hash || saved || null;
  });

  // Save to localStorage and update URL hash whenever selectedGame changes
  useEffect(() => {
    if (selectedGame) {
      localStorage.setItem("selectedGame", selectedGame);
      window.location.hash = selectedGame;
    } else {
      localStorage.removeItem("selectedGame");
      window.location.hash = "";
    }
  }, [selectedGame]);

  const games = [
    {
      id: "design-sprint",
      title: "Design Sprint Adventure",
      description:
        "Learn design thinking through creative challenges and problem-solving",
      bgColor: "bg-[#D6DCFF]",
      emoji: "🚀",
    },
    {
      id: "data-detective",
      title: "Data Detective Exploration",
      description:
        "Master the skills of collecting, exploring, and visualizing data",
      bgColor: "bg-[#EFEAFC]",
      emoji: "📊",
    },
  ];

  // If a game is selected, render the main app with the selected game type
  if (selectedGame) {
    return (
      <DesignAdventureApp
        gameId={selectedGame}
        onReturnHome={() => setSelectedGame(null)} // This will also clear localStorage and hash
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EFEAFC] via-[#D6DCFF] to-[#EFEAFC]">
      <div className="w-full bg-white/50">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-3 text-[#5F29FF]">
            <img
              src="/images/techtok.png"
              alt="TechTok Icon"
              width="36"
              height="36"
            />
            <h1 className="text-2xl font-bold">Techtok Learning Adventures</h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-6">
          {games.map((game) => (
            <button
              key={game.id}
              onClick={() => setSelectedGame(game.id)}
              className={`w-full ${game.bgColor} p-8 rounded-xl shadow-lg hover:scale-[1.02] transition-all
                border-2 border-white/50 backdrop-blur-sm group`}
            >
              <div className="flex items-start gap-6">
                <div className="text-6xl group-hover:scale-110 transition-transform">
                  {game.emoji}
                </div>
                <div className="text-left">
                  <h2 className="text-2xl font-bold text-[#0D065B] mb-2">
                    {game.title}
                  </h2>
                  <p className="text-[#0D065B] text-lg">{game.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameSelector;

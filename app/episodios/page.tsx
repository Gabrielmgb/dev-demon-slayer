"use client";

import { useState } from "react";
import { seasons } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function EpisodiosPage() {
  const [selectedSeason, setSelectedSeason] = useState(seasons[0]);

  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 text-red-600">
        Guia de Episódios
      </h1>
      <p className="text-center text-gray-400 mb-8 md:mb-10 px-4">
        Navegue pelas temporadas e reviva cada momento da saga.
      </p>

      <div className="flex justify-center gap-2 mb-8 flex-wrap px-4">
        {seasons.map((season) => (
          <Button
            key={season.id}
            onClick={() => setSelectedSeason(season)}
            variant="outline"
            className={`text-xs md:text-sm border-red-800 transition-colors duration-100 ${
              selectedSeason.id === season.id
                ? "bg-red-900 text-white cursor-pointer"
                : "text-gray-300 hover:bg-red-900/50 hover:text-white cursor-pointer"
            }`}
            size="sm"
          >
            Temporada {season.seasonNumber}
          </Button>
        ))}
      </div>

      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center px-4">
          {selectedSeason.title}
        </h2>
        <div className="space-y-4 md:space-y-6">
          {selectedSeason.episodes.map((ep) => (
            <Card
              key={ep.epNumber}
              className="bg-gray-900 border-red-900/50 flex flex-col md:flex-row overflow-hidden"
            >
              <div className="md:w-1/3 lg:w-1/4 relative h-48 md:h-auto">
                <img
                  src={ep.image || "/placeholder.svg?width=400&height=225"}
                  alt={`Capa do episódio ${ep.epNumber}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 lg:w-3/4">
                <CardHeader className="pb-2 md:pb-4">
                  <CardTitle className="text-lg md:text-xl text-red-500">
                    Episódio {ep.epNumber}: {ep.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-sm md:text-base">
                    {ep.summary}
                  </p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

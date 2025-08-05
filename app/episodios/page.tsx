"use client";

import { useState, useRef } from "react";
import { seasons } from "@/lib/data";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const episodeVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const buttonHover = {
  scale: 1.05,
  transition: { duration: 0.2 },
};

export default function EpisodiosPage() {
  const [selectedSeason, setSelectedSeason] = useState(seasons[0]);
  const episodesRef = useRef<HTMLDivElement>(null);

  const handleSeasonChange = (season: (typeof seasons)[0]) => {
    setSelectedSeason(season);
    setTimeout(() => {
      episodesRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-2 text-red-600"
      >
        Guia de Episódios
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center text-gray-400 mb-8 md:mb-10 px-4"
      >
        Navegue pelas temporadas e reviva cada momento da saga.
      </motion.p>

      <motion.div
        className="flex justify-center gap-2 mb-8 flex-wrap px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {seasons.map((season) => (
          <motion.div
            key={`top-${season.id}`}
            whileHover={buttonHover}
            whileTap={{ scale: 0.95 }}
          >
            <Button
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
          </motion.div>
        ))}
      </motion.div>

      <div ref={episodesRef}>
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-neutral-200 text-2xl md:text-3xl font-bold mb-6 text-center px-4"
        >
          {selectedSeason.title}
        </motion.h2>

        <motion.div variants={containerVariants} className="space-y-4 md:space-y-6">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={selectedSeason.id}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={containerVariants}
              className="space-y-4 md:space-y-6"
            >
              {selectedSeason.episodes.map((ep) => (
                <motion.div
                  key={`${selectedSeason.id}-${ep.epNumber}`}
                  variants={episodeVariants}
                >
                  <Card className="bg-gray-900 border-red-900/50 flex flex-col md:flex-row overflow-hidden">
                    <div className="md:w-1/3 lg:w-1/4 relative h-48 md:h-auto">
                      <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        src={ep.image || "/placeholder.svg?width=400&height=225"}
                        alt={`Capa do episódio ${ep.epNumber}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 lg:w-3/4 p-4 flex flex-col justify-between">
                      <div>
                        <CardHeader className="pb-2 md:pb-4 px-0 pt-0">
                          <CardTitle className="text-lg md:text-xl text-red-500">
                            Episódio {ep.epNumber}: {ep.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="px-0 py-0">
                          <p className="text-gray-400 text-sm md:text-base">
                            {ep.summary}
                          </p>
                        </CardContent>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="mt-4"
                      >
                        {ep.link ? (
                          <Button
                            asChild
                            className="w-full lg:max-w-50 bg-yellow-500 hover:bg-yellow-600 text-black font-bold"
                          >
                            <Link
                              href={ep.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Assistir na Crunchyroll
                            </Link>
                          </Button>
                        ) : (
                          <Button
                            asChild
                            className="w-full lg:max-w-50 bg-purple-700 hover:bg-purple-800 text-white font-bold"
                          >
                            <Link href="#">Assista em breve</Link>
                          </Button>
                        )}
                      </motion.div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Segunda listagem de botões (agora com motion) */}
        <motion.div
          className="flex justify-center gap-2 mb-8 flex-wrap px-4 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {seasons.map((season) => (
            <motion.div
              key={`bottom-${season.id}`}
              whileHover={buttonHover}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => handleSeasonChange(season)}
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

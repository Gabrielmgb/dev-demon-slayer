"use client"

import { DialogTrigger } from "@/components/ui/dialog"
import { characters } from "@/lib/data"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

import { easeInOut, easeOut, easeIn } from "framer-motion"



const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
  hover: {
    y: -10,
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: easeInOut,
    },
  },
}

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: easeOut,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.2,
      ease: easeIn,
    },
  },
}

export default function PersonagensPage() {

  type Character = typeof characters[number]
const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null)


  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold text-center mb-2 text-red-600">Personagens</motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center text-gray-400 mb-8 md:mb-10 px-4">
          Conheça os heróis e vilões do universo de Demon Slayer.
        </motion.p>
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-6">
          {characters.map((char) => (
            <Dialog key={char.id}>
              <DialogTrigger asChild>
                <motion.div
                  variants={cardVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCharacter(char)}
                >
                  <Card className="bg-gray-900 border-red-900/50 hover:border-red-700 transition-all cursor-pointer group overflow-hidden">
                    <CardContent className="p-0 relative aspect-[3/4]">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        src={char.image || "/placeholder.svg?width=300&height=400"}
                        alt={`Imagem de ${char.name}`}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                      />
                      <motion.div
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2 md:p-4">
                        <CardTitle className="text-sm md:text-lg font-bold text-white group-hover:text-red-500 transition-colors line-clamp-2">
                          {char.name}
                        </CardTitle>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="overflow-hidden bg-gray-950 border-red-800 text-white max-w-3xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                  >
                    <DialogTitle className="text-2xl md:text-3xl text-red-600">{char.name}</DialogTitle>
                    <DialogDescription className="text-gray-400">{char.affiliation}</DialogDescription>
                  </motion.div>
                </DialogHeader>
                <div className="grid md:grid-cols-2 gap-4 md:gap-6 mt-4">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden border-2 border-red-900/50">
                    <motion.img
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                      src={char.banner || "/placeholder.svg?width=300&height=400"}
                      alt={char.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="space-y-4">
                    <div>
                      <h3 className="font-bold text-lg text-red-500">Biografia</h3>
                      <p className="text-gray-300 text-sm">{char.bio}</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-red-500">Respiração</h3>
                      <p className="text-gray-300 text-sm">{char.breathing}</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-red-500">Curiosidades</h3>
                      <p className="text-gray-300 text-sm">{char.trivia}</p>
                    </div>
                  </motion.div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

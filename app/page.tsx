"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Users, PlayCircle, Sword, Eye } from "lucide-react";
import { motion, easeOut, easeInOut } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
  hover: {
    scale: 1.05,
    y: -10,
    transition: {
      duration: 0.3,
      ease: easeInOut,
    },
  },
};

export default function HomePage() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full"
    >
      {/* Hero Section */}
      <motion.section
        variants={itemVariants}
        className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center text-center overflow-hidden rounded-lg mb-12"
      >
        <div className="absolute inset-0 bg-black/60 z-10" />
        <motion.img
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: easeOut }}
          src="/dev-demon-slayer/hero-banner.jpg?width=1920&height=1080"
          alt="Background da 5ª Temporada"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: easeOut }}
          className="relative z-20 p-4 max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8, ease: easeOut }}
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg mb-4"
          >
            Castelo Infinito: A Batalha Final
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6, ease: easeOut }}
            className="mt-4 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-200 drop-shadow-md"
          >
            O confronto decisivo chegou. Tanjiro e os Hashiras enfrentam Muzan
            Kibutsuji e as Luas Superiores no misterioso Castelo Infinito, onde
            tudo será decidido.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Season 5 Details */}
      <motion.section variants={itemVariants} className="py-8 md:py-12 mb-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-4 order-2 md:order-1"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
              className="text-2xl md:text-3xl font-bold text-red-600"
            >
              Sobre a Nova Temporada
            </motion.h2>
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-2 text-gray-300 text-sm md:text-base"
            >
              <motion.li whileHover={{ x: 10 }} transition={{ type: "spring", stiffness: 300 }}>
                <strong>Nome do Arco:</strong> Castelo Infinito (Infinity Castle)
              </motion.li>
              <motion.li whileHover={{ x: 10 }} transition={{ type: "spring", stiffness: 300 }}>
                <strong>Data de Lançamento:</strong> 11 de Setembro de 2025
              </motion.li>
              <motion.li whileHover={{ x: 10 }} transition={{ type: "spring", stiffness: 300 }}>
                <strong>Estúdio:</strong> Ufotable
              </motion.li>
              <motion.li whileHover={{ x: 10 }} transition={{ type: "spring", stiffness: 300 }}>
                <strong>Formato:</strong> Trilogia de Filmes
              </motion.li>
            </motion.ul>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
              className="text-gray-400 leading-relaxed text-sm md:text-base"
            >
              Após o intenso treinamento dos Hashiras, chegou o momento da batalha final. Muzan Kibutsuji invoca o Castelo
              Infinito, uma fortaleza dimensional onde os Caçadores de Demônios enfrentarão as Luas Superiores restantes em
              combates simultâneos. Esta é a conclusão épica da saga de Tanjiro Kamado.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-red-700 hover:bg-red-800 text-white font-bold w-full sm:w-auto"
              >
                <Link href="/episodios">Veja Todos os Episódios</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="aspect-video rounded-lg overflow-hidden border-2 border-red-900/50 shadow-lg shadow-red-900/20 order-1 md:order-2"
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/mx9u8lRmY3o?autoplay=0&rel=0&modestbranding=1"
              title="Trailer da 4ª Temporada de Kimetsu no Yaiba"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>
      </motion.section>

      {/* Explore More Section */}
      <motion.section variants={itemVariants} className="py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-red-600 mb-4"
          >
            Explore o Universo de Demon Slayer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Mergulhe profundamente no mundo de Kimetsu no Yaiba e descubra todos os segredos dos personagens e episódios da
            saga completa.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Personagens Card */}
          <motion.div variants={cardVariants} whileHover="hover" viewport={{ once: true, amount: 0.2 }}>
            <Card className="bg-gradient-to-br from-gray-950 to-gray-700 border-red-900/50 hover:border-red-700 transition-all duration-300 group overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  src="/dev-demon-slayer/personagens.gif?width=600&height=300"
                  alt="Personagens de Demon Slayer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="absolute bottom-4 left-4 flex items-center gap-2 text-white"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  >
                    <Users className="w-6 h-6 text-red-500" />
                  </motion.div>
                  <span className="font-bold text-lg">30 Personagens</span>
                </motion.div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-red-500 flex items-center gap-2">
                  <Sword className="w-6 h-6" />
                  Personagens
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  Conheça todos os heróis, vilões e personagens marcantes da saga. Desde os poderosos Hashiras até as temíveis
                  Luas Superiores que lutam no Castelo Infinito.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  {["• Hashiras (Pilares)", "• Luas Superiores e Inferiores", "• Caçadores de Demônios", "• Muzan e seus Subordinados"].map(
                    (item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                        viewport={{ once: true, amount: 0.2 }}
                        whileHover={{ x: 10 }}
                      >
                        {item}
                      </motion.li>
                    )
                  )}
                </ul>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button asChild className="w-full bg-red-700 hover:bg-red-800 text-white font-bold">
                    <Link href="/personagens" className="flex items-center justify-center gap-2">
                      <Eye className="w-4 h-4" />
                      Explorar Personagens
                    </Link>
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Episódios Card */}
          <motion.div variants={cardVariants} whileHover="hover" viewport={{ once: true, amount: 0.2 }}>
            <Card className="bg-gradient-to-br from-gray-950 to-gray-700 border-red-900/50 hover:border-red-700 transition-all duration-300 group overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  src="/dev-demon-slayer/episodes.gif?width=600&height=300"
                  alt="Episódios de Demon Slayer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="absolute bottom-4 left-4 flex items-center gap-2 text-white"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  >
                    <PlayCircle className="w-6 h-6 text-red-500" />
                  </motion.div>
                  <span className="font-bold text-lg">Saga Completa</span>
                </motion.div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-red-500 flex items-center gap-2">
                  <PlayCircle className="w-6 h-6" />
                  Episódios
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  Reviva cada momento épico da jornada de Tanjiro, desde o início até a batalha final no Castelo Infinito.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  {[
                    "• Temporada 1: Jornada de Tanjiro",
                    "• Temporada 2: Trem Infinito & Distrito",
                    "• Temporada 3: Vila dos Ferreiros",
                    "• Temporada 4: Treinamento dos Hashiras",
                    "• Filmes: Castelo Infinito (Trilogia)",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                      viewport={{ once: true, amount: 0.2 }}
                      whileHover={{ x: 10 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button asChild className="w-full bg-red-700 hover:bg-red-800 text-white font-bold">
                    <Link href="/episodios" className="flex items-center justify-center gap-2">
                      <PlayCircle className="w-4 h-4" />
                      Ver Episódios
                    </Link>
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

    </motion.div>
  );
}

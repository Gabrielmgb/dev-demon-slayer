"use client"
import { motion } from "framer-motion"
import NavLinks from "./navLinks";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-black border-t border-red-900/50 mt-12">
      <nav className="flex justify-center gap-4 pt-4 text-sm font-medium">
        <NavLinks />
      </nav>
      <div className="container mx-auto px-4 py-6 text-center text-gray-500">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }}>
          &copy; {new Date().getFullYear()} Kimetsu no Yaiba Fan Site. Todos os
          direitos reservados.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-xs mt-1">
          Este é um site de fã, não oficial, apenas para fins educacionais e
          demonstração técnica. Kimetsu no Yaiba é uma criação de Koyoharu
          Gotouge. Todos os direitos de Demon Slayer pertencem aos seus
          respectivos detentores. Links externos direcionam para a Crunchyroll,
          plataforma oficial de streaming.
        </motion.p>
      </div>
    </motion.footer>
  );
}

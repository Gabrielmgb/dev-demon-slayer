import NavLinks from "./navLinks";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-red-900/50 mt-12">
      <nav className="flex justify-center gap-4 pt-4 text-sm font-medium">
        <NavLinks />
      </nav>
      <div className="container mx-auto px-4 py-6 text-center text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} Kimetsu no Yaiba Fan Site. Todos os
          direitos reservados.
        </p>
        <p className="text-xs mt-1">
          Este é um site de fã, não oficial, apenas para fins educacionais e
          demonstração técnica. Kimetsu no Yaiba é uma criação de Koyoharu
          Gotouge. Todos os direitos de Demon Slayer pertencem aos seus
          respectivos detentores. Links externos direcionam para a Crunchyroll,
          plataforma oficial de streaming.
        </p>
      </div>
    </footer>
  );
}

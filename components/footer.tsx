export default function Footer() {
  return (
    <footer className="bg-black border-t border-red-900/50 mt-12">
      <div className="container mx-auto px-4 py-6 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Kimetsu no Yaiba Fan Site. Todos os direitos reservados.</p>
        <p className="text-xs mt-1">
          Este é um site de fã, não oficial. Kimetsu no Yaiba é uma criação de Koyoharu Gotouge.
        </p>
      </div>
    </footer>
  )
}

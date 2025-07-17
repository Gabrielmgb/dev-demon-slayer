import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Users, PlayCircle, Sword, Eye } from "lucide-react"

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center text-center overflow-hidden rounded-lg mb-12">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          src="/placeholder.svg?width=1920&height=1080"
          alt="Background da 4ª Temporada"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 p-4 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg mb-4">
            Quarta Temporada: O Treinamento dos Hashiras
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-200 drop-shadow-md">
            A jornada de Tanjiro continua. Prepare-se para o arco intenso do "Treinamento dos Hashiras", onde os
            caçadores mais fortes se reúnem para a batalha final.
          </p>
        </div>
      </section>

      {/* Season 4 Details */}
      <section className="py-8 md:py-12 mb-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-bold text-red-600">Sobre a Nova Temporada</h2>
            <ul className="space-y-2 text-gray-300 text-sm md:text-base">
              <li>
                <strong>Nome do Arco:</strong> Treinamento dos Hashiras
              </li>
              <li>
                <strong>Data de Lançamento:</strong> Abril de 2024
              </li>
              <li>
                <strong>Estúdio:</strong> Ufotable
              </li>
            </ul>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              Após os eventos no Vilarejo dos Ferreiros, Tanjiro e seus amigos se submetem a um rigoroso regime de
              treinamento com os Hashiras, os pilares da Corporação de Caçadores de Demônios. Este arco é crucial para o
              desenvolvimento dos personagens e prepara o palco para o confronto decisivo contra Muzan Kibutsuji.
            </p>
            <Button asChild size="lg" className="bg-red-700 hover:bg-red-800 text-white font-bold w-full sm:w-auto">
              <Link href="/episodios">Veja Todos os Episódios</Link>
            </Button>
          </div>
          <div className="aspect-video rounded-lg overflow-hidden border-2 border-red-900/50 shadow-lg shadow-red-900/20 order-1 md:order-2">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/S9n_d2iWn_c"
              title="Trailer da 4ª Temporada de Kimetsu no Yaiba"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Explore More Section */}
      <section className="py-12 md:py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">Explore o Universo de Demon Slayer</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Mergulhe profundamente no mundo de Kimetsu no Yaiba e descubra todos os segredos dos personagens e
            episódios.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Personagens Card */}
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-red-900/50 hover:border-red-700 transition-all duration-300 group overflow-hidden">
            <div className="relative h-48 overflow-hidden">
              <img
                src="/placeholder.svg?width=600&height=300"
                alt="Personagens de Demon Slayer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                <Users className="w-6 h-6 text-red-500" />
                <span className="font-bold text-lg">22+ Personagens</span>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-2xl text-red-500 flex items-center gap-2">
                <Sword className="w-6 h-6" />
                Personagens
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">
                Conheça todos os heróis, vilões e personagens marcantes da saga. Desde os poderosos Hashiras até as
                temíveis Luas Superiores.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Hashiras (Pilares)</li>
                <li>• Luas Superiores e Inferiores</li>
                <li>• Caçadores de Demônios</li>
                <li>• Vilões e Aliados</li>
              </ul>
              <Button asChild className="w-full bg-red-700 hover:bg-red-800 text-white font-bold">
                <Link href="/personagens" className="flex items-center justify-center gap-2">
                  <Eye className="w-4 h-4" />
                  Explorar Personagens
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Episódios Card */}
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-red-900/50 hover:border-red-700 transition-all duration-300 group overflow-hidden">
            <div className="relative h-48 overflow-hidden">
              <img
                src="/placeholder.svg?width=600&height=300"
                alt="Episódios de Demon Slayer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                <PlayCircle className="w-6 h-6 text-red-500" />
                <span className="font-bold text-lg">4 Temporadas</span>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-2xl text-red-500 flex items-center gap-2">
                <PlayCircle className="w-6 h-6" />
                Episódios
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">
                Reviva cada momento épico da jornada de Tanjiro. Navegue por todas as temporadas e episódios da série.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Temporada 1: Jornada de Tanjiro</li>
                <li>• Temporada 2: Trem Infinito & Distrito</li>
                <li>• Temporada 3: Vila dos Ferreiros</li>
                <li>• Temporada 4: Treinamento dos Hashiras</li>
              </ul>
              <Button asChild className="w-full bg-red-700 hover:bg-red-800 text-white font-bold">
                <Link href="/episodios" className="flex items-center justify-center gap-2">
                  <PlayCircle className="w-4 h-4" />
                  Ver Episódios
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

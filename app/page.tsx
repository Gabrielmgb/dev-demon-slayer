import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Users, PlayCircle, Sword, Eye } from "lucide-react";

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center text-center overflow-hidden rounded-lg mb-12">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          src="/dev-demon-slayer/hero-banner.jpg?width=1920&height=1080"
          alt="Background da 5ª Temporada"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 p-4 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg mb-4">
            Castelo Infinito: A Batalha Final
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-200 drop-shadow-md">
            O confronto decisivo chegou. Tanjiro e os Hashiras enfrentam Muzan
            Kibutsuji e as Luas Superiores no misterioso Castelo Infinito, onde
            tudo será decidido.
          </p>
        </div>
      </section>

      {/* Season 4 Details */}
      <section className="py-8 md:py-12 mb-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-bold text-red-600">
              Sobre a Nova Temporada
            </h2>
            <ul className="space-y-2 text-gray-300 text-sm md:text-base">
              <li>
                <strong>Nome do Arco:</strong> Castelo Infinito (Infinity
                Castle)
              </li>
              <li>
                <strong>Data de Lançamento:</strong> 12 de Maio de 2025
              </li>
              <li>
                <strong>Estúdio:</strong> Ufotable
              </li>
              <li>
                <strong>Formato:</strong> Trilogia de Filmes
              </li>
            </ul>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              Após o intenso treinamento dos Hashiras, chegou o momento da
              batalha final. Muzan Kibutsuji invoca o Castelo Infinito, uma
              fortaleza dimensional onde os Caçadores de Demônios enfrentarão as
              Luas Superiores restantes em combates simultâneos. Esta é a
              conclusão épica da saga de Tanjiro Kamado.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-red-700 hover:bg-red-800 text-white font-bold w-full sm:w-auto"
            >
              <Link href="/episodios">Veja Todos os Episódios</Link>
            </Button>
          </div>
          <div className="aspect-video rounded-lg overflow-hidden border-2 border-red-900/50 shadow-lg shadow-red-900/20 order-1 md:order-2">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/mx9u8lRmY3o?autoplay=0&rel=0&modestbranding=1"
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
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
            Explore o Universo de Demon Slayer
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Mergulhe profundamente no mundo de Kimetsu no Yaiba e descubra todos
            os segredos dos personagens e episódios da saga completa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Personagens Card */}
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-red-900/50 hover:border-red-700 transition-all duration-300 group overflow-hidden">
            <div className="relative h-48 overflow-hidden">
              <img
                src="/dev-demon-slayer/personagens.gif?width=600&height=300"
                alt="Personagens de Demon Slayer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                <Users className="w-6 h-6 text-red-500" />
                <span className="font-bold text-lg">30 Personagens</span>
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
                Conheça todos os heróis, vilões e personagens marcantes da saga.
                Desde os poderosos Hashiras até as temíveis Luas Superiores que
                lutam no Castelo Infinito.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Hashiras (Pilares)</li>
                <li>• Luas Superiores e Inferiores</li>
                <li>• Caçadores de Demônios</li>
                <li>• Muzan e seus Subordinados</li>
              </ul>
              <Button
                asChild
                className="w-full bg-red-700 hover:bg-red-800 text-white font-bold"
              >
                <Link
                  href="/personagens"
                  className="flex items-center justify-center gap-2"
                >
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
                src="/dev-demon-slayer/episodes.gif?width=600&height=300"
                alt="Episódios de Demon Slayer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                <PlayCircle className="w-6 h-6 text-red-500" />
                <span className="font-bold text-lg">5 Temporadas</span>
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
                Reviva cada momento épico da jornada de Tanjiro, desde o início
                até a batalha final no Castelo Infinito.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Temporada 1: Jornada de Tanjiro</li>
                <li>• Temporada 2: Trem Infinito & Distrito</li>
                <li>• Temporada 3: Vila dos Ferreiros</li>
                <li>• Temporada 4: Treinamento dos Hashiras</li>
                <li>• Temporada 5: Castelo Infinito (Trilogia)</li>
              </ul>
              <Button
                asChild
                className="w-full bg-red-700 hover:bg-red-800 text-white font-bold"
              >
                <Link
                  href="/episodios"
                  className="flex items-center justify-center gap-2"
                >
                  <PlayCircle className="w-4 h-4" />
                  Ver Episódios
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

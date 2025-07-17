import { DialogTrigger } from "@/components/ui/dialog"
import { characters } from "@/lib/data"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

export default function PersonagensPage() {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 text-red-600">Personagens</h1>
      <p className="text-center text-gray-400 mb-8 md:mb-10 px-4">
        Conheça os heróis e vilões do universo de Demon Slayer.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-6">
        {characters.map((char) => (
          <Dialog key={char.id}>
            <DialogTrigger asChild>
              <Card className="bg-gray-900 border-red-900/50 hover:border-red-700 transition-all cursor-pointer group overflow-hidden">
                <CardContent className="p-0 relative aspect-[3/4]">
                  <img
                    src={char.image || "/placeholder.svg?width=300&height=400"}
                    alt={`Imagem de ${char.name}`}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2 md:p-4">
                    <CardTitle className="text-sm md:text-lg font-bold text-white group-hover:text-red-500 transition-colors line-clamp-2">
                      {char.name}
                    </CardTitle>
                  </div>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="bg-gray-950 border-red-800 text-white max-w-3xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl md:text-3xl text-red-600">{char.name}</DialogTitle>
                <DialogDescription className="text-gray-400">{char.affiliation}</DialogDescription>
              </DialogHeader>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6 mt-4">
                <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden border-2 border-red-900/50">
                  <img
                    src={char.image || "/placeholder.svg?width=300&height=400"}
                    alt={char.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4">
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
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  )
}

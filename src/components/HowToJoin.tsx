
import React from 'react';
import { HandHeart, Share2, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const HowToJoin = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-red-500 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <HandHeart className="text-yellow-300 mr-3" size={48} />
            <h2 className="text-4xl md:text-5xl font-black">CÓMO PUEDES SUMARTE</h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
            <CardHeader className="text-center">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-black" size={32} />
              </div>
              <CardTitle>Invirtiendo</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm opacity-90 mb-4">Apoya la campaña de Kickstarter</p>
              <Button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold">
                Invertir Ahora
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
            <CardHeader className="text-center">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <HandHeart className="text-black" size={32} />
              </div>
              <CardTitle>Apadrinando</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm opacity-90 mb-4">Patrocina una escuela completa</p>
              <Button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold">
                Apadrinar
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
            <CardHeader className="text-center">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Share2 className="text-black" size={32} />
              </div>
              <CardTitle>Compartiendo</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm opacity-90 mb-4">Difunde en tus redes sociales</p>
              <Button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold">
                Compartir
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
            <CardHeader className="text-center">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-black" size={32} />
              </div>
              <CardTitle>Formando Parte</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm opacity-90 mb-4">Sé embajador o facilitador</p>
              <Button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold">
                Unirme
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <p className="text-2xl font-bold mb-4">
            Juntos podemos detener el bullying y levantar una generación de líderes valientes.
          </p>
          <p className="text-xl text-yellow-300 font-bold">
            ¡Sé parte de esta revolución del honor!
          </p>
        </div>
      </div>
    </section>
  );
};

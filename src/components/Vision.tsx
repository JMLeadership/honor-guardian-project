
import React from 'react';
import { Globe, Heart, Star } from 'lucide-react';

export const Vision = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Globe className="text-primary mr-3" size={48} />
            <h2 className="text-4xl md:text-5xl font-black text-foreground">VISIÓN</h2>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Crear una generación de jóvenes valientes que lideren una cultura de respeto, identidad y honor en cada escuela.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl transition-shadow">
              <Heart className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Respeto</h3>
            <p className="text-muted-foreground">Fomentamos el respeto mutuo como base fundamental de la convivencia escolar.</p>
          </div>
          
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="bg-gradient-to-br from-purple-500 to-red-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl transition-shadow">
              <Star className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Identidad</h3>
            <p className="text-muted-foreground">Ayudamos a cada estudiante a descubrir y valorar su identidad única.</p>
          </div>
          
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="bg-gradient-to-br from-red-500 to-yellow-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl transition-shadow">
              <Globe className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Honor</h3>
            <p className="text-muted-foreground">Cultivamos principios de honor que guíen las acciones de los jóvenes.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

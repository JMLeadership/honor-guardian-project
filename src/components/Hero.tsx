
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Users, Trophy } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-red-500 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-20 animate-pulse">
        <Shield size={60} className="text-yellow-300 opacity-20" />
      </div>
      <div className="absolute bottom-20 right-20 animate-bounce">
        <Trophy size={40} className="text-yellow-300 opacity-20" />
      </div>
      <div className="absolute top-1/2 left-10 animate-pulse delay-1000">
        <Users size={50} className="text-yellow-300 opacity-20" />
      </div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-center mb-6">
          <Shield size={80} className="text-yellow-300 mr-4" />
          <h1 className="text-5xl md:text-7xl font-black tracking-tight">
            LUCHADORES
            <span className="block text-yellow-300">DEL HONOR</span>
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl font-bold mb-8 max-w-4xl mx-auto leading-relaxed">
          Transformando Escuelas en Zonas Libres de Acoso
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 text-lg">
            Únete al Movimiento
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black font-bold px-8 py-4 text-lg">
            Conoce el Proyecto
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <Shield className="mx-auto mb-4 text-yellow-300" size={40} />
            <h3 className="font-bold text-lg mb-2">Tecnología Educativa</h3>
            <p className="text-sm opacity-90">App interactiva para reportes y formación</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <Users className="mx-auto mb-4 text-yellow-300" size={40} />
            <h3 className="font-bold text-lg mb-2">Comunidad Activa</h3>
            <p className="text-sm opacity-90">Red de Guardianes del Honor</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <Trophy className="mx-auto mb-4 text-yellow-300" size={40} />
            <h3 className="font-bold text-lg mb-2">Impacto Real</h3>
            <p className="text-sm opacity-90">Cultura de respeto y honor</p>
          </div>
        </div>
      </div>
    </section>
  );
};

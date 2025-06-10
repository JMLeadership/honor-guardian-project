import React from 'react';
import { BarChart3, BookOpen, School, Users, Shield } from 'lucide-react';

export const Impact = () => {
  const stats = [
    { icon: BookOpen, number: "1,000", text: "Kits distribuidos", color: "from-blue-500 to-blue-600" },
    { icon: School, number: "50", text: "Escuelas piloto activas", color: "from-purple-500 to-purple-600" },
    { icon: Users, number: "10,000", text: "Estudiantes formados", color: "from-red-500 to-red-600" },
    { icon: Shield, number: "500", text: "Guardianes del Honor", color: "from-yellow-500 to-yellow-600" }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-secondary/30 to-accent/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <BarChart3 className="text-primary mr-3" size={48} />
            <h2 className="text-4xl md:text-5xl font-black text-foreground">IMPACTO ESPERADO</h2>
          </div>
          <p className="text-xl text-muted-foreground mb-4">(FASE 1)</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className={`bg-gradient-to-br ${stat.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <stat.icon className="text-white" size={32} />
              </div>
              <div className="text-4xl md:text-5xl font-black text-foreground mb-2 group-hover:scale-105 transition-transform">
                {stat.number}
              </div>
              <p className="text-muted-foreground font-medium">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

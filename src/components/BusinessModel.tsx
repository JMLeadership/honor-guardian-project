
import React from 'react';
import { DollarSign, Building, Heart, Handshake } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const BusinessModel = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <DollarSign className="text-primary mr-3" size={48} />
            <h2 className="text-4xl md:text-5xl font-black text-foreground">MODELO DE NEGOCIO</h2>
          </div>
          <p className="text-xl text-muted-foreground mb-4">(BUSINESS AS MISSION)</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Building className="text-blue-500 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-foreground">Venta directa de kits escolares</h3>
                <p className="text-muted-foreground">Distribución directa a colegios interesados</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Handshake className="text-purple-500 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-foreground">Licencias anuales para uso de la app</h3>
                <p className="text-muted-foreground">Suscripción institucional para acceso completo</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Heart className="text-red-500 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-foreground">Donaciones y patrocinios corporativos</h3>
                <p className="text-muted-foreground">Apoyo de empresas comprometidas socialmente</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <DollarSign className="text-yellow-500 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-foreground">Programas apadrinados</h3>
                <p className="text-muted-foreground">Para escuelas de bajos recursos</p>
              </div>
            </div>
          </div>
        </div>
        
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold">USO DE FONDOS (CAMPAÑA KICKSTARTER)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-black text-primary mb-2">30%</div>
                <p className="font-medium">Desarrollo y lanzamiento de la app</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-primary mb-2">35%</div>
                <p className="font-medium">Producción e impresión de kits</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-primary mb-2">20%</div>
                <p className="font-medium">Plataforma de formación digital</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-primary mb-2">15%</div>
                <p className="font-medium">Marketing y expansión piloto</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

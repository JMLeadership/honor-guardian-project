
import React from 'react';
import { Smartphone, BookOpen, Monitor, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const Project = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Lightbulb className="text-primary mr-3" size={48} />
            <h2 className="text-4xl md:text-5xl font-black text-foreground">PROYECTO</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Luchadores del Honor es una solución integral contra el acoso escolar que combina tecnología educativa, formación y acción comunitaria:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-500">
            <CardHeader className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Smartphone className="text-white" size={32} />
              </div>
              <CardTitle className="text-xl font-bold">App Interactiva</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Reportes anónimos seguros</li>
                <li>• Formación en valores</li>
                <li>• Retos semanales</li>
                <li>• Medición del clima escolar</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-purple-500">
            <CardHeader className="text-center">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="text-white" size={32} />
              </div>
              <CardTitle className="text-xl font-bold">Kit Escolar</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Manuales del Honor</li>
                <li>• Pulseras de compromiso</li>
                <li>• Pósters motivadores</li>
                <li>• Guías de intervención</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-red-500">
            <CardHeader className="text-center">
              <div className="bg-gradient-to-br from-red-500 to-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Monitor className="text-white" size={32} />
              </div>
              <CardTitle className="text-xl font-bold">Formación Digital</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Curso online para estudiantes</li>
                <li>• Formación para docentes</li>
                <li>• Capacitación para padres</li>
                <li>• Certificación "Guardianes del Honor"</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

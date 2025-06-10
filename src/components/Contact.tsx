
import React from 'react';
import { Mail, Instagram, Globe, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const Contact = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Mail className="text-primary mr-3" size={48} />
            <h2 className="text-4xl md:text-5xl font-black text-foreground">CONTACTO</h2>
          </div>
        </div>
        
        <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
          <CardHeader className="text-center">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <User className="text-white" size={40} />
            </div>
            <CardTitle className="text-2xl font-bold">Dr. Juan Muñoz</CardTitle>
            <p className="text-muted-foreground">Fundador de Luchadores del Honor</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-center space-x-4">
              <Mail className="text-primary" size={24} />
              <a href="mailto:vidatransformacional2025@gmail.com" className="text-lg text-primary hover:underline">
                vidatransformacional2025@gmail.com
              </a>
            </div>
            
            <div className="flex items-center justify-center space-x-8">
              <div className="flex items-center space-x-2">
                <Instagram className="text-primary" size={24} />
                <span className="text-muted-foreground">@LuchadoresDelHonor</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="text-primary" size={24} />
                <span className="text-muted-foreground">@LuchadoresDelHonor</span>
              </div>
            </div>
            
            <div className="text-center pt-6">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold px-8 py-3">
                Contactar Ahora
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

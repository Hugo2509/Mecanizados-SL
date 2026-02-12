import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ChevronRight, Award, Users, Clock, Factory, Menu, X } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-2">
              <Factory className="h-8 w-8 text-blue-900" />
              <span className="text-2xl font-bold text-blue-900">Mecanizados Calero</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
                Inicio
              </button>
              <button onClick={() => scrollToSection('servicios')} className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
                Servicios
              </button>
              <button onClick={() => scrollToSection('empresa')} className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
                La Empresa
              </button>
              <button onClick={() => scrollToSection('maquinaria')} className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
                Maquinaria
              </button>
              <button onClick={() => scrollToSection('contacto')} className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
                Contacto
              </button>
              <Button onClick={() => scrollToSection('presupuesto')} className="bg-blue-900 hover:bg-blue-800 text-white">
                Presupuesto Gratis
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </nav>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('inicio')} className="text-left text-gray-700 hover:text-blue-900 font-medium">
                  Inicio
                </button>
                <button onClick={() => scrollToSection('servicios')} className="text-left text-gray-700 hover:text-blue-900 font-medium">
                  Servicios
                </button>
                <button onClick={() => scrollToSection('empresa')} className="text-left text-gray-700 hover:text-blue-900 font-medium">
                  La Empresa
                </button>
                <button onClick={() => scrollToSection('maquinaria')} className="text-left text-gray-700 hover:text-blue-900 font-medium">
                  Maquinaria
                </button>
                <button onClick={() => scrollToSection('contacto')} className="text-left text-gray-700 hover:text-blue-900 font-medium">
                  Contacto
                </button>
                <Button onClick={() => scrollToSection('presupuesto')} className="bg-blue-900 hover:bg-blue-800 text-white w-full">
                  Presupuesto Gratis
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1713371398485-7bde1bde9def"
            alt="Mecanizado CNC de precisión"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/85 to-blue-900/70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-16">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Mecanizados CNC de Precisión en Barcelona
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
              17 años de experiencia en tornos CNC, fresadoras y mantenimiento industrial. 
              Calidad, rapidez y asesoramiento técnico profesional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('presupuesto')}
                className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Solicitar Presupuesto Gratis
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection('servicios')}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-6 transition-all duration-300"
              >
                Ver Servicios
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gray-50 py-12 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Clock className="h-12 w-12 text-blue-900" />
              </div>
              <div className="text-4xl font-bold text-blue-900 mb-2">17+</div>
              <div className="text-gray-600 font-medium">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Factory className="h-12 w-12 text-blue-900" />
              </div>
              <div className="text-4xl font-bold text-blue-900 mb-2">1.000m²</div>
              <div className="text-gray-600 font-medium">de Instalaciones</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Award className="h-12 w-12 text-blue-900" />
              </div>
              <div className="text-4xl font-bold text-blue-900 mb-2">4m</div>
              <div className="text-gray-600 font-medium">Longitud Máx. Torneado</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Users className="h-12 w-12 text-blue-900" />
              </div>
              <div className="text-4xl font-bold text-blue-900 mb-2">24h</div>
              <div className="text-gray-600 font-medium">Servicio Urgencias</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Servicios de Mecanizado CNC
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluciones completas de mecanizado de precisión para la industria
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon="🔄"
              title="Tornos CNC y Convencionales"
              description="Mecanizado de piezas cilíndricas hasta 4 metros de longitud. Tornos CNC de alta precisión para series y piezas únicas."
              features={[
                "Tornos CNC hasta Ø 4000mm",
                "Tolerancias hasta ±0.01mm",
                "Series cortas y largas",
                "Trabajo bajo plano"
              ]}
              image="https://images.unsplash.com/photo-1713371398484-cc4e4f6a262a"
            />

            <ServiceCard
              icon="⚡"
              title="Fresado CNC y Convencional"
              description="Fresadoras CNC de última generación para geometrías complejas. Mecanizado de precisión en todo tipo de materiales."
              features={[
                "Fresadoras CNC 3, 4 y 5 ejes",
                "Geometrías complejas",
                "Prototipos y series",
                "CAD/CAM avanzado"
              ]}
              image="https://images.pexels.com/photos/33748032/pexels-photo-33748032.jpeg"
            />

            <ServiceCard
              icon="🏭"
              title="Mantenimiento Industrial"
              description="Reparación y mantenimiento de maquinaria industrial. Fabricación de repuestos bajo muestra."
              features={[
                "Reparación de ejes y rodillos",
                "Fabricación de repuestos",
                "Mantenimiento preventivo",
                "Servicio 24h urgencias"
              ]}
              image="https://images.pexels.com/photos/7254412/pexels-photo-7254412.jpeg"
            />

            <ServiceCard
              icon="🔩"
              title="Roscado y Entallado"
              description="Roscadoras automáticas y entalladoras de precisión. Roscas métricas, whitworth, trapezoidales y especiales."
              features={[
                "Roscas M3 a M100",
                "Roscas especiales",
                "Entallas y ranuras",
                "Control dimensional"
              ]}
              image="https://images.unsplash.com/photo-1758873263563-5ba4aa330799"
            />

            <ServiceCard
              icon="📐"
              title="Asesoramiento Técnico"
              description="Ingeniero industrial y delineante propio. Optimización de diseños y análisis de viabilidad."
              features={[
                "Revisión de planos",
                "Optimización DFM",
                "Selección materiales",
                "Presupuestos técnicos"
              ]}
              image="https://images.unsplash.com/photo-1767123397120-beea81229a1c"
            />

            <ServiceCard
              icon="📦"
              title="Prototipos y Series"
              description="Desde prototipos únicos hasta series industriales. Flexibilidad total para adaptarse a sus necesidades."
              features={[
                "Prototipos rápidos",
                "Series de 1 a 10.000 pzs",
                "Control de calidad",
                "Entrega just-in-time"
              ]}
              image="https://images.unsplash.com/photo-1759159091682-3b98f4759367"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="empresa" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                La Empresa
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong className="text-blue-900">Mecanizados Calero S.L.</strong> es una empresa especializada en mecanizados CNC de precisión 
                con más de 17 años de experiencia en el sector industrial. Ubicados en el Polígono Industrial 
                La Florida de Santa Perpètua de Mogoda, Barcelona.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Nuestras modernas instalaciones de <strong>1.000 m²</strong> recientemente ampliadas y renovadas, 
                cuentan con maquinaria CNC de última generación y un equipo humano altamente cualificado que 
                incluye ingeniero industrial y delineante propio.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Nos especializamos en trabajos bajo plano o muestra, adaptándonos completamente a las necesidades 
                del cliente con los máximos estándares de calidad, seriedad y rapidez de entrega.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection('contacto')}
                  className="bg-blue-900 hover:bg-blue-800 text-white"
                  size="lg"
                >
                  Contactar Ahora
                </Button>
                <Button 
                  onClick={() => scrollToSection('maquinaria')}
                  variant="outline"
                  className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
                  size="lg"
                >
                  Ver Maquinaria
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1713371398485-7bde1bde9def"
                alt="Instalaciones Mecanizados Calero"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-900 text-white p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold">17+</div>
                <div className="text-sm">Años de Confianza</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Machinery Section */}
      <section id="maquinaria" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Parque de Maquinaria CNC
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Equipamiento de última generación para garantizar la máxima precisión
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <MachineryCard
              title="Tornos CNC"
              description="Tornos CNC de alta precisión hasta 4 metros de longitud. Control numérico Fanuc y Siemens."
              specs={[
                "Diámetro hasta Ø 4000mm",
                "Longitud hasta 4000mm",
                "Tolerancias ±0.01mm"
              ]}
            />
            <MachineryCard
              title="Fresadoras CNC"
              description="Centro de mecanizado CNC 3, 4 y 5 ejes. Mesa de trabajo hasta 2000x1000mm."
              specs={[
                "3, 4 y 5 ejes simultáneos",
                "Mesa 2000x1000mm",
                "CAM integrado"
              ]}
            />
            <MachineryCard
              title="Tornos Convencionales"
              description="Tornos paralelos convencionales para trabajos especiales y reparaciones industriales."
              specs={[
                "Varios diámetros",
                "Trabajos especiales",
                "Reparaciones rápidas"
              ]}
            />
            <MachineryCard
              title="Fresadoras Convencionales"
              description="Fresadoras universales y verticales para trabajos convencionales y utillajes."
              specs={[
                "Universales y verticales",
                "Trabajos especiales",
                "Utillajes y matrices"
              ]}
            />
            <MachineryCard
              title="Roscadoras"
              description="Roscadoras automáticas para todo tipo de roscas métricas, whitworth y especiales."
              specs={[
                "Roscas M3 a M100",
                "Métricas y whitworth",
                "Roscas especiales"
              ]}
            />
            <MachineryCard
              title="Entalladoras"
              description="Entalladoras de precisión para ranuras, chavetas y geometrías especiales."
              specs={[
                "Ranuras de precisión",
                "Chavetas DIN",
                "Geometrías especiales"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Materiales y Sectores
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trabajamos con una amplia variedad de materiales para múltiples industrias
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <MaterialCard
              title="Aceros"
              materials={[
                "F-1140, F-1150",
                "Aceros inoxidables",
                "Aceros aleados",
                "Aceros tratados"
              ]}
            />
            <MaterialCard
              title="Aluminios"
              materials={[
                "Serie 2000, 6000, 7000",
                "Aleaciones especiales",
                "Aluminio anodizado",
                "Aluminio naval"
              ]}
            />
            <MaterialCard
              title="Otros Metales"
              materials={[
                "Bronce y latón",
                "Cobre electrolítico",
                "Titanio",
                "Inconel"
              ]}
            />
            <MaterialCard
              title="Materiales Técnicos"
              materials={[
                "Plásticos técnicos",
                "PEEK, POM",
                "Nylon técnico",
                "Materiales compuestos"
              ]}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center">
                <Factory className="mr-3 h-8 w-8" />
                Industria General
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Maquinaria industrial</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Equipos de producción</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Mantenimiento industrial</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Repuestos y reparaciones</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center">
                <Award className="mr-3 h-8 w-8" />
                Automoción
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Prototipos automotrices</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Utillajes y matrices</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Componentes de motor</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Piezas de precisión</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section id="presupuesto" className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Solicite su Presupuesto
              </h2>
              <p className="text-xl text-gray-200">
                Sin compromiso. Respuesta en menos de 24 horas.
              </p>
            </div>

            <Card className="p-8 md:p-12">
              <QuoteForm />
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Contacto
            </h2>
            <p className="text-xl text-gray-600">
              Estamos aquí para ayudarle con su proyecto
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-6">
                Información de Contacto
              </h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-blue-900 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Dirección</h4>
                    <p className="text-gray-600">
                      Polígono Industrial La Florida<br />
                      Calle Solsona s/n, Nave 7<br />
                      08130 Santa Perpètua de Mogoda<br />
                      Barcelona, España
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-900 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Teléfono</h4>
                    <p className="text-gray-600">
                      <a href="tel:+34935741550" className="hover:text-blue-900 transition-colors">
                        +34 935 74 15 50
                      </a>
                      <br />
                      <a href="tel:+34935743157" className="hover:text-blue-900 transition-colors">
                        +34 935 74 31 57
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-900 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">
                      <a href="mailto:info@mecanizadoscalero.com" className="hover:text-blue-900 transition-colors">
                        info@mecanizadoscalero.com
                      </a>
                      <br />
                      <a href="mailto:mecanizadoscalero@gmail.com" className="hover:text-blue-900 transition-colors">
                        mecanizadoscalero@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-4">Horario de Atención</h4>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Lunes - Viernes:</strong> 8:00 - 18:00</p>
                  <p><strong>Urgencias 24h:</strong> Disponible</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-6">
                Envíenos un Mensaje
              </h3>
              <ContactForm />
            </div>
          </div>

          {/* Google Maps */}
          <div className="mt-16">
            <div className="rounded-2xl overflow-hidden shadow-xl h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2988.6!2d2.1842!3d41.5344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDMyJzAzLjgiTiAywrAxMScwMy4xIkU!5e0!3m2!1ses!2ses!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Mecanizados Calero"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Factory className="h-8 w-8 text-green-500" />
                <span className="text-xl font-bold">Mecanizados Calero</span>
              </div>
              <p className="text-gray-400 mb-4">
                Especialistas en mecanizados CNC de precisión desde 2008. 
                Calidad, seriedad y rapidez garantizadas.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-green-500">Servicios</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#servicios" className="hover:text-white transition-colors">Tornos CNC</a></li>
                <li><a href="#servicios" className="hover:text-white transition-colors">Fresado CNC</a></li>
                <li><a href="#servicios" className="hover:text-white transition-colors">Mantenimiento Industrial</a></li>
                <li><a href="#servicios" className="hover:text-white transition-colors">Roscado y Entallado</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-green-500">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#empresa" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
                <li><a href="#maquinaria" className="hover:text-white transition-colors">Maquinaria</a></li>
                <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
                <li><a href="#presupuesto" className="hover:text-white transition-colors">Presupuesto</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-green-500">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+34 935 74 15 50</li>
                <li>info@mecanizadoscalero.com</li>
                <li className="text-sm leading-relaxed">
                  Polígono Industrial La Florida<br />
                  Calle Solsona s/n, Nave 7<br />
                  08130 Santa Perpètua de Mogoda
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
              <p>© 2025 Mecanizados Calero S.L. - CIF: B65020026 - Todos los derechos reservados</p>
              <p className="mt-4 md:mt-0">
                Mecanizados CNC Barcelona | Tornos CNC | Fresadoras CNC | Mantenimiento Industrial
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/34935741550"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 z-50"
        aria-label="Contactar por WhatsApp"
      >
        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
};

// Service Card Component
const ServiceCard = ({ icon, title, description, features, image }) => {
  return (
    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <div className="text-4xl mb-2">{icon}</div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-blue-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-gray-700">
              <ChevronRight className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

// Machinery Card Component
const MachineryCard = ({ title, description, specs }) => {
  return (
    <Card className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="bg-blue-900 text-white w-16 h-16 rounded-lg flex items-center justify-center text-3xl mb-4">
        ⚙️
      </div>
      <h3 className="text-xl font-bold text-blue-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <ul className="space-y-2">
        {specs.map((spec, index) => (
          <li key={index} className="flex items-start text-sm text-gray-700">
            <ChevronRight className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
            <span>{spec}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

// Material Card Component
const MaterialCard = ({ title, materials }) => {
  return (
    <Card className="p-6 bg-white hover:shadow-xl transition-all duration-300">
      <h3 className="text-lg font-bold text-blue-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {materials.map((material, index) => (
          <li key={index} className="text-sm text-gray-700 flex items-start">
            <ChevronRight className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
            <span>{material}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

// Quote Form Component
const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    material: '',
    quantity: '',
    message: '',
    hasPlans: 'no'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Quote form submitted:', formData);
    alert('Gracias por su solicitud. Le contactaremos en menos de 24 horas.');
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      service: '',
      material: '',
      quantity: '',
      message: '',
      hasPlans: 'no'
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Nombre completo *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Empresa
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Teléfono *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Servicio requerido *
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors"
          >
            <option value="">Seleccione...</option>
            <option value="torno-cnc">Torno CNC</option>
            <option value="fresado-cnc">Fresado CNC</option>
            <option value="mantenimiento">Mantenimiento Industrial</option>
            <option value="roscado">Roscado y Entallado</option>
            <option value="prototipo">Prototipo</option>
            <option value="serie">Serie</option>
            <option value="otro">Otro</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Material
          </label>
          <select
            name="material"
            value={formData.material}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors"
          >
            <option value="">Seleccione...</option>
            <option value="acero">Acero</option>
            <option value="inoxidable">Acero Inoxidable</option>
            <option value="aluminio">Aluminio</option>
            <option value="bronce">Bronce</option>
            <option value="laton">Latón</option>
            <option value="plastico">Plástico Técnico</option>
            <option value="otro">Otro</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Cantidad piezas
          </label>
          <input
            type="text"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="Ej: 50 unidades"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          ¿Dispone de planos o muestras?
        </label>
        <div className="flex gap-6">
          <label className="flex items-center">
            <input
              type="radio"
              name="hasPlans"
              value="si"
              checked={formData.hasPlans === 'si'}
              onChange={handleChange}
              className="mr-2"
            />
            <span className="text-gray-900">Sí</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="hasPlans"
              value="no"
              checked={formData.hasPlans === 'no'}
              onChange={handleChange}
              className="mr-2"
            />
            <span className="text-gray-900">No</span>
          </label>
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          Detalles del proyecto *
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          placeholder="Describa las características de la pieza, tolerancias requeridas, plazos de entrega, etc."
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors resize-none"
        ></textarea>
      </div>

      <Button
        type="submit"
        className="w-full bg-blue-900 hover:bg-blue-800 text-white py-4 text-lg font-semibold"
        size="lg"
      >
        Enviar Solicitud de Presupuesto
      </Button>

      <p className="text-sm text-gray-600 text-center">
        * Campos obligatorios. Sus datos serán tratados de forma confidencial.
      </p>
    </form>
  );
};

// Contact Form Component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Gracias por su mensaje. Le responderemos lo antes posible.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          Nombre *
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          Email *
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          Teléfono
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          Asunto *
        </label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          Mensaje *
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors resize-none"
        ></textarea>
      </div>

      <Button
        type="submit"
        className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 font-semibold"
        size="lg"
      >
        Enviar Mensaje
      </Button>
    </form>
  );
};

export default Home;

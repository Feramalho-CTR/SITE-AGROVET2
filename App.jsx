import { useState, useEffect } from 'react'
import { Button } from './src/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './src/components/ui/card.jsx'
import { Badge } from './src/components/ui/badge.jsx'
import { Input } from './src/components/ui/input.jsx'
import { Textarea } from './src/components/ui/textarea.jsx'
import { 
  Heart, 
  Stethoscope, 
  Scissors, 
  ShoppingCart, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Star,
  Users,
  Award,
  Leaf,
  PawPrint,
  Wheat,
  Menu,
  X,
  Sun,
  Moon
} from 'lucide-react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Efeito para aplicar a classe 'dark' ao elemento html
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  // Scroll spy para destacar seção ativa no menu
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'sobre', 'servicos', 'produtos', 'contato']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const services = [
    {
      icon: <Stethoscope className="w-8 h-8 text-blue-600" />,
      title: "Consultas e Vacinas",
      description: "Atendimento clínico completo com médicos veterinários especializados e programa de vacinação personalizado."
    },
    {
      icon: <Heart className="w-8 h-8 text-red-600" />,
      title: "Cirurgias e Internação",
      description: "Centro cirúrgico moderno com equipamentos de última geração e internação com monitoramento 24h."
    },
    {
      icon: <Scissors className="w-8 h-8 text-purple-600" />,
      title: "Banho e Tosa Premium",
      description: "Serviços de estética animal com produtos de qualidade e profissionais especializados."
    },
    {
      icon: <Award className="w-8 h-8 text-green-600" />,
      title: "Especialidades",
      description: "Cardiologia, dermatologia, ortopedia e outras especialidades veterinárias."
    }
  ]

  const products = [
    {
      icon: <PawPrint className="w-8 h-8 text-orange-600" />,
      title: "Rações Premium",
      description: "Alimentação de qualidade para cães, gatos e animais de grande porte."
    },
    {
      icon: <Wheat className="w-8 h-8 text-yellow-600" />,
      title: "Produtos Agropecuários",
      description: "Sementes, fertilizantes, medicamentos veterinários e ferramentas."
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      title: "Jardinagem Urbana",
      description: "Tudo para sua horta urbana e jardim, incluindo consultoria especializada."
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-blue-600" />,
      title: "Acessórios Pet",
      description: "Brinquedos, coleiras, camas e produtos de higiene para seu pet."
    }
  ]

  const testimonials = [
    {
      name: "Maria Silva",
      text: "Excelente atendimento! Minha cadela foi muito bem cuidada durante a cirurgia.",
      rating: 5
    },
    {
      name: "João Santos",
      text: "Produtos de qualidade e preços justos. Recomendo para quem tem horta urbana.",
      rating: 5
    },
    {
      name: "Ana Costa",
      text: "Equipe muito profissional e carinhosa com os animais. Voltarei sempre!",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header/Navigation */}
      <header className="fixed top-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-800 dark:text-white">VetAgro</span>
            </div>
            
            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Início' },
                { id: 'sobre', label: 'Sobre' },
                { id: 'servicos', label: 'Serviços' },
                { id: 'produtos', label: 'Produtos' },
                { id: 'contato', label: 'Contato' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                    activeSection === item.id ? 'text-blue-600 dark:text-blue-400 font-semibold' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Theme Toggle Button */}
            <button
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              {isDarkMode ? <Sun className="w-6 h-6 text-yellow-500" /> : <Moon className="w-6 h-6 text-gray-700" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden ml-4"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="md:hidden mt-6 pb-6 border-t pt-6">
              {[
                { id: 'home', label: 'Início' },
                { id: 'sobre', label: 'Sobre' },
                { id: 'servicos', label: 'Serviços' },
                { id: 'produtos', label: 'Produtos' },
                { id: 'contato', label: 'Contato' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 md:pt-28 pb-20 md:pb-24 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-8 leading-tight">
                Cuidado Completo para Seus 
                <span className="text-blue-600"> Animais</span> e Sua 
                <span className="text-green-600"> Terra</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
                Veterinária e Agropecuária de confiança no coração da cidade grande. 
                Oferecemos serviços veterinários especializados e produtos agropecuários de qualidade.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection('contato')}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Agende uma Consulta
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => scrollToSection('produtos')}
                >
                  Explore Nossos Produtos
                </Button>
              </div>
            </div>
            <div className="relative mt-8 md:mt-0">
              <div 
                className="rounded-lg shadow-2xl bg-gradient-to-br from-blue-100 to-green-100 h-96 flex items-center justify-center"
              >
                <div className="text-center text-gray-600">
                  <Stethoscope className="w-16 h-16 mx-auto mb-4 text-blue-600" />
                  <p className="text-lg font-semibold">Atendimento Veterinário</p>
                  <p className="text-sm">Imagem em breve</p>
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <Users className="w-8 h-8 text-blue-600" />
                  <div>
                    <p className="font-semibold text-lg">500+</p>
                    <p className="text-sm text-gray-600">Animais Atendidos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Sobre a VetAgro
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Há mais de 15 anos cuidando da saúde dos seus animais e fornecendo 
              produtos agropecuários de qualidade para a comunidade urbana.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <div 
                className="rounded-lg shadow-lg bg-gradient-to-br from-green-100 to-blue-100 h-64 flex items-center justify-center"
              >
                <div className="text-center text-gray-600">
                  <Heart className="w-12 h-12 mx-auto mb-3 text-red-600" />
                  <p className="font-semibold">Hospital Veterinário</p>
                  <p className="text-sm">Imagem em breve</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
                Nossa Missão
              </h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Promover a saúde e o bem-estar animal através de atendimento veterinário 
                de excelência, enquanto apoiamos a agricultura urbana e periurbana com 
                produtos e consultoria especializada.
              </p>
              
              <div className="grid grid-cols-2 gap-8 md:gap-10">
                <div className="text-center">
                  <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-10 h-10 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 text-lg">15+ Anos</h4>
                  <p className="text-sm text-gray-600">de Experiência</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 text-lg">1000+</h4>
                  <p className="text-sm text-gray-600">Clientes Satisfeitos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Nossos Serviços Veterinários
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Cuidado completo e especializado para todos os tipos de animais
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produtos" className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Produtos Agropecuários e Pet Shop
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Tudo que você precisa para seus animais e sua produção
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-16 md:mb-20">
            {products.map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4">
                    {product.icon}
                  </div>
                  <CardTitle className="text-lg">{product.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {product.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <div 
                className="rounded-lg shadow-lg bg-gradient-to-br from-green-100 to-yellow-100 h-64 flex items-center justify-center"
              >
                <div className="text-center text-gray-600">
                  <Leaf className="w-12 h-12 mx-auto mb-3 text-green-600" />
                  <p className="font-semibold">Agricultura Urbana</p>
                  <p className="text-sm">Imagem em breve</p>
                </div>
              </div>
            </div>
            <div>
              <div 
                className="rounded-lg shadow-lg bg-gradient-to-br from-yellow-100 to-orange-100 h-64 flex items-center justify-center"
              >
                <div className="text-center text-gray-600">
                  <Wheat className="w-12 h-12 mx-auto mb-3 text-yellow-600" />
                  <p className="font-semibold">Produtos Agropecuários</p>
                  <p className="text-sm">Imagem em breve</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              O Que Nossos Clientes Dizem
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                  <p className="font-semibold text-gray-800">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Entre em Contato
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Estamos aqui para cuidar dos seus animais e atender suas necessidades
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-8 md:space-y-10">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-semibold">Endereço</p>
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Rua+das+Flores,+123,+Centro,+São+Paulo,+SP"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Rua das Flores, 123 - Centro<br />São Paulo, SP - CEP: 01234-567
                    </a>
                  </div>
                </div>
                <div className="mt-10">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0700000000003!2d-46.639200000000004!3d-23.550500000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59a000000000%3A0x0000000000000000!2sRua+das+Flores%2C+123+-+Centro%2C+S%C3%A3o+Paulo+-+SP%2C+01234-567!5e0!3m2!1spt-BR!2sbr!4v1678912345678!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização da VetAgro"
                    className="rounded-lg shadow-lg"
                  ></iframe>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-semibold">Telefone</p>
                    <p className="text-gray-600">(11) 3456-7890</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-green-600" />
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <p className="text-gray-600">(11) 99876-5432</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-semibold">E-mail</p>
                    <p className="text-gray-600">contato@vetagro.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-semibold">Horário de Funcionamento</p>
                    <p className="text-gray-600">
                      Segunda a Sexta: 8h às 18h<br />
                      Sábado: 8h às 14h<br />
                      Domingo: Emergências
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Envie uma Mensagem</CardTitle>
                  <CardDescription>
                    Preencha o formulário e entraremos em contato em breve
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div>
                      <Input placeholder="Seu nome" />
                    </div>
                    <div>
                      <Input type="email" placeholder="Seu e-mail" />
                    </div>
                    <div>
                      <Input placeholder="Telefone" />
                    </div>
                    <div>
                      <Textarea placeholder="Sua mensagem" rows={4} />
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 h-12">
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 md:py-16">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Heart className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold">VetAgro</span>
            </div>
            <p className="text-gray-400 mb-4">
              Cuidando dos seus animais e da sua terra com amor e profissionalismo
            </p>
            <p className="text-gray-500 text-sm">
              © 2024 VetAgro - Veterinária e Agropecuária. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
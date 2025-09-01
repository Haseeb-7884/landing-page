import { useState, useEffect } from "react";
import { Button } from "./components/ui/button";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { 
  CheckCircle, 
  Phone, 
  Search, 
  Users, 
  Menu, 
  X, 
  Mail,
  Facebook,
  Linkedin,
  MessageCircle,
  Zap,
  Wrench,
  Wind,
  Home,
  Droplets,
  Key,
  Bug
} from "lucide-react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'Why Choose Us', id: 'why-choose-us' },
    { label: 'Contact', id: 'call-to-action' }
  ];

  const services = [
    {
      icon: <Zap size={40} className="text-blue-600" />,
      title: "Electrical Services",
      description: "Safe, reliable solutions for wiring, panel upgrades, lighting, and repairs."
    },
    {
      icon: <Wrench size={40} className="text-blue-600" />,
      title: "Appliance Repair",
      description: "Fast, dependable repairs for refrigerators, ovens, washers, dryers, and more."
    },
    {
      icon: <Wind size={40} className="text-blue-600" />,
      title: "HVAC Services",
      description: "Installation, repair, and maintenance of heating, cooling, and ventilation systems."
    },
    {
      icon: <Home size={40} className="text-blue-600" />,
      title: "Roofing Services",
      description: "Quality roof inspections, repairs, replacements, and installations."
    },
    {
      icon: <Droplets size={40} className="text-blue-600" />,
      title: "Plumbing Services",
      description: "Leak detection, water heater installs, drain cleaning, and more."
    },
    {
      icon: <Key size={40} className="text-blue-600" />,
      title: "Locksmith Services",
      description: "24/7 emergency lockouts, rekeying, and security upgrades."
    },
    {
      icon: <Bug size={40} className="text-blue-600" />,
      title: "Pest Control",
      description: "Targeted treatments to eliminate and prevent pests safely."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Sticky Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="font-bold text-xl text-gray-900">
              Ghulam Shabeer Services
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t bg-white">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="bg-gray-50 pt-24 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 opacity-50"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Get Connected With Trusted Service Providers Fast
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Insurance, home services, and financial help — one call away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-lg btn-hover-effect"
              onClick={() => window.location.href = 'tel:+923015996903'}
            >
              <Phone className="mr-2" size={20} />
              Call Now
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg rounded-lg btn-hover-effect"
              onClick={() => window.location.href = 'mailto:ghulamshabeer.marketing@gmail.com'}
            >
              <Mail className="mr-2" size={20} />
              Email Us
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Who We Are
          </h2>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1748346674126-8c0df10f2f61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzZXJ2aWNlcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc1NjczMTMzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional services team"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>
            <div className="lg:w-1/2">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At Ghulam Shabeer Services, we connect people with trusted service providers across the United States. Whether you need insurance, home repair, or financial help, we make it easy to reach the right experts.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our commitment to excellence and customer satisfaction has made us a trusted partner for thousands of homeowners and businesses nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Our Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="bg-blue-50 rounded-full w-20 h-20 flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <Button 
                  size="sm" 
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => window.location.href = 'tel:+923015996903'}
                >
                  Call Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-blue-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Search size={48} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Step 1 – Search for your service
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Tell us what type of service you need and we'll match you with the right professionals
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Phone size={48} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Step 2 – Call our dedicated phone line
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Speak with our friendly representatives who will understand your specific needs
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users size={48} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Step 3 – Get connected to licensed providers
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We'll connect you instantly with trusted, licensed professionals in your area
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-center space-x-4">
              <CheckCircle size={32} className="text-green-400 flex-shrink-0" />
              <span className="text-lg">Fast and reliable connections</span>
            </div>
            <div className="flex items-center space-x-4">
              <CheckCircle size={32} className="text-green-400 flex-shrink-0" />
              <span className="text-lg">Services available nationwide</span>
            </div>
            <div className="flex items-center space-x-4">
              <CheckCircle size={32} className="text-green-400 flex-shrink-0" />
              <span className="text-lg">100% free to call and connect</span>
            </div>
            <div className="flex items-center space-x-4">
              <CheckCircle size={32} className="text-green-400 flex-shrink-0" />
              <span className="text-lg">Trusted providers only</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="call-to-action" className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-20 px-4 text-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-white/5" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20 shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
              Need help now? Call us today and get connected instantly.
            </h2>
            
            <div className="mb-10">
              <div className="inline-block bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4 pulse-glow">
                <a 
                  href="tel:+923015996903" 
                  className="text-3xl md:text-5xl font-bold text-white hover:text-green-100 transition-all duration-300 phone-hover inline-block drop-shadow-lg"
                >
                  +92 301 5996903
                </a>
              </div>
              <p className="text-lg md:text-xl text-green-100 mt-2">
                Available 24/7 for immediate assistance
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-green-700 hover:bg-green-50 hover:text-green-800 px-10 py-5 text-xl rounded-xl font-bold btn-hover-effect shadow-xl border-2 border-white"
                onClick={() => window.location.href = 'tel:+923015996903'}
              >
                <Phone className="mr-3" size={24} />
                Click to Call
              </Button>
              <Button 
                size="lg" 
                className="bg-green-800/80 text-white hover:bg-green-900 border-2 border-green-400 hover:border-green-300 px-10 py-5 text-xl rounded-xl font-bold btn-hover-effect shadow-xl backdrop-blur-sm"
                onClick={() => window.location.href = 'mailto:ghulamshabeer.marketing@gmail.com'}
              >
                <Mail className="mr-3" size={24} />
                Email Us
              </Button>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-green-100">
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-green-300" />
                <span>Free consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-green-300" />
                <span>Instant connection</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-green-300" />
                <span>Trusted professionals</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="font-bold text-xl text-white mb-4">Ghulam Shabeer Services</h3>
              <p className="text-gray-400 mb-4">
                Connecting customers with trusted service providers nationwide.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <MessageCircle size={24} />
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-white mb-4">Contact Information</h4>
              <div className="space-y-3">
                <a 
                  href="tel:+923015996903" 
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Phone size={16} />
                  <span>+92 301 5996903</span>
                </a>
                <a 
                  href="mailto:ghulamshabeer.marketing@gmail.com" 
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail size={16} />
                  <span>ghulamshabeer.marketing@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#privacy" className="block text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#terms" className="block text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Ghulam Shabeer Ahmad – Connecting Customers with Services Nationwide
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
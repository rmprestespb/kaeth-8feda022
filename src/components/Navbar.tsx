import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Serviços", href: "#servicos", isRoute: false },
    { name: "Portfólio", href: "#portfolio", isRoute: false },
    { name: "Processo", href: "#processo", isRoute: false },
    { name: "Quem Somos", href: "/quem-somos", isRoute: true },
    { name: "Site", href: "/sites-assinatura", isRoute: true },
    { name: "Contato", href: "#contato", isRoute: false },
  ];
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-card py-4" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <span
            className="w-9 h-9 rounded-[11px] flex items-center justify-center text-white font-extrabold text-sm"
            style={{
              fontFamily: "'Sora', sans-serif",
              background:
                "linear-gradient(140deg, #ffa22b 0%, #ff7a00 45%, #0b1220 46%, #0b1220 100%)",
              boxShadow:
                "0 0 0 1px rgba(255,255,255,.12), 0 0 16px rgba(255,140,0,.35)",
            }}
          >
            TH
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[9px] tracking-[0.4em] uppercase text-muted-foreground">
              Agência
            </span>
            <span
              className="text-lg font-extrabold tracking-tight bg-clip-text text-transparent mt-1"
              style={{
                fontFamily: "'Sora', sans-serif",
                backgroundImage:
                  "linear-gradient(96deg, #ffffff 0%, #ffb457 38%, #4da6ff 78%)",
              }}
            >
              KAETH
            </span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => 
            link.isRoute ? (
              <Link 
                key={link.name} 
                to={link.href} 
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium"
              >
                {link.name}
              </Link>
            ) : (
              <a 
                key={link.name} 
                href={isHomePage ? link.href : `/${link.href}`} 
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium"
              >
                {link.name}
              </a>
            )
          )}
          <a href={isHomePage ? "#contato" : "/#contato"} className="gradient-bg px-6 py-2.5 rounded-full text-sm font-semibold text-primary-foreground hover:opacity-90 transition-all duration-300 hover:scale-105 glow">
            Orçamento
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground p-2" aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 glass-card transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
          {navLinks.map(link => 
            link.isRoute ? (
              <Link 
                key={link.name} 
                to={link.href} 
                onClick={() => setIsOpen(false)} 
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-lg font-medium py-2"
              >
                {link.name}
              </Link>
            ) : (
              <a 
                key={link.name} 
                href={isHomePage ? link.href : `/${link.href}`} 
                onClick={() => setIsOpen(false)} 
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-lg font-medium py-2"
              >
                {link.name}
              </a>
            )
          )}
          <a href={isHomePage ? "#contato" : "/#contato"} onClick={() => setIsOpen(false)} className="gradient-bg px-6 py-3 rounded-full text-center font-semibold text-primary-foreground mt-2">
            Orçamento
          </a>
        </div>
      </div>
    </nav>;
};
export default Navbar;

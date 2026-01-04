import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [{
    name: "Serviços",
    href: "#servicos"
  }, {
    name: "Portfólio",
    href: "#portfolio"
  }, {
    name: "Processo",
    href: "#processo"
  }, {
    name: "Contato",
    href: "#contato"
  }];
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-card py-4" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold gradient-text">
          KA<span className="text-foreground">​ETH</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => <a key={link.name} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium">
              {link.name}
            </a>)}
          <a href="#contato" className="gradient-bg px-6 py-2.5 rounded-full text-sm font-semibold text-primary-foreground hover:opacity-90 transition-all duration-300 hover:scale-105 glow">
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
          {navLinks.map(link => <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-lg font-medium py-2">
              {link.name}
            </a>)}
          <a href="#contato" onClick={() => setIsOpen(false)} className="gradient-bg px-6 py-3 rounded-full text-center font-semibold text-primary-foreground mt-2">
            Orçamento
          </a>
        </div>
      </div>
    </nav>;
};
export default Navbar;
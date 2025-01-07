import React from 'react';


const Footer = () => {
  const navigationLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Menu', href: '/menu' },
    { name: 'Specials', href: '/specials' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
  ];

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com', icon: './instagram.png' },
    { name: 'Instagram', href: 'https://instagram.com', icon: './facebook.png' },
  ];

  return (
    <footer className="footer">
      <div className="nav-and-image">
        {/* Logo o Imagen */}
        <img
          src="./Logo.svg" // Reemplaza con tu logo real
          alt="Logo"
          className="footer-logo"
        />

        {/* Navegación Principal */}
        <nav className="footer-nav">
          {navigationLinks.map((link) => (
            <a key={link.name} href={link.href} className="footer-link">
              {link.name}
            </a>
          ))}
        </nav>
        <div className="social-links">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <img src={social.icon} alt={social.name} />
            </a>
          ))}
        </div>
        </div>
        {/* Redes Sociales */}
        

        {/* Información de contacto */}
        <div className="contact-info">
          <p className="contact-item">
            <strong>Dirección:</strong> 123 Calle Ficticia, Ciudad, País
          </p>
          <p className="contact-item">
            <strong>Email:</strong> <a href="mailto:contacto@ejemplo.com">contacto@ejemplo.com</a>
          </p>
          <p className="contact-item">
            <strong>Teléfono:</strong> <a href="tel:+1234567890">+123 456 7890</a>
          </p>
        </div>
      

      {/* Derechos Reservados */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Little Lemon. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;

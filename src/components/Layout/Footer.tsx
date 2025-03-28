
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground py-12 mt-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-xl mb-4">Poetic Voices</h3>
            <p className="text-sm opacity-80 mb-4">
              A living archive of regional poetry, interviews, and cultural events 
              across Siberian cities.
            </p>
            <p className="text-sm opacity-80">
              © {currentYear} Poetic Voices Project
            </p>
          </div>
          <div>
            <h4 className="font-serif text-lg mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="opacity-80 hover:opacity-100 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/interviews" className="opacity-80 hover:opacity-100 transition-opacity">
                  Interviews
                </Link>
              </li>
              <li>
                <Link to="/poets" className="opacity-80 hover:opacity-100 transition-opacity">
                  Poets
                </Link>
              </li>
              <li>
                <Link to="/events" className="opacity-80 hover:opacity-100 transition-opacity">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/collections" className="opacity-80 hover:opacity-100 transition-opacity">
                  City Collections
                </Link>
              </li>
              <li>
                <Link to="/about" className="opacity-80 hover:opacity-100 transition-opacity">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg mb-4">Cities</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/collections/tomsk" className="opacity-80 hover:opacity-100 transition-opacity">
                  Tomsk
                </Link>
              </li>
              <li>
                <Link to="/collections/novosibirsk" className="opacity-80 hover:opacity-100 transition-opacity">
                  Novosibirsk
                </Link>
              </li>
              <li>
                <Link to="/collections/omsk" className="opacity-80 hover:opacity-100 transition-opacity">
                  Omsk
                </Link>
              </li>
              <li>
                <Link to="/collections/barnaul" className="opacity-80 hover:opacity-100 transition-opacity">
                  Barnaul
                </Link>
              </li>
              <li>
                <Link to="/collections/kemerovo" className="opacity-80 hover:opacity-100 transition-opacity">
                  Kemerovo
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

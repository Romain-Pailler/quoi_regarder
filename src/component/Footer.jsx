import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>Tous droits réservés</p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '1rem',
  width: '100%',
};

export default Footer;
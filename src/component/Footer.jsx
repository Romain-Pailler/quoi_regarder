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
  paddingTop: '1rem',
  paddingBottom:'1rem',
  width: '100%',
};

export default Footer;
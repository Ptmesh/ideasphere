import React from 'react';

const Footer = () => {
    let year= new Date().getFullYear();
  return (
    <footer>
      <p>&copy; Prathmesh Takalkar {year}</p>
    </footer>
  )
}

export default Footer

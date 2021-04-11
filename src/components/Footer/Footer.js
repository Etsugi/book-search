import React from 'react';

const now = new Date().getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <time-datetime class="footer__copyright">&copy; {now} Киприн Константин</time-datetime>
    </footer>
  );
}

export default Footer;
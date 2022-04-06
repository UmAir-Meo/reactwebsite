import React from "react";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <>
      <footer className="w-100 bg-light text-center" style={{position : 'absolute', bottom: '0'}}>
        <p>© {date} BigData. All Rights Reserved | Terms and Conditions</p>
      </footer>
    </>
  );
}

export default Footer;

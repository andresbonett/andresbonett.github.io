import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <p>
        &copy; Created by{" "}
        <Link href="/">
          Andres Bonett
        </Link>
      </p>
    </footer>
  );
};

export default Footer;

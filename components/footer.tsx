import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <p>
        &copy; Created by{" "}
        <Link href="/">
          <a>Andres Bonett</a>
        </Link>
      </p>
    </footer>
  );
};

export default Footer;

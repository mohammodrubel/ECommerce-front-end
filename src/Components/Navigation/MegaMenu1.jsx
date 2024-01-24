import React from "react";
import { Link } from "react-router-dom";

function MegaMenu1() {
  return (
    <ul className="mt-4">
      <li><Link className="px-2 mt-3">Man</Link></li>
      <li><Link className="px-2 mt-3">Woman</Link></li>
      <li><Link className="px-2 mt-3">clothing</Link></li>
      <li><Link className="px-2 mt-3">Laptop</Link></li>
      <li><Link className="px-2 mt-3">Tv</Link></li>
    </ul>
  );
}

export default MegaMenu1;

import React from "react";
import CustomLink from "./CustomLink";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <CustomLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
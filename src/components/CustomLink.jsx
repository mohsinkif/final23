import { BrowserRouter as Router, Routes, Route, Link, NavLink, Navigate } from 'react-router-dom';

const CustomLink = ({ href, title }) => {
  return (
    <Link
      to={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-secondary-500 hover:border-b border-secondary-400"
    >
      {title}
    </Link>
  );
};

export default CustomLink;
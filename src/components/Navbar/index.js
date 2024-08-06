import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navbarList = [
    {
      name: 'Chart of Account',
      value: 'chart-of-account',
    },
    {
      name: 'Currency Code',
      value: 'currency-code',
    },
    {
      name: 'Jurnal Code',
      value: 'jurnal-code',
    },
    {
      name: 'Project Code',
      value: 'project-code',
    },
    {
      name: 'Input Jurnal Transaksi',
      value: 'input-jurnal-transaksi',
    },
  ];
  return (
    <div className="flex flex-row justify-center gap-4 py-4 mx-auto">
      {navbarList.map((item) => (
        <NavLink
          to={`/${item.value}`}
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'text-red-500' : ''
          }
        >
          {item.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;

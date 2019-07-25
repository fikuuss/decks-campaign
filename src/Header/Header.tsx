import React from 'react';
import { H1 } from '@blueprintjs/core';

interface HeaderProps {
  title: string;
}

export function Header({title}: HeaderProps) {
  return (
    <header className="header">
      <H1>{title}</H1>
    </header>
  );
}

export default Header;
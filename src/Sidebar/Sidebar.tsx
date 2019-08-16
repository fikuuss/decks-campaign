import React from 'react';
import { Menu } from '@blueprintjs/core';
import { Link } from 'react-router-dom';

export function Sidebar() {
  return (
    <Menu>
      <Menu.Divider title="Колоды" />
      <Link to="/decks/create">
        <Menu.Item text="Создать колоду" tagName="div" />
      </Link>
    </Menu>
  );
}
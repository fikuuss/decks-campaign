import React from 'react';
import { Menu } from '@blueprintjs/core';

export function Sidebar() {
  return (
    <Menu>
      <Menu.Divider title="Коллоды" />
      <Menu.Item text="Создать коллоду" />
    </Menu>
  );
}
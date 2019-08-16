import React from 'react';
import { DeckPreview } from '../DeckPreview/DeckPreview';
import { H2 } from '@blueprintjs/core';

export interface IDeck {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const decks: IDeck[] = [
  {
    id: 1,
    title: 'Чебуреки',
    description: 'Колода состоящая только из чебуреков',
    imageUrl: './deck_preview.png'
  },
  {
    id: 2,
    title: 'Беляши',
    description: 'Беляши прямо с забегаловки рядом с вокзалом',
    imageUrl: './deck_preview.png'
  },
  {
    id: 3,
    title: 'Что-то серьёзное',
    description: 'Колода с чем-то серьёзным внутри',
    imageUrl: './deck_preview.png'
  },
  {
    id: 4,
    title: 'Лолы и кеки',
    description: 'Лолы прямо как твои мемы и кеки точно такие же',
    imageUrl: './deck_preview.png'
  }
];

export function DeckList() {
  return (
    <div>
      <H2>Колоды</H2>
      <div className="deck-list__wrapper">
        {decks.map((deck) => (
          <DeckPreview key={deck.id} deck={deck} />
        ))}
      </div>
    </div>
  );
}
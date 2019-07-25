import React from 'react';
import { DeckPreview } from '../DeckPreview/DeckPreview';
import { H2 } from '@blueprintjs/core';

export interface IDeck {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

interface IDeckListProps {
  decks: IDeck[];
}

export function DeckList({decks}: IDeckListProps) {
  return (
    <div>
      <H2>Коллоды</H2>
      <div className="deck-list__wrapper">
        {decks.map((deck) => (
          <DeckPreview key={deck.id} deck={deck} />
        ))}
      </div>
    </div>
  );
}
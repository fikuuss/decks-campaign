import React from 'react';
import {Card, H5, Elevation} from '@blueprintjs/core';
import { IDeck } from '../DeckList/DeckList';

interface IDeckPreviewProps {
  deck: IDeck;
}

export function DeckPreview({deck}: IDeckPreviewProps) {
  return (
    <Card className="deck-card" interactive={true} elevation={Elevation.TWO}>
      <img className="deck-card-image" src={deck.imageUrl} alt="" />
      <H5>{deck.title}</H5>
      <p>{deck.description}</p>
    </Card>
  )
}

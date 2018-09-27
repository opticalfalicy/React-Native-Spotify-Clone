import React, { Component } from 'react';
import Player from './Player';

export const TRACKS = [
  {
    title: '43% Burnt',
    artist: 'The Dillinger Escape Plan',
    albumArtUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/CalculatingInfinity.jpg/220px-CalculatingInfinity.jpg",
    audioUrl: "./02 43% Burnt.mp3",
  },
  {
    title: 'The Running Board',
    artist: 'The Dillinger Escape Plan',
    albumArtUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/CalculatingInfinity.jpg/220px-CalculatingInfinity.jpg",
    audioUrl: './06 The Running Board.mp3',
  },
  {
    title: 'Calculating Infinity',
    artist: 'The Dillinger Escape Plan',
    albumArtUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/CalculatingInfinity.jpg/220px-CalculatingInfinity.jpg',
    audioUrl: './08 Calculating Infinity.mp3',
  },
];

export default class Tracks extends Component {
  render() {
    return <Player tracks={TRACKS} />
  }
}
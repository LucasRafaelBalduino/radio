import React from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";

import './index.css';

import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";

const tracks = [
  {
    url: "https://chimerical-daffodil-612e5f.netlify.app/teste.mp3",
    title: "teste",
    tags: ["Sertanejo"],
  },
  {
    url: "https://chimerical-daffodil-612e5f.netlify.app/A Glimmer Of Light.mp3",
    title: "Aaron Smith - Dancin",
    tags: ["POP"],
  },

  {
    url: "https://chimerical-daffodil-612e5f.netlify.app/Ed Sheeran - Perfect (Joshua Perez Cover).mp3",
    title: "Ed Sheeran - Perfect",
    tags: ["POP"],
  },

  {
    url: " https://chimerical-daffodil-612e5f.netlify.app/Aaron Smith - Dancin (Remix by KRONO).mp3",
    title: "Aaron Smith - Dancin",
    tags: ["JAZZ"],
  },

  {
    url: "https://chimerical-daffodil-612e5f.netlify.app/Divolly & Markward, Panuma - Tides (feat. Nina Carr).mp3",
    title: "Divolly & Markward, Panuma",
    tags: ["JAZZ"],
  },
  {
    url: "https://chimerical-daffodil-612e5f.netlify.app/Marília Mendonça - Estranho (Download).mp3",
    title: "Marília Mendonça - Estranho",
    tags: ["Sertanejo"],
  },
];

const App = () => {
  return (
    <>
    <Header />
    <Wrapper>
      <Player trackList={tracks} />
    </Wrapper>
    </>
  );
};

export default App;

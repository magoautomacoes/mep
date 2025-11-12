/// <reference types="vite/client" />

// Permite usar o custom element <vturb-smartplayer> em JSX sem erros de tipagem
declare namespace JSX {
  interface IntrinsicElements {
    'vturb-smartplayer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  }
}
import React from 'react';
import { RoutesApp } from './routes';
import { Background } from './pages/back/'

export default function App() {
  return( 
    <Background>
      <RoutesApp />
    </Background>
  );
}

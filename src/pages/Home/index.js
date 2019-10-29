import React from 'react';

import Lottie from 'react-lottie';
import { Container, Button } from './styles';

import * as developer from '../../assets/lottie/developer.json';
import cloudia from '../../assets/images/cloudia.svg';

export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: developer.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Container>
      <img height={50} src={cloudia} alt="cloudia" />
      <h1>FullStack Developer</h1>

      <Lottie options={defaultOptions} height={400} width={400} />
      <Button type="button">Go to Clients</Button>
    </Container>
  );
}

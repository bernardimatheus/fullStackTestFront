import React from 'react';

import Lottie from 'react-lottie';
import { Container, Button, TextAnimation, ImageAnimation } from './styles';

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
      <ImageAnimation>
        <img height={50} src={cloudia} alt="cloudia" />
      </ImageAnimation>

      <TextAnimation>
        <h1>FullStack Developer</h1>
      </TextAnimation>
      <Lottie options={defaultOptions} height={400} width={400} />
      <a href="/list">
        <Button type="button">Go to Clients</Button>
      </a>
    </Container>
  );
}

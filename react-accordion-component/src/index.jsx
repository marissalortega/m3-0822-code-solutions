import Accordion from './accordion';
import React from 'react';
import ReactDOM from 'react-dom/client';

const dogsArr = [
  {
    id: 1,
    name: 'Pug',
    info: 'The Pug is a breed of dog originally from China, with physically distinctive features of a wrinkly, short-muzzled face and curled tail. The breed has a fine, glossy coat that comes in a variety of colors, most often light brown (fawn) or black, and a compact, square body with well developed and thick muscles all over the body.'
  },
  {
    id: 2,
    name: 'Dachshund',
    info: 'The dachshund, also known as the wiener dog, badger dog, and sausage dog, is a short-legged, long-bodied, hound-type dog breed. The dog may be smooth-haired, wire-haired, or long-haired.'
  },
  {
    id: 3,
    name: 'German Shepherd',
    info: 'The German Shepherd[a] or Alsatian is a German breed of working dog of medium to large size. The breed was developed by Max von Stephanitz using various traditional German herding dogs from 1899.'
  },
  {
    id: 4,
    name: 'Greyhound',
    info: 'The English Greyhound, or simply the Greyhound, is a breed of dog, a sighthound which has been bred for coursing game and greyhound racing. Since the rise in large-scale adoption of retired racing Greyhounds, the breed has seen a resurgence in popularity as a family pet.'
  }];

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<Accordion dogs={dogsArr} />);

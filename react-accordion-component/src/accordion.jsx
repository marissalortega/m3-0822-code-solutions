import React from 'react';

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

class Card extends React.Component {

  render() {

    const title = this.props.title;
    const id = this.props.id;
    const info = this.props.info;
    const hideShowClass = this.props.className;

    return (
      <div>
        <div className="title" onClick={this.props.clicked}>
          <p id={id}>{title}</p>
        </div>
        <div className={hideShowClass}>
          <p>{info}</p>
        </div>
      </div>
    );
  }
}

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false, id: this.props.id };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({ isClicked: !this.state.isClicked, id: Number(event.target.id) });

  }

  render() {

    let hideShowClass = 'text hidden';

    if (this.state.isClicked === true) {
      hideShowClass = 'text show';
    }

    return (
      <div className="container">
        {dogsArr.map((dogCard, index) =>
            <Card key={index} title={dogCard.name} info={dogCard.info} className={hideShowClass} clicked={this.handleClick} id={index} />
        )}
      </div>
    );
  }
}

export default <Accordion />;

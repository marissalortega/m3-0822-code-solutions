import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    const counter = this.state.count;
    if (counter < 3) {
      return <button onClick={this.handleClick}>Hot Button</button>;
    } else if (counter >= 3 && counter < 6) {
      return <button onClick={this.handleClick} className="dark-purple">Hot Button</button>;
    } else if (counter >= 6 && counter < 9) {
      return <button onClick={this.handleClick} className="purple">Hot Button</button>;
    } else if (counter >= 9 && counter < 12) {
      return <button onClick={this.handleClick} className="red">Hot Button</button>;
    } else if (counter >= 12 && counter < 15) {
      return <button onClick={this.handleClick} className="orange">Hot Button</button>;
    } else if (counter >= 15 && counter < 18) {
      return <button onClick={this.handleClick} className="yellow">Hot Button</button>;
    } else if (counter >= 18) {
      return <button onClick={this.handleClick} className="white">Hot Button</button>;
    }
  }
}

export default <HotButton />;

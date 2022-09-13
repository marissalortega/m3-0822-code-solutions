import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      seconds: 0
    };
    this.handleClickCount = this.handleClickCount.bind(this);
    this.handleClickReset = this.handleClickReset.bind(this);
  }

  handleClickCount() {
    const isClicked = this.state.isClicked;

    if (!isClicked) {
      this.interval = setInterval(() => {
        this.setState({ seconds: this.state.seconds + 1 });
      }, 1000);
    } else {
      clearInterval(this.interval);
    }

    this.setState({ isClicked: !this.state.isClicked });
  }

  handleClickReset() {
    if (this.state.isClicked === false) {
      this.setState({ seconds: 0 });
    }
  }

  render() {
    const isClicked = this.state.isClicked;
    let btnClass = '';
    const counter = this.state.seconds;

    if (isClicked === false) {
      btnClass = 'fa-solid fa-play fa-2x';
    } else {
      btnClass = 'fa-solid fa-pause fa-2x';
    }

    return (
      <div className='stopwatch'>
        <div onClick={this.handleClickReset} className='watch-face'>
          <p className='counter'>{counter}</p>
        </div>
        <div>
          <i onClick={this.handleClickCount} className={btnClass}></i>
        </div>
      </div>
    );
  }
}

export default <Stopwatch />;

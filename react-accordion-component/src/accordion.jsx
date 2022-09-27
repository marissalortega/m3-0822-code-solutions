import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openId: null,
      isClicked: false
    };
  }

  handleClick(id) {
    if (this.state.openId === id) {
      this.setState({
        openId: null
      });
    } else {
      this.setState({
        openId: id
      });
    }

  }

  render() {
    return (
      <div className="container">
        {
          this.props.dogs.map(dog => {
            return (
              <div key={dog.id}>
                <div className="title" onClick={() => this.handleClick(dog.id)}>
                  <p>{dog.name}</p>
                </div>
                {this.state.openId === dog.id
                  ? (
                <div className="text show">
                    <p>{dog.info}</p>
                  </div>
                    )
                  : (
                   <div className="text hidden">
                    <p>{dog.info}</p>
                  </div>
                    )
              }
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default Accordion;

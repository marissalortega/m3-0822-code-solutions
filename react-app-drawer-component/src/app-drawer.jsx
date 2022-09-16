import React from 'react';

const clothingCategories = [
  { id: 1, category: 'T-Shirts' },
  { id: 2, category: 'Blouses' },
  { id: 3, category: 'Sweaters' },
  { id: 4, category: 'Jeans' },
  { id: 5, category: 'Skirts' },
  { id: 6, category: 'Dresses' }
];

class DrawerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    let showMenuClass = 'menu-shade-container no-menu';

    if (this.state.isClicked === true) {
      showMenuClass = 'show-menu menu-shade-container';
    }

    return (
      <div>
        <div className="menu-burger">
          <i className="fa-solid fa-bars fa-xl" onClick={this.handleClick}></i>
        </div>
        <h1>Clothing Store</h1>
        <div className={showMenuClass}>
          <div className="menu">
              <p onClick={this.handleClick}>Home</p>
              <ul>
                {clothingCategories.map(clothingItems =>
                  <div key={clothingItems.id} className="li-div">
                    <li onClick={this.handleClick}>
                    {clothingItems.category}
                  </li>
                  </div>)}
              </ul>
          </div>
          <div className="shade" onClick={this.handleClick}></div>
        </div>
      </div>
    );
  }
}

export default <DrawerComponent />;

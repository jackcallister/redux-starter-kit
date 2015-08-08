import React from 'react';

export default class Meal {

  render() {
    return (
      <li>
        <p onClick={(e) => { this.props.selectMeal(this.props.id) }}>
          {this.props.name}
        </p>
      </li>
    );
  }
}

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class RecipeDetails extends Component {
  constructor (props) {
    super(props);
    this.defaultRecipeArray = [];

    for(var i = 0; i < this.props.recipes.length; i++) {
      this.defaultRecipeArray.push(this.props.recipes[i].titleDetails.title);
    };
  }
  render() {
    return (
      <div>
        <h1>HELLO THERE</h1>
        <h2>{this.props.text}</h2>
        <ul>
          {this.defaultRecipeArray.map((item, index) => {
            return (
              <li key={ index }>
                <ul>
                </ul>
              {item}
              </li>
          )
          })}

        </ul>
{console.log('recipes', this.props.recipes)}
{console.log('RECIPES ',this.defaultRecipeArray)}
      </div>
    )
  }
}


RecipeDetails.propTypes = {
  text: PropTypes.string.isRequired,
  recipes: PropTypes.array.isRequired
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  };
};

export default connect(
  mapStateToProps,
  null
)(RecipeDetails);

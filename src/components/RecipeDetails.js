import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

export class RecipeDetails extends Component {
  render() {
    let currentRecipeID = this.props.match.params.id;

    let currentRecipe = this.props.recipes.filter((recipe) => {
      return recipe.id === currentRecipeID;
    });

    let recipeDetailTitle = currentRecipe[0].titleDetails.title;

    return (
      <div>
      <h1>{recipeDetailTitle}</h1>
      </div>
    );
  }
}

RecipeDetails.propTypes = {
  recipes: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  };
};

export default connect(
  mapStateToProps,
  null
)(RecipeDetails);
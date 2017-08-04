import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import RecipesList from '../containers/RecipesList';
import ModifyTitle from '../containers/ModifyTitle';
import ModifyIngredients from '../containers/ModifyIngredients';
import ReviewRecipe from './ReviewRecipe';
import SearchIngredient from '../containers/SearchIngredient';
import IngredientDetails from './IngredientDetails';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      allergens: '',
      servings: '',
      ingredients: [],
    };

    this.handleIngredientDetailNextButton = this.handleIngredientDetailNextButton.bind(this);
  }
  handleIngredientDetailNextButton(newIngredient) {
    this.setState({
      ...this.state,
      ingredients: [
        ...this.state.ingredients,
        newIngredient
      ]
    });
  }
  resetState() {
    this.setState({
      title: '',
      allergens: '',
      servings: '',
      ingredients: []
    });
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" component={RecipesList} />

        <Route path="/add-recipe" render={() => (
          <ModifyTitle
            nextButton={true}
            nextButtonStyle={{
              marginBottom: '10px',
              marginTop: '10px'
            }}
          />
        )} />

        <Route path="/add-ingredients" render={() => (
          <ModifyIngredients
            nextButton={true}
            plusButton={true}
            nextButtonStyle={{ marginBottom: '10px' }}
            ingredientList={this.state.ingredients}
          />
        )} />

        <Route path="/search-ingredient" component={SearchIngredient} />

        <Route path="/ingredient-details" render={({ location }) => (
          <IngredientDetails
            location={location}
            handleAddIngredient={this.handleIngredientDetailNextButton}
          />
        )} />

        <Route path="/review" render={() => (
          <ReviewRecipe
            title={this.state.title}
            servings={this.state.servings}
            allergens={this.state.allergens}
            handleTitleChange={this.handleTitleChange}
            handleServingsChange={this.handleServingsChange}
            handleAllergensChange={this.handleAllergensChange}
            // ingredientList={this.state.ingredients}
            buttonStyle={{
            marginTop: '20px',
            marginBottom: '10px'
          }} />
        )} />
      </Switch>
    );
  }
};

export default Main;

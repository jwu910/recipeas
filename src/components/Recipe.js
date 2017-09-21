import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Collapse, Well, ListGroup } from 'react-bootstrap';
import MinusButton from './MinusButton';
import EditButton from './EditButton';
import { Link } from 'react-router-dom';

class Recipe extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.toggleRecipe = this.toggleRecipe.bind(this);
  }
  toggleRecipe() {
    this.setState({ open: !this.state.open });
  }
  render() {

    return (
      <div className='recipe-container'>
        <h4 className="recipe-title" onClick={this.toggleRecipe}>{this.props.title}</h4>
        <Collapse in={this.state.open}>
          <div> {/* this div exists for smooth collapse animation */}
            <Well>
              <ListGroup>{this.props.ingredientsList}</ListGroup>
              <Link to="/modify-title">
                <EditButton
                  handleClick={() => {
                    this.props.loadStoredRecipe();
                    this.props.activateEditMode();
                  }}
                />
                {/* Edit button takes you to modify-title */}
              </Link>
              <MinusButton
                className="pull-right delete-recipe"
                handleClick={() =>
                  this.props.removeRecipe(this.props.id)
                }
              />
              <Link to={"recipe-details/" + this.props.id}>
                <button className='glyphicon btn btn-primary pull-right'>More Details</button>
              </Link>
            </Well>
          </div>
        </Collapse>
      </div>
    );
  }
}

Recipe.propTypes = {
  title: PropTypes.string.isRequired,
  ingredientsList: PropTypes.array.isRequired,
  removeRecipe: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default Recipe;

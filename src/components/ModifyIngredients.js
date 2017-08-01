import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PlusButton from './PlusButton';
import {
  Grid, Row, Col, Button, Pager, ListGroup, ListGroupItem
} from 'react-bootstrap';
import PropTypes from 'prop-types';

class ModifyIngredients extends Component {
  constructor(props) {
    super(props);

    this.renderNextButton = this.renderNextButton.bind(this);
    this.renderPlusButton = this.renderPlusButton.bind(this);
    this.renderIngredients = this.renderIngredients.bind(this);
  }
  renderNextButton() {
    return this.props.nextButton ?
      (
        <Pager>
          <Link to="/review">
            <Button
              bsSize="large"
              bsStyle="primary"
              style={this.props.nextButtonStyle}
              block
            >
              Next
            </Button>
          </Link>
          <Link to="/add-recipe">
            <Button bsSize="large" block>Back</Button>
          </Link>
        </Pager>
      )
      : null;
  }
  renderPlusButton() {
    return this.props.plusButton ? (
      <Link to="/search-ingredient">
        <PlusButton />
      </Link>
    ) : null;
  }
  renderIngredients() {
    return (
      <ListGroup>
        {this.props.ingredientList.map(ingredient => {
          return (
            <ListGroupItem key={ingredient.name}>
              {`${ingredient.name}, ${ingredient.measure}`}
            </ListGroupItem>
          )
        })}
      </ListGroup>
    )
  }
  render() {
    return (
      <Grid>
        <Row>
          <Col sm={12} lg={8} lgOffset={2}>
            <h4>
              Ingredients
              { this.renderPlusButton() }
            </h4>
            { this.renderIngredients() }
            { this.renderNextButton() }
          </Col>
        </Row>
      </Grid>
  );
  }
}

ModifyIngredients.propTypes = {
  nextButton: PropTypes.bool.isRequired,
  nextButtonStyle: PropTypes.object.isRequired,
  plusButton: PropTypes.bool.isRequired,
}

export default ModifyIngredients;

import React, { Component } from "react";
import store, { DELETE_RECIPE } from "./../../store";
import { Link } from "react-router-dom";
import RecipeCard from "./../RecipeCard/RecipeCard";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState();
    this.state = {
      recipes: reduxState.recipes,
    };
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        recipes: store.getState().recipes,
      });
    });
  }

  deleteCard = (i) => {
    store.dispatch({
      type: DELETE_RECIPE,
      payload: i,
    });
  };

  render() {
    const recipes = this.state.recipes.map((recipe, i) => {
      return (
        <RecipeCard
          key={i}
          index={i}
          name={recipe.name}
          category={recipe.category}
          authorFirst={recipe.authorFirst}
          authorLast={recipe.authorLast}
          ingredients={recipe.ingredients}
          instructions={recipe.instructions}
          deleteCard={this.deleteCard}
        />
      );
    });

    return (
      <div className="Home">
        <Link to="/add/name">
          <button>Create New Recipe</button>
        </Link>
        <div className="card_container">{recipes}</div>
      </div>
    );
  }
}

export default Home;

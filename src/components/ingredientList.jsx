// IngredientList.jsx
import React from 'react';
import Ingredient from './Ingredient';

const IngredientList = ({ availableIngredients, addToBurger }) => {
  return (
    <ul>
      {availableIngredients.map((ingredient, index) => (
        <Ingredient 
          key={index} 
          ingredient={ingredient} 
          onClick={() => addToBurger(ingredient)} 
          buttonLabel="+" 
        />
      ))}
    </ul>
  );
};

export default IngredientList;

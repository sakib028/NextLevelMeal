import React from "react";
import style from "./mealsGrid.module.css";
import MealItem from "./mealItem";

export default function MealsGrid({ meals }) {
  return (
    <ul className={style.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}

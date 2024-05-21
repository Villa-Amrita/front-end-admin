import React from "react";
import { type Meal } from "./MealList";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";

interface MealItemProps {
  meal: Meal;
  handleEdit: (id: number) => void;
  handleDelete: (id: number) => void;
}

const MealItem = ({ meal, handleEdit, handleDelete }: MealItemProps) => {
  return (
    <>
      <span className="w-1/4">{meal.name}</span>
      <span className="flex w-1/4 items-center justify-start">
        {meal.description}
      </span>
      <span className="flex w-1/4 items-center justify-end">
        {meal.mealPlanId == 1 && "None"}
        {meal.mealPlanId == 2 && "Chef"}
        {meal.mealPlanId == 3 && "Restaurant"}
        {meal.mealPlanId == 4 && "AAA Restaurant"}
        {meal.mealPlanId == 5 && "Test"}
        {meal.mealPlanId != 1 &&
          meal.mealPlanId != 2 &&
          meal.mealPlanId != 3 &&
          meal.mealPlanId != 4 &&
          meal.mealPlanId != 5 &&
          "None"}
      </span>
      <div className="flex w-1/4 items-center justify-end">
        <button
          className="mr-2 text-primary hover:text-primary-dark"
          onClick={() => handleEdit(meal.id)}
        >
          <MdOutlineEdit />
        </button>
        <button
          className="text-red-500 hover:text-red-700"
          onClick={() => handleDelete(meal.id)}
        >
          <FaRegTrashAlt />
        </button>
      </div>
    </>
  );
};

export default MealItem;

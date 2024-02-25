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
      <span className="flex w-1/4 items-center justify-end">In-house Chef</span>
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

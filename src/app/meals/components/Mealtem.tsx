import React from "react";
import { type Meal } from "./MealsList";
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
      <span>{meal.name}</span>
      <span>{meal.description}</span>
      <div className="flex items-center">
        <button
          className="text-primary hover:text-primary-dark mr-2"
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

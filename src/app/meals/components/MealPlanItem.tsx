import React from "react";
import { type MealPlan } from "./MealPlanList";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";

interface MealPlanItemProps {
  mealPlan: MealPlan;
  handleEdit: (id: number) => void;
  handleDelete: (id: number) => void;
}

const MealPlanItem = ({
  mealPlan,
  handleEdit,
  handleDelete,
}: MealPlanItemProps) => {
  return (
    <>
      <span>{mealPlan.name}</span>
      <span>{mealPlan.description}</span>
      <div className="flex items-center">
        <button
          className="text-primary hover:text-primary-dark mr-2"
          onClick={() => handleEdit(mealPlan.id)}
        >
          <MdOutlineEdit />
        </button>
        <button
          className="text-red-500 hover:text-red-700"
          onClick={() => handleDelete(mealPlan.id)}
        >
          <FaRegTrashAlt />
        </button>
      </div>
    </>
  );
};

export default MealPlanItem;

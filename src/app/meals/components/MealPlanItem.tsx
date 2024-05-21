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
      <span className="flex w-1/3 items-center justify-start">
        {mealPlan.name}
      </span>
      <span className="flex w-1/3 items-center justify-start">
        {mealPlan.description}
      </span>
      <div className="flex w-1/3 items-center justify-end">
        <button
          className="mr-2 text-primary hover:text-primary-dark"
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

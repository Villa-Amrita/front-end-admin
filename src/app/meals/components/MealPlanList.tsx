"use client";

import React, { useState } from "react";
import MealPlanItem from "./MealPlanItem";

export type MealPlan = {
  id: number;
  name: string;
  description: string;
};

const sampleMealPlans: MealPlan[] = [
  { id: 1, name: "In-house Chef", description: "In-house Chef" },
  { id: 2, name: "ABC Restaurant", description: "ABC Restaurant" },
  { id: 3, name: "BBC Restaurant", description: "BBC Restaurant" },
  { id: 4, name: "CNN Restaurant", description: "CNN Restaurant" },
  { id: 5, name: "Fathah Restaurant", description: "Fathah Restaurant" },
  { id: 6, name: "New China Restaurant", description: "New China Restaurant" },
];

const MealPlansList = () => {
  const [mealPlans, setMealPlans] = useState(sampleMealPlans);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [limitOptions] = useState([5, 10, 15, 20]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMealPlans = mealPlans.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleAdd = () => {
    const newMealPlan: MealPlan = {
      id: mealPlans.length + 1,
      name: "New Meal Plan",
      description: "New Meal Plan",
    };
    setMealPlans([...mealPlans, newMealPlan]);
  };

  const handleEdit = (id: number) => {
    console.log(`Edit meal plan with id ${id}`);
    //TODO
  };

  const handleDelete = (id: number) => {
    const updatedMealPlans = mealPlans.filter((mealPlan) => mealPlan.id !== id);
    setMealPlans(updatedMealPlans);
  };

  return (
    <div className="mx-10 mt-8">
      <h1 className="mb-2 font-[poppins] text-2xl font-bold text-black">
        Meal Plans
      </h1>

      <div className="mb-4 flex items-center">
        <span className="mr-2">Items per page:</span>
        <select
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(Number(e.target.value))}
          className="focus:border-primary rounded-md border p-2 text-sm focus:outline-none focus:ring"
        >
          {limitOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <ul className="text-lg">
        {currentMealPlans.map((mealPlan) => (
          <li
            key={mealPlan.id}
            className="flex items-center justify-between rounded-lg border-b px-2 py-2"
          >
            <MealPlanItem
              mealPlan={mealPlan}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          </li>
        ))}
      </ul>

      <div className="mt-4 flex justify-between">
        <button
          className="bg-primary hover:bg-primary-dark f;ex items-center rounded-md px-4 py-2 font-bold text-white"
          onClick={() => handleAdd()}
        >
          Add Meal Plan
        </button>
        <div className="flex items-center">
          {Array.from({
            length: Math.ceil(mealPlans.length / itemsPerPage),
          }).map((item, index) => (
            <button
              key={index + 1}
              className={`mr-2 rounded-md px-3 py-1 ${
                currentPage === index + 1
                  ? "bg-primary text-white"
                  : "hover:bg-primary-light"
              }`}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MealPlansList;

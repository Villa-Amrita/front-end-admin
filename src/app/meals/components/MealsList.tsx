"use client";

import React, { useState } from "react";
import MealItem from "./Mealtem";

export type Meal = {
  id: number;
  name: string;
  description: string;
};

const sampleMeals: Meal[] = [
  { id: 1, name: "Rice", description: "Rice" },
  { id: 2, name: "Kottu", description: "Kottu" },
  { id: 3, name: "BBQ", description: "BBQ" },
  { id: 4, name: "Burger", description: "Burger" },
  { id: 5, name: "Submarine", description: "Submarine" },
  { id: 6, name: "Gulab Jamun", description: "Gulab Jamun" },
];

const MealsList = () => {
  const [meals, setMeals] = useState(sampleMeals);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [limitOptions] = useState([5, 10, 15, 20]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMeals = meals.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleAdd = () => {
    const newMeal: Meal = {
      id: meals.length + 1,
      name: "New Meal",
      description: "New Meal",
    };
    setMeals([...meals, newMeal]);
  };

  const handleEdit = (id: number) => {
    console.log(`Edit meal plan with id ${id}`);
    //TODO
  };

  const handleDelete = (id: number) => {
    const updatedMeals = meals.filter((meal) => meal.id !== id);
    setMeals(updatedMeals);
  };

  return (
    <div className="mx-10 mt-8">
      <h1 className="mb-2 font-[poppins] text-2xl font-bold text-black">
        Meals
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
        {currentMeals.map((meal) => (
          <li
            key={meal.id}
            className="flex items-center justify-between rounded-lg border-b px-2 py-2"
          >
            <MealItem
              meal={meal}
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
          Add Meal
        </button>
        <div className="flex items-center">
          {Array.from({
            length: Math.ceil(meals.length / itemsPerPage),
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

export default MealsList;

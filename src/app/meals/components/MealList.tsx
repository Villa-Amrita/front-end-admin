"use client";

import React, { useState } from "react";
import MealItem from "./Mealtem";
import { type MealType } from "../../../../../back-end/server/api/trpcRouter";
import { createMeal, updateMeal } from "lib/client";

export type Meal = MealType;

interface MealListProps {
  incomingMeals: Meal[];
}

// const sampleMeals: Meal[] = [
//   { id: 1, name: "Rice", description: "Rice" },
//   { id: 2, name: "Kottu", description: "Kottu" },
//   { id: 3, name: "BBQ", description: "BBQ" },
//   { id: 4, name: "Burger", description: "Burger" },
//   { id: 5, name: "Submarine", description: "Submarine" },
//   { id: 6, name: "Gulab Jamun", description: "Gulab Jamun" },
// ];

const MealsList = ({ incomingMeals }: MealListProps) => {
  const [meals, setMeals] = useState(incomingMeals);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [limitOptions] = useState([5, 10, 15, 20]);
  const [newMealName, setNewMealName] = useState("");
  const [newMealDescription, setNewMealDescription] = useState("");
  const [newMealPlanType, setNewMealPlanType] = useState("");

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMeals = meals.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleAdd = async () => {
    const newMeal = {
      name: newMealName,
      description: newMealDescription,
      breakfastAvailable: true,
      lunchAvailable: true,
      dinnerAvailable: true,
      mealPlanId: parseInt(newMealPlanType),
    };
    const createdMeal = await createMeal(newMeal);
    setMeals([...meals, createdMeal]);
  };

  const handleEdit = async (id: number) => {
    const editMeal = {
      id: id,
      name: newMealName,
      breakfastAvailable: true,
      lunchAvailable: true,
      dinnerAvailable: true,
      description: newMealDescription,
      mealPlanId: parseInt(newMealPlanType),
    };
    const updatedMeal = await updateMeal(editMeal);
    setMeals(meals.map((meal) => (meal.id === id ? updatedMeal : meal)));
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
          className="rounded-md border p-2 text-sm focus:border-primary focus:outline-none focus:ring"
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
        <div className="mt-2 w-1/2 justify-between">
          <label className="mr-2 mt-2">Name:</label>
          <input
            className="mr-4 w-auto rounded-md border p-2 text-sm focus:border-primary focus:outline-none focus:ring"
            onChange={(e) => setNewMealName(e.target.value)}
          ></input>
          <label className="mr-2 mt-2">Description:</label>
          <input
            className="mr-4 rounded-md border p-2 text-sm focus:border-primary focus:outline-none focus:ring"
            onChange={(e) => setNewMealDescription(e.target.value)}
          ></input>
          <label className="mr-2 mt-2">Meal Plan Id:</label>
          <input
            className="w-10 rounded-md border p-2 text-sm focus:border-primary focus:outline-none focus:ring"
            onChange={(e) => setNewMealPlanType(e.target.value)}
          ></input>
        </div>
        <div className="flex w-1/4 justify-start">
          <button
            className="mt-2 h-10 rounded-md bg-primary px-4 py-2 font-bold text-white hover:bg-primary-dark"
            onClick={() => handleAdd()}
          >
            Add Meal
          </button>
        </div>
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

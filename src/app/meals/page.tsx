/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import NavBar from "~/components/NavBar";
import MealPlansList from "./components/MealPlanList";
import MealsList from "./components/MealList";
import { type MealPlanType as MealPlan } from "../../../../back-end/server/api/trpcRouter";
import { type MealType as Meal } from "../../../../back-end/server/api/trpcRouter";

export default async function HomePage() {
  const viewAllMealPlans = async (): Promise<MealPlan[]> => {
    const response = await fetch("http://localhost:8080/api/mealplan/viewAll", {
      cache: "no-cache",
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
      },
    });
    if (!response.ok) {
      throw new Error(`Error fetching MealPlans: ${response.statusText}`);
    }
    const data = await response.json();
    const mealPlans: MealPlan[] = data.data;
    return mealPlans;
  };

  const viewAllMeals = async (): Promise<Meal[]> => {
    const response = await fetch("http://localhost:8080/api/meal/viewAll", {
      cache: "no-cache",
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
      },
    });
    if (!response.ok) {
      throw new Error(`Error fetching MealPlans: ${response.statusText}`);
    }
    const data = await response.json();
    const meals: Meal[] = data.data;
    return meals;
  };

  const mealplans = await viewAllMealPlans();
  const meals = await viewAllMeals();

  return (
    <>
      <NavBar />
      <main className="px-4 py-6">
        <MealPlansList incomingMealPlans={mealplans} />
        <br />
        <MealsList incomingMeals={meals} />
        <br />
      </main>
    </>
  );
}

import NavBar from "~/components/NavBar";
import MealPlansList from "./components/MealPlanList";
import MealsList from "./components/MealList";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main className="px-4 py-6">
        <MealPlansList />
        <br />
        <MealsList />
        <br />
      </main>
    </>
  );
}

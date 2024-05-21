/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import {
  type TRPCRouter,
  type UserType,
  type RoomType,
  type MealType,
  type CreateMealInputType,
  type MealPlanType,
  type CreateMealPlanInputType,
  type ReservationType,
  type CreateReservationInputType,
  type UpdateReservationInputType,
  type ReservationDailyMealType,
  type CreateReservationDailyMealInputType,
  type ReservationDailyMealSetType,
  type CreateReservationDailyMealSetInputType,
  type UpdateReservationDailyMealSetInputType,
} from "../../back-end/server/api/trpcRouter";

const client = createTRPCProxyClient<TRPCRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:8080/trpc",
    }),
  ],
});

// User Router Facade Functions
export async function createUser(data: UserType): Promise<UserType> {
  return await client.user.createUser.mutate(data);
}

export async function updateUser(data: UserType): Promise<UserType> {
  return await client.user.updateUser.mutate(data);
}

export async function viewUser(userId: string) {
  return await client.user.viewUser.query(userId);
}

export async function viewUserByEmail(email: string) {
  return await client.user.viewUserByEmail.query(email);
}

export async function viewAllUsers() {
  return await client.user.viewAllUsers.query();
}

// Room Router Facade Functions
export async function updateRoom(data: RoomType): Promise<RoomType> {
  return await client.room.updateRoom.mutate(data);
}

export async function viewRoom(roomId: number): Promise<RoomType> {
  return await client.room.viewRoom.query(roomId);
}

export async function viewAllRooms(): Promise<RoomType[]> {
  return await client.room.viewAllRooms.query();
}

// Meal Router Facade Functions
export async function createMeal(data: CreateMealInputType): Promise<MealType> {
  return await client.meal.createMeal.mutate(data);
}

export async function updateMeal(data: MealType): Promise<MealType> {
  return await client.meal.updateMeal.mutate(data);
}

export async function viewMeal(mealId: number): Promise<MealType> {
  return await client.meal.viewMeal.query(mealId);
}

export async function viewAllMeals(): Promise<MealType[]> {
  return await client.meal.viewAllMeals.query();
}

// Meal Plan Router Facade Functions
export async function createMealPlan(
  data: CreateMealPlanInputType,
): Promise<MealPlanType> {
  return await client.mealplan.createMealPlan.mutate(data);
}

export async function updateMealPlan(
  data: MealPlanType,
): Promise<MealPlanType> {
  return await client.mealplan.updateMealPlan.mutate(data);
}

export async function viewMealPlan(mealPlanId: number): Promise<MealPlanType> {
  return await client.mealplan.viewMealPlan.query(mealPlanId);
}

export async function viewAllMealPlans(): Promise<MealPlanType[]> {
  return await client.mealplan.viewAllMealPlans.query();
}

// Reservation Router Facade Functions
export async function createReservation(
  data: CreateReservationInputType,
): Promise<{
  id: number;
  roomId: number;
  customerId: string;
  startDate: Date;
  endDate: Date;
  specialRequests: string;
  status: string;
}> {
  const result = await client.reservation.createReservation.mutate(data);

  // Explicitly convert startDate and endDate from strings to Date objects
  const formattedResult = {
    ...result,
    startDate: new Date(result.startDate),
    endDate: new Date(result.endDate),
  };

  return formattedResult;
}

export async function updateReservation(
  data: UpdateReservationInputType,
): Promise<{
  id: number;
  roomId: number;
  customerId: string;
  startDate: string;
  endDate: string;
  specialRequests: string;
  status: string;
}> {
  return await client.reservation.updateReservation.mutate(data);
}

export async function viewReservation(reservationId: number): Promise<{
  id: number;
  roomId: number;
  customerId: string;
  startDate: string;
  endDate: string;
  specialRequests: string;
  status: string;
}> {
  return await client.reservation.viewReservation.query(reservationId);
}

export async function viewAllReservations(): Promise<
  {
    id: number;
    roomId: number;
    customerId: string;
    startDate: string;
    endDate: string;
    specialRequests: string;
    status: string;
  }[]
> {
  return await client.reservation.viewAllReservations.query();
}

// Reservation Daily Meal Router Facade Functions
export async function createReservationDailyMeal(
  data: CreateReservationDailyMealInputType,
): Promise<ReservationDailyMealType> {
  return await client.reservationDailyMeal.createReservationDailyMeal.mutate(
    data,
  );
}

export async function updateReservationDailyMeal(
  data: ReservationDailyMealType,
): Promise<ReservationDailyMealType> {
  return await client.reservationDailyMeal.updateReservationDailyMeal.mutate(
    data,
  );
}

export async function viewReservationDailyMeal(
  reservationDailyMealId: number,
): Promise<ReservationDailyMealType> {
  return await client.reservationDailyMeal.viewReservationDailyMeal.query(
    reservationDailyMealId,
  );
}

export async function viewAllReservationDailyMeals(): Promise<
  ReservationDailyMealType[]
> {
  return await client.reservationDailyMeal.viewAllReservationDailyMeals.query();
}

// Reservation Daily Meal Set Router Facade Functions
export async function createReservationDailyMealSet(
  data: CreateReservationDailyMealSetInputType,
): Promise<{ id: number; reservationId: number; date: string }> {
  return await client.reservationDailyMealSet.createReservationDailyMealSet.mutate(
    data,
  );
}

export async function updateReservationDailyMealSet(
  data: UpdateReservationDailyMealSetInputType,
): Promise<{ id: number; reservationId: number; date: string }> {
  return await client.reservationDailyMealSet.updateReservationDailyMealSet.mutate(
    data,
  );
}

export async function viewReservationDailyMealSet(
  reservationDailyMealSetId: number,
): Promise<{ id: number; reservationId: number; date: string }> {
  return await client.reservationDailyMealSet.viewReservationDailyMealSet.query(
    reservationDailyMealSetId,
  );
}

export async function viewAllReservationDailyMealSets(): Promise<
  { id: number; reservationId: number; date: string }[]
> {
  return await client.reservationDailyMealSet.viewAllReservationDailyMealSets.query();
}

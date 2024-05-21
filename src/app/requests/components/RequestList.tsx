"use client";

import React, { useState } from "react";
import RequestItem from "./RequestItem";
import { type ReservationType } from "../../../../../back-end/server/api/trpcRouter";

export enum RequestStatus {
  Processing = "PENDING",
  Approved = "CONFIRMED",
  Rejected = "CANCELLED",
  Payed = "PAYED",
}

type DailyMeals = {
  breakfastMealId: number;
  lunchMealId: number;
  dinnerMealId: number;
};

interface RequestListProps {
  reservations: ReservationType[];
}

export type Request = RequestStatus;

// const sampleRequests: Request[] = [
//   {
//     id: 1,
//     roomNumber: 101,
//     customerId: 1001,
//     startDate: new Date("2024-03-01"),
//     endDate: new Date("2024-03-05"),
//     mealPlanId: 1,
//     dailyMeals: [
//       {
//         breakfastMealId: 101,
//         lunchMealId: 201,
//         dinnerMealId: 301,
//       },
//     ],
//     status: RequestStatus.Processing,
//   },
//   {
//     id: 2,
//     roomNumber: 102,
//     customerId: 1002,
//     startDate: new Date("2024-03-05"),
//     endDate: new Date("2024-03-10"),
//     mealPlanId: 2,
//     dailyMeals: [
//       {
//         breakfastMealId: 102,
//         lunchMealId: 202,
//         dinnerMealId: 302,
//       },
//     ],
//     status: RequestStatus.Approved,
//   },
//   {
//     id: 3,
//     roomNumber: 103,
//     customerId: 1003,
//     startDate: new Date("2024-03-10"),
//     endDate: new Date("2024-03-15"),
//     mealPlanId: 1,
//     dailyMeals: [
//       {
//         breakfastMealId: 103,
//         lunchMealId: 203,
//         dinnerMealId: 303,
//       },
//     ],
//     status: RequestStatus.Rejected,
//   },
//   {
//     id: 4,
//     roomNumber: 104,
//     customerId: 1004,
//     startDate: new Date("2024-03-15"),
//     endDate: new Date("2024-03-20"),
//     mealPlanId: 3,
//     dailyMeals: [
//       {
//         breakfastMealId: 104,
//         lunchMealId: 204,
//         dinnerMealId: 304,
//       },
//     ],
//     status: RequestStatus.Payed,
//   },
//   {
//     id: 5,
//     roomNumber: 105,
//     customerId: 1005,
//     startDate: new Date("2024-03-20"),
//     endDate: new Date("2024-03-25"),
//     mealPlanId: 2,
//     dailyMeals: [
//       {
//         breakfastMealId: 105,
//         lunchMealId: 205,
//         dinnerMealId: 305,
//       },
//     ],
//     status: RequestStatus.Processing,
//   },
//   {
//     id: 6,
//     roomNumber: 106,
//     customerId: 1006,
//     startDate: new Date("2024-03-25"),
//     endDate: new Date("2024-04-05"),
//     mealPlanId: 1,
//     dailyMeals: [
//       {
//         breakfastMealId: 106,
//         lunchMealId: 206,
//         dinnerMealId: 306,
//       },
//     ],
//     status: RequestStatus.Approved,
//   },
// ];

const RequestList = ({ reservations }: RequestListProps) => {
  //define the list of ALL requests
  const [requests, setRequests] = useState(reservations);

  //Pagination filter state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [limitOptions] = useState([5, 10, 15, 20]);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  //Date filter state
  const currentDate = new Date();
  const [selectedYear, setSelectedYear] = useState<number | undefined>(
    currentDate.getFullYear(),
  );
  const [selectedMonth, setSelectedMonth] = useState<number | undefined>(
    currentDate.getMonth() + 1,
  );

  //Request Status filter state
  const [selectedStatus, setSelectedStatus] = useState<RequestStatus | "All">(
    "All",
  );

  //Filter requests based on selected year and month, and selected state
  const filteredRequests = requests.filter((request) => {
    const startDateYear = new Date(request.startDate).getFullYear();
    const startDateMonth = new Date(request.startDate).getMonth() + 1; // Month is zero-indexed
    const endDateYear = new Date(request.endDate).getFullYear();
    const endDateMonth = new Date(request.endDate).getMonth() + 1; // Month is zero-indexed

    const isMatchingYearMonth =
      (!selectedYear ||
        startDateYear === selectedYear ||
        endDateYear === selectedYear) &&
      (!selectedMonth ||
        startDateMonth === selectedMonth ||
        endDateMonth === selectedMonth);

    const isMatchingStatus =
      selectedStatus === "All" ||
      (request.status as RequestStatus) === selectedStatus;

    return isMatchingYearMonth && isMatchingStatus;
  });

  const currentRequests = filteredRequests.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="mx-10 mt-8">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <span className="mr-2">Filter by Year/Month:</span>
          <input
            type="number"
            placeholder="Year"
            value={selectedYear}
            onChange={(e) => setSelectedYear(Number(e.target.value))}
            className="rounded-md border p-2 text-sm focus:border-primary focus:outline-none focus:ring"
          />
          <input
            type="number"
            placeholder="Month"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(Number(e.target.value))}
            className="ml-2 rounded-md border p-2 text-sm focus:border-primary focus:outline-none focus:ring"
          />
        </div>
        <div>
          <span className="mr-2">Filter by Status:</span>
          <select
            value={selectedStatus}
            onChange={(e) =>
              setSelectedStatus(e.target.value as RequestStatus | "All")
            }
            className="rounded-md border p-2 text-sm focus:border-primary focus:outline-none focus:ring"
          >
            <option value="All">All</option>
            {Object.values(RequestStatus).map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
        <div>
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
      </div>

      <ul className="text-lg transition">
        {currentRequests.map((request) => (
          <li
            key={request.id}
            className="flex items-center justify-between rounded-lg border-b px-2 py-2"
          >
            <RequestItem request={request} />
          </li>
        ))}
      </ul>

      <div className="mt-4 flex justify-end">
        <div className="flex items-center">
          {Array.from({
            length: Math.ceil(requests.length / itemsPerPage),
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

export default RequestList;

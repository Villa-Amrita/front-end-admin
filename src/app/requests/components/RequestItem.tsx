import React from "react";
import { type Request } from "./RequestList";
import RequestStatusButton from "./RequestStatusButton";
import { type ReservationType } from "../../../../../back-end/server/api/trpcRouter";
import { updateReservation } from "lib/client";

interface RequestItemProps {
  request: ReservationType;
}

const RequestItem = ({ request }: RequestItemProps) => {
  const handleConfirm = async () => {
    const updatedReservation = {
      ...request,
      startDate: new Date(request.startDate).toISOString(),
      endDate: new Date(request.endDate).toISOString(),
      status: "CONFIRMED",
    };
    await updateReservation(updatedReservation);
    alert("Request confirmed");
  };

  const handleReject = async () => {
    const updatedReservation = {
      ...request,
      startDate: new Date(request.startDate).toISOString(),
      endDate: new Date(request.endDate).toISOString(),
      status: "CANCELLED",
    };
    await updateReservation(updatedReservation);
    alert("Request cancelled");
  };

  return (
    <>
      <span className="w-1/4">{request.roomId}</span>
      <span className="flex w-1/4 items-center justify-start">
        {request.customerId}
      </span>
      <span className="flex w-1/4 items-center justify-end">
        {formatDate(new Date(request.startDate))} -{" "}
        {formatDate(new Date(request.endDate))}
      </span>
      {/* <div className="flex w-1/4 items-center justify-end">
        <RequestStatusButton request={request} />
      </div> */}
      {request.status == "PENDING" && (
        <div className="flex w-1/4 items-center justify-end space-x-4">
          <button
            className="flex items-center justify-center rounded-lg bg-green-500 px-2 py-1 font-bold text-white"
            onClick={handleConfirm}
          >
            Confirm
          </button>
          <button
            className="flex items-center justify-center rounded-lg bg-red-500 px-2 py-1 font-bold text-white"
            onClick={handleReject}
          >
            Reject
          </button>
        </div>
      )}
    </>
  );
};

function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}/${month}/${day}`;
}

export default RequestItem;

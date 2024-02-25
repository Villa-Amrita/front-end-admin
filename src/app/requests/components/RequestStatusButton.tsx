"use client";

import React from "react";
import { type Request, RequestStatus } from "./RequestList";

interface RequestStatusButtonProps {
  request: Request;
}

const RequestStatusButton = ({ request }: RequestStatusButtonProps) => {
  return (
    <button
      className={`w-32 rounded-full px-4 py-1 font-bold text-white ${request.status === RequestStatus.Processing && "bg-gray-500 hover:bg-gray-700"} ${request.status === RequestStatus.Approved && "bg-green-500 hover:bg-green-700"} ${request.status === RequestStatus.Rejected && "bg-red-500 hover:bg-red-700"} ${request.status === RequestStatus.Payed && "bg-blue-500 hover:bg-blue-700"}`}
    >
      {request.status === RequestStatus.Processing && RequestStatus.Processing}
      {request.status === RequestStatus.Approved && RequestStatus.Approved}
      {request.status === RequestStatus.Rejected && RequestStatus.Rejected}
      {request.status === RequestStatus.Payed && RequestStatus.Payed}
    </button>
  );
};

export default RequestStatusButton;

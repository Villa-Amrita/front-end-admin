import React from "react";
import { type Request } from "./RequestList";
import { formatDate } from "~/app/utils/Dates";
import RequestStatusButton from "./RequestStatusButton";

interface RequestItemProps {
  request: Request;
}

const RequestItem = ({ request }: RequestItemProps) => {
  return (
    <>
      <span className="w-1/4">{request.roomNumber}</span>
      <span className="flex w-1/4 items-center justify-start">
        {request.customerId}
      </span>
      <span className="flex w-1/4 items-center justify-end">
        {formatDate(request.startDate)} - {formatDate(request.endDate)}
      </span>
      <div className="flex w-1/4 items-center justify-end">
        <RequestStatusButton request={request} />
      </div>
    </>
  );
};

export default RequestItem;

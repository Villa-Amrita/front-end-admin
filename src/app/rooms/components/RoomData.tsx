"use client";

import React, { useState } from "react";
import { type Room } from "lib";
import {
  getRoomName,
  getRoomSize,
  getRoomDescription,
  getRoomConditions,
  getRoomPrice,
} from "~/app/utils/Rooms";

interface RoomDataProps {
  roomNumber: number;
}

const RoomData = ({ roomNumber }: RoomDataProps) => {
  const initialFormData: Room = {
    roomNumber: roomNumber,
    roomName: getRoomName(roomNumber),
    roomSize: getRoomSize(roomNumber),
    roomDescription: getRoomDescription(roomNumber),
    roomConditions: getRoomConditions(roomNumber),
    roomPrice: getRoomPrice(roomNumber),
  };

  const [formData, setFormData] = useState<Room>(initialFormData);

  // Individual state variables for each form field
  const [roomName, setRoomName] = useState<string>(initialFormData.roomName);
  const [roomSize, setRoomSize] = useState<number>(initialFormData.roomSize);
  const [roomDescription, setRoomDescription] = useState<string>(
    initialFormData.roomDescription,
  );
  const [roomConditions, setRoomConditions] = useState<string>(
    initialFormData.roomConditions,
  );
  const [roomPrice, setRoomPrice] = useState<number>(initialFormData.roomPrice);

  const editRoom = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
  };

  return (
    <form
      className="mx-auto flex max-w-md flex-col rounded-md border bg-white p-4 font-[poppins] shadow-md"
      onSubmit={editRoom}
    >
      <h2 className="mb-4 text-center text-2xl font-bold">
        Room #{roomNumber}
      </h2>
      <label htmlFor="roomName" className="text-sm font-medium text-gray-600">
        Room Name:
      </label>
      <input
        type="text"
        id="roomName"
        name="roomName"
        value={roomName}
        onChange={(e) => setRoomName(e.target.value)}
        className={`mb-2 rounded-md border ${roomName !== formData.roomName ? "border-red-500" : "border-gray-300"} p-2`}
      />

      <label htmlFor="roomSize" className="text-sm font-medium text-gray-600">
        Room Size:
      </label>
      <input
        type="number"
        id="roomSize"
        name="roomSize"
        value={roomSize}
        onChange={(e) => setRoomSize(parseInt(e.target.value))}
        className={`mb-2 rounded-md border ${roomSize !== formData.roomSize ? "border-red-500" : "border-gray-300"} p-2`}
      />

      <label
        htmlFor="roomDescription"
        className="text-sm font-medium text-gray-600"
      >
        Room Description:
      </label>
      <textarea
        id="roomDescription"
        name="roomDescription"
        value={roomDescription}
        onChange={(e) => setRoomDescription(e.target.value)}
        className={`mb-2 rounded-md border ${roomDescription !== formData.roomDescription ? "border-red-500" : "border-gray-300"} p-2`}
      />

      <label
        htmlFor="roomConditions"
        className="text-sm font-medium text-gray-600"
      >
        Room Conditions:
      </label>
      <textarea
        id="roomConditions"
        name="roomConditions"
        value={roomConditions}
        onChange={(e) => setRoomConditions(e.target.value)}
        className={`mb-2 rounded-md border ${roomConditions !== formData.roomConditions ? "border-red-500" : "border-gray-300"} p-2`}
      />

      <label htmlFor="roomPrice" className="text-sm font-medium text-gray-600">
        Room Price:
      </label>
      <input
        type="number"
        id="roomPrice"
        name="roomPrice"
        value={roomPrice}
        onChange={(e) => setRoomPrice(parseFloat(e.target.value))}
        className={`mb-4 rounded-md border ${roomPrice !== formData.roomPrice ? "border-red-500" : "border-gray-300"} p-2`}
      />

      <button
        type="submit"
        className="bg-primary hover:bg-primary-dark rounded-md px-4 py-2 text-white transition-colors hover:bg-opacity-80"
      >
        Edit Information
      </button>
    </form>
  );
};

export default RoomData;

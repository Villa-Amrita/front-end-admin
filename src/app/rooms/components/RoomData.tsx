"use client";

import React, { useState } from "react";
import { type RoomType as Room } from "../../../../../back-end/server/api/trpcRouter";
import { updateRoom } from "../../../../lib/client";

interface RoomDataProps {
  room: Room;
}

const RoomData = ({ room }: RoomDataProps) => {
  const initialFormData: Room = {
    id: room.id,
    roomName: room.roomName,
    roomSize: room.roomSize,
    roomDescription: room.roomDescription,
    roomConditions: room.roomConditions,
    roomPrice: room.roomPrice,
  };

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

  const editRoom = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      id: room.id,
      roomName,
      roomSize,
      roomDescription,
      roomConditions,
      roomPrice,
    };
    console.log("Form submitted with data:", formData);
    await updateRoom(formData);
    alert("Room updated successfully!");
  };

  return (
    <form
      className="mx-auto flex max-w-md flex-col rounded-md border bg-white p-4 font-[poppins] shadow-md"
      onSubmit={editRoom}
    >
      <h2 className="mb-4 text-center text-2xl font-bold">Room #{room.id}</h2>
      <label htmlFor="roomName" className="text-sm font-medium text-gray-600">
        Room Name:
      </label>
      <input
        type="text"
        id="roomName"
        name="roomName"
        value={roomName}
        onChange={(e) => setRoomName(e.target.value)}
        className={`mb-2 rounded-md border p-2`}
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
        className={`mb-2 rounded-md border p-2`}
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
        className={`mb-2 rounded-md border p-2`}
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
        className={`mb-2 rounded-md border p-2`}
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
        className={`mb-4 rounded-md border p-2`}
      />

      <button
        type="submit"
        className="rounded-md bg-primary px-4 py-2 text-white transition-colors hover:bg-primary-dark hover:bg-opacity-80"
      >
        Edit Information
      </button>
    </form>
  );
};

export default RoomData;

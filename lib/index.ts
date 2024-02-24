export type Room = {
  roomNumber: number;
  roomName: string;
  roomSize: number;
  roomDescription: string;
  roomConditions: string;
  roomPrice: number;
};

export const rooms: Room[] = [
  {
    roomNumber: 1,
    roomName: "Honeymoon Suite",
    roomSize: 2,
    roomDescription: "Honeymoon Suite",
    roomConditions: "Honeymoon Suite",
    roomPrice: 2500.0,
  },
  {
    roomNumber: 2,
    roomName: "Family Room",
    roomSize: 4,
    roomDescription: "Family Room",
    roomConditions: "Family Room",
    roomPrice: 4500.0,
  },
  {
    roomNumber: 3,
    roomName: "Luxury Suite",
    roomSize: 3,
    roomDescription: "Luxury Suite",
    roomConditions: "Luxury Suite",
    roomPrice: 8000.0,
  },
];

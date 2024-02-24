import { rooms, type Room } from "lib";

let room1: Room;
let room2: Room;
let room3: Room;

const searchForRoom1 = rooms.find((room) => room.roomNumber === 1);
if (searchForRoom1) {
  room1 = searchForRoom1;
}

const searchForRoom2 = rooms.find((room) => room.roomNumber === 2);
if (searchForRoom2) {
  room2 = searchForRoom2;
}

const searchForRoom3 = rooms.find((room) => room.roomNumber === 3);
if (searchForRoom3) {
  room3 = searchForRoom3;
}

export const getRoomName = (roomNumber: number): string => {
  switch (roomNumber) {
    case 1: {
      return room1.roomName;
    }
    case 2: {
      return room2.roomName;
    }
    case 3: {
      return room3.roomName;
    }
    default: {
      throw new Error(`Room ${roomNumber} does not exist`);
    }
  }
};

export const getRoomSize = (roomNumber: number): number => {
  switch (roomNumber) {
    case 1: {
      return room1.roomSize;
    }
    case 2: {
      return room2.roomSize;
    }
    case 3: {
      return room3.roomSize;
    }
    default: {
      throw new Error(`Room ${roomNumber} does not exist`);
    }
  }
};

export const getRoomDescription = (roomNumber: number): string => {
  switch (roomNumber) {
    case 1: {
      return room1.roomDescription;
    }
    case 2: {
      return room2.roomDescription;
    }
    case 3: {
      return room3.roomDescription;
    }
    default: {
      throw new Error(`Room ${roomNumber} does not exist`);
    }
  }
};

export const getRoomConditions = (roomNumber: number): string => {
  switch (roomNumber) {
    case 1: {
      return room1.roomConditions;
    }
    case 2: {
      return room2.roomConditions;
    }
    case 3: {
      return room3.roomConditions;
    }
    default: {
      throw new Error(`Room ${roomNumber} does not exist`);
    }
  }
};

export const getRoomPrice = (roomNumber: number): number => {
  switch (roomNumber) {
    case 1: {
      return room1.roomPrice;
    }
    case 2: {
      return room2.roomPrice;
    }
    case 3: {
      return room3.roomPrice;
    }
    default: {
      throw new Error(`Room ${roomNumber} does not exist`);
    }
  }
};

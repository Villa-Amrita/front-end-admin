/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import NavBar from "~/components/NavBar";
import PageTitle from "~/components/PageTitle";
import RoomData from "./components/RoomData";
import { type RoomType as Room } from "../../../../back-end/server/api/trpcRouter";

export default async function HomePage() {
  const viewAllRooms = async (): Promise<Room[]> => {
    const response = await fetch("http://localhost:8080/api/room/viewAll", {
      cache: "no-cache",
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
      },
    });
    if (!response.ok) {
      throw new Error(`Error fetching rooms: ${response.statusText}`);
    }
    const data = await response.json();
    const rooms: Room[] = data.data;
    return rooms;
  };

  const rooms = await viewAllRooms();

  return (
    <>
      <NavBar />

      <main className="px-4 py-6">
        <PageTitle title="Rooms" />
        <br /> <br />
        <section className="flex w-full items-center justify-center space-x-10">
          {rooms.map((room) => (
            <div key={room.id} className="w-1/3">
              <RoomData room={room} />
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

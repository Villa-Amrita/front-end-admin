/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import NavBar from "~/components/NavBar";
import PageTitle from "~/components/PageTitle";
import RequestList from "./components/RequestList";
import { type ReservationType as Reservation } from "../../../../back-end/server/api/trpcRouter";

export default async function HomePage() {
  const viewAllReservations = async (): Promise<Reservation[]> => {
    const response = await fetch(
      "http://localhost:8080/api/reservation/viewAll",
      {
        cache: "no-cache",
        headers: {
          "Cache-Control": "no-cache, no-store, must-revalidate",
        },
      },
    );
    if (!response.ok) {
      throw new Error(`Error fetching Reservations: ${response.statusText}`);
    }
    const data = await response.json();
    const Reservations: Reservation[] = data.data;
    return Reservations;
  };

  const reservations = await viewAllReservations();
  // const requests = reservations.filter(
  //   (reservation) => reservation.status === "PENDING",
  // );

  return (
    <>
      <NavBar />
      <main className="px-4 py-6">
        <PageTitle title="Requests" />
        <br />
        <RequestList reservations={reservations} />
      </main>
    </>
  );
}

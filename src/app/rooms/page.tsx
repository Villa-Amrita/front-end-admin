import NavBar from "~/components/NavBar";
import PageTitle from "~/components/PageTitle";
import RoomData from "./components/RoomData";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main className="px-4 py-6">
        <PageTitle title="Rooms" />
        <br />
        <section className="flex w-full items-center justify-center space-x-10">
          <div className="w-1/3">
            <RoomData roomNumber={1} />
          </div>
          <div className="w-1/3">
            <RoomData roomNumber={2} />
          </div>
          <div className="w-1/3">
            <RoomData roomNumber={3} />
          </div>
        </section>
      </main>
    </>
  );
}

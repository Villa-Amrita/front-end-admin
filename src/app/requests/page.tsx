import NavBar from "~/components/NavBar";
import PageTitle from "~/components/PageTitle";
import RequestList from "./components/RequestList";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main className="px-4 py-6">
        <PageTitle title="Requests" />
        <br />
        <RequestList />
      </main>
    </>
  );
}

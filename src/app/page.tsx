import LoginForm from "./components/LoginForm";

export default function HomePage() {
  return (
    <main>
      <div className="from-primary-light to-primary-dark min=w-screen flex h-full min-h-screen w-full flex-row items-center justify-center bg-gradient-to-tr">
        <LoginForm />
      </div>
    </main>
  );
}

import HomePage from "../pages/home-page";

export default function Protected({ children }: { children: React.ReactNode }) {
  const protectedSI = true;
  return <>{protectedSI ? children : <HomePage />}</>;
}

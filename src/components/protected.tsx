import HomePage from "../pages/home-page";
import { Outlet } from "react-router-dom";

export default function Protected() {
  const protectedSI = true;
  return <>{protectedSI ? <Outlet /> : <HomePage />}</>;
}

import { Routes, Route } from "react-router-dom";
import { NewGame } from "../pages/NewGame";
import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";
import { GamePreview } from "../pages/GamePreview";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<NewGame />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/preview/:id" element={<GamePreview />} />
    </Routes>
  );
}

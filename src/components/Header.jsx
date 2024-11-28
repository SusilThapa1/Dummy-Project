"use client";
import { Search } from "@/components/Search";
import { Profile } from "@/components/Profile";
export default function Header() {
  return (
    <div className="bg-sky-600 py-1 flex justify-between px-2.5 items-center">
      <h1 className="text-2xl font-bold ">S. THAPA</h1>
      <div className="flex justify-center gap-4 items-center">
        {/* <Search /> */}
        <Profile />
      </div>
    </div>
  );
}

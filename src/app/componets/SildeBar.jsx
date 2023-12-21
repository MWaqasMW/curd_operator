"use client";

import React from "react";
import {
  BarChart,
  Wallet,
  Newspaper,
  BellRing,
  Paperclip,
  Brush,
  Wrench,
} from "lucide-react";
import logo from "../../assets/images/Logo.png";
import { useLogout } from "../api/useApi";
export default function SidebarOne() {
  const logoutMutation = useLogout();
  const handlLogout = async () => {
    try {
      await logoutMutation.mutateAsync();
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <aside className="flex h-screen w-64 flex-col overflow-y-auto border-r bg-white px-5 py-8">
      <img src={logo} alt="" width={100} />
      <div className="mt-6 flex flex-1 flex-col justify-between">
        <nav className="-mx-3 space-y-6 ">
          <div className="space-y-3 ">
            <label className="px-3 text-xs font-semibold uppercase text-gray-900">
              Admin
            </label>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <BarChart className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Student</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <Wallet className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Attendence</span>
            </a>
          </div>
          <div>
            <button onClick={handlLogout}>
              {logoutMutation.isLoading ? "Loding....." : "Logout"}
            </button>
          </div>
        </nav>
      </div>
    </aside>
  );
}

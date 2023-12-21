"use client";

import React, { useState } from "react";
import SidebarOne from "../componets/SildeBar";
import TableTwo from "../componets/Tables";
import ModalComponent from "../componets/CreateStudentModal";
const page = () => {
  return (
    <div>
      <div className="flex">
        <SidebarOne />
        <TableTwo />
      </div>
    </div>
  );
};

export default page;

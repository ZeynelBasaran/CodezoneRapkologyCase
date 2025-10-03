"use client";

import { useState } from "react";

const KesfetButonSelect = () => {
  const buttons = [
    "Türk Rap",
    "Yabancı Rap",
    "Rap Haberleri",
    "Haftanın Klipleri",
    "Ayın Klipleri",
    "Rap Sohbetleri",
    "Rap Müsabakaları",
  ];

  const [active, setActive] = useState("Yabancı Rap");

  return (
    <div className="flex gap-4 flex-wrap">
      {buttons.map((btn, index) => (
        <button
          key={btn}
          onClick={() => setActive(btn)}
          className={`px-7 py-1.5 transition text-[16px] letter-spacing-1_5
            ${active === btn ? "bg-[#F0E74D] text-black font-bold" : "border border-white bg-black"}
          `}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

export default KesfetButonSelect;

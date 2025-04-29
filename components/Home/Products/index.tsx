"use client";

import { useState } from "react";
import Polypod from "./Polypod";

export default function Products() {
  const [active, setActive] = useState("Polypod");

  return (
    <div className="container mx-auto min-h-[500px]">
      <div className="w-full flex justify-between items-center gap-4 py-5 border border-input px-5">
        <div className="flex gap-4">
          <TabItem
            title={`Polypod${String.fromCharCode(8482)}`}
            active={active === "Polypod"}
            onClick={() => setActive("Polypod")}
          />
          <TabItem
            title="Features"
            active={active === "Polypod Features"}
            onClick={() => setActive("Polypod Features")}
          />
        </div>

        <div className="flex gap-4">
          <TabItem
            title={`Polypod${String.fromCharCode(8482)} Hive`}
            active={active === "Polypod Hive"}
            onClick={() => setActive("Polypod Hive")}
          />
          <TabItem
            title="Features"
            active={active === "Polypod Hive Features"}
            onClick={() => setActive("Polypod Hive Features")}
          />
        </div>
        <TabItem
          title={`Polypod${String.fromCharCode(8482)} Go`}
          active={active === "Polypod Go"}
          onClick={() => setActive("Polypod Go")}
        />
      </div>

      <div className="my-6">
        <Polypod />
      </div>
    </div>
  );
}

function TabItem(props: {
  title: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <p
      className={`${
        props.active ? "text-white" : "text-gray-500 hover:text-white"
      } cursor-pointer`}
      onClick={props.onClick}
    >
      {props.title}
    </p>
  );
}

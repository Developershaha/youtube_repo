import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    {
      id: 1,
      label: "All",
    },
    {
      id: 2,
      label: "Gaming",
    },
    {
      id: 3,
      label: "Songs",
    },
    {
      id: 4,
      label: "News",
    },
    {
      id: 5,
      label: "News",
    },
    {
      id: 6,
      label: "Songs",
    },
    {
      id: 7,
      label: "all",
    },
    {
      id: 8,
      label: "Songs",
    },
    {
      id: 9,
      label: "News",
    },
    {
      id: 10,
      label: "all",
    },
    // {
    //   id: 11,
    //   label: "Songs",
    // },
    // {
    //   id: 12,
    //   label: "all",
    // },
    // {
    //   id: 13,
    //   label: "News",
    // },
  ];
  return (
    <div className="flex">
      {list?.map((listData) => {
        return <Button name={listData?.label} key={listData?.id} />;
      })}
    </div>
  );
};

export default ButtonList;

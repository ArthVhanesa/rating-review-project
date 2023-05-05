import React, { useEffect, useState } from "react";
import { Dropdown } from "@nextui-org/react";
import axios from "axios";

export default function SelectDropDown({ selected, setSelected }) {
  const [displayName, setDisplayName] = useState("");
  const url = "http://localhost:5000/teacher";
  const [items, setItems] = useState([]);

  useEffect(() => {
    const get_faculties = async () => {
      const res = await axios.get(url);
      const data = res.data;
      setItems(data);
      console.log(data);

      if (data) {
        console.log(data[0]);
        setSelected(data[0]._id);
        setDisplayName(data[0].teacherName);
      } else setDisplayName("No Faculty Found");
    };

    get_faculties();
  }, []);

  const handleSelectionChange = async (teacherId) => {
    const id = teacherId.anchorKey;
    setSelected(id);

    const name = items.filter((el) => el._id === id);
    setDisplayName(name[0].teacherName);
  };

  return (
    <Dropdown>
      <Dropdown.Button flat color="secondary" css={{ tt: "capitalize" }}>
        {displayName}
      </Dropdown.Button>
      <Dropdown.Menu
        aria-label="Single selection actions"
        color="secondary"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selected}
        onSelectionChange={(e) => handleSelectionChange(e)}
      >
        {items &&
          items.map((el) => (
            <Dropdown.Item key={el._id}>{el.teacherName}</Dropdown.Item>
          ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

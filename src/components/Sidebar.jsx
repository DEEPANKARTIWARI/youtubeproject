import { Stack } from "@mui/material";
import React from "react";
import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction={"row"}
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((element) => (
      <button
        className="category-btn"
        onClick={() => {
          setSelectedCategory(element.name);
        }}
        style={{
          background: element.name === selectedCategory && "#fc1503",
          color: "white",
        }}
        key={element.name}
      >
        <span
          style={{
            color: element.name === selectedCategory ? "white" : "red",
            marginRight: "15px",
          }}
        >
          {element.icon}
        </span>
        <span style={{ opacity: element.name === selectedCategory ? 1 : 0.8 }}>
          {element.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;

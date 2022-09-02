// Sidebar component that maps through categories (array of objects with "name" and "icon")
// to dynamically render buttons that change video feed on click

import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";
import "../index.css";

const Sidebar = ({selectedCategory, setSelectedCategory}) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        key={category.name}
        style={{
          background: category.name === selectedCategory && "#FC1503",
          color: "white",
        }}
      >
        <span
          style={{
            color: category.name === selectedCategory ? "white" : "red",
            marginRight: "15px"
          }}
        >
          {category.icon}
        </span>
        <span style={{opacity: category.name === selectedCategory ? '1' : '0.8'}}>{category.name}</span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;

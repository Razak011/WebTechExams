import React, { useEffect, useState } from "react";
import { fetchMenuItems } from "../firestore"; // Import fetchMenuItems from firestore.js

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const getMenuItems = async () => {
      try {
        const items = await fetchMenuItems();
        setMenuItems(items);
      } catch (error) {
        console.error("Error fetching menu items:", error.message);
      }
    };
    getMenuItems();
  }, []);

  return (
    <div>
      <h1>Menu</h1>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;

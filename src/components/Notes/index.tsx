import React from "react";

interface Item {
  name: string;
}

interface ItemListProps {
  data: Item[]; 
}

const ItemList: React.FC<ItemListProps> = ({ data }) => {
  return (
    <div>
      {data && data.map((item, index) => (
        // Using index as key here for simplicity, though using a unique id is better
        <ul key={index}>
          <li>{item.name}</li>
        </ul>
      ))}
    </div>
  );
};

export default ItemList;

import React from "react";
import SpaceItem from "../SpaceItem/SpaceItem";

function SpaceList({ nasa }) {
  return (
    <div>
      <ul>
        {nasa.collection.items.map((nasaList) => (
          <SpaceItem
            key={nasaList.id}
            id={nasaList.id}
            title={nasaList.data[0].description_508}
            description={nasaList.data[0].description}
            date={nasaList.data[0].date_created}
            img={nasaList.links[0].href}
          />
        ))}
      </ul>
    </div>
  );
}

export default SpaceList;

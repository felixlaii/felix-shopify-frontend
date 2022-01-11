import React from 'react'
import SpaceItem from '../SpaceItem/SpaceItem'

function SpaceList({nasa}) {
    return (
        <div>
            <ul>
            {nasa.photos.map((nasaList) => (
            <SpaceItem
              key={nasaList.id}
              id={nasaList.id}
              camera={nasaList.city}
              img={nasaList.img_src}
              earthData={nasaList.earth_date}
              roverName={nasaList.rover.name}
            />
          ))}
            </ul>
        </div>
    )
}

export default SpaceList

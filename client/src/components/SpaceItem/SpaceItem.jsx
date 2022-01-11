import React from "react";
import "./spaceItem.scss";
import LikeButton from "../LikeButton/LikeButton";

function SpaceItem({
  title,
  id,
  img,
  description,
  date
}) {
  return (
    <div className="space-item">
      <li>
        <img className="space-item__image" src={img} alt="rover" />
        <LikeButton />
        <p className="space-item__description">{title}</p>
        <p className="space-item__description">{description}</p>
        <p className="space-item__description">{date}</p>
      </li>
    </div>
  );
}

export default SpaceItem;

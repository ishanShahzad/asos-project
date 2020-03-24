import React from "react";

const PreNav = props => {
  return (
    <div className="prenav">
      <ul>
        <li>Marketplace</li>
        <li>Help & FAQs</li>
        <li>
          <div className="flag">
            {props.name.country}, {props.name.city}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default PreNav;

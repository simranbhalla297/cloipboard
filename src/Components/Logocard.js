import React from "react";

function Logocard(props) {
  return (
    <div>
      <div>
        <img src={props.data.imgurl} />
      </div>
    </div>
  );
}

export default Logocard;

import React from "react";




const Callback = () => {


  console.log("rendered!");
  return (
    <div>Callback</div>
  )
}

export default React.memo(Callback)
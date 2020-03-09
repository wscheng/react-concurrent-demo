import * as React from "react";

function resolveAfter2Seconds(x: number) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

// async function getBigNum() {
//   const i = await resolveAfter2Seconds(20);
//   return <>i</>;
// }
export const BigComponent = () => {
  //   const i = resolveAfter2Seconds(20);
  console.log("I'm rendered!");
  const i = 20;
  return (
    // <img src="https://effigis.com/wp-content/uploads/2015/02/Airbus_Pleiades_50cm_8bit_RGB_Yogyakarta.jpg"></img>
    <div>SHOW OUT!{i}</div>
  );
};
// export class BigComponent extends React.Component {

// }

export default BigComponent;

import merch from "../assets/merch1.jpg";

// const Merch = () => {
//   return (
//     <div
//       style={{
//         backgroundImage: `url(${merch})`,

//         backgroundSize: "cover", backgroundPosition: "center"
//       }}
//     ></div>
//   );
// };


const Merch = () => {
  document.body.style.backgroundColor="#231f20";
  return (
    <div
      style={{
        
      //   backgroundImage: `url(${merch})`,
        
      //   backgroundSize: "cover", backgroundPosition: "center",
      //   objectFit: "scale-down",
      //   minHeight: "100vh",
      //   // overflowY: "hidden",
      //   display: "flex",
      //   justifyContent: "center",
      //   alignItems: "center",
      //   backgroundRepeat: "no-repeat",
        // backgroundColor: "#0b161a",
      //   paddingTop: "130px",
      //   paddingBottom: "30px",
     
      }}
    >
      <img src={merch} style={{width: "100%", height: "91vh", position:"relative"}}></img>
      
    </div>
     
     

  );
};

export default Merch;

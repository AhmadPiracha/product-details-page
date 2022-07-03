import classes from "./App.module.css";
import React, { Component } from "react";

import ProductDetailsComponent from "./ProductDetails/ProductDetailsComponent";
import ProductPreview from "./ProductPreview/ProductPreview";
import TopBar from "./TopBar/TopBar";
import ProductData from "./ProductData";
class App extends Component {
  state = {
    productData: ProductData,
    // currentPreviewImage: "https://imgur.com/xSIK4M8.png",
    currentPreviewImagePos: 0,
    // currentSelectedFeature: true,
    currentSelectedFeature: 0,
  };

  onColorOptionClick = (colorOption) => {
    // const updatedPreviewImage =
    //   this.state.productData.colorOptions[colorOption].imageUrl;
    // console.log(updatedPreviewImage);
    this.setState({
      currentPreviewImagePos: colorOption,
    });
  }; // end of onColorOptionClick

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Next State: ", nextState);
    console.log("Next Props: ", nextProps);
    console.log("Current State: ", this.state);
    if (nextState.currentPreviewImagePos !== this.state.currentPreviewImagePos) {
      return true;
    }
    return false;
  }

  onFeatureButtonClick = (feature) => {
    // console.log(feature);
    // let updatedState = false;
    // if (feature === 1) {
    //   updatedState = true;
    // }
    this.setState({
      currentSelectedFeature: feature,
    });
  };
  render() {
    console.log("Rendering Apps");
    return (
      <div className="App">
        <TopBar />
        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
            <ProductPreview
              // currentPreviewImage={this.state.currentPreviewImage}
              currentPreviewImage={
                this.state.productData.colorOptions[
                  this.state.currentPreviewImagePos
                ].imageUrl
              }
              currentSelectedFeature={this.state.currentSelectedFeature}
            />
          </div>
          <ProductDetailsComponent
            data={this.state.productData}
            onColorOptionClick={this.onColorOptionClick}
            currentPreviewImagePos={this.state.currentPreviewImagePos}
            onFeatureButtonClick={this.onFeatureButtonClick}
            currentSelectedFeature={this.state.currentSelectedFeature}
          />
        </div>
      </div>
    );
  }
}

export default App;

///// STATIC UI
///// COMPONENTS NOT USED IN THIS APP

// <div className="App">
//   <header className="App-header">
//     <nav className={classes.navbar}>
//       <img
//         src="https://www.doorwaysva.org/wp-content/uploads/2019/06/amazon-logo.png"
//         alt="amazon logo"
//       />
//     </nav>
//   </header>

//   <div className={classes.MainContainer}>
//     <div className={classes.ProductPreview}>
//       <img src="https://imgur.com/iOeUBV7.png" alt="Product" />
//       <div className={classes.TimeSection}>
//         <p>{`${currentHour}:${currentMinute}`}</p>
//       </div>

//       {/* <div className={classes.HeartBeat}>
//       <i class="fa-solid fa-heart-pulse"></i>
//         <p>78</p>
//       </div> */}
//     </div>

//     <div className="classes.ProductData">
//       <h1 className={classes.ProductTitle}>{ProductData.title}</h1>
//       <p className={classes.ProductDescription}>
//         {ProductData.description}
//       </p>
//       <h3 className={classes.SectionHeading}>Select Color</h3>
//       <div>
//         <img
//           className={[
//             classes.ProductImage,
//             classes.SelectedProductImage,
//           ].join(" ")}
//           src="https://imgur.com/iOeUBV7.png"
//           alt="Red"
//         />
//         <img
//           className={classes.ProductImage}
//           src="https://imgur.com/PTgQlim.png"
//           alt="Red"
//         />
//         <img
//           className={classes.ProductImage}
//           src="https://imgur.com/Mplj1YR.png"
//           alt="Red"
//         />
//         <img
//           className={classes.ProductImage}
//           src="https://imgur.com/xSIK4M8.png"
//           alt="Red"
//         />
//       </div>
//       <h3 className={classes.SectionHeading}>Features</h3>
//       <div>
//         <button
//           className={[
//             classes.FeatureItem,
//             classes.SelectedFeaturedItem,
//           ].join(" ")}
//         >
//           Time
//         </button>
//         <button className={classes.FeatureItem}>Heart Rate</button>
//       </div>
//       <button className={classes.PrimaryButton}>Buy Now</button>
//     </div>
//   </div>
// </div>

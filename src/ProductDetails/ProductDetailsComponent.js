import React from "react";
import classes from "./ProductDetail.module.css";

const ProductDetailsComponent = (product) => {
  const colorOperator = product.data.colorOptions.map((item, index) => {
    const classArr = [classes.ProductImage];
    if (index === product.currentPreviewImagePos) {
      classArr.push(classes.SelectedProductImage);
    }
    return (
      <img
        key={index}
        className={classArr.join(" ")}
        src={item.imageUrl}
        alt={item.styleName}
        onClick={() => product.onColorOptionClick(index)}
      />
    );
    // console.log(product.data);
  });

  const FeatureList = product.data.featureList.map((item, index) => {
    const classArr = [classes.FeatureItem];

    // if (index === 1 && product.showHeartBeat) {
    //   classArr.push(classes.SelectedFeaturedItem);
    // }
    // else if (index === 0 && !product.showHeartBeat) {
    //   classArr.push(classes.SelectedFeaturedItem);
    // }

    if (index === product.currentSelectedFeature) {
      classArr.push(classes.SelectedFeaturedItem);
    }

    return (
      <button
        onClick={() => product.onFeatureButtonClick(index)}
        key={index}
        className={classArr.join(" ")}
      >
        {item}
      </button>
    );
  });

  return (
    <div className="classes.ProductData">
      <h1 className={classes.ProductTitle}>{product.data.title}</h1>
      <p className={classes.ProductDescription}>{product.data.description}</p>
      <h3 className={classes.SectionHeading}>Select Color</h3>
      <div>{colorOperator}</div>
      <h3 className={classes.SectionHeading}>Features</h3>
      <div>
        <div>{FeatureList}</div>
      </div>
      <button className={classes.PrimaryButton}>Buy Now</button>
    </div>
  );
};

export default ProductDetailsComponent;

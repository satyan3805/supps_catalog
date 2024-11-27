import {
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CCardFooter,
  CCarousel,
  CCarouselItem,
  CImage,
} from "@coreui/react";

const ProductDisplay = (props) => {
  let imgFolderName = "../images/supp_images/" + props.prodInfo.Image_group_id;
  let imgCountTempArr = [1, 2, 3];
  console.log("img_folder-name: " + imgFolderName);
  return (
    <div className="product">
      <CCard
        style={{
          width: "18rem",
          padding: 10,
        }}
      >
        <CCarousel controls indicators className="product-img">
          {imgCountTempArr.map((count) => (
            <CCarouselItem>
              <CImage
                className="d-block product-img"
                src={
                  "https://supplements.ipfgym.com/supp_images/" +
                  props.prodInfo.Image_group_id +
                  "/" +
                  count +
                  ".webp"
                }
              />
            </CCarouselItem>
          ))}
        </CCarousel>
        <CCardBody>
          {console.log(props)}
          <CCardTitle>
            <div className="product-title">{props.prodInfo.Product_Name}</div>
          </CCardTitle>
          <CCardText className="w-100 d-flex justify-content-between">
            <span>{props.prodInfo.Product_Brand}</span> |{" "}
            <span>{props.prodInfo.Product_Weight}</span>
          </CCardText>
          <CCardText className="w-100 d-flex justify-content-between">
            <span>{props.prodInfo.Flavour}</span>
          </CCardText>
          <CCardFooter className="card-footer">
            <CCardText className="w-100 d-flex justify-content-between">
              <span>
                MRP :<br></br> ₹ {props.prodInfo.MRP}
              </span>{" "}
              |{" "}
              {props.prodInfo.Stock_Status == "SOLD" ? (
                <span style={{ color: "red", fontWeight: "bold" }}>SOLD.</span>
              ) : (
                <span>
                  <b>
                    Sale Price: <br></br>₹ {props.prodInfo.Sale_Price}{" "}
                  </b>
                </span>
              )}
            </CCardText>
          </CCardFooter>
        </CCardBody>
      </CCard>
    </div>
  );
};
export default ProductDisplay;

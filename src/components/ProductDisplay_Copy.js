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

  console.log("img_folder-name: " + imgFolderName);
  return (
    <div className="product">
      <CCard
        style={{
          width: "18rem",
          padding: 10,
        }}
      >
        <CCarousel controls indicators>
          <CCarouselItem>
            <CImage
              className="d-block w-100"
              src={require("../images/supp_images/" + "gat_nitra" + "/1.webp")}
            />
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              className="d-block w-100"
              src={require("../images/supp_images/" + "gat_nitra" + "/2.webp")}
            />
          </CCarouselItem>

          <CCarouselItem>
            <CImage
              className="d-block w-100"
              src={require("../images/supp_images/" + "gat_nitra" + "/3.webp")}
            />
          </CCarouselItem>
        </CCarousel>
        <CCardBody>
          {console.log(props)}
          <CCardTitle>{props.prodInfo.Product_Name}</CCardTitle>
          <CCardText className="w-100 d-flex justify-content-between">
            <span>{props.prodInfo.Product_Brand}</span> |{" "}
            <span>{props.prodInfo.Product_Weight}</span>
          </CCardText>
          <CCardText className="w-100 d-flex justify-content-between">
            <span>{props.prodInfo.Flavour}</span>
          </CCardText>
          <CCardFooter className="card-footer">
            <CCardText className="w-100 d-flex justify-content-between">
              <span>Rs. {props.prodInfo.MRP}</span> |{" "}
              {props.prodInfo.Stock_Status == "SOLD" ? (
                <span style={{ color: "red", fontWeight: "bold" }}>
                  OUT OF STOCK.
                </span>
              ) : (
                <span>
                  <b>Sale Price: ₹ {props.prodInfo.Sale_Price} </b>
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

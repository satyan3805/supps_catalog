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
  let imgFolderName = "../images/supp_images/"+props.prodInfo.Image_group_id;

  console.log("img_folder-name: "+imgFolderName);
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
            src={"https://supplements.ipfgym.com/supp_images/"+props.prodInfo.Image_group_id+"/1.webp"}
          />
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            className="d-block w-100"
            src={"https://supplements.ipfgym.com/supp_images/"+props.prodInfo.Image_group_id+"/2.webp"}
          />
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            className="d-block w-100"
            src={"https://supplements.ipfgym.com/supp_images/"+props.prodInfo.Image_group_id+"/3.webp"}
          />
        </CCarouselItem>
          
          
        </CCarousel>
        <CCardBody>
          {console.log(props) }
          <CCardTitle>{props.prodInfo.Product_Name}</CCardTitle>
          <CCardText className="w-100 d-flex justify-content-between">
            <span>{props.prodInfo.Product_Brand}</span> | <span>{props.prodInfo.Product_Weight}</span> |<span>{props.prodInfo.Flavour}</span>
          </CCardText>
          <CCardFooter className="card-footer">Rs. {props.prodInfo.MRP}</CCardFooter>
        </CCardBody>
      </CCard>
    </div>
  );
}
export default ProductDisplay;

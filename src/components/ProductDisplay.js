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

const ProductDisplay = () => {
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
              src={
                "https://coreui.io/react/docs/static/react-83088efde08a5dedde9f67a954cb4b5b.jpg"
              }
              alt="slide 1"
            />
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              className="d-block w-100"
              src={
                "https://coreui.io/react/docs/static/vue-8a74d93fde1a02c247304291cce46797.jpg"
              }
              alt="slide 2"
            />
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              className="d-block w-100"
              src={
                "https://coreui.io/react/docs/static/angular-2f3764e2ec8b0b47ebe68f2f80260ef1.jpg"
              }
              alt="slide 3"
            />
          </CCarouselItem>
        </CCarousel>
        <CCardBody>
          <CCardTitle>Run Whey PRO</CCardTitle>
          <CCardText className="w-100 d-flex justify-content-between">
            <span>RUN</span> | <span>2KG</span> |<span>Chocolate</span>
          </CCardText>
          <CCardFooter className="card-footer">Rs. 5,500.00</CCardFooter>
        </CCardBody>
      </CCard>
    </div>
  );
};

export default ProductDisplay;

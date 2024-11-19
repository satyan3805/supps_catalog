import { CFooter, CLink } from "@coreui/react";

const Footer = () => {
  return (
    <CFooter>
      <div>
        <CLink href="https://coreui.io">CoreUI</CLink>
        <span>&copy; 2024 creativeLabs.</span>
      </div>
      <div>
        <span>Powered by</span>
        <CLink href="https://coreui.io">CoreUI</CLink>
      </div>
    </CFooter>
  );
};

export default Footer;

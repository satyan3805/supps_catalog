import ProductDisplay from "./ProductDisplay";
import FetchCSVData from "./FetchCSVData";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  CButton,
  CCard,
  CCollapse,
  CCardBody,
  CAccordion,
  CAccordionItem,
  CAccordionHeader,
  CAccordionBody,
} from "@coreui/react";

const Body = () => {
  const [csvData, setCsvData] = useState([]);
  const [protineCatData, setProtineCatData] = useState([]);
  const [performanceCatData, setPerformanceCatData] = useState([]);
  const [weightManagementCatData, setWeightManagementCatData] = useState([]);
  const [healthAndVitaminsCatData, setHealthAndVitaminsCatData] = useState([]);
  const [gainerCatData, setGainerCatData] = useState([]);

  const [protieneCatVisible, setProtieneCatVisible] = useState(false);

  useEffect(() => {
    fetchCSVData(); // Fetch the CSV data when the component mounts
  }, []); // The empty array ensures that this effect runs only once, like componentDidMount

  const fetchCSVData = () => {
    const csvUrl =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vSZbZA07-syX_okUXcwoPD3_kfzitnZvRgh68lyfTwAdOEVnxrhg2FgFHErOrDJnFr8INyJ-sD5Wsqd/pub?output=csv"; // Replace with your Google Sheets CSV file URL

    axios
      .get(csvUrl) // Use Axios to fetch the CSV data
      .then((response) => {
        const parsedCsvData = parseCSV(response.data); // Parse the CSV data into an array of objects
        parsedCsvData.map((item) => {
          const imgArr = [
            "../images/supp_images/" + item.Image_group_id + "/1.webp",
            "../images/supp_images/" + item.Image_group_id + "/2.webp",
            "../images/supp_images/" + item.Image_group_id + "/3.webp",
          ];
          item["imgList"] = imgArr;

          return item;
        });

        setCsvData(parsedCsvData); // Set the fetched data in the component's state
        console.log(parsedCsvData); // Now you can work with 'csvData' in your component's state.

        let ProtineCatArr = [];
        let PerformanceCatArr = [];
        let WeightManagementCatArr = [];
        let HealthAndVitaminsCatArr = [];
        let GainerCatArr = [];

        for (var key in parsedCsvData) {
          if (parsedCsvData.hasOwnProperty(key)) {
            if (parsedCsvData[key].Product_Category == "Protine") {
              ProtineCatArr.push(parsedCsvData[key]);
            }
            if (parsedCsvData[key].Product_Category == "Performance") {
              PerformanceCatArr.push(parsedCsvData[key]);
            }
            if (parsedCsvData[key].Product_Category == "Weight-Management") {
              WeightManagementCatArr.push(parsedCsvData[key]);
            }
            if (parsedCsvData[key].Product_Category == "Health & Vitamins") {
              HealthAndVitaminsCatArr.push(parsedCsvData[key]);
            }
            if (parsedCsvData[key].Product_Category == "Gainer") {
              GainerCatArr.push(parsedCsvData[key]);
            }
          }
        }
        setProtineCatData(ProtineCatArr);
        setPerformanceCatData(PerformanceCatArr);
        setWeightManagementCatData(WeightManagementCatArr);
        setHealthAndVitaminsCatData(HealthAndVitaminsCatArr);
        setGainerCatData(GainerCatArr);
        // console.log(ProtineCatArr);
        // console.log(PerformanceCatArr);
        // console.log(WeightManagementCatArr);
        // console.log(HealthAndVitaminsCatArr);
        // console.log(GainerCatArr);
      })
      .catch((error) => {
        console.error("Error fetching CSV data:", error);
      });
  };

  function parseCSV(csvText) {
    const rows = csvText.split(/\r?\n/); // Use a regular expression to split the CSV text into rows while handling '\r'
    const headers = rows[0].split(","); // Extract headers (assumes the first row is the header row)
    const data = []; // Initialize an array to store the parsed data
    for (let i = 1; i < rows.length; i++) {
      const rowData = rows[i].split(","); // Use the regular expression to split the row while handling '\r'
      const rowObject = {};
      for (let j = 0; j < headers.length; j++) {
        rowObject[headers[j]] = rowData[j];
      }
      data.push(rowObject);
    }
    return data;
  }

  return (
    <div>
      <CAccordion alwaysOpen activeItemKey={1}>
        <CAccordionItem itemKey={1}>
          <CAccordionHeader className="accord-header">
            <strong>Protienes</strong>
          </CAccordionHeader>
          <CAccordionBody className="accord-body">
            <div className="body-div">
              {protineCatData.map((prod) => (
                <ProductDisplay key={prod.Product_ID} prodInfo={prod} />
              ))}
            </div>
          </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem itemKey={2}>
          <CAccordionHeader className="accord-header">
            <strong>Performance</strong>
          </CAccordionHeader>
          <CAccordionBody>
            <div className="body-div">
              {performanceCatData.map((prod) => (
                <ProductDisplay key={prod.Product_ID} prodInfo={prod} />
              ))}
            </div>
          </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem itemKey={3}>
          <CAccordionHeader className="accord-header">
            <strong>Weight Management</strong>{" "}
          </CAccordionHeader>
          <CAccordionBody>
            <div className="body-div">
              {weightManagementCatData.map((prod) => (
                <ProductDisplay key={prod.Product_ID} prodInfo={prod} />
              ))}
            </div>
          </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem itemKey={4}>
          <CAccordionHeader className="accord-header">
            <strong>Health and Vitamins</strong>
          </CAccordionHeader>
          <CAccordionBody>
            <div className="body-div">
              {healthAndVitaminsCatData.map((prod) => (
                <ProductDisplay key={prod.Product_ID} prodInfo={prod} />
              ))}
            </div>
          </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem itemKey={5}>
          <CAccordionHeader className="accord-header">
            <strong>Gainers</strong>
          </CAccordionHeader>
          <CAccordionBody>
            <div className="body-div">
              {gainerCatData.map((prod) => (
                <ProductDisplay key={prod.Product_ID} prodInfo={prod} />
              ))}
            </div>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
    </div>
  );
};

export default Body;

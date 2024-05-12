import React, { useState } from "react";
import { MyButton, MyCard, MyInput } from "../../components/index";
import { AiFillDashboard } from "react-icons/ai";
import { Alert, Container } from "react-bootstrap";
import { Table } from "react-bootstrap";
import Popup from "reactjs-popup";
import "./styles/assetsPool.css";

type AssetPoolProps = {};

type Variant =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark";

const AssetsPool = (props: AssetPoolProps) => {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  // burada yup ve formik kullanılabilir
  const [materialName, setMaterialName] = useState<string>("");
  const [className, setClassName] = useState<string>("");
  const [subClassName, setSubClassName] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [variant, setVariant] = useState<Variant | null>(null);

  const dummyData = [
    {
      id: 1,
      materialName: "Aluminium",
      dataSource: "Metal Suppliers",
      companyName: "Metal Corp",
      expiryDate: "20/04/2023",
      className: "Metals",
      subClassName: "Aluminium",
    },
    {
      id: 2,
      materialName: "Steel",
      dataSource: "Metal Suppliers",
      companyName: "Steel Inc",
      expiryDate: "15/05/2023",
      className: "Metals",
      subClassName: "Steel",
    },
    {
      id: 3,
      materialName: "Iron",
      dataSource: "Metal Suppliers",
      companyName: "Iron Ltd",
      expiryDate: "20/04/2023",
      className: "Metals",
      subClassName: "Iron",
    },
    {
      id: 4,
      materialName: "Copper",
      dataSource: "Metal Suppliers",
      companyName: "Copper Ltd",
      expiryDate: "30/06/2023",
      className: "Metals",
      subClassName: "Copper",
    },

    {
      id: 5,
      materialName: "Plastic",
      dataSource: "Plastic Suppliers",
      companyName: "Plastic Corp",
      expiryDate: "20/04/2023",
      className: "Plastics",
      subClassName: "Plastic",
    },
    {
      id: 6,
      materialName: "Rubber",
      dataSource: "Plastic Suppliers",
      companyName: "Rubber Inc",
      expiryDate: "15/05/2023",
      className: "Plastics",
      subClassName: "Rubber",
    },
    {
      id: 7,
      materialName: "PVC",
      dataSource: "Plastic Suppliers",
      companyName: "PVC Ltd",
      expiryDate: "20/04/2023",
      className: "Plastics",
      subClassName: "PVC",
    },
    {
      id: 8,
      materialName: "Polyethylene",
      dataSource: "Plastic Suppliers",
      companyName: "Polyethylene Ltd",
      expiryDate: "30/06/2023",
      className: "Plastics",
      subClassName: "Polyethylene",
    },

    {
      id: 9,
      materialName: "Cotton",
      dataSource: "Fabric Suppliers",
      companyName: "Cotton Corp",
      expiryDate: "20/04/2023",
      className: "Fabrics",
      subClassName: "Cotton",
    },
    {
      id: 10,
      materialName: "Silk",
      dataSource: "Fabric Suppliers",
      companyName: "Silk Inc",
      expiryDate: "15/05/2023",
      className: "Fabrics",
      subClassName: "Silk",
    },
    {
      id: 11,
      materialName: "Polyester",
      dataSource: "Fabric Suppliers",
      companyName: "Polyester Ltd",
      expiryDate: "20/04/2023",
      className: "Fabrics",
      subClassName: "Polyester",
    },
    {
      id: 12,
      materialName: "Nylon",
      dataSource: "Fabric Suppliers",
      companyName: "Nylon Ltd",
      expiryDate: "30/06/2023",
      className: "Fabrics",
      subClassName: "Nylon",
    },

    {
      id: 13,
      materialName: "Wood",
      dataSource: "Wood Suppliers",
      companyName: "Wood Corp",
      expiryDate: "20/04/2023",
      className: "Woods",
      subClassName: "Wood",
    },
    {
      id: 14,
      materialName: "Bamboo",
      dataSource: "Wood Suppliers",
      companyName: "Bamboo Inc",
      expiryDate: "15/05/2023",
      className: "Woods",
      subClassName: "Bamboo",
    },
    {
      id: 15,
      materialName: "Pine",
      dataSource: "Wood Suppliers",
      companyName: "Pine Ltd",
      expiryDate: "20/04/2023",
      className: "Woods",
      subClassName: "Pine",
    },
    {
      id: 16,
      materialName: "Oak",
      dataSource: "Wood Suppliers",
      companyName: "Oak Ltd",
      expiryDate: "30/06/2023",
      className: "Woods",
      subClassName: "Oak",
    },

    {
      id: 17,
      materialName: "Glass",
      dataSource: "Glass Suppliers",
      companyName: "Glass Corp",
      expiryDate: "20/04/2023",
      className: "Glasses",
      subClassName: "Glass",
    },
  ];

  const handleForm = () => {
    if (!materialName || !className || !subClassName || !value) {
      return setVariant("danger"), setShowAlert(true);
    }

    console.log("Material Name: ", materialName);
    console.log("Class Name: ", className);
    console.log("Subclass Name: ", subClassName);
    console.log("Value: ", value);

    setVariant("success");
    console.log("variant", variant);
    setShowAlert(true);
    if (showAlert) {
      setShowAlert(false);
    }
    setShowPopup(false);
  };
  return (
    <Container fluid>
      {showAlert && (
        <Alert
          variant={variant ? variant : "success"}
          dismissible
          onClose={() => {
            setShowAlert(false);
          }}>
          {variant === "danger" ? (
            <Alert.Heading>
              Please fill all the fields to add new material!
            </Alert.Heading>
          ) : (
            <Alert.Heading>New material added successfully!</Alert.Heading>
          )}
        </Alert>
      )}

      <div className="mt-2">
        <MyCard
          title="Number of raw materials"
          icon={
            <AiFillDashboard style={{ fontSize: "2rem", marginLeft: "10px" }} />
          }
          text="The number of raw materials calculated is"
          value=" 22"
          percentage="3.8%"
          more={true}
          data={[
            ["Category", "Value"],
            ["Future Material", 5],
            ["Formerly used material", 15],
            ["Using Material", 6],
          ]}
        />
      </div>
      <div>
        <MyButton
          title="Add new raw material"
          onPress={() => setShowPopup(true)}
          marginTop={10}
          marginBottom={10}
        />
        <Popup
          modal
          open={showPopup}
          onClose={() => setShowPopup(false)}
          arrow={false}
          repositionOnResize={true}
          lockScroll={true}
          closeOnDocumentClick={false}>
          <div className="popup-area">
            <h4>Add new material</h4>
            <div className="input-area">
              <MyInput
                placeholder="Enter material name"
                value={materialName}
                onChange={(e) => setMaterialName(e.target.value)}
              />
              <MyInput
                placeholder="Enterclass name"
                value={className}
                onChange={(e) => setClassName(e.target.value)}
              />
              <MyInput
                placeholder="Enter subclass name"
                value={subClassName}
                onChange={(e) => setSubClassName(e.target.value)}
              />
              <MyInput
                placeholder="Enter Value"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
            <div className="button-area d-flex ">
              <MyButton
                title="Add"
                onPress={() => handleForm()}
                marginRight={4}
              />
              <MyButton
                variant="danger"
                title="Cancel"
                onPress={() => setShowPopup(false)}
                marginLeft={4}
              />
            </div>
          </div>
        </Popup>
      </div>
      <div className="table-area">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Material Name</th>
              <th>Data Source</th>
              <th>Company Name</th>
              <th>Expiry Date</th>
              <th>Class</th>
              <th>Subclass</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((data) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.materialName}</td>
                <td>{data.dataSource}</td>
                <td>{data.companyName}</td>
                <td>{data.expiryDate}</td>
                <td>{data.className}</td>
                <td>{data.subClassName}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default AssetsPool;

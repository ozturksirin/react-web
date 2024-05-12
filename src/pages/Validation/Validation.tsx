import React, { useState } from "react";
import { Alert, Table } from "react-bootstrap";
import { MyButton } from "../../components/index";
import "./styles/validation.css";
import Popup from "reactjs-popup";

type Props = {};

const Validation = (props: Props) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState(false);
  const [selectedID, setSelectedID] = useState<number | null>(null);

  const dummyData = [
    {
      id: 1,
      productName: "Product 1",
      companyName: "Company 1",
      analyzType: "A",
      validateDate: "20/04/2022",
      validateDetail: "Detail 1",
    },
    {
      id: 2,
      productName: "Product 2",
      companyName: "Company 2",
      analyzType: "B",
      validateDate: "21/04/2022",
      validateDetail: "Detail 2",
    },
    {
      id: 3,
      productName: "Product 3",
      companyName: "Company 3",
      analyzType: "A",
      validateDate: "22/04/2022",
      validateDetail: "Detail 3",
    },
    {
      id: 4,
      productName: "Product 4",
      companyName: "Company 4",
      analyzType: "B",
      validateDate: "23/04/2022",
      validateDetail: "Detail 4",
    },
    {
      id: 5,
      productName: "Product 5",
      companyName: "Company 5",
      analyzType: "A",
      validateDate: "24/04/2022",
      validateDetail: "Detail 5",
    },
    {
      id: 6,
      productName: "Product 6",
      companyName: "Company 6",
      analyzType: "B",
      validateDate: "25/04/2022",
      validateDetail: "Detail 6",
    },
    {
      id: 7,
      productName: "Product 7",
      companyName: "Company 7",
      analyzType: "A",
      validateDate: "26/04/2022",
      validateDetail: "Detail 7",
    },
    {
      id: 8,
      productName: "Product 8",
      companyName: "Company 8",
      analyzType: "B",
      validateDate: "27/04/2022",
      validateDetail: "Detail 8",
    },
    {
      id: 9,
      productName: "Product 9",
      companyName: "Company 9",
      analyzType: "A",
      validateDate: "28/04/2022",
      validateDetail: "Detail 9",
    },
    {
      id: 10,
      productName: "Product 10",
      companyName: "Company 10",
      analyzType: "B",
      validateDate: "29/04/2022",
      validateDetail: "Detail 10",
    },
  ];

  const handleConfirm = (id: number) => {
    setSelectedID(id);
    setShowAlert(true);
  };
  return (
    <div>
      {showAlert && (
        <Alert
          variant="success"
          dismissible
          onClose={() => {
            setShowAlert(false);
          }}>
          {`${
            dummyData.find((data) => data.id === selectedID)?.productName
          } is confirmed successfully !`}
        </Alert>
      )}
      {
        <Table striped bordered hover size="sm" className="w-100">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Company Name</th>
              <th>Analyz Type (A-B)</th>
              <th>Validate Date</th>
              <th>Validate Detail</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((data) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.productName}</td>
                <td>{data.companyName}</td>
                <td>{data.analyzType}</td>
                <td>{data.validateDate}</td>
                <td>
                  <a className="text-link" href={`/validateDetail/${data.id}`}>
                    {data.validateDetail}
                  </a>
                </td>
                <td style={{ width: "fit-content" }}>
                  <div className="d-flex justify-content-between p-1">
                    <MyButton
                      variant="success"
                      title="Confirm"
                      onPress={() => handleConfirm(data.id)}
                      height={34}
                      buttonContainerStyle={{ width: "40%" }}
                    />
                    <MyButton
                      variant="danger"
                      title="Refuse"
                      onPress={() => setIsModalOpen(true)}
                      height={34}
                      buttonContainerStyle={{ width: "40%" }}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      }

      <Popup
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        modal
        arrow={false}
        repositionOnResize={true}
        lockScroll={true}
        closeOnDocumentClick={false}>
        <div className="modal-body d-flex flex-column justify-content-center align-items-center">
          <textarea placeholder="Refuse Reason" className="modal-textarea" />
          <MyButton
            title="Refuse"
            onPress={() => {
              if (
                window.confirm("Are you sure you want to refuse this product ?")
              ) {
                setIsModalOpen(false);
              }
            }}
            height={34}
          />
          <MyButton
            variant="danger"
            title="Cancel"
            onPress={() => setIsModalOpen(false)}
            height={34}
            buttonContainerStyle={{ marginTop: 10 }}
          />
        </div>
      </Popup>
    </div>
  );
};

export default Validation;

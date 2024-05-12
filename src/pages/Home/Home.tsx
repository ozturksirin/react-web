import React from "react";
import { HomeProps } from "./types";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./styles/home.css";
import {
  IoIosNotifications,
  IoIosBusiness,
  IoMdPerson,
  IoMdCalculator,
} from "react-icons/io";
import { AiFillDashboard } from "react-icons/ai";
import { MyButton, MyCard } from "../../components/index";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = (props: HomeProps) => {
  const navigate = useNavigate();
  const dummyAssetsData = [
    {
      id: 1,
      name: "Apple MacBook Pro",
      createdDate: new Date(2022, 3, 20).toLocaleString("en-GB", {
        weekday: "long",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }),
      addedUser: "Emma Jones",
    },
    {
      id: 2,
      name: "Samsung Galaxy S21",
      createdDate: new Date(2022, 2, 15).toLocaleDateString("en-GB", {
        weekday: "long",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }),
      addedUser: "Oliver Davis",
    },
    {
      id: 3,
      name: "Canon EOS 5D Mark IV",
      createdDate: new Date(2022, 3, 20).toLocaleDateString("en-GB", {
        weekday: "long",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }),
      addedUser: "Sophia Taylor",
    },
    {
      id: 4,
      name: "Sony PlayStation 5",
      createdDate: new Date(2022, 4, 10).toLocaleDateString("en-GB", {
        weekday: "long",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }),
      addedUser: "Liam Miller",
    },
    {
      id: 5,
      name: "Bose QuietComfort 35 II",
      createdDate: new Date(2022, 5, 5).toLocaleDateString("en-GB", {
        weekday: "long",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }),
      addedUser: "Ava Wilson",
    },
    {
      id: 6,
      name: "Dell XPS 15",
      createdDate: new Date(2022, 6, 1).toLocaleDateString("en-GB", {
        weekday: "long",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }),
      addedUser: "John Doe",
    },
    {
      id: 7,
      name: "Google Pixel 6",
      createdDate: new Date(2022, 7, 15).toLocaleDateString("en-GB", {
        weekday: "long",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }),
      addedUser: "Jane Smith",
    },
    {
      id: 8,
      name: "Nikon D850",
      createdDate: new Date(2022, 8, 20).toLocaleDateString("en-GB", {
        weekday: "long",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }),
      addedUser: "Alice Johnson",
    },
    {
      id: 9,
      name: "Microsoft Xbox Series X",
      createdDate: new Date(2022, 9, 10).toLocaleDateString("en-GB", {
        weekday: "long",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }),
      addedUser: "Bob Williams",
    },
    {
      id: 10,
      name: "Sony WH-1000XM4",
      createdDate: new Date(2022, 10, 5).toLocaleDateString("en-GB", {
        weekday: "long",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }),
      addedUser: "Charlie Brown",
    },
  ];
  return (
    <>
      <Container fluid>
        <div className="header d-flex justify-content-between mt-2 mb-2">
          <div className="d-flex">
            <h1 className="dh-title">Card Analytics</h1>
            <div className="d-flex">
              <MyButton
                title="Validation Data"
                onPress={() => {
                  navigate("/Validation");
                }}
                height={40}
                buttonContainerStyle={{ marginLeft: "10px" }}
              />
              <MyButton
                title="Assets Pool"
                onPress={() => {
                  navigate("/AssetsPool");
                }}
                height={40}
                buttonContainerStyle={{ marginLeft: "10px" }}
              />
            </div>
          </div>

          <div className="notification">
            <div className="d-flex">
              <IoIosNotifications style={{ fontSize: "2rem" }} />
              <div className="d-flex align-items-center justify-content-center">
                <span className="text-center">10</span>
              </div>
            </div>
          </div>
        </div>
        <div className="card-header">
          <Row>
            <Col md={3}>
              <MyCard
                title="Number of products"
                icon={
                  <IoIosBusiness
                    style={{ fontSize: "2rem", marginLeft: "10px" }}
                  />
                }
                text="The number of products calculated is"
                value=" 20"
                percentage="64.3%"
                data={[
                  ["Category", "Value"],
                  ["Future", 8],
                  ["Old", 2],
                  ["Using", 12],
                ]}
              />
            </Col>
            <Col md={3}>
              <MyCard
                title="Number of members"
                icon={
                  <IoMdPerson
                    style={{ fontSize: "2rem", marginLeft: "10px" }}
                  />
                }
                text="The number of people using the application is"
                value=" 72"
                percentage="3.8%"
                data={[
                  ["Category", "Value"],
                  ["Future", 30],
                  ["Old", 18],
                  ["Using", 24],
                ]}
              />
            </Col>
            <Col md={3}>
              <MyCard
                title="Number of products calculated"
                icon={
                  <IoMdCalculator
                    style={{ fontSize: "2rem", marginLeft: "10px" }}
                  />
                }
                text="The number of products calculated is"
                value=" 65"
                percentage="2.3%"
                data={[
                  ["Category", "Value"],
                  ["Future", 11],
                  ["Old", 24],
                  ["Using", 30],
                ]}
              />
            </Col>
            <Col md={3}>
              <MyCard
                title="Number of raw materials"
                icon={
                  <AiFillDashboard
                    style={{ fontSize: "2rem", marginLeft: "10px" }}
                  />
                }
                text="The number of raw materials calculated is"
                value=" 22"
                percentage="3.8%"
                more={true}
                data={[
                  ["Category", "Value"],
                  ["Future", 5],
                  ["Old", 15],
                  ["Using", 6],
                ]}
              />
            </Col>
          </Row>
          <div className="table-area mt-10">
            {
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Assets Name</th>
                    <th>Created Date</th>
                    <th>Added User</th>
                  </tr>
                </thead>
                <tbody>
                  {dummyAssetsData.map((data) => (
                    <tr key={data.id}>
                      <td>{data.id}</td>
                      <td>{data.name}</td>
                      <td>{data.createdDate}</td>
                      <td>{data.addedUser}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            }
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;

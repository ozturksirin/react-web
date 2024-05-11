import React from "react";
import { Card } from "react-bootstrap";
import { PieChart } from "react-minimal-pie-chart";
import "./styles/myCard.css";
import { Chart } from "react-google-charts";

type MyCardProps = {
  title?: string;
  icon?: any;
  text?: string;
  value?: string;
  percentage?: string;
  data?: any;
  more?: boolean;
};

const MyCard = (props: MyCardProps) => {
  const { title, icon, text, value, percentage, data, more } = props;
  return (
    <React.Fragment>
      <Card style={{ width: "20 rem" }}>
        <Card.Body className="card-body">
          <div className="d-flex justify-content-between">
            <Card.Title>{title}</Card.Title>
            {icon ? icon : null}
          </div>
          <Card.Text>
            {text}
            <span className="data-value">{value}</span>
          </Card.Text>
          {more ? (
            <Card.Text className="last-month">{`${percentage} less than last month`}</Card.Text>
          ) : (
            <Card.Text className="last-month">{`${percentage} more than last month`}</Card.Text>
          )}
        </Card.Body>
        <Chart
          style={{ marginTop: "10px" }}
          width={"100%"}
          height={"220px"}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={data}
          options={{
            is3D: true,
          }}
          rootProps={{ "data-testid": "2" }}
        />
      </Card>
    </React.Fragment>
  );
};

export default MyCard;

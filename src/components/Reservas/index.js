import React, { Component } from "react";
import { Content, Row, Col, Box, Button } from "adminlte-2-react";

export default class Reservas extends Component {
  state = {};

  render() {
    return (
      <Content
        title="Reservas"
        subTitle="Projeto Saboroso reservas"
        browserTitle="Reservas"
      >
        <Row>
          <Col xs={6}>
            <Box
              title="My first box"
              type="primary"
              closable
              collapsable
              footer={<Button type="danger" text="Danger Button" />}
            >
              Reservas
            </Box>
          </Col>
          <Col xs={6}>
            <Box title="Another box">Content goes here</Box>
          </Col>
        </Row>
      </Content>
    );
  }
}

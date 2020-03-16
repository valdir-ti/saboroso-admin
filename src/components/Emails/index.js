import React, { Component } from "react";
import { Content, Row, Col, Box, Button } from "adminlte-2-react";

export default class Emails extends Component {
  state = {};

  render() {
    return (
      <Content
        title="E-mails"
        subTitle="Projeto Saboroso e-mails"
        browserTitle="E-mails"
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
              E-mails
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

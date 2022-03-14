import React, { useState, useEffect } from "react";

import { Container, Row, Col } from "react-bootstrap";

const Home = (props) => {
  if (Object.keys(props.data).length !== 0) {
    return (
      <div className="main-content">
        <Container>
          <h3>Bitcoin Prices</h3>
          <Row>
            <Col>
              <div className="card p-3">
                <h3>{props.data.USD.symbol}</h3>
                <span>Buying price: {props.data.USD.buy} </span>
                <span>Selling price: {props.data.USD.sell}</span>
              </div>
            </Col>
            <Col>
              <div className="card p-3">
                <h3>{props.data.EUR.symbol}</h3>
                <span>Buying price: {props.data.EUR.buy} </span>
                <span>Selling price: {props.data.EUR.sell}</span>
              </div>
            </Col>
            <Col>
              <div className="card p-3">
                <h3>{props.data.AUD.symbol}</h3>
                <span>Buying price: {props.data.AUD.buy} </span>
                <span>Selling price: {props.data.AUD.sell}</span>
              </div>
            </Col>
            <Col>
              <div className="card p-3">
                <h3>{props.data.BRL.symbol}</h3>
                <span>Buying price: {props.data.BRL.buy} </span>
                <span>Selling price: {props.data.BRL.sell}</span>
              </div>
            </Col>
            <Col>
              <div className="card p-3">
                <h3>{props.data.CAD.symbol}</h3>
                <span>Buying price: {props.data.CAD.buy} </span>
                <span>Selling price: {props.data.CAD.sell}</span>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="card p-3">
                <h3>{props.data.CHF.symbol}</h3>
                <span>Buying price: {props.data.CHF.buy} </span>
                <span>Selling price: {props.data.CHF.sell}</span>
              </div>
            </Col>
            <Col>
              <div className="card p-3">
                <h3>{props.data.CLP.symbol}</h3>
                <span>Buying price: {props.data.CLP.buy} </span>
                <span>Selling price: {props.data.CLP.sell}</span>
              </div>
            </Col>
            <Col>
              <div className="card p-3">
                <h3>{props.data.CNY.symbol}</h3>
                <span>Buying price: {props.data.CNY.buy} </span>
                <span>Selling price: {props.data.CNY.sell}</span>
              </div>
            </Col>
            <Col>
              <div className="card p-3">
                <h3>{props.data.CZK.symbol}</h3>
                <span>Buying price: {props.data.CZK.buy} </span>
                <span>Selling price: {props.data.CZK.sell}</span>
              </div>
            </Col>
            <Col>
              <div className="card p-3">
                <h3>{props.data.DKK.symbol}</h3>
                <span>Buying price: {props.data.DKK.buy} </span>
                <span>Selling price: {props.data.DKK.sell}</span>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="card p-3">
                <h3>{props.data.GBP.symbol}</h3>
                <span>Buying price: {props.data.GBP.buy} </span>
                <span>Selling price: {props.data.GBP.sell}</span>
              </div>
            </Col>
            <Col>
              <div className="card p-3">
                <h3>{props.data.HKD.symbol}</h3>
                <span>Buying price: {props.data.HKD.buy} </span>
                <span>Selling price: {props.data.HKD.sell}</span>
              </div>
            </Col>
            <Col>
              <div className="card p-3">
                <h3>{props.data.HRK.symbol}</h3>
                <span>Buying price: {props.data.HRK.buy} </span>
                <span>Selling price: {props.data.HRK.sell}</span>
              </div>
            </Col>
            <Col>
              <div className="card p-3">
                <h3>{props.data.INR.symbol}</h3>
                <span>Buying price: {props.data.INR.buy} </span>
                <span>Selling price: {props.data.INR.sell}</span>
              </div>
            </Col>
            <Col>
              <div className="card p-3">
                <h3>{props.data.ISK.symbol}</h3>
                <span>Buying price: {props.data.ISK.buy} </span>
                <span>Selling price: {props.data.ISK.sell}</span>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="card p-3">
                <h3>{props.data.JPY.symbol}</h3>
                <span>Buying price: {props.data.JPY.buy} </span>
                <span>Selling price: {props.data.JPY.sell}</span>
              </div>
            </Col>
            <Col>
              <div className="card p-3">
                <h3>{props.data.KRW.symbol}</h3>
                <span>Buying price: {props.data.KRW.buy} </span>
                <span>Selling price: {props.data.KRW.sell}</span>
              </div>
            </Col>
            <Col>
              <div className="card p-3">
                <h3>{props.data.NZD.symbol}</h3>
                <span>Buying price: {props.data.NZD.buy} </span>
                <span>Selling price: {props.data.NZD.sell}</span>
              </div>
            </Col>
            <Col>
              <div className="card p-3">
                <h3>{props.data.PLN.symbol}</h3>
                <span>Buying price: {props.data.PLN.buy} </span>
                <span>Selling price: {props.data.PLN.sell}</span>
              </div>
            </Col>
            <Col>
              <div className="card p-3">
                <h3>{props.data.RON.symbol}</h3>
                <span>Buying price: {props.data.RON.buy} </span>
                <span>Selling price: {props.data.RON.sell}</span>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="card p-3">
                <h3>{props.data.RUB.symbol}</h3>
                <span>Buying price: {props.data.RUB.buy} </span>
                <span>Selling price: {props.data.RUB.sell}</span>
              </div>
            </Col>
            <Col>
              <div className="card p-3">
                <h3>{props.data.SEK.symbol}</h3>
                <span>Buying price: {props.data.SEK.buy} </span>
                <span>Selling price: {props.data.SEK.sell}</span>
              </div>
            </Col>
            <Col>
              <div className="card p-3">
                <h3>{props.data.SGD.symbol}</h3>
                <span>Buying price: {props.data.SGD.buy} </span>
                <span>Selling price: {props.data.SGD.sell}</span>
              </div>
            </Col>
            <Col>
              <div className="card p-3">
                <h3>{props.data.THB.symbol}</h3>
                <span>Buying price: {props.data.THB.buy} </span>
                <span>Selling price: {props.data.THB.sell}</span>
              </div>
            </Col>
            <Col>
              <div className="card p-3">
                <h3>{props.data.TRY.symbol}</h3>
                <span>Buying price: {props.data.TRY.buy} </span>
                <span>Selling price: {props.data.TRY.sell}</span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Home;

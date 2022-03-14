import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

const Details = () => {
  const baseUrl = "https://blockchain.info/q/";
  const [marketCap, SetMarketCap] = useState("");
  const [totalBtc, SetTotalBtc] = useState("");
  const [transactionCount24, SetTransactionCount24] = useState("");
  const [btcSent24, SetBtcSent24] = useState("");
  const [hashrate, SetHashrate] = useState("");
  const [getdifficulty, SetDifficulty] = useState("");
  const [btcImage, SetBtcImage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBtcMarketCap() {
      let res = await fetch(baseUrl + "marketcap");
      let data = await res.json();
      SetMarketCap(data);
      // console.log(data);
    }

    async function fetchBtcTotalBtc() {
      let res = await fetch(baseUrl + "totalbc");
      let data = await res.json();
      SetTotalBtc(data);
      // console.log(data);
    }

    async function fetchBtcTransactionCount24() {
      let res = await fetch(baseUrl + "24hrtransactioncount");
      let data = await res.json();
      SetTransactionCount24(data);
      // console.log(data);
    }

    async function fetchBtcSent24() {
      let res = await fetch(baseUrl + "24hrbtcsent");
      let data = await res.json();
      SetBtcSent24(data);
      // console.log(data);
    }

    async function fetchBtcHashrate() {
      let res = await fetch(baseUrl + "hashrate");
      let data = await res.json();
      SetHashrate(data);
      // console.log(data);
    }

    async function fetchBtcDifficulty() {
      let res = await fetch(baseUrl + "getdifficulty");
      let data = await res.json();
      SetDifficulty(data);
      // console.log(data);
    }

    async function fetchBtcImage() {
      let res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      let data = await res.json();
      SetBtcImage(data[0].image);
      // console.log(data[0].image);
    }

    fetchBtcMarketCap();
    fetchBtcTotalBtc();
    fetchBtcTransactionCount24();
    fetchBtcSent24();
    fetchBtcHashrate();
    fetchBtcDifficulty();
    fetchBtcImage();

    setLoading(false);
  }, []);
  return (
    <div className="main-content">
      {loading ? (
        <div className="spinner">
          <Spinner animation="border" role="status" variant="primary">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <Container>
          <h3>Bitcoin Details</h3>
          <img className="float-right" src={btcImage} alt="bitcoin"></img>
          <div className="card p-3" style={{ width: "40%" }}>
            <h5>Market capitalization</h5>
            <span> $ {marketCap} </span>
          </div>
          <div className="card p-3" style={{ width: "40%" }}>
            <h5>Number of all bitcoins in circulation</h5>
            <span> {totalBtc} </span>
          </div>
          <div className="card p-3" style={{ width: "40%" }}>
            <h5>Number of transactions in the last 24h</h5>
            <span> {transactionCount24} </span>
          </div>
          <div className="card p-3" style={{ width: "40%" }}>
            <h5>Number of Bitcoin sent in the last 24 hours</h5>
            <span> {btcSent24} </span>
          </div>
          <div className="card p-3" style={{ width: "40%" }}>
            <h5>Current Hashrate</h5>
            <span> {hashrate} </span>
          </div>
          <div className="card p-3" style={{ width: "40%" }}>
            <h5>Current difficulty level</h5>
            <span> {getdifficulty} </span>
          </div>
        </Container>
      )}
    </div>
  );
};

export default Details;

// https://blockchain.info/q/getdifficulty
// https://blockchain.info/q/24hrtransactioncount
// https://blockchain.info/q/24hrbtcsent
// https://blockchain.info/q/hashrate
// https://blockchain.info/q/totalbc
// https://blockchain.info/q/marketcap

import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function FilterBar({ products, mp, fp, setMP, setFP }) {
  // products.map((item) => console.log(item));

  const getMaleProducts = () => {
    axios
      .get("/api/products/cat/mensPerfume")
      .then((res) => {
        setMP(res.data);
        setFP([]);
      })
      .catch((err) => console.log(err));
  };
  const getFemaleProducts = () => {
    axios
      .get("/api/products/cat/womensPerfume")
      .then((res) => {
        setFP(res.data);
        setMP([]);
      })
      .catch((err) => console.log(err));
  };
  const getAllProducts = () => {
    setMP([]);
    setFP([]);
  };
  return (
    <>
      <ButtonGroup className="mb-2 mt-3">
        <Button onClick={getAllProducts}>All</Button>
        <Button onClick={getMaleProducts}>Male</Button>
        <Button onClick={getFemaleProducts}>Female</Button>
      </ButtonGroup>
    </>
  );
}

export default FilterBar;

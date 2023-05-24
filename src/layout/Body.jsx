import React from "react";
import Card from "../components/Card";

const fruits = [
  {
    id: 1,
    price: 2.05,
    name: "Apple",
    description: "This is Organic Apple from Shan State",
  },
  {
    id: 2,
    price: 1.35,
    name: "Orange",
    description: "This is Organic Orange from TaungGyi State",
  },
  {
    id: 3,
    price: 2.75,
    name: "Pineapple",
    description: "This is Organic Pineapple from Dawei City",
  },
  {
    id: 4,
    price: 3.05,
    name: "Tomatoes",
    description: "This is Organic Tomatoes from InnLay Lake",
  },
  {
    id: 5,
    price: 2.45,
    name: "Mango",
    description: "This is Organic Mango from May Myo City",
  },
];
const Body = () => {
  return (
    <section className="body">
      {fruits.map((fruit) => (
        <Card key={fruit.id} fruit={fruit} />
      ))}
    </section>
  );
};

export default Body;

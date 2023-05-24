import { Link } from "react-router-dom";
import { ProductCard } from "react-ui-cards";

export default () => (
    <ProductCard
      float
      header="https://i.imgur.com/vRAtM3i.jpg"
      image="https://i.imgur.com/XJxqvsU.jpg"
      title="Product Name"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      price="$99.99"
    />
);

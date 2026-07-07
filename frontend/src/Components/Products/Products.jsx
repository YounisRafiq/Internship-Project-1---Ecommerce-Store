import React from "react";
import "./Product.css";
function Products() {
  const products = [
    {
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQALi3WPmSKwTSJOi6YpXfpT90L4USngAwH7nqLWFmqpMP9VzPYFQ-a2_I&s=10",
      title: "First",
      descriotion: "This is First Product",
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQALi3WPmSKwTSJOi6YpXfpT90L4USngAwH7nqLWFmqpMP9VzPYFQ-a2_I&s=10",
      title: "First",
      descriotion: "This is First Product",
    },
    {
      id: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQALi3WPmSKwTSJOi6YpXfpT90L4USngAwH7nqLWFmqpMP9VzPYFQ-a2_I&s=10",
      title: "First",
      descriotion: "This is First Product",
    },
    {
      id: 4,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQALi3WPmSKwTSJOi6YpXfpT90L4USngAwH7nqLWFmqpMP9VzPYFQ-a2_I&s=10",
      title: "First",
      descriotion: "This is First Product",
    },
    {
      id: 5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQALi3WPmSKwTSJOi6YpXfpT90L4USngAwH7nqLWFmqpMP9VzPYFQ-a2_I&s=10",
      title: "First",
      descriotion: "This is First Product",
    },
    {
      id: 6,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQALi3WPmSKwTSJOi6YpXfpT90L4USngAwH7nqLWFmqpMP9VzPYFQ-a2_I&s=10",
      title: "First",
      descriotion: "This is First Product",
    },
    {
      id: 7,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQALi3WPmSKwTSJOi6YpXfpT90L4USngAwH7nqLWFmqpMP9VzPYFQ-a2_I&s=10",
      title: "First",
      descriotion: "This is First Product",
    },
    {
      id: 8,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQALi3WPmSKwTSJOi6YpXfpT90L4USngAwH7nqLWFmqpMP9VzPYFQ-a2_I&s=10",
      title: "First",
      descriotion: "This is First Product",
    },
  ];

  return (
    <div>
      <div className="cards">
        <h2 className="text-center mt-5 fw-bold">Products</h2>
        <div className="products">
        {products.map((product) => {
          return (
            <div key={product.id} className="product-card">
                <div className="prodcut_details">
              <img src={product.image} alt="product_image" />
              <h3>{product.title}</h3>
              <p>{product.descriotion}</p>
              <h6 className="fw-bold">Pricce : 20$</h6>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
}

export default Products;

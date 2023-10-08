import React from 'react';
import '../components/ProductCard.css';
function ProductCard({ productName, imageUrl }) {
  return (
    <div className="cardmain">
      <img src={imageUrl} className="card-img-top" alt={productName} />
      <div className="card-body text-center">
        <div className="txtdiv">
          <h5 className="card-title text-center">{productName}</h5>
        </div>
        <div className='btndiv'>
          <button className="btn addtocart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

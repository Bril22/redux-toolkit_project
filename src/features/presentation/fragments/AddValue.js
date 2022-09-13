import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { update } from '../redux/slice/appProductSlice';
import route from '../../../core/ui/router/router.json'
import { saveProduct } from '../../../api/product_api';

const AddValue = () => {
    const [product, setProduct] = useState("");
    const [price, setPrice] = useState("");
    const dispatch = useDispatch();
    const router = useNavigate();

    const handleProduct = (e) => {
      setProduct(e.target.value)
    };

    const handlePrice = (e) => {
      setPrice(e.target.value)
    };

    // import data AddValue
    const addValueProduct = async (e) => {
      e.preventDefault();
      await dispatch(saveProduct({product, price}));
      router("/");
    }

  return (
    <> 
      <form onSubmit={addValueProduct}>
        <div>
          <label>Product</label>
          <input value={product} type="text" placeholder="Product" onChange={handleProduct} />
        </div>
        <div>
          <label>Price</label>
          <input value={price} type="text" placeholder="Price" onChange={handlePrice} />
        </div>
        <div>
          <button>
            submit
          </button>
        </div>
      </form>

      {/* <label>color 1</label>
      <input/>
      <label>color 2</label>
      <input/> */}
    </>
  )
}

export default AddValue

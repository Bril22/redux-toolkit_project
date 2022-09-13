import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { update } from '../redux/slice/appProductSlice';
import route from '../../../core/ui/router/router.json'

const EditValue = () => {
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

    // handleSubmit = (e) => {
    //   router(route.add_value.route);
    // };

    const updateValue = (e) => {
      e.preventDefault();
      dispatch(update({product, price}));
      // router(route.add_value.route);
    };

  return (
    <> 
      <form >
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
            Add
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

export default EditValue

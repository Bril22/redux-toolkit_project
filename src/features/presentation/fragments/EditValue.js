import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editProduct, getProduct } from '../../../api/product_api';
import route from '../../../core/ui/router/router.json'
import { productSelector } from '../redux/slice/appProductSlice';

const EditValue = () => {
    const [product, setProduct] = useState("");
    const [price, setPrice] = useState("");
    const dispatch = useDispatch();
    const router = useNavigate();
    const {id} = useParams();

    const handleProduct = (e) => {
      setProduct(e.target.value)
    };
    const handlePrice = (e) => {
      setPrice(e.target.value)
    };

    const selectProduct = useSelector((state) => productSelector.selectById(state, id));

    // change data
    const handleEdit = async (e) => {
      e.preventDefault();
      await dispatch(editProduct({id, product, price}));
      router('/');
    }

    // get data
    useEffect(() => {
      dispatch(getProduct());
    }, [dispatch]);

    // show data that want to edit
    useEffect(() => {
      if(selectProduct) {
        setProduct(selectProduct.product);
        setPrice(selectProduct.price);
      }
    }, [selectProduct]);

  return (
    <> 
      <form onSubmit={handleEdit}>
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
            Edit
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

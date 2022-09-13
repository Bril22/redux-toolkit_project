import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { deleteProduct, getProduct } from '../../../api/product_api';
import { productSelector } from '../redux/slice/appProductSlice';
import appProductState from '../redux/state/appProductState';
import './Fragments.css'

const ShowValue = () => {
 
  const dispatch = useDispatch();
  const products = useSelector(productSelector.selectAll);

  useEffect(() => {
    dispatch(getProduct());
  },[dispatch]);

  return (
    <div className="show-content">
      <h1>{appProductState.show_title}</h1>
      <table className="table">
        <thead>
          <tr>
            <th>{appProductState.column_label.no}</th>
            <th>{appProductState.column_label.product}</th>
            <th>{appProductState.column_label.price}</th>
            <th>{appProductState.column_label.action}</th>
          </tr>
        </thead>
        {/* showing data db_product.json */}
        <tbody>
          {products.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.product}</td>
              <td>{item.price}</td>
              <td>
                <div className="button-container">
                  <Link className="button-edit" to={`edit/${item.id}`}>{appProductState.edit}</Link>
                  <button onClick={() => dispatch(deleteProduct(item.id))} className="button-delete">{appProductState.delete}</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link className="add-label" to="add">{appProductState.addProduct}</Link>
    </div>
  )
}

export default ShowValue
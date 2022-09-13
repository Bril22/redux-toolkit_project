import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { getProduct } from '../../../api/product_api';
import { productSelector } from '../redux/slice/appProductSlice';
import appProductState from '../redux/state/appProductState';
import './Fragments.css'

const ShowValue = () => {
 
  const dispatch = useDispatch();
  const products = useSelector(productSelector.selectAll);

  useEffect(() => {
    dispatch(getProduct());
  },[dispatch])

  return (
    <div>
      <Link to="add">{appProductState.addProduct}</Link>
       <table className="table">
         <thead>
           <tr>
             <th>{appProductState.no}</th>
             <th>{appProductState.product}</th>
             <th>{appProductState.price}</th>
             <th>Action</th>
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
                    <Link className="button-edit" to={`edit/${item.id}`}>Edit</Link>
                    <button>Delete</button>
                  </div>
                </td>
              </tr>
           ))}
         </tbody>
       </table>
    </div>
  )
}

export default ShowValue
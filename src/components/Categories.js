import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

function Categories() {
  const cathy = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const checkOurStatus = () => {
    dispatch(checkStatus());
  };
  return (
    <div className="cathy">
      <h1>Categories</h1>
      <p>{cathy}</p>
      <button type="button" onClick={checkOurStatus}>Check Status</button>
    </div>
  );
}

export default Categories;

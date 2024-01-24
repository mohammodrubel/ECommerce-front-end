import React, { useState } from "react";
import {
  useFetchAllProductsQuery,
  useUpdateProductStocksMutation,
} from "../App/featchers/product/productApi";
import Loading from "../Components/Loading";
import Error from "../Components/Error";
import UpdateButton from "../Components/UpdateButton";
import DeleteButton from "../Components/DeleteButton";

function AllProduct() {
  const { isLoading, isError, data } = useFetchAllProductsQuery();
  const [updateproduct, { isLoading: updateLoading, isError: updateError }] =
    useUpdateProductStocksMutation();
  const [updateValue, setUpdateValue] = useState(0);
  

  const updateButtonFunction = (id) => {
    const information = {
      id:id,
      totalStock:updateValue
    }
    updateproduct(information)
  };
  

  let content = null;
  if (isLoading) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <Error text="somthing went wrong" />;
  }
  if (!isLoading && !isError && data?.data?.data.length === 0) {
    content = <Error text="No Data Found" />;
  }
  if (!isLoading && !isError && data?.data?.data.length > 0) {
    content = data?.data?.data.map((item, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>
          <img
            src={item.image}
            style={{ width: "60px", height: "60px", borderRadius: "50%" }}
            alt=""
          />
        </td>
        <td>{item.productName}</td>
        <td>{item.totalStock}</td>
        <td>{item.category}</td>
        <td>{item.price}</td>
        <td>
          <input
            onChange={(e) => setUpdateValue(Number(e.target.value))}
            type="number"
            placeholder="Update Your Stocks"
            className="p-3 rounded-md"
          />
        </td>
        <td onClick={() => updateButtonFunction(item._id)}>
          <UpdateButton updateValue={updateValue} text1="Update Stock" />
        </td>
        <td>
          <DeleteButton text="Delete Product" />
        </td>
      </tr>
    ));
  }

  return (
    <div className="container">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Number</th>
              <th>Image</th>
              <th>Name</th>
              <th>Current Stocks</th>
              <th>Category</th>
              <th>Price</th>
              <th>Update Stock</th>
              <th>Update</th>
              <th>Delete Product</th>
            </tr>
          </thead>
          <tbody>{content}</tbody>
        </table>
      </div>
    </div>
  );
}

export default AllProduct;

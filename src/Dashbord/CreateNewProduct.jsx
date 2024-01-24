import React, { useState } from 'react';
import { useAddNewProductsMutation } from '../App/featchers/product/productApi';


function CreateNewProduct() {
  const [addNewProduct,{isLoading,isError,data}]=useAddNewProductsMutation()
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState(0);
  const [currency, setCurrency] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [totalStock, setTotalStock] = useState(0);

  const resetValue = ()=>{
    setProductName('')
    setCategory('')
    setPrice(0)
    setCurrency('')
    setImage('')
    setDescription('')
    setTotalStock(0)
  }

  const formHandler = (e)=>{
    e.preventDefault()
    addNewProduct({
      productName,
      category,
      category,
      price,
      currency,
      image,
      description,
      totalStock
    })
    resetValue()
  }

  return (
    <div>
      <div className="max-auto mt-5 mx-auto bg-white rounded p-8 shadow-md">
        <h1 className="text-2xl font-bold mb-6">Add New Product</h1>

        {/* Product Form */}
        <form method='POST' onSubmit={formHandler}>
          <div div className='grid md:grid-cols-2 gap-5 grid-cols-1'>
            {/* Product Name */}
          <div className="mb-4">
            <label htmlFor="productName" className="block text-sm font-medium text-gray-600">
              Product Name
            </label>
            <input
              type="text"
              onChange={(e) => setProductName(e.target.value)}
              id="productName"
              name="productName"
              required
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          {/* Category */}
          <div className="mb-4">
            <label htmlFor="category" className="block text-sm font-medium text-gray-600">
              Category
            </label>
            <select
              onChange={(e) => setCategory(e.target.value)}
              id="category"
              name="category"
              required
              className="mt-1 p-2 w-full border rounded-md"
            >
              <option value="Headphone">Headphone</option>
              <option value="Laptop">Laptop</option>
              <option value="Gaming">Gaming</option>
              <option value="Monitor">Monitor</option>
              <option value="Tablet Pc">Tablet Pc</option>
              <option value="Printer">Printer</option>
              <option value="Camera">Camera</option>
              <option value="Sound System">Sound System</option>
            </select>
          </div>

          {/* Price */}
          <div className="mb-4">
            <label htmlFor="price" className="block text-sm font-medium text-gray-600">
              Price
            </label>
            <input
              type="number"
              onChange={(e) => setPrice(parseFloat(e.target.value))}
              id="price"
              name="price"
              required
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          {/* Currency */}
          <div className="mb-4">
            <label htmlFor="currency" className="block text-sm font-medium text-gray-600">
              Currency
            </label>
            <input
              type="text"
              onChange={(e) => setCurrency(e.target.value)}
              id="currency"
              name="currency"
              required
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          {/* Image */}
          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-medium text-gray-600">
              Image URL
            </label>
            <input
              type="text"
              onChange={(e) => setImage(e.target.value)}
              id="image"
              name="image"
              required
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          {/* total stocks  */}
          <div className="mb-4">
            <label htmlFor="totalStock" className="block text-sm font-medium text-gray-600">
              Total Stock
            </label>
            <input
              type="number"
              onChange={(e) => setTotalStock(parseFloat(e.target.value))}
              id="totalStock"
              name="totalStock"
              required
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          </div>
          {/* Description */}
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-600">
              Description
            </label>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              id="description"
              name="description"
              required
              className="mt-1 p-2 w-full border rounded-md"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center p-4">
            <button type='submit' className="btn bg-emerald-600 p-2 font-bold text-white">Add New Product</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateNewProduct;

import React, { useState, useEffect } from "react";
import axios from "axios";
const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    category: "",
    image: null,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);

        const uniqueCategories = [
          ...new Set(response.data.map((product) => product.category)),
        ];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: URL.createObjectURL(file) }));
    }
  };

  const addProduct = async () => {
    if (!formData.title || !formData.price || !formData.category || !formData.image) {
      alert("All fields are required!");
      return;
    }
    const newProduct = {
      title: formData.title,
      price: parseFloat(formData.price),
      category: formData.category,
      image: formData.image,
    };

    try {
      const response = await axios.post("https://fakestoreapi.com/products", newProduct);
      setProducts((prev) => [...prev, response.data]);
      setFormData({ title: "", price: "", category: "", image: null });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const editProduct = (id) => {
    const product = products.find((p) => p.id === id);
    setEditingProduct(id);
    setFormData({
      title: product.title,
      price: product.price,
      category: product.category,
      image: product.image,
    });
  };

  const saveProduct = async () => {
    const updatedProduct = {
      ...formData,
      price: parseFloat(formData.price),
    };

    try {
      const response = await axios.put(
        `https://fakestoreapi.com/products/${editingProduct}`,
        updatedProduct
      );
      setProducts((prev) =>
        prev.map((p) => (p.id === editingProduct ? response.data : p))
      );
      setEditingProduct(null);
      setFormData({ title: "", price: "", category: "", image: null });
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  const deleteProduct = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (confirmDelete) {
      try {
        await axios.delete(`https://fakestoreapi.com/products/${id}`);
        setProducts((prev) => prev.filter((p) => p.id !== id));
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div>
      <h3>Manage Products</h3>
      <div className="mb-4 p-3 border rounded bg-light">
        <div className="row g-3">
          <div className="col-md-3">
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Title"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-3">
            <input
              type="number"
              name="price"
              className="form-control"
              placeholder="Price"
              value={formData.price}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              name="category"
              className="form-control"
              placeholder="Category"
              value={formData.category}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-3">
            <input
              type="file"
              accept="image/*"
              className="form-control"
              onChange={handleFileChange}
            />
          </div>
        </div>
        <div className="mt-2">
          {editingProduct ? (
            <button className="btn" onClick={saveProduct}>
              Save Product
            </button>
          ) : (
            <button className="btn " onClick={addProduct}>
              Add Product
            </button>
          )}
        </div>
      </div>

      </div>
      <h3>Product List</h3>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ width: "50px", height: "50px", objectFit: "cover" }}
                />
              </td>
              <td>{product.title}</td>
              <td>{product.category}</td>
              <td>${product.price.toFixed(2)}</td>
              <td style={{display:'flex'}}>
                <button
                style={{width:'90px',borderRadius:"90px"}}
                  className="btn me-2"
                  onClick={() => editProduct(product.id)}
                >
                  Edit
                </button>
                <button
                style={{width:'90px',borderRadius:"90px"}}
                  className="btn "
                  onClick={() => deleteProduct(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="d-flex justify-content-center mt-3">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`btn ${currentPage === index + 1 ? "btn-primary" : "btn-outline-primary"} mx-1`}
            onClick={() => changePage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default ManageProducts;

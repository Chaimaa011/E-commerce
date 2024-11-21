import React, { useState, useEffect } from "react";
import axios from "axios";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    category: "",
    image: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);

      const uniqueCategories = [
        ...new Set(response.data.map((product) => product.category)),
      ];
      setCategories(uniqueCategories);
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

  const addProduct = () => {
    if (!formData.title || !formData.price || !formData.category || !formData.image) {
      alert("All fields are required!");
      return;
    }
    const newProduct = {
      id: products.length + 1,
      title: formData.title,
      price: parseFloat(formData.price),
      category: formData.category,
      image: formData.image,
    };
    setProducts((prev) => [...prev, newProduct]);
    setFormData({ title: "", price: "", category: "", image: null });
  };


  const saveProduct = () => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === editingProduct
          ? {
              ...p,
              title: formData.title,
              price: parseFloat(formData.price),
              category: formData.category,
              image: formData.image,
            }
          : p
      )
    );
    setEditingProduct(null);
    setFormData({ title: "", price: "", category: "", image: null });
  };

  const deleteProduct = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (confirmDelete) {
      setProducts((prev) => prev.filter((p) => p.id !== id));
    }
  };

  const barData = {
    labels: categories,
    datasets: [
      {
        label: "Average Price",
        data: categories.map(
          (category) =>
            products
              .filter((product) => product.category === category)
              .reduce((sum, product) => sum + product.price, 0) /
            products.filter((product) => product.category === category).length
        ),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const pieData = {
    labels: categories,
    datasets: [
      {
        data: categories.map(
          (category) =>
            products.filter((product) => product.category === category).length
        ),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  return (
    <div style={{height:'200px'}} className="container ">
      <h1 className="mb-3">Product Dashboard</h1>

      <div className="row mb-5">
        <div className="col-md-6">
          <h2>Category Distribution</h2>
          <Pie data={pieData} />
        </div>
        <div className="col-md-6">
          <h2>Average Price by Category</h2>
          <Bar data={barData} />
        </div>
      </div>

      
    </div>
  );
}

export default Dashboard;

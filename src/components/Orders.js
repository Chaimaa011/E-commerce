import React, { useEffect, useState } from "react";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fakeOrders = Array.from({ length: 5 }, (_, index) => ({
      id: index + 1,
      customer: `Customer ${index + 1}`,
      total: Math.floor(Math.random() * 500 + 50),
      products: [
        { title: `Product A${index + 1}`, price: Math.random() * 100 },
        { title: `Product B${index + 1}`, price: Math.random() * 100 },
      ],
      status: ["Pending", "Shipped", "Delivered"][
        Math.floor(Math.random() * 3)
      ],
    }));
    setOrders(fakeOrders);
  }, []);

  return (
    <div>
      <h2>Orders</h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Total</th>
            <th>Status</th>
            <th>Products</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>${order.total.toFixed(2)}</td>
              <td>{order.status}</td>
              <td>
                {order.products.map((product, index) => (
                  <div key={index}>
                    {product.title} (${product.price.toFixed(2)})
                  </div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;

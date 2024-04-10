import React, { useState, useEffect } from "react";
import "./style.css/Dresses.css";
import dressservice from "../../services/dressservice";

const Dresses = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dressservice.getalldresses();
        setData(response.data); // Corrected line
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
          <div className="container-fluid">
              
       
        <div className="row">
          {data.map((dress) => (
            <div className="col-3" key={dress.id}>
              <div className="card card-tab">
                <img
                  className="card-img-top"
                  src={dress.image}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <p className="card-title lead">{dress.name}</p>
                  <p>
                    price : ₹{dress.price}.00{" "}
                    <i class=" btn btn-secondary bi bi-cart-plus"></i>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dresses;

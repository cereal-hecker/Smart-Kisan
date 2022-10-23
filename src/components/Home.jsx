import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home({ setData }) {
  const [number, setNumber] = useState("");
  const navigate = useNavigate();
  const handleButtonClick = async () => {
    const res = await fetch("http://localhost:5000/predict?number=9310389530");
    const data = await res.json();
    // k, n, p, Tempr, crop_pred, ph, tip, rainfall, hum

    setData(data);
    navigate("/dashboard");
  };
  return (
    <div>
      <div className="container-fluid row m-0">
        <div className="col-lg-6 p-6 title text-center">
          <h1 className="big-heading text-center">Go Organic today!</h1>
          <div className="input-group rounded phone-number text-center">
            <input
              type="text"
              className="form-control rounded"
              placeholder="Enter phone number"
              value={number}
              onChange={(e) =>
                e.target.value.length <= 10 && setNumber(e.target.value)
              }
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <span
              className="input-group-text border-0 p-0 m-0 rounded submit-button mx-3"
              id="search-addon"
            >
              <button
                onClick={handleButtonClick}
                className="border-0 btn btn-md btn-outline-dark"
              >
                Submit
              </button>
            </span>
          </div>
        </div>
        <div className="col-lg-6 title-image">
          <img src="src\assets\images\Farmer-bro.svg"></img>
        </div>
      </div>
    </div>
  );
}

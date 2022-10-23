export default function Dashboard({data}) {
  return (
    <div id="dashboard" className="container-fluid dashboard px-8 py-2">
      <p className="hello m-0">Hello,</p>
      <h1 className="title my-4 mt-0">Kisan</h1>
      <div className="row p-0">
        <div className="weather-today col-md-1 py-2 rounded m-3 text-center">
          <i className="fa-solid fa-sun"></i>
          <p className="fs-6">Weather</p>
        </div>

        <div className="rainfall-card col-md roundeds m-3">
          <h3 className="d-flex justify-content-between py-2 w-100">
            Rainfall
            <i className="fa-solid fa-cloud-rain text-xl"></i>
          </h3>
          <div className="fs-1">{data["rainfall"].toFixed(1)} cm</div>
        </div>
        <div className="temperature-card col-md py-2 rounded m-3">
          <h3 className="d-flex justify-content-between w-100">
            Temperature
            <i className="fa-solid fa-temperature-three-quarters"></i>
          </h3>
          <div className="fs-1">{data["Tempr"].toFixed(1)} &deg;C</div>
        </div>
        <div className="humidity-card col-md py-2 rounded m-3">
          <h3 className="d-flex justify-content-between w-100">
            Humidity
            <i className="fa-solid fa-droplet"></i>
          </h3>
          <div className="fs-1">{data["hum"].toFixed(1)} %</div>
        </div>
        <div className="row m-0 p-0">
          <div className="col-md-6">
            <div className="row">
              <div className="fertilizer-card col p-3 rounded m-3">
                <div className="row">
                  <div className="col-lg-6">
                    <h3 className="d-flex justify-content-between w-100">
                      Organic Fertilizer
                    </h3>
                    <div className="fs-7">Vermicompost</div>
                    <p className="fertilizer-desc">
                      This compost will be rich in Nitrogen, Phosphorus and
                      Potassium compared to other composts. Vermicompost
                      contains water-soluble nutrients and is an excellent,
                      nutrient-rich organic fertilizer and soil conditioner. It
                      is used in farming and small-scale organic farming.
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <img
                      className="w-100"
                      src="src\assets\images\fertilizer.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="crop-card col p-3 rounded m-3">
                <div className="row">
                  <div className="col-lg-6">
                    <h3 className="d-flex justify-content-between w-100">
                      Next Season Crop
                    </h3>
                    <div className="fs-7">{data["crop_pred"][0].toUpperCase() + data["crop_pred"].slice(1)}</div>
                    <p className="fertilizer-desc">
                      In accordance to your soil pH, Potassium, Nitrogen,
                      Phosphorus
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <img className="w-100" src="src\assets\images\crops.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row p-0 m-0">
            <div className="nitrogen col-md-1 py-2 rounded m-3">
              <div className="fs-1 text-center">
                N
                <p className="fertilizer-desc">Nitrogen</p>
                {data["N"].toFixed(1)}
              </div>
            </div>
            <div className="col-md-1 phosphorus py-2 rounded m-3">
              <div className="fs-1 text-center">
                P
                <p className="fertilizer-desc">Phosphorus</p>
                {data["P"].toFixed(1)}
              </div>
            </div>
            <div className="col-md-1 py-2 potassium rounded m-3">
              <div className="fs-1 text-center">
                K
                <p className="fertilizer-desc">Potassium</p>
                {data["P"].toFixed(1)}
              </div>
            </div>
            <div className="col-md-1 ph-value py-2 rounded m-3">
              <div className="fs-1 text-center">
                pH
                <p className="fertilizer-desc">Value</p>
                {data["ph"].toFixed(1)}
              </div>
            </div>
            <div className="fertilizer-card col p-3 rounded m-3">
              <div className="row">
                <div className="col-lg">
                  <h3 className="d-flex justify-content-between w-100">
                    Organic
                  </h3>
                  <div className="fs-7">Tip of the Day</div>
                  <p className="fertilizer-desc m-0 p-0">
                  {data["tip"]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

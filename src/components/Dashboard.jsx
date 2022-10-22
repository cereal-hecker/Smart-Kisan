export default function Dashboard() {
    
    return (
        <div id="dashboard" className="container-fluid dashboard px-8 py-2">
        <p className="hello m-0">Hello,</p>
        <h1 className="title my-4 mt-0">Rice</h1>
        <div className="row p-0">
            <div className="rainfall-card col-md-3 rounded m-3">
                <h3 className="d-flex justify-content-between py-2 w-100">
                Rainfall
                <i class="fa-solid fa-cloud-rain text-xl"></i>
                </h3>
                <div className="fs-1">
                    21
                </div>
            </div>
            <div className="temperature-card col-md-3 py-2 rounded m-3">
                <h3 className="d-flex justify-content-between w-100">
                Temperature
                <i class="fa-solid fa-temperature-three-quarters"></i>
                </h3>
            </div>            
            <div className="humidity-card col-md-3 py-2 rounded m-3">
                <h3 className="d-flex justify-content-between w-100">
                Humidity
                <i class="fa-solid fa-droplet"></i>
                </h3>
            </div>
            <div className="humidity-card col-md-3 py-2 rounded m-3">
                <h3 className="d-flex justify-content-between w-100">
                Humidity
                <i class="fa-solid fa-cloud-rain text-xl"></i>
                </h3>
            </div>
        </div>
        </div>
    )
  }
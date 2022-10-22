export default function Home() {

    return (
        <div>
        <div className="container-fluid row m-0">
        <div className="col-lg-6 p-6 title text-center">
            <h1 className="big-heading text-center">Go Organic today!</h1>
            <div class="input-group rounded phone-number text-center">
                <input type="search" class="form-control rounded" placeholder="Enter phone number" aria-label="Search" aria-describedby="search-addon" />
                <span class="input-group-text border-0 p-0 m-0 rounded submit-button mx-3" id="search-addon">
                <button type="submit" class="border-0 btn btn-md btn-outline-dark">Submit</button>
                </span>
            </div>
        </div>
        <div className="col-lg-6 title-image">
        <img src="src\assets\images\Farmer-bro.svg"></img>
        </div>
      </div>
        </div>
    )
  }
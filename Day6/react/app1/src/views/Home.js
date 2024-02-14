import img1 from "../images/1.png";
import img2 from "../images/2.png";

function Home() {
  return (
    <>
      <h1 className="text-center mb-5">
        We are at the heart of appropriate care
      </h1>
      <div className="row g-3 justify-content-center">
        <div className="col-lg-3">
          <div className="rounded p-4 bg-white shadow-sm">
            <div className="d-grid gap-3">
              <p className="text-center mb-2">
                <img src={img2} width="200px" />
              </p>
              <button className="btn btn-primary">Login as a coach</button>
              <button className="btn btn-primary">Join as a coach</button>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="rounded p-4 bg-white shadow-sm">
            <div className="d-grid gap-3">
              <p className="text-center mb-2">
                <img src={img1} width="200px" />
              </p>
              <button className="btn btn-primary">Login as a user</button>
              <button className="btn btn-primary">Join as a user</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

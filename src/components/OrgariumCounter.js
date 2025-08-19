import Counter from "./Counter";

const OrgariumCounter = () => {
  return (
    <div className="row">
      <div className="col-lg-3 col-md-6 col-sm-12 counter-item">
        <div className="counter-inner">
          <div className="text">
            <h2 className="number">
              <Counter end={3652} />+
            </h2>
            <p>Tons of Produce Harvested</p>
          


          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 counter-item">
        <div className="counter-inner">
          <div className="text">
            <h2 className="number">
              <Counter end={896} />+
            </h2>
            <p>Units of Livestock Monitored</p>
          

          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 counter-item">
        <div className="counter-inner">
          <div className="text">
            <h2 className="number">
              <Counter end={945} />+
            </h2>
            <p>Hectares of Land Under Sustainable Management</p>
            


          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 counter-item">
        <div className="counter-inner">
          <div className="text">
            <h2 className="number">
              <Counter end={565} />+
            </h2>
            <p>Precision Farming Tools Deployed</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrgariumCounter;

export const OrgariumCounter2 = () => (
  <div className="row">
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className="single-counter-item mb-40">
        <div className="text">
          <h2 className="number">
            <Counter end={3652} />+
          </h2>
          <p>Saticfied Clients</p>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className="single-counter-item mb-40">
        <div className="text">
          <h2 className="number">
            <Counter end={896} />+
          </h2>
          <p>Saticfied Clients</p>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className="single-counter-item mb-40">
        <div className="text">
          <h2 className="number">
            <Counter end={945} />+
          </h2>
          <p>Saticfied Clients</p>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className="single-counter-item mb-40">
        <div className="text">
          <h2 className="number">
            <Counter end={565} />+
          </h2>
          <p>Saticfied Clients</p>
        </div>
      </div>
    </div>
  </div>
);

import React from 'react'

const Home = () => {
  return (
    <div>
      <div className="container my-3">
        <h2>ADD YOUR NOTES</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Title" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button> 
        </form>
      </div>

      <div className="container">
        <h2>Your Notes</h2>
        <div className="row my-3">
          <div className="col-md-3">
            <div className="card" style={{width: "18rem"}}>
              <div className="card-body">
                <h5 className="card-title">Note Title</h5>
                <p className="card-text">Note Description</p>
                <a href="#" className="btn btn-primary">Edit Note</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

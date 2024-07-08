import React from 'react'

function UpdateUser() {
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-item-center'>
    <div className="w-50 bg-white rounded p-3">
        
        <div>
          <form>
            <h2>Update User</h2>
            <div className="mb-2">
              <label htmlFor="id"></label>
              <input
                type="text"
                placeholder="Enter id"
                className="form-control"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="ModelName"></label>
              <input
                type="ModelName"
                placeholder="Enter ModelName"
                className="form-control"
              />
            </div>
            <div>
              <label htmlFor="Brand"></label>
              <input type="text" placeholder="Enter Brand" className="form-control" />
            </div>
            <div>

            <label htmlFor="Price"></label>
              <input type="text" placeholder="Enter Price" className="form-control" />
            </div>
            <div>

            <label htmlFor="Size"></label>
              <input type="text" placeholder="Enter Size" className="form-control" />
            </div>
            <div>

              <button type="submit" className="btn btn-success">
              Update
              </button>
            </div>
          </form>
          </div>
          </div>
        </div>
  )
}

export default UpdateUser;
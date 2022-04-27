import React from 'react';

export const AddRestaurant = () => {
  return (
    <div className="mb-4">
      <form action="">
          <div className="form row">
              <div className='col'>
                <input type="text" className="form-control" placeholder='name'/>
              </div>
              <div className='col'>
                <input type="text" className="form-control" placeholder='location'/>
              </div>
              <div className='col'>
                <select className="form-select" defaultValue={0} aria-label="Default select example">
                  <option value="0">Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className='col'>
                <button className='btn btn-primary'>add</button>
              </div>
          </div>
      </form>
    </div>
  )
};
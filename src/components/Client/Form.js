import React from 'react';

export const Form = ({ onSubmit, onChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Client Name</label>
        <input type="text" id="name" onChange={onChange}/>
      </div>
      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
export default Form;

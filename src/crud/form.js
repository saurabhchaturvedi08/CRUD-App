import React from "react";
import {Input} from "antd";

const FormElement = ({handleSubmit, name, setName}) => (
    <form onSubmit={handleSubmit}>
        <div className="form-group">
            <Input
            type="text"
            placeholder="Enter Name"
            value={name}
            style={{width:"50%"}}
            autoFocusrequired
          />
          <br/>
          <button className="btn btn-primary mt-1">Submit</button> 
          <button classname="btn btn-danger mt-1" onClick={()=> setName("")}>
            Cancel
            </button> 
        </div>
    </form>    
);

export default FormElement;
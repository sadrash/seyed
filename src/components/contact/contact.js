import React from "react";
import './contact.css'
import apii from './apii'

function contact() {
  return (
    <div className="contact" id="contact">
      <h2>Contact Us</h2>
      <form action="https://sheetdb.io/api/v1/oo7cql8agny5e" method="post" id="sheetdb-form1">
        <div className='name'>
          <label >name :</label>
          <input type="text" placeholder="Name" name="data[name]"/>
        </div>
        <div className='name'>
          <label >l-name :</label>
          <input type="text" placeholder="Last Name" name="data[last-name]"/>
        </div>
        <div className='name'>
          <label >number :</label>
          <input type="text" placeholder="Mobile Number" name="data[mobile]"/>
        </div>
        <div className='name'>
          <label >email :</label>
          <input type="text" placeholder="Email" name="data[email]"/>
        </div>
        <div className='name'>
          <label >Country :</label>
          <input type="text" placeholder="Country" name="data[country]"/>
        </div>
        <button type="submit" className="icon" onClick={apii}> Send</button>
      </form>
      
    </div>
  );
}

export default contact;

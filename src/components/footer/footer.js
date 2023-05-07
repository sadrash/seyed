import React from "react";
import "./footer.css";
import { FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";
import api from "./api";

function footer() {
  return (
    <div className="footer">
      <div className="left">
        <p>
          Seyedpour <span>Enterprise</span>
        </p>
        <h4>Tel: +989113679057</h4>
      </div>
      <div className="center">
        <h3>All Right Reserved©2022</h3>
        <form
          action="https://sheetdb.io/api/v1/w92lyrxhha8n8"
          method="post"
          id="sheetdb-form"
        >
          <div className="right">
            <input
              type="text"
              name="data[Email]"
              placeholder="Email..."
              id="input"
            />
            <button type="submit" onClick={api}>
              submit{" "}
            </button>
          </div>
        </form>
      </div>
      <div className="social-icons">
        <a href="https://www.instagram.com/seyedpour.holding/">
          <FaInstagram size={30} className="icon" />
        </a>
        <a href="">
          <FaTelegram size={30} className="icon" />
        </a>
        <a href="https://wa.me/09113679057">
          <FaWhatsapp size={30} className="icon" />
        </a>
      </div>
    </div>
  );
}

export default footer;

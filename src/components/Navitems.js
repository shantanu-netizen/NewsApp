import React, { Component } from "react";

export class Navitems extends Component {
  render() {
    let { title, description, imageUrl, url } = this.props;
    return (
      <div className="container d-flex justify-content-between">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://cleantechnica.com/wp-content/uploads/2026/01/Hyundai-Kona-EV-Beach-California-CleanTechnica-Kyle-Field-clean-air-1536x854.jpg"
            }
            className="card-img-top"
            alt={title}
            style={{ width: "100%", height: "180px", objectFit: "cover" }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={url} target="_blank" rel="noreferrer" className="btn btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Navitems;
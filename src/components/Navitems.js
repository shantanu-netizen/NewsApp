import React, { Component } from "react";

export class Navitems extends Component {
  render() {
    let { title, description, imageUrl, url } = this.props;
    return (
      <div className="card h-100">
        <div style={{ overflow: "hidden" }}>
          <img
            src={imageUrl}
            className="card-img-top"
            alt={title}
            style={{ height: "200px", objectFit: "cover" }}
          />
        </div>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text flex-grow-1">{description}</p>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="btn btn-dark mt-auto"
          >
            Read More
          </a>
        </div>
      </div>
    );
  }
}

export default Navitems;

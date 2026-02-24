import React, { Component } from "react";

export class About extends Component {
  render() {
    return (
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card p-4 shadow-sm border-0">
              <h2 className="mb-4">About Global News</h2>
              <p className="lead mb-4">
                Your trusted source for curated, high-quality news headlines from around the globe.
              </p>
              <div className="content">
                <p>
                  <strong>Global News</strong> is a cutting-edge news aggregator built with a focus on speed, 
                  clarity, and modern user experience. Our mission is to provide you with the most relevant 
                  headlines in a format that's easy to digest, whether you're on a desktop or a mobile device.
                </p>
                <h5 className="mt-4 fw-bold">Key Features:</h5>
                <ul className="list-unstyled mt-3">
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i> 🚀 <strong>Real-time Headlines:</strong> Stay updated with the latest news.</li>
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i> 📱 <strong>Fully Responsive:</strong> Optimized for all screen sizes.</li>
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i> 🎨 <strong>Clean UI:</strong> Minimalist design for better focus.</li>
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i> 📄 <strong>Easy Pagination:</strong> Browse through news history effortlessly.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;

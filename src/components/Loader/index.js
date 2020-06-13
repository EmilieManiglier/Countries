import React from 'react';

import './loader.scss';

const Loader = () => (
  <div className="loader">
    <div className="circle" />
    <div className="circle" />
    <div className="circle" />
    <div className="shadow" />
    <div className="shadow" />
    <div className="shadow" />
    <span className="loading">Loading</span>
  </div>
);

export default Loader;

import React from 'react';

import './flagDetail.scss';

const FlagDetail = () => (
  <div className="detail-container">
    <a href="/" type="button" className="link-back">Back</a>

    <div className="detail-wrapper">
      <div>
        <img src="https://restcountries.eu/data/col.svg" alt="" className="detail-flag" />
      </div>

      <div className="detail-content">
        <h2 className="detail-title">Colombia</h2>

        <div className="detail">
          <div className="detail-info">
            <ul>
              <li className="info-li"><span className="info-label">Native Name :</span> Colombia</li>
              <li className="info-li"><span className="info-label">Population :</span> xxxxx</li>
              <li className="info-li"><span className="info-label">Region :</span> Americas</li>
              <li className="info-li"><span className="info-label">Sub Region :</span> South America</li>
              <li className="info-li"><span className="info-label">Capital :</span> xxxx</li>
            </ul>
          </div>

          <div className="detail-info">
            <ul>
              <li className="info-li"><span className="info-label">Top Level Domain :</span> .col</li>
              <li className="info-li"><span className="info-label">Currencies :</span> Colombia pesos (COP, $)</li>
              <li className="info-li"><span className="info-label">Languages :</span> Spanish, xxx, xxx</li>
            </ul>
          </div>

          <div className="detail-info borders">
            <span className="info-label">Border Countries :</span>
            <div className="border-countries">
              <div className="border">BRA</div>
              <div className="border">ECU</div>
              <div className="border">PAN</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
);

export default FlagDetail;

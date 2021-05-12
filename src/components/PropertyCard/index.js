import React from 'react'
import './styles.scss'
import notfound from '../../images/notfound.png'
import { Link } from  'react-router-dom';

const noData = 'No data available.';

const PropertyCard = ({property}) =>
    <li key={property.id} className="property card" >
        <div class="card-image">
            <Link to={{pathname: '/propertyDetails/' + property.id, state: { selectedProperty: property }}}>
                <figure>
                    <img src={property.mainImageUrl ? property.mainImageUrl : notfound} alt={property.id} onError={(e)=>{e.target.onerror = noData; e.target.src=notfound}}/>
                    {property.financial &&
                        <figcaption><h3>${property.financial.listPrice.toLocaleString(undefined, {minimumFractionDigits:2})}</h3></figcaption>
                    }
                </figure>
            </Link>
        </div>
        <div className="card-content">
            <table className="table">
            <tbody>
                <tr>
                    <th>Year Built</th>
                    <td>{property.physical ? property.physical.yearBuilt : noData}</td>
                </tr>
                <tr>
                    <th>Monthly Rent</th>
                    <td>{property.financial ? '$'+property.financial.monthlyRent.toLocaleString(undefined, {minimumFractionDigits:2}) : noData}</td>
                </tr>
                <tr>
                    <th>Gross Yield %</th>
                    <td>{property.financial ? (((property.financial.monthlyRent * 12) / property.financial.listPrice)*100).toLocaleString(undefined, {minimumFractionDigits:2,maximumFractionDigits:2})+'%' : noData}</td>
                </tr>
            </tbody>
            </table>
            <div className="card-footer">
                <Link to={{pathname: '/propertyDetails/' + property.id, state: { selectedProperty: property }}}>
                    <button class="button is-info">
                        {property.address ? property.address.address1 : noData}
                        {property.address ? property.address.address2 : noData}
                    </button>
                </Link>
            </div>
        </div>
    </li>;

export default PropertyCard

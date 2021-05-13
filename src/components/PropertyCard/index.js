import React from 'react'
import './styles.scss'
import notfound from '../../images/notfound.png'
import {Link} from 'react-router-dom';

const noData = 'No data available.';

const PropertyCard = ({property}) =>
    <Link to={{pathname: '/propertyDetails/' + property.id, state: {selectedProperty: property}}}>

        <li key={property.id} className="property card">
            <div class="card-image">
                <figure>
                    <img src={property.mainImageUrl ? property.mainImageUrl : notfound} alt={property.id}
                         onError={(e) => {
                             e.target.onerror = noData;
                             e.target.src = notfound
                         }}/>
                    {property.financial &&
                    <figcaption>
                        <h3>${property.financial.listPrice.toLocaleString(undefined, {minimumFractionDigits: 2})}</h3>
                    </figcaption>
                    }
                </figure>
            </div>
            <div className="card-content">
                <table className="table">
                    <tbody>
                    <tr>
                        <td>Year Built</td>
                        <th>{property.physical ? property.physical.yearBuilt : noData}</th>
                    </tr>
                    <tr>
                        <td>Monthly Rent</td>
                        <th>{property.financial ? '$' + property.financial.monthlyRent.toLocaleString(undefined, {minimumFractionDigits: 2}) : noData}</th>
                    </tr>
                    <tr>
                        <td>Gross Yield %</td>
                        <th>{property.financial ? (((property.financial.monthlyRent * 12) / property.financial.listPrice) * 100).toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        }) + '%' : noData}</th>
                    </tr>
                    </tbody>
                </table>
                <div className="card-footer">
                    <button class="button is-info">
                        {property.address ? property.address.address1 : noData}
                        {property.address ? property.address.address2 : noData}
                    </button>
                </div>
            </div>
        </li>
    </Link>;

export default PropertyCard

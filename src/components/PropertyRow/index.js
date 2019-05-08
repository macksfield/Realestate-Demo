import React from 'react'
import './styles.scss'
import notfound from '../../images/notfound.png'
import {Link} from 'react-router-dom';

const noData = 'No data available.';

const PropertyRow = ({property}) =>
    <tr key={property.id} className="property">
        <td>
            <Link to={{pathname: '/propertyDetails/' + property.id, state: {selectedProperty: property}}}>
                <figure>
                    <img src={property.mainImageUrl ? property.mainImageUrl : notfound} alt={property.id}
                         onError={(e) => {
                             e.target.onerror = noData;
                             e.target.src = notfound
                         }}/>
                </figure>
            </Link>
        </td>

        <td>{property.financial ? '$' + property.financial.listPrice.toLocaleString(undefined, {minimumFractionDigits: 2}) : noData}</td>
        <td>{property.physical ? property.physical.yearBuilt : noData}</td>
        <td>{property.financial ? '$' + property.financial.monthlyRent.toLocaleString(undefined, {minimumFractionDigits: 2}) : noData}</td>
        <td>{property.financial ? (((property.financial.monthlyRent * 12) / property.financial.listPrice) * 100).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }) + '%' : noData}</td>
        <td>
            <div className="address">
                <span>{property.address ? property.address.address1 : noData}</span>
                <span>{property.address ? property.address.address2 : noData}</span>
            </div>
        </td>
    </tr>
;

export default PropertyRow

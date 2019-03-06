import React from 'react'
import './styles.css'

const Property = ({property}) =>
    <div key={property.id} className="col-sm-6 col-md-3">
        <div className="property">
            <img src={property.mainImageUrl} alt={property.id} />
            <div className="image_overlay"/>

            <div className="stats">
                <div className="stats-container">
                    {/* <span className="property_price">{property.financial.listPrice}</span> */}
                    <span className="property_name">{property.address.address1}</span>
                    <p>{property.description}</p>
                </div>
            </div>
        </div>
    </div>;

export default Property

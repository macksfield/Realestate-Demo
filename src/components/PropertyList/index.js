import React from 'react'
import Property from '../Property'

const PropertyList = ({properties}) =>
  <div className="row mt-3">
  {console.log(properties)}
      {properties.map(property => {
          console.log(properties, property);
          return <Property key={property.id} property={property} />
        }
      )}
  </div>;

export default PropertyList

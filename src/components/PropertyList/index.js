import React from 'react'
import PropertyCard from '../PropertyCard'
import './styles.scss'

const PropertyList = ({properties}) =>
  <ul id="propertyList">
      {properties.map(property => {
          return (
            <PropertyCard key={property.id} property={property}/>
          )
        }
      )}
  </ul>;

export default PropertyList

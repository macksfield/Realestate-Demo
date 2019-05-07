import React from 'react'
import Property from '../Property'
import './styles.scss'

const PropertyList = ({properties}) =>
  <ul id="propertyList">
      {properties.map(property => {
          return (
            <Property key={property.id} property={property}/>
          )
        }
      )}
  </ul>;

export default PropertyList

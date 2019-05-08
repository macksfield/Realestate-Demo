import React from 'react'
import {withRouter} from 'react-router-dom';
import ImageCarousel from '../../components/ImageCarousel';
import './styles.scss'

const PropertyDetails = ({properties, location}) =>
  <div>
      <div className="addressDetails">
          <h2>{location.state.selectedProperty.address.address1}</h2>
          <h2>{location.state.selectedProperty.address.address2}</h2>
          <h2>{location.state.selectedProperty.address.city}, {location.state.selectedProperty.address.state} {location.state.selectedProperty.address.zip}</h2>
      </div>
      <ImageCarousel images={location.state.selectedProperty.resources.photos} />
  </div>;

export default withRouter(PropertyDetails)
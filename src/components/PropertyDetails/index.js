import React from 'react'
import {withRouter} from 'react-router-dom';
// import './styles.scss'

const PropertyDetails = ({properties, location}) =>
  <div>
      {location.state.selectedProperty.id}
  </div>;

export default withRouter(PropertyDetails)
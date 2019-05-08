import React from 'react'
import {withRouter} from 'react-router-dom';
import ImageCarousel from '../../components/ImageCarousel';
import './styles.scss'
import notfound from '../../images/notfound.png'

const PropertyDetails = ({properties, location}) =>
    <div>
        <div className="addressDetails">
            <h2>{location.state.selectedProperty.address.address1}</h2>
            <h2>{location.state.selectedProperty.address.address2}</h2>
            <h2>{location.state.selectedProperty.address.city}, {location.state.selectedProperty.address.state} {location.state.selectedProperty.address.zip}</h2>
        </div>
        <div className="imageDetails">
            {location.state.selectedProperty.resources ?
                <ImageCarousel images={location.state.selectedProperty.resources.photos}/> :
                <img className="notfound" src={notfound} alt="No Images Found"/>
            }
        </div>
    </div>;

export default withRouter(PropertyDetails)


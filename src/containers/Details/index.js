import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import * as propertyActions from '../../actions/property'
import {connect} from 'react-redux'
import PropertyDetails from '../../components/PropertyDetails';

class Details extends Component {
  componentWillMount() {
    this.props.actions.getProperties()
  }

  render() {
    const {properties} = this.props;

    return (
      <div className="details">
        <div className="header">
          <h1>Realestate Demo</h1>
        </div>
        <PropertyDetails properties={properties} />
      </div>
    )
  }
}

export default connect(
  state => ({
    properties: state.property.properties,
  }),
  dispatch => ({
    actions: bindActionCreators(propertyActions, dispatch)
  })
)(Details)


import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import * as propertyActions from '../../actions/propertyActions'
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
        <PropertyDetails properties={properties} />
      </div>
    )
  }
}

export default connect(
  state => ({
    properties: state.propertyReducer.properties,
  }),
  dispatch => ({
    actions: bindActionCreators(propertyActions, dispatch)
  })
)(Details)


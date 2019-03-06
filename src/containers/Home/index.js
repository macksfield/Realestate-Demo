import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import PropertyList from '../../components/PropertyList'
import * as propertyActions from '../../actions/property'
import {connect} from 'react-redux'
// import Property from '../../components/Property';

class Home extends Component {
  componentWillMount() {
    this.props.actions.getProperties()
  }

  render() {
    const {properties} = this.props;

    return (
      <div className="home mt-5">
        <div className="row">
          <div className="col-12">
            <h2 className="mb-3">Realestate Demo</h2>
          </div>
        </div>
        <PropertyList properties={properties} />
      </div>
    )
  }
}

export default connect(
  state => ({
    properties: state.property.properties
  }),
  dispatch => ({
    actions: bindActionCreators(propertyActions, dispatch)
  })
)(Home)

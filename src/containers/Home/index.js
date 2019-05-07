import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import PropertyList from '../../components/PropertyList'
import PropertyGrid from '../../components/PropertyGrid'
import * as propertyActions from '../../actions/property'
import {connect} from 'react-redux'

class Home extends Component {
  componentWillMount() {
    this.props.actions.getProperties()
    console.log('home'+this.props);
  }

  render() {
    const {properties, actions} = this.props;

    return (
      <div className="home">
        <div className="header">
          <h1>Realestate Demo</h1>
        </div>
        {/* {this.props.listView === true ? <PropertyList properties={properties} propertyDetails={actions.propertyDetails} /> : <PropertyGrid properties={properties} propertyDetails={actions.propertyDetails}/>} */}
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

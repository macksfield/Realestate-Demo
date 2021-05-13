import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import PropertyList from '../../components/PropertyList'
import PropertyGrid from '../../components/PropertyGrid'
import * as propertyActions from '../../actions/propertyActions'
import * as switchView from '../../actions/viewActions'
import {connect} from 'react-redux'


class Home extends Component {
    componentWillMount() {
        this.props.actions.propertyActions.getProperties()
    }

    render() {
        const {properties, cardView, actions} = this.props;

        return (
            <div className="home">
                <div className="controls">
                    <button className={"button"} onClick={() => actions.switchView.viewActions(cardView ? false : true)}>{cardView ? 'List View' : 'Card View'}</button>
                </div>
                {cardView === true ?
                    <PropertyList properties={properties} propertyDetails={actions.propertyDetails}/> :
                    <PropertyGrid properties={properties} propertyDetails={actions.propertyDetails}/>}
            </div>
        )
    }
}

export default connect(
    state => ({
        properties: state.propertyReducer.properties,
        cardView: state.viewReducer.cardView
    }),
    dispatch => ({
        actions: {
            propertyActions: bindActionCreators(propertyActions, dispatch),
            switchView: bindActionCreators(switchView, dispatch),
        }
    })
)(Home)

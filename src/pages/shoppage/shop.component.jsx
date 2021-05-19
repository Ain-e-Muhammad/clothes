import React, { Component } from 'react';
import CollectionPreview from '../../components/preview-collection/preview-collection.component'
import {connect} from 'react-redux'
import {updateCollections} from '../../redux/shop/shop.actions'
import {loadData} from '../../redux/shop/shop.actions';
import {createStructuredSelector} from 'reselect'
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors'


class shopPage extends Component {
    unsubscribeFromSnapshot = null

    componentDidMount(){
        
        updateCollections()
    }

    render() { 
        const {collections}= this.props
        return ( 
            <div className="shop-page">
                {
                    collections.map( ({id, ...otherCollectionProps}) => {
                        return <CollectionPreview key = {id} {...otherCollectionProps}/>
                    })
                }
            </div>
         );
    }
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})
 
export default connect(mapStateToProps, loadData)(shopPage);
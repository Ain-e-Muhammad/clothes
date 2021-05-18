import React, { Component } from 'react';
import CollectionPreview from '../../components/preview-collection/preview-collection.component'
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'
import {connect} from 'react-redux'
import { updateCollections } from '../../redux/shop/shop.actions';
import {createStructuredSelector} from 'reselect'
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors'

class shopPage extends Component {
    unsubscribeFromSnapshot = null

    componentDidMount(){
        const{updateCollections} = this.props
        const collectionRef = firestore.collection('collections')
        collectionRef.onSnapshot(async (snapshot) => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            updateCollections(collectionsMap)
        })
    }

    render() { 
        const {collections}= this.props
        return ( 
            <div className="shop-page">
                {
                    // console.log(collections)
                    collections.map( ({id, ...otherCollectionProps}) => {
                        return <CollectionPreview key = {id} {...otherCollectionProps}/>
                    })
                }
            </div>
         );
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateCollections: (collectionsMap) => {
        dispatch(updateCollections(collectionsMap))
    }      
})

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})
 
export default connect(mapStateToProps, mapDispatchToProps)(shopPage);
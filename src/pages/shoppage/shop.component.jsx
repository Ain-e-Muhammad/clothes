import React, { Component } from 'react';
import SHOP_DATA from "./shop.data"
import CollectionPreview from '../../components/preview-collection/preview-collection.component'

class shopPage extends Component {
    constructor(props){
        super(props)
        this.state={
            collection: SHOP_DATA
        }
    }
    render() { 
        const {collection}= this.state
        return ( 
            <div className="shop-page">
                {
                    collection.map( ({id, ...otherCollectionProps}) => {
                        return <CollectionPreview key = {id} {...otherCollectionProps}/>
                    })
                }
            </div>
         );
    }
}
 
export default shopPage;
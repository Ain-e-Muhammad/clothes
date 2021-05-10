import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'

class Directory extends Component {
    constructor(){
        super();
        this.state = {
            sections: [
                {
                  title: 'hats',
                  imageUrl: `${process.env.PUBLIC_URL}hats.png`,
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'jackets',
                  imageUrl: `${process.env.PUBLIC_URL}jackets.png`,
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: `${process.env.PUBLIC_URL} sneakers.png`,
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: `${process.env.PUBLIC_URL}  womens.png `,
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl: `${process.env.PUBLIC_URL} men.png`,
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/men'
                }
              ]
        }
    }
    render() { 
        return ( 
            <div className="directory-menu">
                {
                    this.state.sections.map ( (sec) => {
                        return <MenuItem title={sec.title} image={sec.imageUrl} key={sec.id} size={sec.size}/>
                    })
                }
            </div>
            
         );
    }
}
 
export default Directory;
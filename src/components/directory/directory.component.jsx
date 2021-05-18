import React from 'react';
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'
import {connect} from 'react-redux'
import{selectDirectorySections} from '../../redux/directory/directory.selectors'
import { createStructuredSelector } from 'reselect'

const Directory = ({sections}) => {
    return( 
      <div className="directory-menu">
          {
            sections.map ( (sec) => {
              return <MenuItem title={sec.title} image={sec.imageUrl} key={sec.id} size={sec.size}/>
            })
          }
      </div>    
    )
}
 
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);
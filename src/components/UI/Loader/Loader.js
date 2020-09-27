import React from 'react'
import classes from './Loader.module.css'

//from https://loading.io/css
const Loader = (props) => (
  <div className={classes.center}>
    <div className={classes.Loader}>
      <div /><div />
    </div>
  </div>
  
)

export default Loader
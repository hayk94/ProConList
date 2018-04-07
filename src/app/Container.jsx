import React from 'react'
import { connect } from 'react-redux'

import List from './List'

const Container = props => <div className='container'>
  <List data={props.pros} />
  <List data={props.cons} />
</div>

export default connect(state => ({
  pros: state.pros,
  cons: state.cons
}))(Container)

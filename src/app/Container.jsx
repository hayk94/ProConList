import React from 'react'
import { connect } from 'react-redux'

import List from './List'

const Container = props => <div id='bodyContainer' className=''>
  <div id='contentContainer' className=''>
    <h1 id='mainTitle'>Should I eat at McDonalds?</h1>
    <div id='listsContainer' className=''>
      <div id='leftList' className='listContainer'>
        <h6 id='' className='listTitle'>PROS</h6>
        <List data={props.pros} />
      </div>
      <div className='listContainer'>
        <h6 id='' className='listTitle'>CONS</h6>
        <List data={props.cons} />
      </div>
    </div>
  </div>
</div>

export default connect(state => ({
  pros: state.pros,
  cons: state.cons
}))(Container)

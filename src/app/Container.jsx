import React from 'react'
import { connect } from 'react-redux'

import List from './List'
import Title from './List/Title'

import editPro from './redux/actions/editPro'
import editCon from './redux/actions/editCon'
import dragPro from './redux/actions/dragPro'
import dragCon from './redux/actions/dragCon'

const Container = props => <div id='bodyContainer' className=''>
  <div id='contentContainer' className=''>
    <h1 id='mainTitle'>Should I eat at McDonalds?</h1>
    <div id='listsContainer' className=''>
      <div id='leftList' className='listContainer'>
        <Title>PROS</Title>
        <List data={props.pros} editItem={props.editPro} dragItem={props.dragPro} />
      </div>
      <div className='listContainer'>
        <Title>CONS</Title>
        <List data={props.cons} editItem={props.editCon} dragItem={props.dragCon} />
      </div>
    </div>
  </div>
</div>

export default connect(state => ({
  pros: state.pros,
  cons: state.cons
}), {
  editPro,
  editCon,
  dragPro,
  dragCon
})(Container)

import React from 'react'

import { Subscribe } from 'unstated'

import Pros from './Containers/Pros'
import Cons from './Containers/Cons'

import List from './List'
import Title from './List/Title'

const View = props => <Subscribe to={[Pros, Cons]}>
  {
    (pros, cons) => <div id='bodyContainer' className=''>
      <div id='contentContainer' className=''>
        <h1 id='mainTitle'>Should I eat at McDonalds?</h1>
        <div id='listsContainer' className=''>
          <div id='leftList' className='listContainer'>
            <Title>PROS</Title>
            <List data={pros.state.items} editItem={pros.editItem} dragItem={pros.dragItem} />
          </div>
          <div className='listContainer'>
            <Title>CONS</Title>
            <List data={cons.state.items} editItem={cons.editItem} dragItem={cons.dragItem} />
          </div>
        </div>
      </div>
    </div>
  }
</Subscribe>

export default View

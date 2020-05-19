import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'
import Homepage from '../../../pages/index'

describe('snapshot', () => {
  it('should match with snapshot', () => {
    const component = shallow(<Homepage />)
    expect(component).toMatchSnapshot()
  })
})

import { compose, withHandlers, lifecycle, withState, withProps, mapProps } from 'recompose'
import React from 'react'
import withLayout from '../hocs/withLayout'

import IndexPage from '../components/IndexPage'


export default compose(
	withLayout('style1'),
	withState('isOpen','setIsOpen', false),
	withHandlers({
		click: function(props) {
			return function (e) {
				props.setIsOpen(true)
			}
		},
		clickArrow: (props) => (val) => (e) => {
				e.preventDefault()
				props.setIsOpen(true)
		}
	}),
	// lifecycle({
	// 	componentDidMount() {
	// 		this.props.setIsOpen(true)
	// 	},
	// }),
	// withProps(function(ownProps) {
	// 	return {
	// 		number: ownProps.number + 1
	// 	}
	// }),
	// mapProps(function(ownProps) {
	// 	return {
	// 		name: 'name '+ ownProps.number
	// 	}
	// })
)(IndexPage)


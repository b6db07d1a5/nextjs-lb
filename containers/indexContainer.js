import { compose, withHandlers, withState, withProps } from 'recompose'

import withLayout from '../hocs/withLayout'

import IndexPage from '../components/IndexPage'


export default compose(
	withLayout,
	withState('value', 'updateValue', ''),
	withProps(function() {
		return {
			newProp: 'prop'
		}
	}),
  withHandlers({
    onClickTemp: props => event => {
      props.updateValue(props.value + 1)
    }
  })
)(IndexPage)


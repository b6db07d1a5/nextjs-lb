import { compose, withHandlers, withState } from 'recompose'

import page from '../hocs/page'

function CompA() {
	return (
		<div>
			<span> CompAAA </span>
		</div>
	)
}

function Enhance({ children }) {
	return (
			<div style={{width: 200, height: 50, backgroundColor: 'red'}}>
				{children}
			</div>
	)

}


function gg(props) {
  return (
    <div>
		<Enhance>
			<CompA />
		</Enhance>
    	<button onClick={props.onClickTemp}> AAA </button>
    	content {props.value}
    </div>
  )
}

function testLayout() {
	return (
		<div> aaaa </div>
	)
}

export default compose(
  page,
  withState('value', 'updateValue', ''),
  withHandlers({
    onClickTemp: props => event => {
      console.log('GGGGG')
      props.updateValue(props.value + 1)
    }
  })
)(testLayout)

import React from 'react'
import MainLayout from '../components/layouts/MainLayout'

// export default function(param) {
// 	return function(WrappedComponent) {
// 		return function (props) {
// 				return (
// 					<MainLayout>
// 						<WrappedComponent {...props} />
// 					</MainLayout>
// 				)
// 		}
// 	}
// }

export default function(WrappedComponent) {
  return class WithLayout extends React.Component {
    render() {
      return (
        <MainLayout>
          <WrappedComponent {...this.props} />
        </MainLayout>
      )
    }
  }
}



import React, { Component } from 'react'
import TabBarExample from './footerTab'

class Footer extends Component {
	constructor (props){
		super(props)
	}
	render(){
		return(
			<div id="public" style={{height: 'calc(100vh - 1rem)'}}>
				<div>{this.props.children}</div>
				<TabBarExample />
			</div>
		)
	}
}

export default  Footer
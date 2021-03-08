import React from 'react';
import ReactDOM from 'react-dom';

const modal_box_root = document.getElementById('modal_box')

class Modal extends React.Component {
	constructor(props)
	{
		super(props)
		this.el = document.createElement('div')
	}

  componentDidMount()
  {
    modal_box_root.appendChild(this.el);

  }
	render() {
		return ReactDOM.createPortal(this.props.children, this.el);

		// Remember this.el is the div and the 2nd param. in the
		// function is the element that the 1st param (in this case the children)
		// are going to be added to, so in final our modal will look like [[3]].
	}
}

export default Modal;

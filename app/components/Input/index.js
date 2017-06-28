import React from 'react';
import { connect } from 'react-redux';
import { UPDATE_FIELD } from './actionTypes';

// components
import InputStyled from './InputStyled';

class Input extends React.Component {
	constructor(props) {
		super(props);
		this.handleOnChange = this.handleOnChange.bind(this);
	}
	
	handleOnChange(value) {
		this.props.updateField(this.props.fieldId, value);
	}

	render() {
		return (
			<InputStyled
				placeholder={this.props.placeholder}
				name={this.props.name}
				onChange={event => this.handleOnChange(event.target.value)}
				value={this.props.fieldValue}
			>
			</InputStyled>
		)
	}
}

Input.propTypes = {
	placeholder: React.PropTypes.string,
	fieldId: React.PropTypes.string,
	fieldValue: React.PropTypes.string
}

const mapStateToProps = (state, props) => ({
	fieldValue: state.getIn(['fields', props.fieldId, 'value']),
});

const mapDispatchToProps = dispatch => ({
	updateField: (fieldId, value) => dispatch({ type: UPDATE_FIELD, fieldId, value })
});

export default connect(mapStateToProps, mapDispatchToProps)(Input);

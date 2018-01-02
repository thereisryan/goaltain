// src/containers/Goals/index.js

import React, { Component } from 'react';

class Goals extends Component {
	render() {
		if (this.props.loading) {
			return (
				<div>
					Loading...
				</div>
			);
		}

	return (
		<div className="Goals">
			{ this.props.goals.map((goal) => {
				return (
					<div>
						{ post.title }
					</div>
				);
			})}
		</div>
		);
	}
}

export defaul Goals;


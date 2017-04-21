var React = require('react');

class Popular extends React.Component {
	constructor (props) {
		super();
		this.state = {
			selectedLanguage: 'All',
		};

		this.updateLanguage = this.updateLanguage.bind(this);
	}
	updateLanguage(lang) {
		this.setState(function () {
			return {
				selectedLanguage: lang
			}
		})
	}
	render () {
		var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
		return(
			<ul className="languages">
				{languages.map(function(language) {
					return (
						<li
							style={language === this.state.selectedLanguage ? {color: '#d0021b'}: null}
							onClick={this.updateLanguage.bind(null, language)} 
							key={language}>
							{language}
						</li>
					)
				}, this)}
			</ul>
		)
	}
}

module.exports = Popular;
import { h, Component } from 'preact';
import { Items } from '../../containers/items'
import { CardGrid } from '../../components/cardgrid'

export default class Home extends Component {
	render() {
		return (
			<CardGrid images={[1, 2, 3, 4]}/>
		);
	}
}

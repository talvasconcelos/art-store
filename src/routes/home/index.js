import { h, Component } from 'preact';
import { Items } from '../../containers/items'
import { CardGrid } from '../../components/cardgrid'
import { productData } from '../../data.js'

export default class Home extends Component {
	render() {
		return (
			<CardGrid images={productData}/>
		);
	}
}

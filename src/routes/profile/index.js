import { h, Component } from 'preact';
import { Row, Col, Icon, Card } from "antd"
import { productData } from '../../data.js'

export default class Profile extends Component {
	state = {
		product: {}
	}

	componentDidMount() {
		this.setState({
			product: productData.find(e => e.id === +this.props.id)
		})
	}

	render({}, {product}) {
		return (
			<Row gutter={16}>
				<Col md={16}>
					<Card
						cover={
						<img
							alt="example"
							src={product.url}
						/>
						}>
					</Card>
				</Col>
				<Col md={8}>
					pic
				</Col>
			</Row>
		);
	}
}

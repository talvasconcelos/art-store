import { h, Component } from 'preact';
import { Row, Col, Icon, Card } from "antd"

export default class Profile extends Component {
	render({ id }, { time, count }) {
		return (
			<Row gutter={16}>
				<Col md={16}>
					<Card
						cover={
						<img
							alt="example"
							src="https://picsum.photos/400"
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

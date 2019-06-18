import { h, Component } from 'preact';
import { Router } from 'preact-router';

import { Layout, Row, Col, Typography, Icon, Divider } from "antd";
const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography

import Home from '../routes/home';
import Profile from '../routes/profile';
// import Home from 'async!./home';
// import Profile from 'async!./profile';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<Layout style={{minHeight: '100vh'}}>
				<Header style={{paddingLeft: '10px'}}>
				<img
					src={'http://sparkpay.pt/images/spark_logo_w.svg'}
					alt={"shopIcon"}
					style={{ height: 48 }}
				/>
				</Header>
				<Content style={{ padding: "0 30px", margin: '64px auto', height: "100%", maxWidth: '960px' }}>
					<Router onChange={this.handleRoute}>
						<Home path="/" />
						<Profile path="/profile/" id="0" />
						<Profile path="/profile/:id" />
					</Router>
					<Divider />
					<Row gutter={16}>
						<Col md={8}>
							<Typography>
								<Title level={3}>About</Title>
								<Paragraph>
								Model trained on Tensorflow on nude paintings from Wikiart.
								</Paragraph>
							</Typography>
						</Col>
						<Col md={8}>
							<Typography>
								<Title level={3}>Open Source</Title>
								<Paragraph>
								I used the following open-source projects:  BTCPay, Antd, Preact, NodeJS, ONNX, Tensorflow, Python.
								</Paragraph>
							</Typography>
						</Col>
						<Col md={8}>
							<Typography>
								<Title level={3}>Let's connect <Icon type="thunderbolt" /></Title>
								<Paragraph>
								Open a Lightning channel with me
								</Paragraph>
							</Typography>							
							<div>
								<svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 37 37" shape-rendering="crispEdges"><path fill="#ffffff" d="M0 0h37v37H0z"></path><path stroke="#000000" d="M0 0.5h7m1 0h1m5 0h3m1 0h2m2 0h1m2 0h2m1 0h1m1 0h7M0 1.5h1m5 0h1m1 0h2m1 0h3m5 0h3m2 0h3m1 0h1m1 0h1m5 0h1M0 2.5h1m1 0h3m1 0h1m1 0h3m2 0h4m1 0h1m3 0h1m5 0h1m1 0h1m1 0h3m1 0h1M0 3.5h1m1 0h3m1 0h1m2 0h3m1 0h5m1 0h2m3 0h2m1 0h1m2 0h1m1 0h3m1 0h1M0 4.5h1m1 0h3m1 0h1m1 0h1m2 0h2m3 0h1m2 0h1m1 0h1m4 0h2m2 0h1m1 0h3m1 0h1M0 5.5h1m5 0h1m2 0h5m1 0h2m4 0h1m1 0h2m5 0h1m5 0h1M0 6.5h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h7M9 7.5h3m1 0h1m2 0h2m1 0h1m2 0h1m1 0h5M0 8.5h1m2 0h6m1 0h1m1 0h1m1 0h2m2 0h1m5 0h1m3 0h2m2 0h1m1 0h3M1 9.5h1m3 0h1m3 0h1m1 0h2m1 0h1m1 0h1m1 0h1m1 0h3m2 0h2m4 0h2M1 10.5h1m1 0h5m1 0h2m2 0h7m1 0h1m1 0h2m2 0h3m3 0h2m1 0h1M1 11.5h1m1 0h3m1 0h2m3 0h3m1 0h1m1 0h6m1 0h1m7 0h1M2 12.5h1m1 0h1m1 0h1m2 0h1m2 0h6m2 0h2m1 0h1m2 0h2m1 0h3m1 0h4M2 13.5h4m1 0h2m1 0h2m1 0h1m1 0h2m1 0h1m4 0h1m2 0h3m2 0h1m1 0h1m2 0h1M0 14.5h1m1 0h2m2 0h2m5 0h4m2 0h1m1 0h1m2 0h1m3 0h1m2 0h1m1 0h1m1 0h1M0 15.5h2m1 0h2m3 0h1m1 0h1m1 0h2m2 0h1m2 0h2m1 0h3m3 0h1m1 0h1m2 0h2m1 0h1M0 16.5h3m1 0h1m1 0h2m2 0h1m2 0h1m1 0h1m1 0h5m2 0h5m2 0h1m1 0h2m1 0h1M0 17.5h1m4 0h1m1 0h1m1 0h4m1 0h1m3 0h2m3 0h5m1 0h3m1 0h1M3 18.5h4m1 0h1m4 0h1m2 0h3m4 0h1m1 0h12M1 19.5h1m3 0h1m1 0h2m2 0h1m2 0h3m1 0h1m1 0h1m3 0h5m1 0h4m2 0h1M1 20.5h2m2 0h4m3 0h1m4 0h1m6 0h5m1 0h2m1 0h1m2 0h1M1 21.5h5m4 0h6m1 0h3m2 0h2m2 0h1m1 0h4m2 0h1m1 0h1M0 22.5h5m1 0h3m4 0h3m4 0h2m1 0h2m1 0h1m5 0h1m1 0h1M2 23.5h1m1 0h2m2 0h1m3 0h1m1 0h2m2 0h1m1 0h1m2 0h1m1 0h2m1 0h5m1 0h3M6 24.5h8m1 0h1m1 0h1m2 0h1m3 0h2m8 0h1M0 25.5h3m1 0h1m2 0h1m3 0h4m2 0h4m1 0h1m1 0h4m2 0h1m1 0h4M0 26.5h10m4 0h2m4 0h1m1 0h1m1 0h1m1 0h3m1 0h4m2 0h1M0 27.5h1m9 0h2m2 0h1m1 0h1m1 0h2m2 0h5m1 0h2m2 0h3m1 0h1M0 28.5h1m2 0h4m3 0h1m2 0h3m3 0h2m1 0h3m2 0h8m1 0h1M8 29.5h1m1 0h3m4 0h2m1 0h3m2 0h1m2 0h1m3 0h1m1 0h2M0 30.5h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h3m1 0h2m1 0h2m1 0h1m1 0h1m1 0h1m1 0h3m1 0h1M0 31.5h1m5 0h1m1 0h1m2 0h5m4 0h6m2 0h1m3 0h1m3 0h1M0 32.5h1m1 0h3m1 0h1m1 0h2m1 0h1m1 0h2m1 0h1m1 0h3m1 0h1m1 0h2m1 0h7M0 33.5h1m1 0h3m1 0h1m1 0h1m4 0h1m8 0h4m1 0h1m2 0h2m1 0h2m1 0h1M0 34.5h1m1 0h3m1 0h1m2 0h1m1 0h1m2 0h1m2 0h4m1 0h1m3 0h2m2 0h1m1 0h2m1 0h2M0 35.5h1m5 0h1m6 0h1m1 0h1m1 0h2m1 0h1m1 0h4m7 0h1m1 0h2M0 36.5h7m1 0h3m1 0h1m1 0h1m1 0h1m2 0h1m4 0h2m1 0h8m1 0h1"></path></svg>
							</div>
						</Col>
					</Row>
				</Content>
				<Footer style={{ textAlign: "center", background: '#001529', color: '#fff' }}>
					AIrt ©2019 Created by talvasconcelos
				</Footer>
			</Layout>
		);
	}
}

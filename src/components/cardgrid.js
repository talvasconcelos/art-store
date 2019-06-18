import { Row, Col } from "antd"
import { ArtCard } from './artcard'

export const CardGrid = ({images}) => (
    <Row type={"flex"} justify={"center"} gutter={16}>
        {images.map((c, i) => {
            return (
                <Col xs={24} sm={12} lg={6}>
                    <ArtCard title={`Nude#${c.id}`} price={0.0003} key={c.id} url={c.url} />
                </Col>
            )
        })}
    </Row>
)
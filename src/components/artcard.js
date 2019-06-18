import { Card, Icon, Input } from 'antd'
import { Link } from 'preact-router/match'

const { Meta } = Card

export const ArtCard = ({ title, price, url }) => (
    <Card
        style={{marginBottom: 16}}
        cover={
        <img style={{maxWidth: '128px', margin: '32px auto'}}
            alt="example"
            src={url}
        />
        }
        actions={[
            <Icon type="share-alt" />,
            <Link href="/profile/0">
                <Icon type="shopping" />
            </Link>
        ]}
        extra={`BTC ${price}`}
        title='Nude'
    >
        <Meta
        title={title}
        description='This is an AI generated painting'
        />
    </Card>
  )
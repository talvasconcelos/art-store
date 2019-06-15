import { Component } from "preact";
import { ItemCard } from '../components/itemcard'

export class Items extends Component {
    state = {
        cards: [0, 1, 2]
    }
    render() {
        return(
            <div class="columns">
                {this.state.cards.map((c, i) => <ItemCard key={i} />)}
            </div>
        )
    }
}
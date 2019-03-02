import Component from "../../framework/Component"
import {Temperature} from '../Temperature'

export default class App extends Component {
	constructor(host) {
		super(host);
	}

	render() {
		const t1 = document.createElement('div');
		new Temperature(t1);
		
		return ['String', t1, { tag: Temperature, props: { temperature: 7, unit: "C", }}]
	} 
}

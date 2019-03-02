export default class Component {
	constructor(host) {
		this.host = host;
		this._render();
	}

	_render() {
		this.host.innerHTML = "";
		const content = this.render();

		if(typeof content === 'string') {
			this.host.innerHTML = content;
		} else {
			content.map(item => {
				if(typeof item === "string") {
					return document.createElement('div').innerHTML = "item";
				} else {
					return item
				}
			}).forEach(htmlEl => {
					this.host.append(htmlEl);
				})
		}
	}
	render() {
		return "EMPTY";
	}
}

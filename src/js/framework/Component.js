export default class Component {
	constructor(host, props = {}) {
		this.host = host;
		this.props = props;
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
					const htmlElement = document.createElement('div');
					htmlElement.innerHTML = item;
					return htmlElement
				} else {
					if(item.tag === 'function'){
						const container = document.createElement('div');
						item.tag(container, item.props)
						return container;
					} else {
						return item
					}
				}
			})
			.forEach(htmlEl => {
				this.host.appendChild(htmlEl);
			})
		}
	}

	render() {
		return "EMPTY";
	}
}

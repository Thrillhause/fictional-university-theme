import $ from 'jquery';

class MyNotes {
	constructor() {
		this.events();
	}
	events() {
		$('.delete-note').on('click', this.deleteNote);
	}
	deleteNote() {}
}

export default MyNotes;

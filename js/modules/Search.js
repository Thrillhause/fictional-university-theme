import $ from 'jquery';

class Search {
	constructor() {
		this.openButton = $('.js-search-trigger');
		this.closeButton = $('.search-overlay__close');
		this.searchOverlay = $('.search-overlay');
		this.searchField = $('#search-term');
		this.isOverlayOpen = false;
		this.events();
		this.typingTimer;
	}

	events() {
		this.openButton.on('click', this.openOverlay.bind(this));
		this.closeButton.on('click', this.closeOverlay.bind(this));
		$(document).on('keydown', this.keyPressDispatcher.bind(this));
		this.searchField.on('keydown', this.typingLogic.bind(this));
	}

	typingLogic() {
		clearTimeout(this.typingTimer);
		this.typingTimer = setTimeout(function() {
			console.log('Testingtimer');
		}, 2000);
	}
	openOverlay() {
		this.searchOverlay.addClass('search-overlay--active');
		$('body').addClass('body-no-scroll');
		this.isOverlayOpen = true;
	}
	closeOverlay() {
		this.searchOverlay.removeClass('search-overlay--active');
		$('body').removeClass('body-no-scroll');
		this.isOverlayOpen = false;
	}
	keyPressDispatcher(e) {
		if (e.keyCode == 83 && !this.isOverlayOpen) {
			this.openOverlay();
		}
		if (e.keyCode == 27 && this.isOverlayOpen) {
			this.closeOverlay();
		}
	}
}

export default Search;

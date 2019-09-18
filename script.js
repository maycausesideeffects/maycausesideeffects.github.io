
var items = document.querySelectorAll(".item, .item2, .item3");

for (var i = 0; i < items.length; i++) {

	items[i].onmouseout = function(){

		var text = this.parentElement.querySelector(".moving-text");

		if (text != null) {
			TweenMax.to(text, .75, {autoAlpha: 0});
		}

	}

	items[i].onmouseover = function(){

		var text = this.parentElement.querySelector(".moving-text");

		if (text != null) {
			TweenMax.to(text, .75, {autoAlpha: 1});
		}

	}

	items[i].onmousemove = function(e) {

		var text = this.parentElement.querySelector(".moving-text");

		if (text != null) {
			var x = e.clientX;
			var y = e.clientY;
			var elCoords = text.getBoundingClientRect();
			var xOffset = x - elCoords.width / 2;
			var yOffset = y - elCoords.height / 2;
			text.style.transform = "translate(" + xOffset + "px, " + yOffset + "px)";

		}

	}

}
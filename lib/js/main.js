// get the first form
const form = document.getElementsByClassName("form_container")[0];
// get all inputs of the form
const inputs = form.getElementsByTagName("input");
const submitButton = document.getElementById("submit_button");

// title input of form
const title = document.getElementById("main_title");
const titleInput = document.getElementById("title_input");

const storyResult = document.getElementById("story_result");

titleInput.addEventListener("input", event => {
	title.textContent = event.target.value;
});

submitButton.addEventListener("click", event => {
	event.preventDefault();
	if ([...inputs].some(i => i.value === "")) {
		alert("Please fill in all fields");	
		return;
	}

	const length = 500;

	// EC: using javascript only and without jquery
	// let opacity = 1;
	// // how much to decrease the opacity each interval
	// const step = 0.05;
	// let fade = setInterval(function() {
	// 	// stop once opacity is 0
	// 	if (opacity <= 0) {
	// 		clearInterval(fade);
	// 		form.style["display"] = "none";
	// 	}
	// 	opacity -= step;
	// 	form.style["opacity"] = opacity;
	// }, length / (1/step));

	// EC: using css and without jquery
	// form.classList.toggle("fade");
	// setTimeout(() => form.visibility = "hidden", length);
	
	// EC: jquery
	$(".form_container").fadeOut(length);

	storyResult.textContent = "Last night I ate a " + inputs["noun"].value
		+ ", and today I just had to " + inputs["verb"].value
		+ ". What a " + inputs["adjective"].value + " day!";
});

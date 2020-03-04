function myFunction  () {
				document.getElementById("myDropdown").classList.toggle("show");
			}

			window.onclick = function(event) {
				if (!event.target.matches('.dropbtn')) {
					let dropdowns = document.getElementsByClassName("dropdown-content");
					for (let i=0; i < dropdowns.length; i++) {
						let openDropdown = dropdowns[i];
						if (openDropdown.classList.contains('show')) {
							openDropdown.classList.remove('show');
						}
					}
				}
			}
			window.addEventListener("load", function() {
				let button1 = document.getElementById("default");
				let button2 = document.getElementById("blues");
				let button3 = document.getElementById("nineties");
				button1.addEventListener("click", function (event) {
					document.getElementById("style").href = "style1.css";
				});
				button2.addEventListener("click", function (event) {
					document.getElementById("style").href = "style2.css";
				});
				button3.addEventListener("click", function (event) {
					document.getElementById("style").href = "style3.css";
				});
			});
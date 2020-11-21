		(function () { //IIFE

			//Les boutons du menu
			var leCheckBox = document.querySelector("input");
			var lesBoutons = document.querySelectorAll(".menu a");
			var nbBoutons = lesBoutons.length;


			//Ajout d'un gestionnaire d'événement permettant de décocher la case à cocher...
			for (var i = 0; i < nbBoutons; i++) {
				lesBoutons[i].addEventListener("click", function () {
					leCheckBox.checked = false;
				}, false);
			}

		})(); //Fin IIFE
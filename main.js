

var numberOfPainoKeys=document.querySelectorAll(".key").length;


for(var i=0;i<numberOfPainoKeys;i++)
{
	document.querySelectorAll(".key")[i].addEventListener("click",function () {
	

		var buttonInnerHTML=this.innerHTML;
		//alert(buttonInnerHTML);

		makeSound(buttonInnerHTML);

		buttonAnimation(buttonInnerHTML);

		
	});
}

function makeSound(key) {

	switch (key) {
			case 'a':
				var paino1 =new Audio("wk1.wav");
				paino1.play(); 
				break;

			case 'b':
				 var blackkey1 =new Audio("bk1.wav");
				 blackkey1.play();
				 break;
			case 'c':
				var paino2 =new Audio("wk2.wav");
				paino2.play(); 
				break;

			case 'd':
				 var blackkey2 =new Audio("bk2.wav");
				 blackkey2.play();
				 break;
			case 'e':
				var paino3 =new Audio("wk3.wav");
				paino3.play();
				break;

			case 'f':
				var paino4 =new Audio("wk4.wav");
				paino4.play();
				break;

			case 'g':
				var blackkey3 =new Audio("bk3.wav");
				 blackkey3.play();
				 break;

			case 'h':
				var paino5 =new Audio("wk5.wav");
				paino5.play();
				break;

			case 'i':
				var blackkey4 =new Audio("bk4.wav");
				 blackkey4.play();
				break;

			case 'j':
				var paino6 =new Audio("wk6.wav");
				paino6.play();
				break;

			case 'k':
				var blackkey5 =new Audio("bk5.wav");
				 blackkey5.play();
				break;

			case 'l':
				var paino7 =new Audio("wk7.wav");
				paino7.play();
				break;

			case 'm':
				var paino8 =new Audio("wk8.wav");
				paino8.play();
				break;

			case 'n':
				var blackkey6 =new Audio("bk6.wav");
				 blackkey6.play();
				break;

				case 'o':
				var paino9 =new Audio("wk9.wav");
				paino9.play();
				break;

			case 'p':
				var blackkey7 =new Audio("bk7.wav");
				 blackkey7.play();
				break;

			case 'q':
				var paino10 =new Audio("wk10.wav");
				paino10.play();
				break;
			default:
				// statements_def
				break;
		}


}


function buttonAnimation(currentKey)
{
	var activeButton=document.querySelector("."+currentKey);
	activeButton.classList.add("pressed");
	setTimeout(function (){
		activeButton.classList.remove("pressed");
	},100);
}
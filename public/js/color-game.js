var numSquare = 9;
var colorPicked = document.querySelector(".colorPicked");
var squares = document.querySelectorAll(".square");
var mode = document.querySelectorAll(".mode");
var reset = document.querySelector(".reset");
var answer = document.querySelector("#answer");
var h1 = document.querySelector("h1");
var title = document.querySelector(".title");

      generateRandColor();

      // setting up event listener for each square
      for (var i = 0; i < numSquare; i++) {
            squares[i].addEventListener('click', function() {
                  if (this.style.background === colorPicked.textContent) {
                        for (var i = 0; i < numSquare; i++) {
                              squares[i].style.background = this.style.background;
                              h1.style.background = this.style.background;
                        }
                        answer.textContent = "Correct";
                  }else {
                        this.style.background = "#232323";
                        answer.textContent = "Try Again";
                  }
            });
      }
      // new color event listener
      reset.addEventListener('click', generateRandColor);

      // setting up event listener to the modes ( easy, medium, hard)
      for (var i = 0; i < mode.length; i++) {
            mode[i].addEventListener('click',function(){
                  if (!(this.classList.contains("selected"))) {
                        for (var j = 0; j < mode.length; j++)
                              mode[j].classList.remove("selected");
                        if(this.textContent === "Easy"){
                              this.classList.add("selected");
                              numSquare = 3;
                        }else if(this.textContent === "Medium"){
                              this.classList.add("selected");
                              numSquare = 6;
                        }else {
                              this.classList.add("selected");
                              numSquare = 9;
                        }
                        generateRandColor();
                  }
            });
      }

      function generateRandColor(){
            h1.style.background = "steelblue";
            answer.textContent= " ";
            for (var i = 0; i < 9; i++) {
                  squares[i].style.display = "none";
            } // remove all the squares
            var arr = [];
            for (var i = 0; i < numSquare; i++) {
                  squares[i].style.display = "block";
                  squares[i].style.background = randColor();
                  title.style.background = randColor();
                  arr.push(squares[i].style.background);
            }
            colorPicked.textContent = arr[correctColor()]; // selecting the right answer for display
      }

      function randColor() {
            var red = Math.floor(Math.random() * 256);
            var green = Math.floor(Math.random() * 256);
            var blue = Math.floor(Math.random() * 256);
            return "rgb(" + red + ", " + green + ", " + blue + ")";
      }

      function correctColor(){ // a random number for the correct answer
            return Math.floor(Math.random() * numSquare);
      }

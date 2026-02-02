$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
   // toggleGrid();


    // TODO 2 - Create Platforms
  createPlatform(500, 0, 20, 290);
   createPlatform(840, 340, 50, 50, "red");
   createPlatform(200, 0, 30, 280);
   createPlatform(650, 400, 50, 50, "red");
   createPlatform(400, 0, 20, 290);
   createPlatform(500, 480, 50, 50, "red");
   createPlatform(300, 0, 20, 290);
   createPlatform(300, 580, 50, 50, "red");
   createPlatform(100, 0, 20, 290);
   createPlatform(130, 630, 50, 50, "red");
    // TODO 3 - Create Collectables
   createCollectable("steve", 840, 300);
   createCollectable("diamond", 680, 170, 0.5, 0.7);


    
    // TODO 4 - Create Cannons
    createCannon("top", 200, 1000);
    createCannon("right", 300, 900);
    createCannon("top", 400, 1000);
    createCannon("right", 600, 900);
    createCannon("top", 600, 1000);
    createCannon("right", 450, 900);



    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});

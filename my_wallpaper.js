//your parameter variables go here!
let rect_width  = 20; // does this show up online
let rect_height = 20;
let paramter1 = 255; 
let paramter2 = 0;   
let paramter3 = 255;   
let paramter4 = 0;
let paramter5 = 255;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_LANDSCAPE);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 400;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  rect(40 ,40, rect_width, rect_height);
  noStroke();
  fill(paramter5);
  rect(0, 0,200,200);
  rect(200,0,200,200);
  var a = 40;
  

  
  draw_ellipses(0,0);
  draw_ellipses2(200,0);
  
// stroke(1);
// ellipse(100,100,180,200);
// fill(random(0,255),random(0,255),random(0,255));
// strokeWeight(10);
// quad(20,20,40,80,180,20,160,80,80,40);
// line(40,120,140,120);
// noFill();
// strokeWeight(5);
// bezier(150, 100, 170,145, 150, 155, 140,160, 80);
// var eyebrowX = 40;
// var eyebrowY= 10;
// var eyebrowX2 = 110;
// var eyebrowY2= 10;
// line(eyebrowX2,eyebrowY2+20,eyebrowX2+40,eyebrowY2);
// line(eyebrowX,eyebrowY,eyebrowX+40,eyebrowY+20);

// fill(255);
// strokeWeight(2);
// triangle(160,40,120,55,155  ,55);
// triangle(40,40,80,55,45,55);

} 
function draw_ellipses(numX,numY) {
 
  for (let i = 2.5; i < 42; i = i + 5) {
    for (let a = 2.5; a < 42; a = a + 5) {
      let d = random(10, 25);
      let gradient = (abs(i - 21.25) + abs(a - 21.25)) / (42 + 42); 
      var e = (paramter1, paramter3, gradient); 
      var f = lerp(paramter2, paramter3, gradient);
      var g = lerp(paramter4, paramter3, gradient);
      var alpha = random(100, 200); 
      fill(e, f, g, alpha);
      ellipse(numX + 5 * i, numY + 5 * a, d, d);
    }
  }
  stroke(50);
  strokeWeight(3);
  for (let i = 2.5; i < 42; i = i + 5) {
    for (let a = 2.5; a < 42; a = a + 5) {
      line(numX + 5 * i,numY,numX + 5 * i,numY+200);
    }}
  strokeWeight(0);
}


function draw_ellipses2(numX,numY) {
  
  for (let i = 2.5; i < 42; i = i + 5) {
    for (let a = 2.5; a < 42; a = a + 5) {
      let d = random(10, 25);
      let gradient = (abs(i - 21.25) + abs(a - 21.25)) / (42 + 42); 
      var e = (paramter1, paramter3, gradient); 
      var f = lerp(paramter2, paramter3, gradient);
      var g = lerp(paramter4, paramter3, gradient);
      var alpha = random(100, 200); 
      fill(e, f, g, alpha);
      ellipse(numX + 5 * i, numY + 5 * a, d, d);
    }
  }
  stroke(50);
  strokeWeight(3);
  for (let i = 2.5; i < 42; i = i + 5) {
    for (let a = 2.5; a < 42; a = a + 5) {
      line(numX + 5 * i,numY,numX + 5 * i,numY+200);
    }}
  strokeWeight(0);
}

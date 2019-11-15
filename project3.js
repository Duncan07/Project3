var foodData;
var url;
var img;
var weekday;
var name, name1, name2, name3, name4, name5, name6, name7, name8, name9, name10;
var day, day1, day2, day3, day4, day5, day6, day7, day8, day9, day10;
var x, x1, x2, x3, x4, x6, x6, x7, x8, x9, x10;
var y, y1, y2, y3, y4, y5, y6, y7, y8, y9, y10;
var latitude,latitude4;
var longitude,longitude4;

function preload() {
  img = loadImage('images/SF.png');
}

function setup() {
  createCanvas(1400, 1400);
  weekday = "Thursday";
  image(img, 50, 100, 1280, 1280);
  textSize(10);
  url = "https://data.sfgov.org/resource/jjew-r69b.json";
  getFood();
}

function getFood() {
  loadJSON(url, gotData);
}

function gotData(data) {
  foodData = data;
}

function draw() {

  // Location 0
  if (foodData) {
    name = foodData[0].applicant;
    day = foodData[0].dayofweekstr;
    x = foodData[0].x;
    y = foodData[0].y;
    latitude = foodData[0].latitude;
    longitude = foodData[0].longitude;
    if (weekday == "Sunday" && day == "Sunday") {
      fill(0,0,255);
      text(name, x / 5950 + 4, y / 5150 - 4);
      ellipse(x / 5950, y / 5150, 5, 5);
    }
    if (weekday == "Monday" && day == "Monday") {
      fill(0,0,255);
      text(name, x / 5950 + 4, y / 5150 - 4);
      ellipse(x / 5950, y / 5150, 5, 5);
    }
    if (weekday == "Tuesday" && day == "Tuesday") {
      fill(0,0,255);
      text(name, latitude * 26.729362 + 4, longitude * -3.349532 - 4);
            // text(name, x / 5950 + 4, y / 5150 - 4);
      ellipse(x / 5950, y / 5150, 5, 5);
    }
    if (weekday == "Wednesday" && day == "Wednesday") {
      fill(0,0,255);
      text(name, x / 5950 + 4, y / 5150 - 4);
      ellipse(x / 5950, y / 5150, 5, 5);
    }
    if (weekday == "Thursday" && day == "Thursday") {
      fill(0,0,255);
      text(name, x / 5950 + 4, y / 5150 - 4);
      ellipse(x / 5950, y / 5150, 5, 5);
    }
    if (weekday == "Friday" && day == "Friday") {
      fill(0,0,255);
      text(name, x / 5950 + 4, y / 5150 - 4);
      ellipse(x / 5950, y / 5150, 5, 5);
    }
    if (weekday == "Saturday" && day == "Saturday") {
      fill(0,0,255);
      text(name, x / 5950 + 4, y / 5150 - 4);
      ellipse(x / 5950, y / 5150, 5, 5);
    }
  }
  // Location 1
  if (foodData) {
    name1 = foodData[1].applicant;
    day1 = foodData[1].dayofweekstr;
    x1 = foodData[1].x;
    y1 = foodData[1].y;
    if (weekday == "Sunday" && day1 == "Sunday") {
      fill(0,0,255);
      text(name1, x1 / 5950 + 4, y1 / 5150 - 4);
      ellipse(x1 / 5950, y1 / 5150, 5, 5);
    }
    if (weekday == "Monday" && day1 == "Monday") {
      fill(0,0,255);
      text(name1, x1 / 5950 + 4, y1 / 5150 - 4);
      ellipse(x1 / 5950, y1 / 5150, 5, 5);
    }
    if (weekday == "Tuesday" && day1 == "Tuesday") {
      fill(0,0,255);
      text(name1, x1 / 5950 + 4, y1 / 5150 - 4);
      ellipse(x1 / 5950, y1 / 5150, 5, 5);
    }
    if (weekday == "Wednesday" && day1 == "Wednesday") {
      fill(0,0,255);
      text(name1, x1 / 5950 + 4, y1 / 5150 - 4);
      ellipse(x1 / 5950, y1 / 5150, 5, 5);
    }
    if (weekday == "Thursday" && day1 == "Thursday") {
      fill(0,0,255);
      text(name1, x1 / 5950 + 4, y1 / 5150 - 4);
      ellipse(x1 / 5950, y1 / 5150, 5, 5);
    }
    if (weekday == "Friday" && day1 == "Friday") {
      fill(0,0,255);
      text(name1, x1 / 5950 + 4, y1 / 5150 - 4);
      ellipse(x1 / 5950, y1 / 5150, 5, 5);
    }
    if (weekday == "Saturday" && day1 == "Saturday") {
      fill(0,0,255);
      text(name1, x1 / 5950 + 4, y1 / 5150 - 4);
      ellipse(x1 / 5950, y1 / 5150, 5, 5);
    }
  }
  // Location 2
  if (foodData) {
    name2 = foodData[2].applicant;
    day2 = foodData[2].dayofweekstr;
    x2 = foodData[2].x;
    y2 = foodData[2].y;
    if (weekday == "Sunday" && day2 == "Sunday") {
      fill(0,0,255);
      text(name2, x2 / 5950 + 4, y2 / 5150 - 4);
      ellipse(x2 / 5950, y2 / 5150, 5, 5);
    }
    if (weekday == "Monday" && day2 == "Monday") {
      fill(0,0,255);
      text(name2, x2 / 5950 + 4, y2 / 5150 - 4);
      ellipse(x2 / 5950, y2 / 5150, 5, 5);
    }
    if (weekday == "Tuesday" && day2 == "Tuesday") {
      fill(0,0,255);
      text(name2, x2 / 5950 + 4, y2 / 5150 - 4);
      ellipse(x2 / 5950, y2 / 5150, 5, 5);
    }
    if (weekday == "Wednesday" && day2 == "Wednesday") {
      fill(0,0,255);
      text(name2, x2 / 5950 + 4, y2 / 5150 - 4);
      ellipse(x2 / 5950, y2 / 5150, 5, 5);
    }
    if (weekday == "Thursday" && day2 == "Thursday") {
      fill(0,0,255);
      text(name2, x2 / 5950 + 4, y2 / 5150 - 4);
      ellipse(x2 / 5950, y2 / 5150, 5, 5);
    }
    if (weekday == "Friday" && day2 == "Friday") {
      fill(0,0,255);
      text(name2, x2 / 5950 + 4, y2 / 5150 - 4);
      ellipse(x2 / 5950, y2 / 5150, 5, 5);
    }
    if (weekday == "Saturday" && day2 == "Saturday") {
      fill(0,0,255);
      text(name2, x2 / 5950 + 4, y2 / 5150 - 4);
      ellipse(x2 / 5950, y2 / 5150, 5, 5);
    }
  }
  // Location 3
  if (foodData) {
    name3 = foodData[3].applicant;
    day3 = foodData[3].dayofweekstr;
    x3 = foodData[3].x;
    y3 = foodData[3].y;
    if (weekday == "Sunday" && day3 == "Sunday") {
      fill(0,0,255);
      text(name3, x3 / 5950 + 4, y3 / 5150 - 4);
      ellipse(x3 / 5950, y3 / 5150, 5, 5);
    }
    if (weekday == "Monday" && day3 == "Monday") {
      fill(0,0,255);
      text(name3, x3 / 5950 + 4, y3 / 5150 - 4);
      ellipse(x3 / 5950, y3 / 5150, 5, 5);
    }
    if (weekday == "Tuesday" && day3 == "Tuesday") {
      fill(0,0,255);
      text(name3, x3 / 5950 + 4, y3 / 5150 - 4);
      ellipse(x3 / 5950, y3 / 5150, 5, 5);
    }
    if (weekday == "Wednesday" && day3 == "Wednesday") {
      fill(0,0,255);
      text(name3, x3 / 5950 + 4, y3 / 5150 - 4);
      ellipse(x3 / 5950, y3 / 5150, 5, 5);
    }
    if (weekday == "Thursday" && day3 == "Thursday") {
      fill(0,0,255);
      text(name3, x3 / 5950 + 4, y3 / 5150 - 4);
      ellipse(x3 / 5950, y3 / 5150, 5, 5);
    }
    if (weekday == "Friday" && day3 == "Friday") {
      fill(0,0,255);
      text(name3, x3 / 5950 + 4, y3 / 5150 - 4);
      ellipse(x3 / 5950, y3 / 5150, 5, 5);
    }
    if (weekday == "Saturday" && day3 == "Saturday") {
      fill(0,0,255);
      text(name3, x3 / 5950 + 4, y3 / 5150 - 4);
      ellipse(x3 / 5950, y3 / 5150, 5, 5);
    }
  }
  // Location 4
  if (foodData) {
    name4 = foodData[4].applicant;
    day4 = foodData[4].dayofweekstr;
    x4 = foodData[4].x;
    y4 = foodData[4].y;
            latitude4 = foodData[4].latitude;
        longitude4 = foodData[4].longitude;
    if (weekday == "Sunday" && day4 == "Sunday") {
      fill(0,0,255);
      text(name4, x4 / 5950 + 4, y4 / 5150 - 4);
      ellipse(x4 / 5950, y4 / 5150, 5, 5);
    }
    if (weekday == "Monday" && day4 == "Monday") {
      fill(0,0,255);
      text(name4, x4 / 5950 + 4, y4 / 5150 - 4);
      ellipse(x4 / 5950, y4 / 5150, 5, 5);
    }
    if (weekday == "Tuesday" && day4 == "Tuesday") {
      fill(0,0,255);
      text(name4, x4 / 5950 + 4, y4 / 5150 - 4);
      ellipse(x4 / 5950, y4 / 5150, 5, 5);
    }
    if (weekday == "Wednesday" && day4 == "Wednesday") {
      fill(0,0,255);
      text(name4, x4 / 5950 + 4, y4 / 5150 - 4);
      ellipse(x4 / 5950, y4 / 5150, 5, 5);
    }
    if (weekday == "Thursday" && day4 == "Thursday") {
      fill(0,0,255);
        text(name4, latitude4 * 26.729362 + 4, longitude4 * -3.349532 - 4);
      text(name4, x4 / 5950 + 4, y4 / 5150 - 4);
      ellipse(x4 / 5950, y4 / 5150, 5, 5);
    }
    if (weekday == "Friday" && day4 == "Friday") {
      fill(0,0,255);
      text(name4, x4 / 5950 + 4, y4 / 5150 - 4);
      ellipse(x4 / 5950, y4 / 5150, 5, 5);
    }
    if (weekday == "Saturday" && day4 == "Saturday") {
      fill(0,0,255);
      text(name4, x4 / 5950 + 4, y4 / 5150 - 4);
      ellipse(x4 / 5950, y4 / 5150, 5, 5);
    }
  }
  // Location 5
  if (foodData) {
    name5 = foodData[5].applicant;
    day5 = foodData[5].dayofweekstr;
    x5 = foodData[5].x;
    y5 = foodData[5].y;
    if (weekday == "Sunday" && day5 == "Sunday") {
      fill(0,0,255);
      text(name5, x5 / 5950 + 4, y5 / 5150 - 4);
      ellipse(x5 / 5950, y5 / 5150, 5, 5);
    }
    if (weekday == "Monday" && day5 == "Monday") {
      fill(0,0,255);
      text(name5, x5 / 5950 + 4, y5 / 5150 - 4);
      ellipse(x5 / 5950, y5 / 5150, 5, 5);
    }
    if (weekday == "Tuesday" && day5 == "Tuesday") {
      fill(0,0,255);
      text(name5, x5 / 5950 + 4, y5 / 5150 - 4);
      ellipse(x5 / 5950, y5 / 5150, 5, 5);
    }
    if (weekday == "Wednesday" && day5 == "Wednesday") {
      fill(0,0,255);
      text(name5, x5 / 5950 + 4, y5 / 5150 - 4);
      ellipse(x5 / 5950, y5 / 5150, 5, 5);
    }
    if (weekday == "Thursday" && day5 == "Thursday") {
      fill(0,0,255);
      text(name5, x5 / 5950 + 4, y5 / 5150 - 4);
      ellipse(x5 / 5950, y5 / 5150, 5, 5);
    }
    if (weekday == "Friday" && day5 == "Friday") {
      fill(0,0,255);
      text(name5, x5 / 5950 + 4, y5 / 5150 - 4);
      ellipse(x5 / 5950, y5 / 5150, 5, 5);
    }
    if (weekday == "Saturday" && day5 == "Saturday") {
      fill(0,0,255);
      text(name5, x5 / 5950 + 4, y5 / 5150 - 4);
      ellipse(x5 / 5950, y5 / 5150, 5, 5);
    }
  }
  // Location 6
  if (foodData) {
    name6 = foodData[6].applicant;
    day6 = foodData[6].dayofweekstr;
    x6 = foodData[6].x;
    y6 = foodData[6].y;
    if (weekday == "Sunday" && day6 == "Sunday") {
      fill(0,0,255);
      text(name6, x6 / 5950 + 4, y6 / 5150 - 4);
      ellipse(x6 / 5950, y6 / 5150, 5, 5);
    }
    if (weekday == "Monday" && day6 == "Monday") {
      fill(0,0,255);
      text(name6, x6 / 5950 + 4, y6 / 5150 - 4);
      ellipse(x6 / 5950, y6 / 5150, 5, 5);
    }
    if (weekday == "Tuesday" && day6 == "Tuesday") {
      fill(0,0,255);
      text(name6, x6 / 5950 + 4, y6 / 5150 - 4);
      ellipse(x6 / 5950, y6 / 5150, 5, 5);
    }
    if (weekday == "Wednesday" && day6 == "Wednesday") {
      fill(0,0,255);
      text(name6, x6 / 5950 + 4, y6 / 5150 - 4);
      ellipse(x6 / 5950, y6 / 5150, 5, 5);
    }
    if (weekday == "Thursday" && day6 == "Thursday") {
      fill(0,0,255);
      text(name6, x6 / 5950 + 4, y6 / 5150 - 4);
      ellipse(x6 / 5950, y6 / 5150, 5, 5);
    }
    if (weekday == "Friday" && day6 == "Friday") {
      fill(0,0,255);
      text(name6, x6 / 5950 + 4, y6 / 5150 - 4);
      ellipse(x6 / 5950, y6 / 5150, 5, 5);
    }
    if (weekday == "Saturday" && day6 == "Saturday") {
      fill(0,0,255);
      text(name6, x6 / 5950 + 4, y6 / 5150 - 4);
      ellipse(x6 / 5950, y6 / 5150, 5, 5);
    }
  }
  // Location 7
  if (foodData) {
    name7 = foodData[7].applicant;
    day7 = foodData[7].dayofweekstr;
    x7 = foodData[7].x;
    y7 = foodData[7].y;
    if (weekday == "Sunday" && day7 == "Sunday") {
      fill(0,0,255);
      text(name7, x7 / 5950 + 4, y7 / 5150 - 4);
      ellipse(x7 / 5950, y7 / 5150, 5, 5);
    }
    if (weekday == "Monday" && day7 == "Monday") {
      fill(0,0,255);
      text(name7, x7 / 5950 + 4, y7 / 5150 - 4);
      ellipse(x7 / 5950, y7 / 5150, 5, 5);
    }
    if (weekday == "Tuesday" && day7 == "Tuesday") {
      fill(0,0,255);
      text(name7, x7 / 5950 + 4, y7 / 5150 - 4);
      ellipse(x7 / 5950, y7 / 5150, 5, 5);
    }
    if (weekday == "Wednesday" && day7 == "Wednesday") {
      fill(0,0,255);
      text(name7, x7 / 5950 + 4, y7 / 5150 - 4);
      ellipse(x7 / 5950, y7 / 5150, 5, 5);
    }
    if (weekday == "Thursday" && day7 == "Thursday") {
      fill(0,0,255);
      text(name7, x7 / 5950 + 4, y7 / 5150 - 4);
      ellipse(x7 / 5950, y7 / 5150, 5, 5);
    }
    if (weekday == "Friday" && day7 == "Friday") {
      fill(0,0,255);
      text(name7, x7 / 5950 + 4, y7 / 5150 - 4);
      ellipse(x7 / 5950, y7 / 5150, 5, 5);
    }
    if (weekday == "Saturday" && day7 == "Saturday") {
      fill(0,0,255);
      text(name7, x7 / 5950 + 4, y7 / 5150 - 4);
      ellipse(x7 / 5950, y7 / 5150, 5, 5);
    }
  }
  // Location 8
  if (foodData) {
    name8 = foodData[8].applicant;
    day8 = foodData[8].dayofweekstr;
    x8 = foodData[8].x;
    y8 = foodData[8].y;
    if (weekday == "Sunday" && day8 == "Sunday") {
      fill(0,0,255);
      text(name8, x8 / 5950 + 4, y8 / 5150 - 4);
      ellipse(x8 / 5950, y8 / 5150, 5, 5);
    }
    if (weekday == "Monday" && day8 == "Monday") {
      fill(0,0,255);
      text(name8, x8 / 5950 + 4, y8 / 5150 - 4);
      ellipse(x8 / 5950, y8 / 5150, 5, 5);
    }
    if (weekday == "Tuesday" && day8 == "Tuesday") {
      fill(0,0,255);
      text(name8, x8 / 5950 + 4, y8 / 5150 - 4);
      ellipse(x8 / 5950, y8 / 5150, 5, 5);
    }
    if (weekday == "Wednesday" && day8 == "Wednesday") {
      fill(0,0,255);
      text(name8, x8 / 5950 + 4, y8 / 5150 - 4);
      ellipse(x8 / 5950, y8 / 5150, 5, 5);
    }
    if (weekday == "Thursday" && day8 == "Thursday") {
      fill(0,0,255);
      text(name8, x8 / 5950 + 4, y8 / 5150 - 4);
      ellipse(x8 / 5950, y8 / 5150, 5, 5);
    }
    if (weekday == "Friday" && day8 == "Friday") {
      fill(0,0,255);
      text(name8, x8 / 5950 + 4, y8 / 5150 - 4);
      ellipse(x8 / 5950, y8 / 5150, 5, 5);
    }
    if (weekday == "Saturday" && day8 == "Saturday") {
      fill(0,0,255);
      text(name8, x8 / 5950 + 4, y8 / 5150 - 4);
      ellipse(x8 / 5950, y8 / 5150, 5, 5);
    }
  }
  // Location 9
  if (foodData) {
    name9 = foodData[9].applicant;
    day9 = foodData[9].dayofweekstr;
    x9 = foodData[9].x;
    y9 = foodData[9].y;
    if (weekday == "Sunday" && day9 == "Sunday") {
      fill(0,0,255);
      text(name9, x9 / 5950 + 4, y9 / 5150 - 4);
      ellipse(x9 / 5950, y9 / 5150, 5, 5);
    }
    if (weekday == "Monday" && day9 == "Monday") {
      fill(0,0,255);
      text(name9, x9 / 5950 + 4, y9 / 5150 - 4);
      ellipse(x9 / 5950, y9 / 5150, 5, 5);
    }
    if (weekday == "Tuesday" && day9 == "Tuesday") {
      fill(0,0,255);
      text(name9, x9 / 5950 + 4, y9 / 5150 - 4);
      ellipse(x9 / 5950, y9 / 5150, 5, 5);
    }
    if (weekday == "Wednesday" && day9 == "Wednesday") {
      fill(0,0,255);
      text(name9, x9 / 5950 + 4, y9 / 5150 - 4);
      ellipse(x9 / 5950, y9 / 5150, 5, 5);
    }
    if (weekday == "Thursday" && day9 == "Thursday") {
      fill(0,0,255);
      text(name9, x9 / 5950 + 4, y9 / 5150 - 4);
      ellipse(x9 / 5950, y9 / 5150, 5, 5);
    }
    if (weekday == "Friday" && day9 == "Friday") {
      fill(0,0,255);
      text(name9, x9 / 5950 + 4, y9 / 5150 - 4);
      ellipse(x9 / 5950, y9 / 5150, 5, 5);
    }
    if (weekday == "Saturday" && day9 == "Saturday") {
      fill(0,0,255);
      text(name9, x9 / 5950 + 4, y9 / 5150 - 4);
      ellipse(x9 / 5950, y9 / 5150, 5, 5);
    }
  }
  // Location 10
  if (foodData) {
    name10 = foodData[10].applicant;
    day10 = foodData[10].dayofweekstr;
    x10 = foodData[10].x;
    y10 = foodData[10].y;
    if (weekday == "Sunday" && day10 == "Sunday") {
      fill(0,0,255);
      text(name10, x10 / 5950 + 4, y10 / 5150 - 4);
      ellipse(x10 / 5950, y10 / 5150, 5, 5);
    }
    if (weekday == "Monday" && day10 == "Monday") {
      fill(0,0,255);
      text(name10, x10 / 5950 + 4, y10 / 5150 - 4);
      ellipse(x10 / 5950, y10 / 5150, 5, 5);
    }
    if (weekday == "Tuesday" && day10 == "Tuesday") {
      fill(0,0,255);
      text(name10, x10 / 5950 + 4, y10 / 5150 - 4);
      ellipse(x10 / 5950, y10 / 5150, 5, 5);
    }
    if (weekday == "Wednesday" && day10 == "Wednesday") {
      fill(0,0,255);
      text(name10, x10 / 5950 + 4, y10 / 5150 - 4);
      ellipse(x10 / 5950, y10 / 5150, 5, 5);
    }
    if (weekday == "Thursday" && day10 == "Thursday") {
      fill(0,0,255);
      text(name10, x10 / 5950 + 4, y10 / 5150 - 4);
      ellipse(x10 / 5950, y10 / 5150, 5, 5);
    }
    if (weekday == "Friday" && day10 == "Friday") {
      fill(0,0,255);
      text(name10, x10 / 5950 + 4, y10 / 5150 - 4);
      ellipse(x10 / 5950, y10 / 5150, 5, 5);
    }
    if (weekday == "Saturday" && day10 == "Saturday") {
      fill(0,0,255);
      text(name10, x10 / 5950 + 4, y10 / 5150 - 4);
      ellipse(x10 / 5950, y10 / 5150, 5, 5);
    }
  }
}

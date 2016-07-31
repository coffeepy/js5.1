calCircleArea = function(r) {
  var output, area;
  area = Math.PI * Math.pow(r, 2);
  output = "<p>r=" + r + "; area = " + area + "</p>";
  document.write(output);

  // Uncomment to see if i matched the assignement! Much quicker than manual!
  // matchedMentor = [153.93804002589985, 7.0685834705770345, 1256.6370614359173].indexOf(area) >= 0;
  // if (matchedMentor) {
  //   document.write('Matched Mentor')
  // };


};

calCircleArea(7)
calCircleArea(1.5)
calCircleArea(20)

var members = [
  "https://jerrymahoney.files.wordpress.com/2013/06/familybook.png", 
  "https://whjr-v2-prod-bucket.s3.ap-south-1.amazonaws.com/1fed80b4-2660-4cba-8db2-f13cd8bd4ad3.jpg", 
  "https://cdn3.iconfinder.com/data/icons/family-member-flat-happy-family-day/512/Brother-512.png", 
  "https://us.123rf.com/450wm/yupiramos/yupiramos1905/yupiramos190505227/122760736-stock-vector-little-girl-avatar-character-vector-illustration-design.jpg?ver=6", 
  "https://www.clipartkey.com/mpngs/m/145-1456201_female-using-smartphone-mom-and-baby-cartoon-png.png", 
  "https://thumbs.dreamstime.com/b/print-175056460.jpg"
  ];

  var names = [
  "My Family-Book", 
  "srihan goda", 
  "dad", 
  "mom", 
  "sister", 
  ""
  ];

  var count = 0;

  function nextslide () {

  document.getElementById("members").src = members[count];

  document.getElementById("names").innerHTML = names[count];
  
  count++;

  if (count == 6) {
  
  count = 0;

  }

  }
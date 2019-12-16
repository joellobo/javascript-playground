function f(a, b) {
    arguments = null;
    console.log(`arguments:${arguments}`);
  
  }

  f(1);
  f(1,2);
  f(1,2,3,4,5);
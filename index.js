const TileParse = (num) => {
	if (num > 0 && num < 1000000) return num
  for (nFlag = 0, nShifted = num, binary = ""; nFlag < 32;
       nFlag++, binary += String(nShifted >>> 31), nShifted <<= 1);
  console.log(binary)
  let hor = (binary.substring(0,1) == 1) ? true : false;
  let vert = (binary.substring(1,2) == 1) ? true : false;
  let diag = (binary.substring(2,3) == 1) ? true : false;
  let stripped = "0000" + binary.slice(4);
  let tileID = parseInt(stripped,2)
  console.log(hor, vert, diag, tileID)
  
  //Insert your engines draw function here.
}

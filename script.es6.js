export function romanToArabic(romanNumber) {
  const map = new Map();
  
  map.set('I', 1);
  map.set('V', 5);
  map.set('X', 10);
  map.set('L', 50);
  map.set('C', 100);
  map.set('D', 500);
  map.set('M', 1000);
  
  let sum = 0;
  let prevChar = 0;
  
  for(let i=0;i<romanNumber.length;i++)
    {
       if( i === 0)
       {
         sum = map.get(romanNumber.charAt(i));
         prevChar = romanNumber.charAt(i);

         }

      else {

			if(map.get(romanNumber.charAt(i)) <= map.get(prevChar))
			{
			  sum = sum + map.get(romanNumber.charAt(i));
			  prevChar = romanNumber.charAt(i);        

			 }

		   else{
		   
			sum = sum + (map.get(romanNumber.charAt(i)) - 2 * map.get(prevChar));   
			prevChar = romanNumber.charAt(i);
			
			 }

        }

    }
  
  return sum;
}
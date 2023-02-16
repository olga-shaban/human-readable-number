module.exports = function toReadable (number) {
  
    
  
        const th = ['hundred','thousand','million', 'billion','trillion'];
        const dg = ['','one','two','three','four', 'five','six','seven','eight','nine'];
         const tn = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
         const tw = ['twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
         
        let res = '';


  // let s = number.toString();
      
        
         if (number < 10){ 
         res = dg[number];
           }
      
      else if (number<20) {
          res = tn[number-10];
               }
      
      else if (number<100) {
          w = Math.floor(number/10);
          n = number % 10;
          res = tw[w-2]+" "+dg[n];
             }
      
      else (number<1000)
      {
          w = Math.floor(number/100);
          n = number % 10;
          d = (number- w*100 - n)/10;
                   res = dg[w]+" " + th[0]+" "+ tw[d-2]+" " +dg[n];
        
      }
      
         return res;
          
}

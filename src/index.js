module.exports = function toReadable (number) {
     
  
        const th = ['hundred','thousand','million', 'billion','trillion'];
        const dg = ['','one','two','three','four', 'five','six','seven','eight','nine'];
        const tn = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
        const tw = ['twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
         
        let res = '';
              
        if (number===0) 
        {
            res = 'zero';
            return res;
        }

        else if (number < 10){ 
        res = dg[number];
        return res;
           }
      
      else if (number<20) {
          res = tn[number-10];
          return res;
               }
      
      else if (number<100) {
          w = Math.floor(number/10);
          n = number % 10;
          if (n === 0) {
            res = tw[w-2];
            return res;
          }
          res = tw[w-2]+" "+dg[n];
         return res;
             }
      
      else (number<1000)
      {
          w = Math.floor(number/100);// сотни
          k = number % 100; // десятки
          n = number % 10; // единицы
           // проверка на целое количество сотен
          if (k === 0) {
            res = dg[w]+" " + th[0];
            return res;
          }
          if (k<10) {
            res = dg[w]+" " + th[0]+" " +dg[n];
            return res;
          }

          if (k<20) {
            res = dg[w]+" " + th[0]+" " +tn[n];
            return res;
          }

           // проверка на целое количество десяток
          d = (number- w*100 - n)/10;
          if (n === 0) {
            res = dg[w]+" " + th[0]+" "+ tw[d-2];
            return res;
          }
          
       res = dg[w]+" " + th[0]+" "+ tw[d-2]+" " +dg[n];
       return res;
        
      }      
          
        }
      

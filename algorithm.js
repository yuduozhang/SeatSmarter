function: divide_group(inputData, category, criteria){

         tableSize = 4;

         create a vector< <person,number> > personInfo;

         for every person:
            numOfPerson = 0;
            for i = 1 to numOfCategory, j = numOfCatergory to 1:
                weight = cateInfo[person.catergory[i]];
                numOfPerson = numOfPerson + weight*10^(2*(j-1));
                i++;
                j--;
            end
         end

         sort personInfo on number;
         group;
end
            
                     
                
            
             


function sortByWeight(a, b){
    var x = a.weight;
    var y = b.weight;
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
}

//only works for same all the way; for different, need to change weights
//assuming all information mapped to numerics
//there is to be a mapping JSON that allows interpretation

function divideGroup(inputData, category, categoryMap, criteria) { 
    
    var dataLength = Object.size(inputData["rowData"]);
    var tableSize = 4;    
    var personList = new Array();
    
    
    for (var p = 0; p < dataLength; p++){
        var person = inputData["rowData"][p];
        var personObj = new Object();
     
        personObj.name = person[0]+" "+person[1]; //1st + last name
        personObj.ID = p;
        
        //var personSameWeight = 0;
        //var personDiffWeight = 0;
        var personWeight = 0;
        var i = 0;
        var j = category.length-1;
       
        while (i<category.length && j>=0) {
            weight = parseInt(person[categoryMap[category[i]]]);
            
            if (criteria[i] == "SAME") {
                //personSameWeight = personWeight + weight*(Math.pow(10,(2*j)));
                //personWeight = personSameWeight;
                personWeight = personWeight + weight*(Math.pow(10,(2*j)));
            }
            else if (criteria[i] == "DIFFERENT") {
                //diff = categorySets[i].filter(function (x) { return ([weight].indexOf(x) < 0);});
                //alert(weight.toString()+" "+diff);
                //randIndex = Math.floor(Math.random()*diff.length)
                
                //personDiffWeight = personWeight + diff[randIndex]*(Math.pow(10,(2*j)));
                //personWeight = personDiffWeight;
                weight = 1; //Make them all the same
                personWeight = personWeight + weight*(Math.pow(10,(2*j)));
            }
            
            i++; 
            j--;
        }
        
        personObj.weight = personWeight;
        /*personObj.sameWeight = personSameWeight;
        personObj.diffWeight = personSameWeight;*/
        personList.push(personObj);  
    }

    personList.sort(sortByWeight);
    
    var numOfGroups = Math.round(personList.length/tableSize);
    var groupList = new Array();
     
    for (var i = 0; i < numOfGroups; i++){
        var group = new Array(tableSize);
        for (var j = 0; j < tableSize; j++){
            group[j]=personList[i*tableSize+j];
        }
        groupList.push(group);
    }

    if (personList.length > numOfGroups*tableSize){
        for (var i = 0; i< personList.length%tableSize; i++){
            var group = new Array(tableSize);
            group[i] = personList[numOfGroups*tableSize + i];
        }
        
        groupList.push(group);
    }

    return groupList;
}

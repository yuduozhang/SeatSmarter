function sortByWeight(a, b){
    var x = a.weight;
    var y = b.weight;
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
}

function divideGroup(inputData, category, criteria){ 

    var tableSize = 4;    
    //nameList = inputData[colData]["First Name"];
    var personList = new Array();

    for (int p = 0; p<intputData.length; p++){

        var person = inputData[p];
        var personObj = new Object();
        personObj.name = person.name;

        var personWeight = 0;
        var i = 0;
        var j = category.length-1;  
        while (i<category.length and j>=0){
            weight = person.category[i];
            personWeight = personWeight + weight*(Math.pow(10,(2*j)));
            i++;
            j--;
        }
        personObj.weight = personWeight;
        personList.push(personObj);  
    }

    personList.sort(sortByWeight);
    
    var numOfGroups = personList.length/tableSize; 
    var groupList = new Array();
     
    for (var i = 0; i<numOfGroups; i++){
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

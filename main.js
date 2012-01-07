var selectedCat = new Object();
var selectedCatRank = new Array(10); //change later

function updateRank()
{
    alert(Object.size(selectedCat))
    $.each(selectedCat,function(key,value)
    {
        alert(key)
        if (selectedCat[key] < 0)
        {
            selectedCat[key] = 9; //hardcoding, it's bad, i know...
        }
        
        $("ul li:nth-child("+selectedCat[key].toString()+")").html('<span class="ui-icon ui-icon-arrowthick-2-n-s"></span>'+key);
    })
}

function addToRank(jqueryObj)
{   
    selectedCat[jqueryObj.attr("value")] = -1;
    updateRank();
}

function addToCriteria(jqueryObj)
{
}

function removeFromRank(jqueryObj)
{
}

function removeFromCriteria(jqueryObj)
{
}

function main()
{
    //from stackflow: http://stackoverflow.com/questions/5223/length-of-javascript-associative-array 
    Object.size = function(obj) {
    var size = 0, key;
    
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
        return size;
    };
    
    //read JSON
    inputDat = readJSON();
    
    //populate category
    for (var i = 0; i < Object.size(inputDat["category"]); i++)
    {
       var tmp = $("<input/>", {
          "type": "checkbox",
          "name": "category",
          "value": inputDat["category"][i]
        });
        tmp.change(function(event) {
            var checked = $(this).is(':checked');
            
            if (checked)
            {
                addToRank($(this));
                addToCriteria($(this));
            }
            else
            {
                removeFromRank($(this));
                removeFromCriteria($(this));
            }
        });
        tmp.html(inputDat["category"][i]);
        tmp.appendTo("#categories");
    }
    
    //populate rankings
 //   for 
    //populate function
}
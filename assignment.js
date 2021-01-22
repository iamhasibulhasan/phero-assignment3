// kilometer to meter function
function kilometerToMeter(km){
    if(km > 0){
        var meter = km * 1000;    // 1 km = 1000 meter
        
        return meter;
    }else{
        console.log(" Undefine Input "); // Error message for undefine input
    }
}

//  budget calculator
// per watch price 50 tk
// per phone price 100 tk
// per laptop price 500 tk

function budgetCalculator(watch, phone, laptop){
    if(watch > 0 & phone > 0 & laptop){
        var wcost = watch * 50;
        var pcost = phone * 100;
        var lcost = laptop * 500;
   
        var totalCost = wcost + pcost + lcost;
   
        return totalCost;
    }else{
        console.log(" Undefine Input "); // Error message for undefine input
    }
}


// hotel day cost
// 1 - 10 -100tk
// 11 - 20 - 80tk
//  21 - nth - 50tk
var rent = 0;
function hotelCost(day){
    for(var i = 1; i < day; i++){
        while (i <= 10) {
            rent = rent + 100;
            j++;
        }
        while (i <= 21) {
            rent = rent + 80;
        }
    }
}



// Mega Friend 
// find largest name from an array

function megaFriend(name){
    var max = name[0].length;

    for (let i = 0; i < name.length; i++) {
        var element = name[i].length;
        if (element > max) {
            max = element;
            var friend = name[i];
        } 
    }
    return friend;
}

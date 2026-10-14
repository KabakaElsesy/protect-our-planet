function showTip(category) {
    if(category === "electricity") {
        let tip = "(1-Turn off lights when you leave the room)___(2-Use natural light during the day)___(3-Use LED light bulbs)"
        document.getElementById("tip").textContent = tip;
    }
    else if (category === "water") {
        let tip = "(1-Save water by turning on the tap)___(2-Reuse water when possible)___(3-Don't waste clean water)"
        document.getElementById("tip").textContent = tip;
    }
    else if (category === "recycle") {
        let tip = "(1-Recycle paper , plastic and glass whenever possible)___(2-Buy recycled products)___(3-Say no to plastic bags)"
       document.getElementById("tip").textContent = tip;
    }
    else if (category === "green") {
        let tip = "(1-Plant trees and protect parks and green spaces)___(2-Water plants in the morning)___(3-Keep your garden clean)"
        document.getElementById("tip").textContent = tip;
    }
}

function greeting(){
    var name = prompt("Tell Me Your Name").toUpperCase();
    

    var date = new Date();
    var  hr = date.getHours()

    if(hr!=0 && hr >12){
        hr = hr-12;
    };

    if(hr == 0){
        hr = 12;
    };
    

    var min = date.getMinutes()

    alert(`Hello ${name} sir its: ${hr}:${min}`);
};
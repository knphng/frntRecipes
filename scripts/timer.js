var countDown = document.getElementById("cookingTime").innerHTML;
var init = document.getElementById("cookingTime").innerHTML;
var tm;
document.getElementById('setTimer').addEventListener('click', e =>{
    console.log("HELLO");
    clearInterval(tm);
    console.log(e.target.id);
    switch (e.target.id) {
        case "setTimer":
            var start = document.createElement('button');
            start.setAttribute('class', 'btn btn-default');
            start.setAttribute('id', 'start');
            start.appendChild(document.createTextNode('Start'));
            var pause = document.createElement('button');
            pause.setAttribute('class', 'btn btn-default');
            pause.setAttribute('id', 'pause');
            pause.appendChild(document.createTextNode('Pause'));
            var stop = document.createElement('button');
            stop.setAttribute('class', 'btn btn-default');
            stop.setAttribute('id', 'stop');
            stop.appendChild(document.createTextNode('Stop'));

            console.log(e.target.parentNode);
            console.log(e.currentTarget);
            console.log(e.currentTarget.parentNode);
            e.target.parentNode.removeChild(e.target);
            e.currentTarget.appendChild(start);
            e.currentTarget.appendChild(pause);
            e.currentTarget.appendChild(stop);

            break;
        case "start":
            countDown = document.getElementById("time").innerHTML;

            console.log(countDown);
            var split = countDown.split(':');
            console.log(split);

            var hours = parseInt(split[0]);
            var minutes = parseInt(split[1]);
            var seconds = parseInt(split[2]);
            console.log("hh " + hours);
            console.log("min " + minutes);
            console.log("sec " + seconds);

            tm = setInterval(function() {

                // Get todays date and time
                //var now = new Date().getTime();

                // Find the distance between now an the count down date
                //var distance = seconds - 1;

                //seconds = seconds - 1;
                //console.log("dist" + distance);


                if (hours >= 0 && minutes > 0 && seconds<=0) {
                    seconds = 59;
                    minutes--;
                } else if (seconds <= 0 && minutes <= 0 && hours > 0) {
                    hours = hours-1;
                    minutes = 59;
                    seconds = 59;
                } else if (seconds<=0 && minutes<= 0 && hours<= 0) {
                    clearInterval(tm);
                    document.getElementById("time").innerHTML = "EXPIRED";
                }
                console.log("sec " + seconds);
                document.getElementById("time").innerHTML = hours+":"+minutes+":"+seconds;
                seconds--;

            }, 1000);
            break;
        case "pause":
            clearInterval(tm);
            break;
        case "stop":
            clearInterval(tm);
            document.getElementById("time").innerHTML = init;
            break;
        default:

    }

    /*var x = setInterval(function() {

        // Get todays date and time
        //var now = new Date().getTime();

        // Find the distance between now an the count down date
        countDownDate = countDownDate - 1;


        // Output the result in an element with id="demo"
        document.getElementById("time").innerHTML = countDownDate;

        // If the count down is over, write some text
        if (countDownDate == 0) {
            clearInterval(x);
            document.getElementById("time").innerHTML = "EXPIRED";
        }
    }, 1000);*/

});

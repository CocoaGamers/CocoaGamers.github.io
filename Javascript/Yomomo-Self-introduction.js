let once = false;
let once2 = false;
let once3 = false;

window.addEventListener('scroll', function () {
    taeget_position = document.querySelector('#target').getBoundingClientRect().top;
    taeget_position2 = document.querySelector('#target2').getBoundingClientRect().top;
    taeget_position3 = document.querySelector('#target3').getBoundingClientRect().top;
    
    if (taeget_position <= window.innerHeight && once !== true) {
        once = true;
        const style = document.createElement('style')
        style.innerHTML = 
            `#contents1{
                height: 150px;
                background-color: orange;
            }
            .sample-text1 {
                margin-left: 5%;
                margin-top: 2%;
                margin-bottom:  5%; 
                animation-name: fadein;
                animation-duration: 4s;
            }
            @keyframes fadein {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            #HHH{
                text-align: center;
                font-size: 20px;
            }
            #P{
                margin: 0 5% 5% 5%;
                font-size: 12px;
            }
            .an2-fadeup {
                font-weight: bold;
                animation-name: fadeup;
                animation-duration: 4s;
            }
            @keyframes fadeup {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            #contents{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                text-align: center;
                width: 80%;
                height: auto;
                margin-left:10%;
                background-color: white;
            }
            #Icon{
                display: inline-block; 
            }`
        document.body.appendChild(style)
    }
    
    if (taeget_position2 <= window.innerHeight && once2 !== true) {
        once2 = true;
        const style = document.createElement('style')
        style.innerHTML = 
            `#Ycontents2{
                height: 150px;
                background-color: orange;
            }
            .sample-text2 {
                margin-left: 5%;
                margin-top: 2%;
                margin-bottom:  5%; 
                animation-name: fadein;
                animation-duration: 4s;
            }
            @keyframes fadein {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            #HHH2{
                text-align: center;
                font-size: 20px;
            }
            #P2{
                margin: 0 5% 5% 5%;
                font-size: 12px;
            }
            .an2-fadeup2 {
                font-weight: bold;
                animation-name: fadeup;
                animation-duration: 4s;
            }
            @keyframes fadeup {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
			#contents2{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                text-align: center;
                width: 80%;
                height: auto;
                margin-left:10%;
                background-color: white;
            }
            #Icon2{
                display: inline-block; 
            }`
        document.body.appendChild(style)
    }
    
    if (taeget_position3 <= window.innerHeight && once3 !== true) {
        once3 = true;
        const style = document.createElement('style')
        style.innerHTML = 
            `#contents3{
                height: 150px;
                background-color: orange;
            }
            .sample-text3 {
                margin-left: 5%;
                margin-top: 2%;
                margin-bottom:  5%; 
                animation-name: fadein;
                animation-duration: 4s;
            }
            @keyframes fadein {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            #HHH3{
                text-align: center;
                font-size: 20px;
            }
            #P3{
                margin: 0 5% 5% 5%;
                font-size: 12px;
            }
            .an2-fadeup3 {
                font-weight: bold;
                animation-name: fadeup;
                animation-duration: 4s;
            }
            @keyframes fadeup {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            #contents3{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                text-align: center;
                width: 80%;
                height: auto;
                margin-left:10%;
                background-color: white;
            }
            #Icon3{
                display: inline-block; 
            }`
        document.body.appendChild(style)
    }
});
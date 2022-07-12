let once = false;
let once2 = false;
let once3 = false;

window.addEventListener('scroll', function () {
    taeget_position = document.querySelector('#FadeUpElement').getBoundingClientRect().top;
    taeget_position2 = document.querySelector('#FadeUpElement2').getBoundingClientRect().top;
    taeget_position3 = document.querySelector('#FadeUpElement3').getBoundingClientRect().top;
    
    if (taeget_position <= window.innerHeight && once !== true) {
        once = true;
        const style = document.createElement('style')
        style.innerHTML = 
            `#Yomomo{
                height: 150px;
                background-color: green;
            }
            .FadeUpImage {
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
            #H1{
                text-align: center;
                font-size: 22px;
                font-weight: bold;
            }
            #P1{
                margin: 0 8% 8% 8%;
                font-size: 16px;
            }
            .TextFadeUP {
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
            #IconElements{
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
            }a.IMG img{
                width: 70px;
            }`
        document.body.appendChild(style)
    }
    
    if (taeget_position2 <= window.innerHeight && once2 !== true) {
        once2 = true;
        const style = document.createElement('style')
        style.innerHTML = 
            `#Yomomo2{
                height: 150px;
                background-color: green;
            }
            .FadeUpImage2 {
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
            #H2{
                text-align: center;
                font-size: 22px;
                font-weight: bold;
            }
            #P2{
                margin: 0 8% 8% 8%;
                font-size: 16px;
            }
            .TextFadeUP2 {
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
			#IconElements2{
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
            }
            a.IMG2 img{
                width: 70px;
            }`
        document.body.appendChild(style)
    }
    
    if (taeget_position3 <= window.innerHeight && once3 !== true) {
        once3 = true;
        const style = document.createElement('style')
        style.innerHTML = 
            `#Yomomo3{
                height: 150px;
                background-color: green;
            }
            .FadeUpImage3 {
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
            #H3{
                text-align: center;
                font-size: 22px;
                font-weight: bold;
            }
            #P3{
                margin: 0 8% 8% 8%;
                font-size: 16px;
            }
            .TextFadeUP3 {
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
			#IconElements3{
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
            }a.IMG3 img{
                width: 70px;
            }`
        document.body.appendChild(style)
    }
});
"use strict";
        // 配列シャッフル
        Array.prototype.shuffle = function () {
            var i = this.length;
            while (i) {
                var j = Math.floor(Math.random() * i);
                var t = this[--i];
                this[i] = this[j];
                this[j] = t;
            }
            return this;
        }

        // 広域変数
        var timer = NaN, score = 0, flipTimer, prevCard, startTime;

        // 初期化関数
        function init() {
            
            var msg = localStorage.getItem("memo");
            document.getElementById("memo").value = msg;
            
            var msg2 = localStorage.getItem("memo2");
            document.getElementById("memo2").value = msg2;
            
            var table = document.getElementById("table");

            var cards = [];
            for (var i = 1 ; i <= msg*msg2/2 ; i++) {
                cards.push(i);
                cards.push(i);
            }
            cards.shuffle();

            for (var i = 0 ; i < msg ; i++) {
                var tr = document.createElement("tr");
                for (var j = 0 ; j < msg2 ; j++) {
                    var td = document.createElement("td");
                    td.className = "card back";
                    td.number = cards[i * msg2 + j];
                    td.onclick = flip;
                    tr.appendChild(td);
                }
                table.appendChild(tr);
            }

            startTime = new Date();
            timer = setInterval(tick, 1000);
        }
        
        function Save() {
            var msg = document.getElementById("memo").value;
            localStorage.setItem("memo", msg);
        }
        
        function Save2() {
            var msg2 = document.getElementById("memo2").value;
            localStorage.setItem("memo2", msg2);
        }

        // 経過時間計測用タイマー
        function tick() {
            var now = new Date();
            var elapsed = Math.floor((now.getTime() - startTime.getTime()) / 1000);
            document.getElementById("time").textContent = elapsed;
        }

        // カード裏返し
        function flip(e) {
            var src = e.srcElement;
            if (flipTimer || src.textContent != "") {
                return;
            }

            var num = src.number;
            src.className = "card";
            src.textContent = num;

            // １枚目
            if (prevCard == null) {
                prevCard = src;
                return;
            }

            // ２枚目
            if (prevCard.number == num) {
                if (++score == 10) {
                    clearInterval(timer);
                }
                prevCard = null;
                clearTimeout(flipTimer);
            } else {
                flipTimer = setTimeout(function () {
                    src.className = "card back";
                    src.textContent = "";
                    prevCard.className = "card back";
                    prevCard.textContent = "";
                    prevCard = null;
                    flipTimer = NaN;
                }, 1000);
            }
        }
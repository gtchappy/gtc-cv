// 通过css选择器找到demo元素
let html = document.querySelector('#html');
let style = document.querySelector("#style")

let string = `/*你好我是一名前端新人
接下来我要加样式了
我要加的样式是*/
body{
    color:black;
}
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/*
接下来我把 div 变成一个八卦图
注意看好了
首先把 div 变成一个圆
*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*
八卦是阴阳形成的
一黑一白
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}

/*
加两个球
*/
#div1::before{
    width:100px;
    height:100px;
    left:50%;
    top:0;
    position:absolute;
    transform:translateX(-50%);
    background: radial-gradient(circle, rgba(255,255,255,1) 15%, rgba(0,0,0,1) 15%);
    border-radius:50%;
}
#div1::after{
    width:100px;
    height:100px;
    left:50%;
    top:50%;
    position:absolute;
    transform:translateX(-50%);
    background: radial-gradient(circle, rgba(0,0,0,1) 15%, rgba(255,255,255,1) 15%);
    border-radius:50%;
}

`;

let string2 = ''
// string = string.replace(/\n/g,"<br>")
let n = 0

let step = () => {
    setTimeout(() => {
        // 如果是回车就替换为<br>
        if (string[n] === "\n") {
            string2 += "<br>";
        } else if (string[n] === " ") {
            string2 += "&nbsp";
        } else {
            string2 += string[n]
        }

        html.innerHTML = string2;
        style.innerHTML = string.substring(0,n+1);
        window.scrollTo(0,9999);
        html.scrollTo(0,9999)
        if (n < string.length - 1) {
            n = n + 1;
            step()
        } else {

        }
    }, 10);
}

step();




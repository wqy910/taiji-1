let html = document.querySelector("#html");    //通过css选择器找到这个函数
let style = document.querySelector("#style");
let string = `
/*你好,我是一名前端新人
接下来我要加样式了
我要加的样式是*/
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/*接下来我把div变成八卦图
*首先把div变成一个圆
*/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.8);
    border:none;
}
/* 八卦是阴阳形成的
*一黑一白
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*接下来,加两个球*/
#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom:0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
  }`;
let string2 = "";
// string = string.replace(/\n/g, "<br>");   //通过正则表达式,把空格变成变行, replace把字符串变成其他东西,这行代码是有尖括号的
let n = 0;
let step = () => {
    setTimeout(() => {
        if (string[n] === "\n") {
            //如果是回车,就不照搬
            string2 += "<br>";   //string2 =string2 +"<br>"
        } else if (string[n] === " ") {
            string2 += "&nbsp;";
        } else {
            //如果是回车,就照搬
            string2 += string[n]; //string2=string2+string[n]
        }                                     //if else可以简化成?:表达式   string2 += string[n] ==="\n" ? "<br>" : string[n];
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 999999999);
        html.scrollTo(0, 999999);
        if (n < string.length - 1) {
            n += 1;
            step();//如果不是最后一个,加1后在调用一次step()
        } else {
            //如果是最后一个就什么都不做
        }
    }, 50);
};
step();

> Homework path: https://codesandbox.io/s/kmprr27ov7

1. 这个data-key的值能不能用别的方式获取到？
2. 区分大小写的时候还有没有别的方法可以实现？
3. class name中如果储存的是多个名称的情况下（而且你不确定里面都是哪些），可不可以用别的方式去除自己添加的类名？

### 2018-12-13
| Document Needs To Read                                                                                 | Practice File                     |
| ------------------------------------------------------------------------------------------------------ | --------------------------------- |
| 1. 这个data-key的值能不能用别的方式获取到？<br/>
2. 区分大小写的时候还有没有别的方法可以实现？<br/>
3. class name中如果储存的是多个名称的情况下（而且你不确定里面都是哪些），可不可以用别的方式去除自己添加的类名？<br/> |
|            

### 2018-12-12

| Document Needs To Read                                                                                 | Practice File                     |
| ------------------------------------------------------------------------------------------------------ | --------------------------------- |
| https://wangdoc.com/javascript/types/index.html <br/> 是关于Javascript的数据类型的，不太了解的同学可以学一下，<br/>了解的可以再温习一下 | Ex2: <br/>显示目前的时间
<br/>更新时针、分针、秒针 |
| 大家在看event的时候记得看一下代理和传播<br/>https://wangdoc.com/javascript/events/model.html                            |                                   |
```JavaScript
var myDate = new Date();

myDate.getYear();        //获取当前年份(2位)

myDate.getFullYear();    //获取完整的年份(4位,1970-????)

myDate.getMonth();       //获取当前月份(0-11,0代表1月)

myDate.getDate();        //获取当前日(1-31)

myDate.getDay();         //获取当前星期X(0-6,0代表星期天)

myDate.getTime();        //获取当前时间(从1970.1.1开始的毫秒数)

myDate.getHours();       //获取当前小时数(0-23)

myDate.getMinutes();     //获取当前分钟数(0-59)

myDate.getSeconds();     //获取当前秒数(0-59)

myDate.getMilliseconds();    //获取当前毫秒数(0-999)

myDate.toLocaleDateString();     //获取当前日期

var mytime=myDate.toLocaleTimeString();     //获取当前时间

myDate.toLocaleString( );        //获取日期与时间
```
 

### 2018-12-11

| Document Needs To Read                                                                                                                                                                                         | Practice File                                                          |
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| https://wangdoc.com/javascript/ 阅读入门篇                                                                                                                                                                          | week1 - 20181211.md                                                    |
| https://wangdoc.com/javascript/dom/document.html <br/> DOM                                                                                                                                                     | exercise.html                                                          |
| 基本语法看完以后看下这个<br/>document.querySelector()，document.querySelectorAll()<br/>document.getElementsByTagName()<br/>document.getElementsByClassName()<br/>document.getElementsByName()<br/>document.getElementById() | Ex1: 要求：模拟一个打鼓的页面。用户在键盘上按下 ASDFGHJKL 这几个键时，页面上与字母对应的按钮变大变亮，对应的鼓点声音响起来。 |






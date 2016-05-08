/*
	模块的分类
	1.内置模块 fs http util (node自带)
	2.文件模块 自定义 
	3.别人写的 npm install安装 
	   第三方模块
	当加载一个文件模块，要加路径 ./
	当加载一个第三方的模块时，不加./
	先取出module.paths中的第一个路径
	跟当前的模块同级的node_modules文件夹
	尝试把它作为模块直接加载
	会把person 当成一个包来处理
	先把package.json中的main对应的模块进行加载
	如果没有package.json或者没有main配置项尝试把index.js(优先) 、index.json文件进行加载
*/

/*通过require加载一个文件的时候，会去找它的入口 文件 如mime.js*/
var mime = require('mime');
//console.log(require);

//var mod = require('模块名');
//mod等于 这个模块的package.json中的main 配置项目中的模块导出来的对象.(module.exports)
var person = require('person');
console.log(person);
var person2 = require('person.js');
function Message(obj){
	this.body=document.querySelector('body');
	this.div=document.createElement("div");
	this.txt = document.createElement("p");
	this.color = obj.color || "#666";//文字颜色
	this.fontSize = obj.fontSize || "13px";//文字大小
	this._w = obj.Width || "200px";//宽
	this._h = obj.Height || "100px";//高
	this.bd = obj.b_Color || "1px solid #737373";//边框
	this.Left = obj.Left;
	this.Top = obj.Top;
	this.Stop_time = obj.Stop_time || 2000;//定时器时间
	this.bg = obj.bg || "rgba(200,200,200,.8)";//背景色
	this.flag = true;
	this.div.style.display = "none";
	var a = document.getElementsByClassName('rybMessageCustomExclusivity');
	var message = true;
	if (a.length >= 1) {
		message = false;
	}else{
		message = true;
	}
	if (message == true) {
		this.fun();
		this.Time();
	}
}
Message.prototype.fun = function(){
	this.div.style.cssText = `padding:0;position:fixed;width:${this._w};height:${this._h};border:${this.bd};background-color:${this.bg};text-align:center;transition:all .5s 2s;line-height:${this._h};`;
	this.txt.style.cssText = `margin:0;font-size:${this.fontSize};color:${this.color};`;
;
 	if (!this.Left) {
 		this.div.style.left = "50%";
 		this.div.style.marginLeft = "-"+(parseInt(this._w)/2)+"px";
 	}else{
 		this.div.style.left = this.Left;
 	}
 	if (!this.Top) {
 		this.div.style.top = "50%";
 		this.div.style.marginTop = "-"+(parseInt(this._h)/2)+"px";
 	}else{
 		this.div.style.top = this.top;
 	}
 	this.div.className = "rybMessageCustomExclusivity";

	this.div.appendChild(this.txt);
	this.body.appendChild(this.div);
}
Message.prototype = {
	show:function(msg){
	var that = this;
	this.div.style.display = "block";
	this.txt.innerHTML = msg;
	if(this.flag == true){
		var t = setTimeout(function(){
			// var child=document.getElementsByClassName("rybMessageCustomExclusivity");
			// child[0].parentNode.removeChild(child[0]);
			that.div.style.display = "none";
		},this.Stop_time);
	}
}
}
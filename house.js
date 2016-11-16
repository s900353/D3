function house()
{
var width = 1024;
var height = 768;
var ctrl = d3.select("body").append("svg").attr("width", width).attr("height", height);
d3.csv("./practice.csv", 
	function(data)
	{
		var ln = data.length;
		console.log(data);
		var maxy = d3.max(data, function(d){ return d.SAVINGS; });
		var lines = d3.line().x(function(d,i){return i*(width/ln);}).y(function(d){return height-d.SAVINGS*(height/maxy)*0.2;});
		ctrl.append("path").attr("d", function(d){
			return "M0,"+height+"L"+width+","+height;
		}).attr("stroke", "black").attr("fill", "none");
		ctrl.append("path").attr("d", function(d){
			return "M0,0"+"L0,"+height;
		}).attr("stroke", "black").attr("fill", "none");
		ctrl.append("path").data([data]).attr("d", lines).attr("stroke", "red").attr("fill", "none");
		
	}
);

}

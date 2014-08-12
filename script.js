function graphit() {
  //reset canvas if already has graph
  if (document.getElementById("button").innerHTML === "Update") {
    document.getElementById("canvasHolder").innerHTML = "";
    document.getElementById("canvasHolder").innerHTML = "<canvas id=\"canvas\"></canvas>";

  }
  var samplelist = document.getElementById("variables").value.split(","); //["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"];

  var datas = document.getElementById("data").value.split("\n"); //[65,59,90,81,56,55,40];
  var dataMax = document.getElementById("dataMax").value.split(","); //[70,100,100,90,200,60,40];
  function setupdata(data, dataMax) {
    var output = [];

    for (var x = 0; x < data.length; x++) {
      output[x] = data[x] / dataMax[x];
    }
    return output;

  }

  var datasets = [];
  var color0 = "rgba(9, 26, 56,.8)";
  var color1 = "rgba(234, 109, 36,.8)";
  var color2 = "rgba(255, 204, 51,0.8)";
  var fillcolorlist = [color0, color1, color2];
  var strokeColorList = ["rgba(220,220,220,1)", "rgba(110,110,10,1)", "rgba(2,220,0,1)"];
  var pointColorList = ["rgba(220,220,220,1)", "rgba(110,110,10,1)", "rgba(2,220,0,1)"];
  var pointStrokeColorList = ["#fff", "#ffcc33", "#15bf64"];

  for (var x = 0; x < datas.length; x++) {
    var inputData = setupdata(datas[x].split(","), dataMax);
    //alert(inputData);
    datasets[x] = {
      label: "My " + x + " dataset",
      fillColor: fillcolorlist[x],
      strokeColor: "#fff",
      pointColor: fillcolorlist[x],
      pointStrokeColor: "#fff",
      pointHighlightFill: fillcolorlist[x], //"#fff",//********THIS ONE USED***
      pointHighlightStroke: "rgba(220,220,220,1)",
      data: inputData
    }

  }




  //fix tooltip for multiple datasets!!!!!
  //template: <%if (label=='Eating'){%><%=label%>:65 <%}%>
  var tooltipString = "";
  for (var x = 0; x < samplelist.length; x++) {

    //var eachDataList = []
    for (var i = 0; i < datas.length; i++) {

      var val = datas[i].split(",")[x];
      if (i == 0) {
        tooltipString += "<%if (label=='" + samplelist[x] + "' && fillColor=='" + color0 + "'){%>" + val + " <%}%>";

      }
      if (i == 1) {
        tooltipString += "<%if (label=='" + samplelist[x] + "' && fillColor=='" + color1 + "'){%>" + val + " <%}%>";

      }
      if (i == 2) {
        tooltipString += "<%if (label=='" + samplelist[x] + "' && fillColor=='" + color2 + "'){%>" + val + " <%}%>";

      }


    }


    //    tooltipString += "<%if (label=='" + samplelist[x] + "'){%><%=label%>:" + "singleUsed" + " <%}%>";

  }




  // alert(tooltipString);

  var radarChartData = {
    labels: samplelist,
    datasets: datasets
  };




  window.myRadar = new Chart(document.getElementById("canvas").getContext("2d")).Radar(radarChartData, {
    responsive: true,
    tooltipTemplate: tooltipString, //<%=label%>
    multiTooltipTemplate: tooltipString, //"<%if (label=='My First dataset'){%><%=label%>:65 <%}%><%if (label=='Eating' && fillColor=='"+color1+"'){%>"+"rockin'"+" <%}%>",
    tooltipEvents: ["mousemove", "touchstart", "touchmove","onclick"],

  });
  //myRadar.destroy();
  document.getElementById("button").innerHTML = "Update";



  //var image64 = myRadar.toBase64Image();
  
//  document.getElementById("image").src = document.getElementById("canvas").toDataURL("image/png");
  //document.getElementById("image").innerHTML ="<p>"+image64+"</p>";
  //   var image = new Image();
  //	image.src = document.getElementById("canvas").toDataURL("image/png");
  //document.getElementById("image").src = document.getElementById("canvas").toDataURL("image/png");
  
 // var test=3;
};



function turnToImage(){
   var canvas = document.getElementById("canvas");
  var image64 = canvas.toDataURL("image/png");
 var downloadlink = document.getElementById("downloadlink");
  downloadlink.href = image64;
  downloadlink.download = image64;
 // alert(image64);
    //document.body.appendChild(newImg);
 
};

function downloadImage(){
  //var newImg = document.createElement("img");
  
  //newImg.src = image64;

  
  
}
var GraphGrid = function(linkStore){
  
  this.redraw = function(){
    if (linkStore._data.monitor){
      drawGraphs()
    } else {
      $('#foo').append('please select a monitor type from the list above')
    }
  }
  
  function imgUrl(id, type, urlTemplate){
    return urlTemplate.replace(/\{ID\}/g, id).replace(/\{TYPE\}/g, type)
  }
  
  function drawGraphs(){
    $('#foo').empty();
    linkStore._data.ids.forEach(function(id){
      drawCroppedGraph(imgUrl(id, linkStore._data.monitor, linkStore._data.urlTemplate), id)
    })
  }
  
  function drawCroppedGraph(url, label) {  
    var canvas = $('<canvas>')
    canvas[0].width = 440
    canvas[0].height = 190
    var holder = $('<div class="holder"></div>')
    if (label)
      holder.append($('<span class="label">'+label+'</span>'))
    holder.append(canvas)
    $('#foo').append(holder)
    var ctx = canvas[0].getContext('2d');  
    var img = new Image();  
    img.onload = function(){  
      ctx.drawImage(img, 40,30, 440, 190, 0, 0, 440, 190);  
    };  
    img.src = url;  
  }
  
  this.redraw()
}
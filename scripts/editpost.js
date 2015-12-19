$(document).ready(function(){

  $.get(server+"posts/"+postId).done(function(postData){

    $('#title').val(postData[0].title)
    $('#body').val(postData[0].body)

    
  })
})

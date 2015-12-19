$(document).ready(function(){

  $.get(server+"posts/"+postId+"/comments/"+commentId).done(function(comment){


    $('#body').val(comment[0].body)


  })
})

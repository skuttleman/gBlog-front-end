
$(document).ready(function(){

  $.get(server+'posts').done(function(posts){
    var $template = $('.g-post-template');
    for(i=0; i<Math.min(posts.length, 20); i++){
      var $clone = $template.clone()
      $clone.find('.g-title').text(posts[i].title)
      var preview = posts[i].body.substring(0, 50);
      $clone.find('.g-preview').text(preview)
      $template.parent().append($clone)
    }

    $template.remove()
  })




})

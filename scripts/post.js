$(document).ready(function(){

  $.get(server+"posts/"+postId).done(function(postData){

    $.get(server+"posts/"+postId+"/comments").done(function(comments){
      var $template = $('.g-comment-template');
      for(i=0; i<Math.min(comments.length, 20); i++){
        var $clone = $template.clone()
        $clone.find('.g-comment-body').text(comments[i].body)
        $template.parent().append($clone)
      }

      $template.remove()
    })

    if(postData[0]){
      var $post = $('.g-blog');
    $post.find('.g-title').text(postData[0].title)
    $post.find('.g-body').text(postData[0].body+' SKUTTLEMAN RULES')
    } else {

    }
  })

})

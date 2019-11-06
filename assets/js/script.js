$(function(){
  $('.color').click(function(){//appel de la fonction sur le clic d'une couleur
    $(this).each(function(){//appel de la fonction sur toutes les couleurs
      var myColor = $(this).attr('id')//récupère la valeur sur l'id dans une variable
      $('#text').css('color', myColor)//change la couleur en fonction de la couleur selectionné
    })
  })
})

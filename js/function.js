$(function(){
    /* menu celular*/
    $(".mobile").click(function(){

        $(".mobile ul").slideToggle("slow");
    });
    /* fim menu celular */

    /* função scroll suave */
    $(".scroll-suave a").click(function(e){

		//estou dizendo que o meu menu de navegação vai cortar oq tem efeito
		e.preventDefault();

		//vou pegar a referencia do meu menu de navegação com o $ e depois pegar o atributo dele
		var id = $(this).attr("href"),
		//vou colocar o elemento que mede a distancia do nav aos conteudo (offset)
			medirOtamanho = $(id).offset().top;
			console.log(medirOtamanho);

		//vou animar agora andando no meu html e body da pagina
		$("body, html").animate({
			//quero animar o scroll
			scrollTop: medirOtamanho	
		},1500);
	});

	$(".seta").click(function(e){

		//estou dizendo que o meu menu de navegação vai cortar oq tem efeito
		e.preventDefault();

		//vou pegar a referencia do meu menu de navegação com o $ e depois pegar o atributo dele
		var id = $(this).attr("href"),
		//vou colocar o elemento que mede a distancia do nav aos conteudo (offset)
			medirOtamanho = $(id).offset().top;
			console.log(medirOtamanho);

		//vou animar agora andando no meu html e body da pagina
		$("body, html").animate({
			//quero animar o scroll
			scrollTop: medirOtamanho	
		},1500);
	});

	

    /*fim scroll suave */
    
    /* Função para animar quando clicar contato */
    function animeContato(){
		var aviso = $(".rodape-redes-sociais"),
		animarAviso = "aviso-start";
		$("#aviso").click(function(){
			$(aviso).addClass(animarAviso);
			//$(".aviso-start").fadeIn();
			//$(aviso).removeClass(animarAviso);
			setTimeout(function(){$(aviso).removeClass(animarAviso);},5000);
		});	
	};
    animeContato();
    
    	//sidebar celular
	function animeContato1(){
		var aviso = $(".rodape-redes-sociais"),
		animarAviso = "aviso-start";
		$("#aviso1").click(function(){
			$(aviso).addClass(animarAviso);
			//$(".aviso-start").fadeIn();
			//$(aviso).removeClass(animarAviso);
			setTimeout(function(){$(aviso).removeClass(animarAviso);},5000);
		});	
	};
    animeContato1();
    /*fim função animar quando clica*/
});
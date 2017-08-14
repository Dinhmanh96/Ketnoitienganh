$(document).ready(function() {
	$(".banner a").click(function() {
		name = $(this).attr('href');
		var scroll1 = $(name).position().top;
		$('html, body').stop().animate({scrollTop:scroll1}, 800)
	});
	$("#my-form").submit(function () {
	// alert('1');
	// document.write('manh');
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();
        var flag = true;
        if(name == "")
        {	
            $("#name_errors").text("Bạn chưa nhập tên!");
            flag = false;
        }else{
        	$("#name_errors").text("");
        	if(email == ""){
            $("#email_errors").text("Bạn chưa nhập email!");
            flag = false;
        	}else{
	            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	            var result =  re.test(email);
	            if(result == false){
	                $("#email_errors").text("Email sai định dạng");
	                flag = false;
	            }else{
	            	$("#email_errors").text("");
	            	if(message == ""){
		            	$("#message_errors").text("Bạn chưa nhập message");
		            	flag = false;
	       			}else{
	       				flag = true;
                        // $(".form-frontend button").attr('onclick',return confirm('Bạn muốn xóa tất cả Message ?'));
	       			}
	            }
	        }
        }
        return flag;
    });

    $(".zoom").click(function(){
    	// $("#modal-image").removeAttr('style');
        var link = $(this).parents(".pic").children(".link").html();
        var title = $(this).parents(".pic").children(".title").html();
    	var src = $(this).parents(".pic").children(".image").attr("src");
        var description = $(this).parents(".pic").children(".description").html();

        $(this).parents(".pic").children(".link").addClass("link-active-modal");
        $(this).parents(".pic").children(".title").addClass("title-active-modal");
    	$(this).parents(".pic").children(".image").addClass("active-modal");
        $(this).parents(".pic").children(".description").addClass("description-active-modal");
        $(".modal-link").html(link);
        $(".modal-link").attr("href", link);
        $(".modal-title").html(title);
        $(".description-modal").html(description);
    	$("#modal-image").attr("src",src);
    	
    });

    $(".prv").click(function() {
    	if ($(".pic-showcase .active-modal").parents(".pic").prev().is(".pic")) {

            $(".pic-showcase .active-modal").parents(".pic").prev().children(".link").addClass("link-active-modal");
            $(".pic-showcase .active-modal").parents(".pic").prev().children(".title").addClass("title-active-modal");
            $(".pic-showcase .active-modal").parents(".pic").prev().children(".description").addClass("description-active-modal");
            $(".pic-showcase .active-modal").parents(".pic").prev().children(".image").addClass("active-modal");

	    	$("#modal-image").fadeOut('250',function (){
                $(".link-active-modal").last().removeClass("link-active-modal");
	    		$(".active-modal").last().removeClass("active-modal");
                $(".description-active-modal").last().removeClass("description-active-modal");
                $(".title-active-modal").last().removeClass("title-active-modal");
                var src = $(".pic-showcase .active-modal").attr("src");
                var link = $(".pic-showcase .link-active-modal").html();
                var description = $(".pic-showcase .description-active-modal").html();
                var title = $(".pic-showcase .title-active-modal").html();
		    	// document.write(src);
                $(".modal-link").html(link);
                $(".modal-title").html(title);
                $(".description-modal").html(description);
                $(".modal-link").attr("href", link);
		    	$("#modal-image").attr("src",src);
	    	});
	    	$("#modal-image").fadeIn('250');
    	}else{
            $(".pic-showcase .pic .link").last().addClass("link-active-modal");
            $(".pic-showcase .pic .link").first().removeClass("link-active-modal");

            $(".pic-showcase .pic .title").last().addClass("title-active-modal");
            $(".pic-showcase .pic .title").first().removeClass("title-active-modal");

            $(".pic-showcase .pic .description").last().addClass("description-active-modal");
            $(".pic-showcase .pic .description").first().removeClass("description-active-modal");

    		$(".pic-showcase .pic .image").last().addClass("active-modal");
    		$(".pic-showcase .pic .image").first().removeClass("active-modal");

    		$("#modal-image").fadeOut('250',function (){

                var link = $(".pic-showcase .pic .link").last().html();
                var title = $(".pic-showcase .pic .title").last().html();
                var description = $(".pic-showcase .pic .description").last().html();
    			var src = $(".pic-showcase .pic .image").last().attr("src");

                $(".modal-link").html(link);
                $(".modal-title").html(title);
                $(".description-modal").html(description);
                $(".modal-link").attr("href", link);
	    		$("#modal-image").attr("src",src);
    		});
    		$("#modal-image").fadeIn('250');
    	}
    	
    });

    $(".next").click(function() {
    	if ($(".pic-showcase .active-modal").parents(".pic").next().is(".pic")) {
            $(".pic-showcase .active-modal").parents(".pic").next().children(".link").addClass("link-active-modal");
            $(".pic-showcase .active-modal").parents(".pic").next().children(".description").addClass("description-active-modal");
            $(".pic-showcase .active-modal").parents(".pic").next().children(".title").addClass("title-active-modal");
    		$(".pic-showcase .active-modal").parents(".pic").next().children(".image").addClass("active-modal");
	    	$("#modal-image").fadeOut('250',function () {

	    		$(".active-modal").first().removeClass("active-modal");
                $(".link-active-modal").first().removeClass("link-active-modal");
                $(".description-active-modal").first().removeClass("description-active-modal");
                $(".title-active-modal").first().removeClass("title-active-modal");

	    		var src = $(".pic-showcase .active-modal").attr("src");
                var description = $(".pic-showcase .description-active-modal").html();
                var title = $(".pic-showcase .title-active-modal").html();
                var link = $(".pic-showcase .link-active-modal").html();

                $(".modal-link").html(link);
                $(".modal-title").html(title);
                $(".description-modal").html(description);
                $(".modal-link").attr("href", link);
	    		$("#modal-image").attr("src",src);
	    	});
	    	$("#modal-image").fadeIn('250');
    	}else{
            $(".pic-showcase .pic .link").first().addClass("link-active-modal");
            $(".pic-showcase .pic .link").last().removeClass("link-active-modal");

            $(".pic-showcase .pic .description").first().addClass("description-active-modal");
            $(".pic-showcase .pic .description").last().removeClass("description-active-modal");

            $(".pic-showcase .pic .title").first().addClass("title-active-modal");
            $(".pic-showcase .pic .title").last().removeClass("title-active-modal");

    		$(".pic-showcase .pic .image").first().addClass("active-modal");
    		$(".pic-showcase .pic .image").last().removeClass("active-modal");
    		$("#modal-image").fadeOut('250',function (){
                var link = $(".pic-showcase .pic .link").first().html();
                var description = $(".pic-showcase .pic .description").first().html();
                var title = $(".pic-showcase .pic .title").first().html();
    			var src = $(".pic-showcase .pic .image").first().attr("src");
                $(".modal-link").html(link);
                $(".modal-title").html(title);
                $(".description-modal").html(description);
                $(".modal-link").attr("href", link);
                $("#modal-image").attr("src",src);

    		});
    		$("#modal-image").fadeIn('250');
    	}
    });
});



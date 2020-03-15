$(document).ready(function() {

	/* görsel */
    var box1   = '.files-upload-area',
        box2   = '.viewing-selected-files-area',
        ubtn   = 'label>i#re-upload-btn',
        rbtn   = 'label>i#remove-btn';


    $('input#file').change(function(){
		var imageFile = $(this)[0].files;
		
		if(imageFile[0].size>1024*1024){
			alert('Maksimum görsel boyutu 1 MB olmalıdır.');
		} else {
			var reader = new FileReader();
			reader.onload = function(e) {
				$(box2).html('<img class="thumb-object" src="'+e.target.result+'">');
			}

			reader.readAsDataURL(imageFile[0]);

			$(box1).hide();
			$(box2).show();
			$(ubtn).show();
			$(rbtn).show();
		}
		
    });
	
	$(ubtn).click(function () {
		$('input#file').click();
    });
	
    $(rbtn).click(function () {
		$('input#file').val('');
        $(box1).show();
        $(box2).html('').hide();
        $(ubtn).hide();
        $(rbtn).hide();
    });

	/* görsel */ 
	
	/* etiket */
	var input = document.querySelector('input[name=tags]');
	new Tagify(input,{
		maxTags:10
	});
	
	// önsöz
	$('small#preamble-count').html('<strong style="color:#C9BCCF;">280</strong>');
	$('textarea#preamble').keyup(function(){
		let preamble = $('textarea#preamble').val();
		let remainingCharacter = (280-preamble.length);
		
		if(remainingCharacter < 0){
			remainingCharacter = '<strong style="color:red;">'+remainingCharacter+'</strong>';
		} else {
			remainingCharacter = '<strong style="color:#C9BCCF;">'+remainingCharacter+'</strong>';
		}
		
		$('small#preamble-count').html(remainingCharacter);
	})
	
	$('button#approval').on('click', function(){
		
		// başlık kontrolü
		if($('input#title').val() == ''){
			return alert('Başlık eklemeniz gerekmektedir.');
		}
		
		// önsöz kontrolü
		if($('textarea#preamble').val() == ''){
			return alert('Alt başlık eklemeniz gerekmektedir.');
		}
		
		let preamble = $('textarea#preamble').val();
		if(preamble.length>280){
			return alert('Alt başlık maksimum 280 karakter olmalıdır.');	
		}
		
		
		// içerik kontrolü
		if($('textarea#content').val() == '' || $('textarea#content').val() == '<p></p>'){
			return alert('İçerik eklemeniz gerekmektedir.');
		}
		
		// görsel kontrolü
		if($('input#file').val() == ''){
			return alert('Görsel eklemeniz gerekmektedir.');
		}
		
		// etiket kontrolü
		let tags = $('input#tags').val().split(',');
		if(tags.length<3){
			
			return alert('En az 3 kelime belirtilmelidir.');
		}
		
		
		$('#create-form').submit();
	});
	
});

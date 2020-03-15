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
		
		// içerik kontrolü
		if($('textarea#content').val() == '' || $('textarea#content').val() == '<p></p>'){
			return alert('İçerik eklemeniz gerekmektedir.');
		}

		// source-link kontrolü
		if($('input#source-link').val() == ''){
			return alert('Araştırma Kaynağı (URL) eklemeniz gerekmektedir.');
		}

		// news-link kontrolü
		if(!validURL($('input#source-link').val())){
			return alert('Geçerli bir Araştırma Kaynağı (URL) belirtmeniz gerekmektedir.');
		}

		// etiket kontrolü
		let tags = $('input#tags').val().split(',');
		if(tags.length<3){
			
			return alert('En az 3 kelime belirtilmelidir.');
		}
		
		
		$('#create-form').submit();
	});
	
});

function validURL(str) {
	var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
		'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
		'((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
		'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
		'(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
		'(\\#[-a-z\\d_]*)?$','i'); // fragment locator
	return !!pattern.test(str);
}

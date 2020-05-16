window.broccoliFieldStdDocumentSummernoteEditor = function(broccoli){
	var $ = require('jquery');
	var isGlobalJQuery = ( window.jQuery ? true : false );

	/**
	 * データを正規化する (Client Side)
	 * このメソッドは、同期的に振る舞います。
	 */
	this.normalizeData = function( fieldData, mode ){
		// 編集画面用にデータを初期化。
		var rtn = fieldData;
		if(!rtn || typeof(rtn) != typeof({})){
			rtn = {};
		}
		if(typeof(rtn.src) != typeof('')){
			rtn.src = '';
		}
		if(typeof(rtn.editor) != typeof('')){
			rtn.editor = '';
		}
		return rtn;
	}

	/**
	 * プレビュー用の簡易なHTMLを生成する (Client Side)
	 * InstanceTreeViewで利用する。
	 */
	this.mkPreviewHtml = function( fieldData, mod, callback ){
		var rtn = '';
		new Promise(function(rlv){rlv();})
			.then(function(){ return new Promise(function(rlv, rjt){
				rtn += fieldData.src;
				rlv();

			}); })
			.then(function(){ return new Promise(function(rlv, rjt){
				callback( rtn );
			}); })
		;
		return this;
	}

	/**
	 * エディタUIを生成 (Client Side)
	 */
	this.mkEditor = function( mod, data, elm, callback ){
		if(!data || typeof(data) != typeof({})){
			data = {};
		}

		if(typeof(data.src) != typeof('')){
			data.src = '';
		}

		var $rtn = $('<div>');
		$rtn.append(
			'<div class="broccoli-field-std-document-summernote-editor">'+
			'</div>'
		);

		$(elm).html($rtn);

		if( isGlobalJQuery ){
			// jQuery がある場合
			window.jQuery('.broccoli-field-std-document-summernote-editor').eq(0).summernote({
				// TODO: 隠蔽したい。
				placeholder: '',
				tabsize: 2,
				height: 300,
				toolbar: [
					['style', ['style']],
					['font', ['bold', 'underline', 'clear']],
					['color', ['color']],
					['para', ['ul', 'ol', 'paragraph']],
					['table', ['table']],
					['insert', ['link', 'picture', 'video']],
					['view', ['fullscreen', 'codeview', 'help']]
				]
			});
			window.jQuery('.broccoli-field-std-document-summernote-editor').eq(0).summernote('code', data.src);
		}else{
			// jQuery がない場合
			console.error('std-document-summernote-editorフィールドで Summernote (WYSIWYG)を利用するには、グローバルスコープに jQuery がロードされている必要があります。');
			$(elm).find('.broccoli-field-std-document-summernote-editor').append( $('<textarea>')
				.val(data.src)
			);
		}

		new Promise(function(rlv){rlv();}).then(function(){ return new Promise(function(rlv, rjt){
			callback();
		}); });
		return this;
	}

	// /**
	//  * エディタUIで編集した内容を検証する (Client Side)
	//  */
	// this.validateEditorContent = function( elm, mod, callback ){
	// 	var errorMsgs = [];
	// 	// errorMsgs.push('エラーがあります。');
	// 	new Promise(function(rlv){rlv();}).then(function(){ return new Promise(function(rlv, rjt){
	// 		callback( errorMsgs );
	// 	}); });
	// 	return this;
	// }

	/**
	 * エディタUIで編集した内容を保存 (Client Side)
	 */
	this.saveEditorContent = function( elm, data, mod, callback, options ){
		options = options || {};
		options.message = options.message || function(msg){};//ユーザーへのメッセージテキストを送信
		var rtn = {};

		if( isGlobalJQuery ){
			// jQuery がある場合
			rtn.src = window.jQuery(elm).find('.broccoli-field-std-document-summernote-editor').eq(0).summernote('code');
				// TODO: 隠蔽したい。

		}else{
			// jQuery がない場合
			rtn.src =$(elm).find('.broccoli-field-std-document-summernote-editor textarea').val();
		}
		rtn.editor = '';


		rtn = JSON.parse( JSON.stringify(rtn) );

		new Promise(function(rlv){rlv();}).then(function(){ return new Promise(function(rlv, rjt){
			callback(rtn);
		}); });
		return this;
	}

}

function r(){
				var textContent = document.getElementById('editor-textarea').value;
				document.getElementById('viewer').srcdoc = textContent;
			}
			function e(){
				var textareas = document.getElementsByTagName('textarea');
				var count = textareas.length;
				for(var i=0;i<count;i++){
    					textareas[i].onkeydown = function(e){
        					if(e.keyCode==9 || e.which==9){
            						e.preventDefault();
            						var s = this.selectionStart;
            						this.value = this.value.substring(0,this.selectionStart) + "\t" + this.value.substring(this.selectionEnd);
            						this.selectionEnd = s+1; 
        						}
    					}
				}
			}
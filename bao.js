const forEach = f => x => Array.prototype.forEach.call(x, f);

function recursion(node) {
        var textContent = "";
        if(node.hasChildNodes()) {
                childNodes = node.childNodes;
                forEach((item) => {                        
                        recursion(item);
                })(childNodes);
        } else {
                textContent = node.textContent;
		node.textContent = swapB(textContent);
        }
        
}

function swapB (text) {
        for (var i = 0; i < text.length; i++) {
                switch(text.charAt(i)) {
                        case "p":
                        case "P":
                        case "B":
                        case "b":	
                                text = setCharAt(text, i, '🅱️');
                                break;
                        default:
                                break;
                }
        }
        return text;
}

function setCharAt(str,index,chr) {
        if(index > str.length-1) return str;
        return str.substr(0,index) + chr + str.substr(index+1);
}

recursion(document.body);

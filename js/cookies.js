function writeCookie(name,value,days) {
    var date, expires;
    if (days) {
        date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        expires = "; expires=" + date.toGMTString();
            }else{
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}
function readCookie(name) {
    var i, c, ca, nameEQ = name + "=";
    ca = document.cookie.split(';');
    for(i=0;i < ca.length;i++) {
        c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1,c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length,c.length);
        }
    }
    return '';
}
function closeOverlay(){
	//console.log('closeOverlay');
	writeCookie('cookiesInfo', '1', 36500);
	var cookieOverlay = document.getElementById('cookieOverlay');
	var cookies = document.getElementById('cookies');
	document.body.removeChild(cookieOverlay);
	document.body.removeChild(cookies);
}
/*

<div id="cookies-info" class="cookies-info"><div class="cookies-info-inner pie"><p>Plus dba o swoich Klientów. Dla zapewnienia łatwości i wygody odbioru przekazywanych informacji oraz w celu usprawnienia funkcjonowania witryn plus.pl, korzystamy z technologii plików cookies. Jeśli nie chcesz, by pliki cookies były instalowane na Twoim dysku zmień ustawienia swojej przeglądarki. Dalsze korzystanie z witryny oznacza zgodę na wykorzystanie plików cookies, zgodnie z aktualnymi ustawieniami przeglądarki. Więcej informacji w <a href="http://www.plus.pl/polityka-cookies/">Polityce Cookies</a>.</p><span class="btn-green-std cookies-info-close cookies-info-accept pie">OK</span><span class="cookies-info-close btn-close" title="Zamknij komunikat"></span></div></div>

*/
function cookiecDiv(wwwName, version){
	
	if(!readCookie('cookiesInfo')){
		
		var htmlCookiessTEXT = 'Strona <b>'+ wwwName +'</b> używa plików cookies. Aby wygodnie korzystać z naszego serwisu wyraź zgodę na wykorzystanie przez nas plików cookies.<br>'+
								'<a style="" onClick="closeOverlay()">zamknij</a> ';
		var htmlCookieOverlayTEXT = '<div id="cookieOverlay"></div>'
		
		var css = document.createElement("style");
			css.type = "text/css";
		var styles = "#cookieOverlay{position: fixed;width: 100%;height: 100%;top: 0px;left: 0px;z-index:999;background-color: #333;opacity: 0.6;filter:alpha(opacity=60);}"+
							"#cookies{position:fixed;bottom:0px;width:100%;text-align:center;z-index:1000;font-family: Arial,Helvetica,sans-serif;font-size:16px;"+
									"padding-top:10px;padding-bottom:10px;}"+
							"#cookies.black{color:#f0f0f0;background-color:#000;border-top:3px solid #3B3B3B;}"+
							"#cookies.white{color:#585858;background-color:#fff;border-top:3px solid #F6F6F6;}"+
							"#cookies a{background-image:url(./js/cookies_btn.png);width:158px;height: 33px;display:inline-block;text-indent:-9999px;cursor:pointer;margin-top:5px;}";
		
		try{ 
			css.innerText = styles;
			document.body.appendChild(css);
		}catch(err){ 
			var htmlstyleDiv = document.createElement("div");
				htmlstyleDiv.id = 'styleDiv';
				document.body.appendChild(htmlstyleDiv);
			var sHTML="&nbsp;";
			var sStyle="<style type='text/css'>";
				sStyle = sStyle + styles;
				sStyle = sStyle + "</style" + ">";
				styleDiv.innerHTML = sHTML + sStyle;
		}
		
		
		var htmlCookieOverlay = document.createElement("div");
			htmlCookieOverlay.id = 'cookieOverlay';
		document.body.appendChild(htmlCookieOverlay);
		
		var htmlCookies = document.createElement("div");
			htmlCookies.id = 'cookies';
			htmlCookies.className = version;
		document.body.appendChild(htmlCookies);
		
		var wrapper = document.getElementById('cookies');
			wrapper.innerHTML = htmlCookiessTEXT;
	}else{
		//alert('readCookie: '+readCookie('cookiesInfo'));
	}
}
cookiecDiv('www.pepsi.pl', 'white');	//@ www, white || black

function insertScript(){
	
	var sHTML="&nbsp;";
	var sScript="<style type='text/css'>";
	sScript = sScript + "#ASD{}";
	sScript = sScript + "</style" + ">";
	cookies.innerHTML = sHTML + sScript;

}
//insertScript();
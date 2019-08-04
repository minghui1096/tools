(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (clientWidth >= 750) {
                docEl.style.fontSize = '100px';
            } else {
                docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            }
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)
/*setRem() {
		var uiW = 640,
			winW = document.documentElement.clientWidth,
			rate = winW / uiW;
		var oWrap = document.getElementById("app");
		if (winW > uiW) {
			oWrap.style.width = uiW + "px";
			oWrap.style.margin = "0 auto";
			document.documentElement.style.fontSize = 1 * 100 + "px";
			console.log(rate);
			return;
		}
		document.documentElement.style.fontSize = rate * 100 + "px";
	}*/

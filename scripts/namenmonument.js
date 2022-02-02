// ************* All imports for index.html ************* //
import textWrapper from './modules/wrapped-text.js';
import customCursor  from './modules/custom-cursor.js';
import clickableCursor  from './modules/clickable-cursor.js';
import copyToClipboard from './modules/clipboard.js';
import magneticBtn from './modules/magnetic-btn.js';
import autoplay from './modules/autoplay-video.js';
import imageReveal  from './modules/image-reveal.js';
import namenmonumentChoreo from './choreos/namenmonument-choreo.js';
import pageTransition from './modules/page-transition.js';




// ************* Calling the imports ************* //
customCursor();
clickableCursor();
autoplay();
magneticBtn();
copyToClipboard();
imageReveal();
textWrapper();
namenmonumentChoreo();
pageTransition();

(function () {
	window.onpageshow = function(event) {
		if (event.persisted) {
			window.location.reload();
		}
	};
})();


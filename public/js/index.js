var App = {
	showProgressBar: function() {
    ProgressBar.show();
    ProgressBar.simulateProgress();
	},
	closeProgressBar: function() {
    ProgressBar.hide();
	},
};

(function (){
    window.onload = function() {
        ProgressBar.setTarget(125);
        ProgressBar.setReached(56);
        ProgressBar.init('progressBar');
   	}
})();
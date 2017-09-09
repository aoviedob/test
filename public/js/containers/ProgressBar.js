var ProgressBar = (function (){
	
	var container;
	var target = 0;
	var reached = 0;
	var missingProgress = 0;
	var progress = 0;
	var progressNumberStyle = 'padding-left: 10%;';
	var progressStyle = '';
	var visibility = 'hide';
	var stillSimulating = false;

	var render = function(){ 
		return Utils.createString(function () {/*!
	 		<div id="progress-bar" class="pop-over {visibility}">
	    	<div class="progress-bar-content"> 
	        <div class="progress-bar-header">
	          Your Progress
	        </div>
	        <div class="progress-bar-body">
	          <div class="table">
	      	    <span>Reached: </span>
	            <div class="progress-component">
	        	    <div style="{progressStyle}" class="current-progress-component"></div>
	        	  </div>
	            <div class="progress-target">Target ${target}</div>
	          </div>
	          <span style="{progressNumberStyle}">{progress}</span>
	        	<div class="missing-progress">You need ${missingProgress} more to reach your target.</div>
	      	</div>
	      </div>
	    </div>
		!*/}, {
			target,
			reached,
			missingProgress,
			progressStyle,
			visibility,
			progress,
			progressNumberStyle,
		})
	};
	
	var initialize = function(id) {
		container = document.getElementById(id);
		container.innerHTML = render();
	};
	
	function setTarget(value) {
		target = value;
		missingProgress = value;
	}

	function setReached(value) {
		reached = value;
	}
	
	function show() {
		visibility = 'show';
	}
	
	function hide() {
		visibility = 'hide';
	}

	function simulateProgress() {
		var percentage = 1;
		var left = 15;
		var percentageToReach = Math.round(reached / target * 100);
		
		if (!stillSimulating) {
			var intervalId = setInterval(function() {

					stillSimulating = true;
					percentage += 3;
					left += 2;
					progress += 3.5;
					missingProgress -= 3.5;
					progressStyle = 'width: ' + percentage + '%;';
					progressNumberStyle = 'padding-left: '+  left + '%';

					container.innerHTML = render();

					if (percentage >= percentageToReach) {
						progress += 3.5;
						missingProgress -= 3.5;
						container.innerHTML = render();

						clearInterval(intervalId);
						stillSimulating = false;
					}
				}, 1000);
		}
	}

	return{
		init: initialize,
		setTarget,
		setReached,
		simulateProgress,
		show,
		hide,
	};

})();
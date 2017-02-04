</div>
{{#customCover}}
<style type="text/css">
	.block{
		background: rgba(255, 255, 255, 0.1) !important;
	}
</style>
{{/customCover}}
{{#games}}
<div id="gameTitle" style="text-align:center;">
	<img src="https://dl.dropboxusercontent.com/u/14759830/Portfolio/{{slug}}-title.png" />
</div>
<div id="content">
{{#isUnity}}
		<script type='text/javascript' src='https://ssl-webplayer.unity3d.com/download_webplayer-3.x/3.0/uo/jquery.min.js'></script>
		<script type="text/javascript">
		<!--
		var unityObjectUrl = "http://webplayer.unity3d.com/download_webplayer-3.x/3.0/uo/UnityObject2.js";
		if (document.location.protocol == 'https:')
			unityObjectUrl = unityObjectUrl.replace("http://", "https://ssl-");
		document.write('<script type="text\/javascript" src="' + unityObjectUrl + '"><\/script>');
		-->
		</script>
		<script type="text/javascript">
		<!--
			var config = {
				width: 960, 
				height: 540,
				params: { enableDebugging:"0" }
				
			};
			config.params["disableContextMenu"] = true;
			var u = new UnityObject2(config);
			
			jQuery(function() {

				var $missingScreen = jQuery("#unityPlayer").find(".missing");
				var $brokenScreen = jQuery("#unityPlayer").find(".broken");
				$missingScreen.hide();
				$brokenScreen.hide();

				u.observeProgress(function (progress) {
					switch(progress.pluginStatus) {
						case "broken":
							$brokenScreen.find("a").click(function (e) {
								e.stopPropagation();
								e.preventDefault();
								u.installPlugin();
								return false;
							});
							$brokenScreen.show();
						break;
						case "missing":
							$missingScreen.find("a").click(function (e) {
								e.stopPropagation();
								e.preventDefault();
								u.installPlugin();
								return false;
							});
							$missingScreen.show();
						break;
						case "installed":
							$missingScreen.remove();
						break;
						case "first":
						break;
					}
				});
				u.initPlugin(jQuery("#unityPlayer")[0], "{{gameFile}}");
			});
		-->
	</script>
		<div id="unityPlayer">
			<div class="missing">
				<a href="http://unity3d.com/webplayer/" title="Unity Web Player. Install now!">
					<img alt="Unity Web Player. Install now!" src="http://webplayer.unity3d.com/installation/getunity.png" width="193" height="63" />
				</a>
			</div>
		</div>
{{/isUnity}}
{{#isVideo}}
<div id ="player" style="text-align: center; margin: auto">
</div>
   <script>
      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '540',
          width: '960',
          videoId: '{{url}}',
{{#selectedTime}}
					playerVars: { 'start': {{startTime}} , 'end': {{endTime}} }
{{/selectedTime}}
        });
      }
    </script>
{{/isVideo}}
{{#slider}}
<div id="slider">
  <a href="#" class="control_next">></a>
  <a href="#" class="control_prev"><</a>
  <ul>
{{#images}}
    <li style="background: url('{{image}}'); background-size: cover;"></li>
{{/images}}
  </ul>  
</div>
<script src="/js/slider.js"></script>
{{/slider}}
<div class="tags">
{{#downloads}}
<a href="{{url}}" class="{{type}}">
<div class="block top left"></div>
<div class="block bottom left"></div>
<div class="block top right"></div>
<div class="block bottom right"></div><img src="/img/{{type}}.png" style="display:inline;" />{{text}}</a>
{{/downloads}}
{{#tags}}
	<div class="tag">
<div class="block top left"></div>
<div class="block bottom left"></div>
<div class="block top right"></div>
<div class="block bottom right"></div>{{tag}}</div>
{{/tags}}
<div class="clearfix"></div>
</div>

<div class="description">
<div class="block top left"></div>
<div class="block bottom left"></div>
<div class="block top right"></div>
<div class="block bottom right"></div>
{{{description}}}
</div>
</div>
{{/games}}
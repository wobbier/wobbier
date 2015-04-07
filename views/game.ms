</div>
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
		</div>{{/isUnity}}{{#isFlash}}
	<object type="application/x-shockwave-flash" data="{{gameFile}}" width="960px" height="540px">
		<param name="movie" value="{{gameFile}}" />
		<param name="quality" value="high" />
	</object>
{{/isFlash}}
{{#isVideo}}
<div style="text-align: center; margin: auto">
	<object type="application/x-shockwave-flash" style="width:960px; height:540px;" data="http://www.youtube.com/v/{{url}}?color2=FBE9EC&amp;hd=1&amp;showsearch=0&amp;version=3&amp;modestbranding=1&amp;fs=1&amp;autoplay=1">
        <param name="movie" value="http://www.youtube.com/v/{{url}}?color2=FBE9EC&amp;hd=1&amp;showsearch=0&amp;version=3&amp;modestbranding=1&amp;fs=1&amp;autoplay=1" />
        <param name="allowFullScreen" value="true" />
        <param name="allowscriptaccess" value="always" />
    </object>
</div>
{{/isVideo}}
<div class="description">
<div class="block top left"></div>
<div class="block bottom left"></div>
<div class="block top right"></div>
<div class="block bottom right"></div>
{{{description}}}
</div>
</div>
{{/games}}
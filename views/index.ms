</div>
<div id="content">
		<div class="home">
			<div class="block top left"></div>
			<div class="block bottom left"></div>
			<div class="block top right"></div>
			<div class="block bottom right"></div>
			<p>My name is Mitchell Andrews and I'm a <strong>{{age}}</strong> year old game programmer from <strong>Toronto</strong>.</p>
			<p>I program primarily in <strong>C++</strong>, <strong>C#</strong>, and <strong>Node.js</strong>.</p>
		</div>
</div>
<div id="gamesHeader">
  <img src="/img/games.png"></img>
</div>
<div id="content">
		<div class="games">
		{{#games}}
				<div class="game">
					<div class="gameThumb">
						<div class="block top left"></div>
						<div class="block bottom left"></div>
						<div class="block bottom right"></div>
            <a href="/game/{{slug}}">
              <img src="{{thumb}}" />
            </a>
					</div>
					<div class="gameTitle">
						<div class="block top right"></div>
						<div class="block bottom right"></div>
						<h1>{{title}} - <span class="date">{{date}}</span></h1>
					</div>
					<div class="gameContent">
						<div class="block top left"></div>
						<div class="block bottom left"></div>
						<div class="block top right"></div>
						<div class="block bottom right"></div>
            <p>{{description}}</p>
          </div>
					<div class="clearfix"></div>
				</div>
      {{/games}}
    </div>
</div>

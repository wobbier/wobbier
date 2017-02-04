</div>
		<div id="blog">
		{{#posts}}
				<div class="blog">
					<div class="blogImage">
						<div class="block top left"></div>
						<div class="block bottom left"></div>
						<div class="block bottom right"></div>
						<a href="/blog/{{slug}}">
							<img src="{{image}}" />
						</a>
					</div>
					<div class="blogTitle">
						<div class="block top right"></div>
						<div class="block bottom right"></div>
						<h1>{{title}} - <span class="date">{{date}}</span></h1>
					</div>
					<div class="blogContent">
						<div class="block top left"></div>
						<div class="block bottom left"></div>
						<div class="block top right"></div>
						<div class="block bottom right"></div>
						<p>{{{content}}}</p>
					</div>
					<div class="clearfix"></div>
				</div>
		{{/posts}}
		</div>
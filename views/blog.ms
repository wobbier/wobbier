</div>
		<div id="blog">
		{{#posts}}
				<div class="post">
					<div class="postImage">
						<div class="block top left"></div>
						<div class="block bottom left"></div>
						<div class="block bottom right"></div>
						<img src="{{image}}">
					</div>
					<div class="postTitle">
						<div class="block top right"></div>
						<div class="block bottom right"></div>
						<h1>{{title}} - <span class="date">{{date}}</span></h1>
					</div>
					<div class="postContent">
						<div class="block top left"></div>
						<div class="block bottom left"></div>
						<div class="block top right"></div>
						<div class="block bottom right"></div>
						<p>{{content}}</p>
					</div>
					<div class="clearfix"></div>
				</div>
		{{/posts}}
		</div>
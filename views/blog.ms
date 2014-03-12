		<div id="blog">
		{{#project}}
			<div class="blog" id="blog">
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
						<h1>{{title}} - <span class="date"><%= to_date(post.created_at) %></span></h1>
					</div>
					<div class="postContent">
						<div class="block top left"></div>
						<div class="block bottom left"></div>
						<div class="block top right"></div>
						<div class="block bottom right"></div>
						{{content}}
					</div>
					<div class="clearfix"></div>
				</div>
			</div>
		{{/project}}
		</div>
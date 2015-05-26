</div>
<div id="content">
    <div class="home" style="text-align:center;">
        <div class="block top left"></div>
        <div class="block bottom left"></div>
        <div class="block top right"></div>
        <div class="block bottom right"></div>
        <p>My name is Mitchell Andrews and I'm a <strong>{{age}}</strong> year old game programmer from <strong>Toronto</strong>.</p>
        <p>I program primarily in <strong>C++</strong>, <strong>C#</strong>, and <strong>Node.js</strong> using either OS X, Windows, or Linux.</p>
        <p>I primarily use Unity, Unreal Engine 4, and Cocos2d-x for game development.</p>
        <p>I also have experience in creating 2D art, <a href="https://www.youtube.com/watch?v=1KP9c-ouvPg">3D models (rigging, animating, unwrapping, etc...)</a>, editing audio, and much more!</p>
        <p>Contact me <a href="#contact">at the bottom</a> if you have any questions!</p>
    </div>
        <div class="account">
    	<div class="box section">
                <div class="block top left"></div>
                <div class="block bottom left"></div>
                <div class="block top right"></div>
                <div class="block bottom right"></div>
                <a href="https://github.com/wobbier?tab=repositories"><img src="/img/GitHub-Mark.png" height="64px"></a>
            </div>
    	<div class="box section last">
                <div class="block top left"></div>
                <div class="block bottom left"></div>
                <div class="block top right"></div>
                <div class="block bottom right"></div>
                <a href="https://ca.linkedin.com/in/mitchellandrews"><img src="/img/linkedin.png"></a>
                </div>
            <div class="clearfix"></div>
    </div>
</div>
<div id="gamesHeader">
    <img src="/img/portfolio.png"></img>
</div>
<div id="content">
    <div class="games">
        {{#games}}
        {{^hidden}}
        <div class="game">
            <div class="gameThumb">
                <div class="block top left"></div>
                <div class="block bottom left"></div>
                <div class="block bottom right"></div>
                {{#external}}
                <a href="{{url}}">
                    <img src="{{thumb}}" />
                </a>
                {{/external}} {{^external}}

                <a href="/game/{{slug}}">
                    <img src="{{thumb}}" />
                </a>
                {{/external}}
            </div>
            <div class="gameTitle">
                <div class="block top right"></div>
                <div class="block bottom right"></div>
                {{#external}}
                <h1><a href='{{url}}'>{{title}}</a> - <span class="date">{{date}}</span></h1>
                {{/external}} {{^external}}
                <h1>{{title}} - <span class="date">{{date}}</span></h1>
                {{/external}}
            </div>
            <div class="gameContent">
                <div class="block top left"></div>
                <div class="block bottom left"></div>
                <div class="block top right"></div>
                <div class="block bottom right"></div>
                <p>{{{description}}}</p>
            </div>
            <div class="clearfix"></div>
        </div>
        {{/hidden}}
        {{/games}}
    </div>

    <div class="contact" id="contact">
        <div class="thumb">
            <div class="block top left"></div>
            <div class="block bottom left"></div>
            <div class="block bottom right"></div>
            <a href="https://ca.linkedin.com/in/mitchellandrews">
                <img src="/img/Profile.png" />
            </a>
        </div>
        <div class="title">
            <div class="block top right"></div>
            <div class="block bottom right"></div>
            <h1>Questions? Contact Me Here!</h1>
        </div>
        <form action="/message" method="POST" class="contact-form">
            <div class="content">
                <div class="block top left"></div>
                <div class="block bottom left"></div>
                <div class="block top right"></div>
                <div class="block bottom right"></div>
                <textarea name="message" class="message" placeholder="Enter your message here..." required></textarea>
            </div>
            <div class="content from">
                <div class="block top left"></div>
                <div class="block bottom left"></div>
                <div class="block top right"></div>
                <div class="block bottom right"></div>
                <input type="email" name="email" class="message email" placeholder="Your E-Mail..." required />
            </div>
            <div class="content send">
                <div class="block top left"></div>
                <div class="block bottom left"></div>
                <div class="block top right"></div>
                <div class="block bottom right"></div>
                <input type="submit" name="submit" class="submit" value="Send!" />
            </div>
        </form>
        <div class="notice" style="display:none;">
            <div class="block top left"></div>
            <div class="block bottom left"></div>
            <div class="block top right"></div>
            <div class="block bottom right"></div>
            <div class="message">Ayy lmao</div>
        </div>
        <div class="clearfix"></div>
    </div>
</div>
<script type="text/javascript">
    $(".contact-form").submit(function(event) {
        // Stop form from submitting normally
        event.preventDefault();

        // Get some values from elements on the page:
        var $form = $(this),
            email = $form.find("input[name='email']").val(),
            message = $form.find("textarea[name='message']").val(),
            url = $form.attr("action");

        // Send the data using post
        var posting = $.post(url, {
            email: email,
            message: message,
        });

        // Put the results in a div
        posting.done(function(data) {
            $(".contact-form").fadeOut(500, function() {
                $(".notice .message").empty().append(data);
                $(".notice").fadeIn();
            });
        });
    });
</script>

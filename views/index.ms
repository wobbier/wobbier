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
    <img src="/img/portfolio.png"></img>
</div>
<div id="content">
    <div class="games">
        {{#games}}
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
        {{/games}}
    </div>
    <div class="contact">
        <div class="thumb">
            <div class="block top left"></div>
            <div class="block bottom left"></div>
            <div class="block bottom right"></div>
            <a href="http://twitter.com/wobbier">
                <img src="/img/Profile.png" />
            </a>
        </div>
        <div class="title">
            <div class="block top right"></div>
            <div class="block bottom right"></div>
            <h1>Send Me A Message!</h1>
        </div>
        <form action="/message" method="POST">
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
    </div>
</div>

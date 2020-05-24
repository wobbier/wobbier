---
layout: game-video.html
title: "Mitch Engine"
date: "March 18, 2016"
hasVideo: false
downloads: [
        {
            "type": "apple",
            "text": "App Store",
            "url": "https://itunes.apple.com/ca/app/disney-magic-kingdoms/id731592936?mt=8"
        },
        {
            "type": "android",
            "text": "Google Play",
            "url": "https://play.google.com/store/apps/details?id=com.gameloft.android.ANMP.GloftDYHM&hl=en"
        },
        {
            "type": "windows",
            "text": "Windows Store",
            "url": "https://www.microsoft.com/en-ca/store/p/disney-magic-kingdoms/9nblggh6bng3"
        }
    ]
---
<div class="padded-wrapper">
    <!--  DsvEJKTwelc -->
    <p>
    The 3D game engine so good it has my name in it.

Mitch Engine is a simple c++ component based game engine for creating games on the Xbox One and Windows 10 Store. It's a great hobby project to keep me exploring the world of c++.

Check out my Trello Board to check out the current development status.

The engine is:

    Open source
    Easy to use
    Awesome

How to make a Mitch game

    Fork the MitchGame repo and follow the README
    Think of an awesome game idea.
    ????
    Profit

Examples
</p>
<pre><code class="language-cpp">// Create an entity.
Entity MainCamera = GameWorld->CreateEntity();

// Add some components
Transform& CameraTransform = MainCamera.AddComponent<Transform>("Main Camera");
Camera& CameraComponent = MainCamera.AddComponent<Camera>();

// Start changing some values
CameraTransform.SetPosition(0.f, 5.f, 10.f);

// Spawning models.
Entity ModelEntity = GameWorld->CreateEntity();

// Add some components
Transform& TransformComponent = ModelEntity.AddComponent<Transform>("Ground Model");

Model& ModelComponent = ModelEntity.AddComponent<Model>("Assets/Models/ground.fbx", "Assets/Shaders/Albedo");
</code></pre>
Main features

    (ECS) Entity-Component System based design
    Language: C++
    DirectX 11
    Open Source Commercial Friendly(MIT): Compatible with open and closed source projects

Build Requirements

    Windows 10
    Visual Studio 2017
        Desktop Development with C++
        Universal Windows Platform development
        Game development with C++
        C++ Universal Windows Platform tools
    CMake - 3.12.0 (Required if you wish to update ThirdParty projects)

Third Party Libraries

    OZZ
    Optick
    Bullet Physics

Contributing to the Project

Did you find a bug? Have a feature request?

    Contribute to the engine

Contact me

    Website: http://wobbier.com
    Twitter: http://www.twitter.com/wobbier

    <br />
    <br />
    <div class="section-title">
        <h1>Things I've worked on</h1>
        <div class="clearfix"></div>
        <hr />
    </div>
    <ul class="bullet-list">
        <li>
            <div>Worked with artists to help integrate animations and cutscenes into the game</div>
        </li>
        <li>
            <div>Implemented <a href="#MerlinsGatheringSpell">Merlin's Gathering Spell</a> which collects all resources from your park</div>
        </li>
        <li>
            <div>Implemented the <a href="#BCF">Busy Character Finder</a> UI feature which shows all active activites in the kindom</div>
        </li>
        <li>
            <div>Improved FPS by 46% on a full park through modifying the way we update objects off screen.</div>
        </li>
        <li>
            <div>Created a free flying camera used in the marketing material creation process.</div>
        </li>
        <li>
            <div>Created a spline based camera bounds system for artists to tweak camera bounds to be more flexible</div>
        </li>
        <li>
            <div>Implemented each boss battle up until Update 23: The Little Mermaid</div>
        </li>
        <li>
            <div>Worked on the online event system to extend the flexibility for time sensitive tasks for users playing the game</div>
        </li>
    </ul>
    <div id="BCF" class="section">
        <div class="section-title">
            <h1>The Busy Character Finder</h1>
            <div class="clearfix"></div>
            <hr />
        </div>
    </div>
</div>
<div class="videoWrapper iPhoneX">
<img src="/img/stack.png" style="margin:0 auto;" />
</div>
<div class="padded-wrapper">
    <div id="MerlinsGatheringSpell" class="section">
        <div class="section-title">
            <h1>Merlin's Gathering Spell</h1>
            <div class="clearfix"></div>
            <hr />
        </div>
    </div>
</div>
<div class="videoWrapper iPhoneX">
    <iframe src="https://player.vimeo.com/video/286698331" width="100%" height="295" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>
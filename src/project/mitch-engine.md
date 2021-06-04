---
layout: game-video.html
title: "Mitch Engine"
date: "March 18, 2016"
headerImage: "https://raw.githubusercontent.com/wobbier/MitchEngine/master/Docs/GitHub/Havana.png"
embed-image: "https://raw.githubusercontent.com/wobbier/MitchEngine/master/Docs/GitHub/Havana.png"
hasHeaderImage: true
---
<div class="padded-wrapper">
    <!--  DsvEJKTwelc -->
<a href="https://ci.appveyor.com/project/wobbier/mitchengine">
    <img src="https://ci.appveyor.com/api/projects/status/7x55po7se0siesdn?svg=true" alt="Build status">
</a>
<a href="https://www.codacy.com/app/rastaninja77/MitchEngine?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=wobbier/MitchEngine&amp;utm_campaign=Badge_Grade">
    <img src="https://api.codacy.com/project/badge/Grade/858846f643cc47258ed72f9cfddb28b2" alt="Codacy Badge">
</a>
<img src="https://img.shields.io/github/license/wobbier/mitchengine.svg" alt="license">
<br>
The 3D game engine so good it has my name in it.

Mitch Engine is a simple c++ component based game engine for creating games on the Xbox One and Windows 10 Store. It's a great hobby project to keep me exploring the world of c++.

Check out my Trello Board to check out the current development status.
<br>
<br>
The engine is:
<ul class="bullet-list">
    <li>
        <div>Open source</div>
    </li>
    <li>
        <div>Easy to use</div>
    </li>
    <li>
        <div>Awesome</div>
    </li>
</ul>

<div id="MerlinsGatheringSpell" class="section">
    <div class="section-title">
        <h1>How to make a Mitch game</h1>
        <div class="clearfix"></div>
        <hr />
    </div>
</div>
<ul class="bullet-list">
    <li>
    <div>Fork the MitchGame repo and follow the README</div>
    </li>
    <li>
    <div>Think of an awesome game idea.</div>
    </li>
    <li>
    <div>????</div>
    </li>
    <li>
    <div>Profit</div>
    </li>
</ul>
<div id="MerlinsGatheringSpell" class="section">
    <div class="section-title">
        <h1>Examples</h1>
        <div class="clearfix"></div>
        <hr />
    </div>
</div>
<pre><code class="language-cpp">// Create an entity.
EntityHandle MainCamera = GameWorld->CreateEntity();

// Add some components
Transform& CameraTransform = MainCamera->AddComponent&lt;Transform>("Main Camera");
Camera& CameraComponent = MainCamera->AddComponent&lt;Camera>();

// Start changing some values
CameraTransform.SetPosition(0.f, 5.f, 10.f);

// Spawning models.
EntityHandle ModelEntity = GameWorld->CreateEntity();

// Add some components
Transform& TransformComponent = ModelEntity->AddComponent&lt;Transform>("Ground Model");

Model& ModelComponent = ModelEntity->AddComponent&lt;Model>("Assets/Models/ground.fbx");
</code></pre>
<div id="MerlinsGatheringSpell" class="section">
    <div class="section-title">
        <h1>Main features</h1>
        <div class="clearfix"></div>
        <hr />
    </div>
</div>
<ul class="bullet-list">
    <li>
    <div>(ECS) Entity-Component System based design</div>
    </li>
    <li>
    <div>Language: C++</div>
    </li>
    <li>
    <div>DirectX 11</div>
    </li>
    <li>
    <div>Open Source Commercial Friendly(MIT): Compatible with open and closed source projects</div>
    </li>
</ul>
    
<div id="MerlinsGatheringSpell" class="section">
    <div class="section-title">
        <h1>Build Requirements</h1>
        <div class="clearfix"></div>
        <hr />
    </div>
</div>
<ul class="bullet-list">
    <li>
    <div>Windows 10</div>
    </li>
    <li>
    <div>Visual Studio 2017</div>
    <ul>
      <li><div>Desktop Development with C++</div></li>
      <li><div>Universal Windows Platform development</div></li>
      <li><div>Game development with C++</div></li>
      <li><div>C++ Universal Windows Platform tools</div></li>
    </ul>
    </li>
    <li>
    <div>CMake - 3.12.0 (Required if you wish to update ThirdParty projects)</div>
    </li>
</ul>
        
<div id="MerlinsGatheringSpell" class="section">
    <div class="section-title">
        <h1>Third Party Libraries</h1>
        <div class="clearfix"></div>
        <hr />
    </div>
</div>
<ul class="bullet-list">
    <li>
    <div>Assimp</div>
    </li>
    <li>
    <div>Bullet Physics</div>
    </li>
    <li>
    <div>ImGui</div>
    </li>
    <li>
    <div>Optick</div>
    </li>
    <li>
    <div>Ultralight</div>
    </li>
</ul>
<div id="MerlinsGatheringSpell" class="section">
    <div class="section-title">
        <h1>Contributing to the Project</h1>
        <div class="clearfix"></div>
        <hr />
    </div>
</div>
Did you find a bug? Have a feature request?
<ul class="bullet-list">
    <li>
    <div><a href="/">Contribute to the engine</a></div>
    </li>
</ul>
<!--img src="/img/stack.png" style="margin:0 auto; width:100%;" /-->
</div>
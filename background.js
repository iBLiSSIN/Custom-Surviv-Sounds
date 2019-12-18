
//Redirects the audio files for gun sounds and things being hit
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return {redirectUrl: chrome.runtime.getURL("Custom_hit_sound.mp3")};
      },
      {urls: ["*://surviv.io/audio/hits/*", "*://surviv.io/audio/guns/*"]},
      ["blocking"]
)

//Redirects the audio files for players and kill leaders dying
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return {redirectUrl: chrome.runtime.getURL("Custom_Death_Sound.mp3")};
      },
      {urls: ["http://surviv.io/audio/ui/leader_dead_01.mp3"]},
      ["blocking"]
)

//Redirects the audio files for players entering a bush
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return {redirectUrl: chrome.runtime.getURL("Custom_Bush_sound.mp3")};
      },
      {urls: ["http://surviv.io/audio/sfx/bush_enter_01.mp3"]},
      ["blocking"]
)

//Redirects the audio files for the main screen music
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return {redirectUrl: chrome.runtime.getURL("Custom_menu_music.mp3")};
      },
      {urls: ["http://surviv.io/audio/ambient/menu_music_01.mp3"]},
      ["blocking"]
)

//Redirects bandage sound for healing
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return {redirectUrl: chrome.runtime.getURL("Custom_bandage_sound.mp3")};
      },
      {urls: ["http://surviv.io/audio/ui/bandage_use_01.mp3"]},
      ["blocking"]
)

//Redirects sound for soda being used
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return {redirectUrl: chrome.runtime.getURL("Custom_soda_sound.mp3")};
      },
      {urls: ["http://surviv.io/audio/ui/soda_use_01.mp3"]},
      ["blocking"]
)

//Redirects sound for pills being used
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return {redirectUrl: chrome.runtime.getURL("Custom_pills_sound.mp3")};
      },
      {urls: ["http://surviv.io/audio/ui/pills_use_01.mp3"]},
      ["blocking"]
)

//Redirects music used for the club
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return {redirectUrl: chrome.runtime.getURL("Custom_club_music.mp3")};
      },
      {urls: ["http://surviv.io/audio/ambient/club_music_01.mp3", "http://surviv.io/audio/ambient/club_music_02.mp3"]},
      ["blocking"]
)

//Redirects sound used for grenades
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return {redirectUrl: chrome.runtime.getURL("Custom_grenade_sound.mp3")};
      },
      {urls: ["http://surviv.io/audio/sfx/explosion_smoke_01.mp3", "http://surviv.io/audio/sfx/explosion_01.mp3","http://surviv.io/audio/sfx/explosion_02.mp3", "http://surviv.io/audio/sfx/explosion_03.mp3" , "http://surviv.io/audio/sfx/explosion_04.mp3", "http://surviv.io/audio/sfx/explosion_05.mp3"]},
      ["blocking"]
)

//Redirects the sound used for a new kil leader
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return {redirectUrl: chrome.runtime.getURL("Custom_new_kill_leader_sound.mp3")};
      },
      {urls: ["http://surviv.io/audio/ui/leader_assigned_01.mp3"]},
      ["blocking"]
)

//Redirects the sound used for footsteps on grass
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return {redirectUrl: chrome.runtime.getURL("Custom_grass_footstep_sound.mp3")};
      },
      {urls: ["http://surviv.io/audio/sfx/footstep_grass_01.mp3", "http://surviv.io/audio/sfx/footstep_grass_02.mp3"]},
      ["blocking"]
)

//Redirects the sound used for footsteps on metal, tile, asphalt, stone, and brick
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return {redirectUrl: chrome.runtime.getURL("Custom_stone_footstep_sound.mp3")};
      },
      {urls: ["http://surviv.io/audio/sfx/footstep_metal_01.mp3", "http://surviv.io/audio/sfx/footstep_metal_02.mp3", "http://surviv.io/audio/sfx/footstep_metal_03.mp3", "http://surviv.io/audio/sfx/footstep_metal_04.mp3", "http://surviv.io/audio/sfx/footstep_metal_05.mp3", "http://surviv.io/audio/sfx/footstep_tile_01.mp3", "http://surviv.io/audio/sfx/footstep_tile_02.mp3", "http://surviv.io/audio/sfx/footstep_asphalt_01.mp3", "http://surviv.io/audio/sfx/footstep_asphalt_02.mp3","http://surviv.io/audio/sfx/footstep_brick_01.mp3", "http://surviv.io/audio/sfx/footstep_stone_01.mp3"]},
      ["blocking"]
)

//Redirects the sound used for footseps on carpet
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return {redirectUrl: chrome.runtime.getURL("Custom_carpet_Footstep_sound.mp3")};
      },
      {urls: ["http://surviv.io/audio/sfx/footstep_carpet_01.mp3"]},
      ["blocking"]
)

//Redirects the sound used for footsteps on wood
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return {redirectUrl: chrome.runtime.getURL("Custom_wood_footstep_sound.mp3")};
      },
      {urls: ["http://surviv.io/audio/sfx/footstep_wood_01.mp3", "http://surviv.io/audio/sfx/footstep_wood_02.mp3", "http://surviv.io/audio/sfx/footstep_wood_03.mp3"]},
      ["blocking"]
)

//Redirects the sound used for footsepts on sand
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return {redirectUrl: chrome.runtime.getURL("Custom_sand_footstep_sound.mp3")};
      },
      {urls: ["http://surviv.io/audio/sfx/footstep_sand_01.mp3", "http://surviv.io/audio/sfx/footstep_sand_02.mp3"]},
      ["blocking"]
)
//Blocks ads from being loaded.
chrome.webRequest.onBeforeRequest.addListener(
     function() {
         
        return {cancel: true};
    },
    {
        urls: ["*://www.adinplay.com/*", "*://tpc.googlesyndication.com/*", "*://adservice.google.com/*", "*://adserverice.google.com.mx/*", "*://api.adinplay.com/*", "*://c.amazon-adsystem.com/*", "*://geo.moatads.com/*", "*://mb.moatads.com/*", "*://pixel.adsafeprotection.com/*", "*://px.moatads.com/*"]
    },
    ["blocking"]
);

// Project: Personal Music
// Programmer: Steven Galvin
// Filename: initialize.js
// Date Modified: 07/29/19

Amplitude.init({
  "bindings": {
    39: "next",
    37: "prev",
    32: "play_pause",
    40: "stop",
    83: "shuffle",
    82: "repeat"
  },
  songs": [
    {
      "name": "NF Type Beat",
      "artist": "Jay Kalsifer",
      "album": "Beats: Mood Swings",
      "url": "../audio/nf_type_beat.mp3",
      "cover": "../images/perspective.jpg",
      "type": "Beat"
    },
    {
      "name": "Intro Beat",
      "artist": "Jay Kalsifer",
      "album": "Beats: Mood Swings",
      "url": "../audio/intro_beat.mp3",
      "cover": "../images/perspective.jpg",
      "type": "Beat"
    },
    {
      "name": "Dark Strings Beat",
      "artist": "Jay Kalsifer",
      "album": "Beats: Mood Swings",
      "url": "../audio/dark_strings_beat.mp3",
      "cover": "../images/perspective.jpg",
      "type": "Beat"
    },
    {
      "name": "Lo-Fi Beat",
      "artist": "Jay Kalsifer",
      "album": "Beats: Mood Swings",
      "url": "../audio/lofi_beat.mp3",
      "cover": "../images/perspective.jpg",
      "type": "Beat"
    },
    {
      "name": "Basement Bounce",
      "artist": "Jay Kalsifer",
      "album": "Beats: Mood Swings",
      "url": "../audio/basement_bounce.mp3",
      "cover": "../images/perspective.jpg",
      "type": "Beat"
    },
    {
      "name": "Errybody Verse",
      "artist": "Big Joe & Jay Kalsifer",
      "album": "Beats: Mood Swings",
      "url": "../audio/errybody_verse.mp3",
      "cover": "../images/trigger_warning.jpg",
      "type": "Demo"
    },
    {
      "name": "Livin' Legend Demo",
      "artist": "Big Joe & Jay Kalsifer",
      "album": "Beats: Mood Swings",
      "url": "../audio/livin_legend_demo.mp3",
      "cover": "../images/trigger_warning.jpg",
      "type": "Demo"
    }
  ],

  playlists: {
    "beats": {
      songs: [ 0, 1, 2, 3, 4 ],
      title: "Beat Ideas for Mood Swings"
    },
    "demos": {
      songs: [ 5, 6 ],
      title: "Joe's Demos"

    }
  },
  "volume": 85
});

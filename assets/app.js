var app = angular.module('app', ['angularSoundManager']);

app.controller('appCtrl', function($scope) {
  $scope.songs = [
    {
      id: 'one',
      title: 'one',
      artist: 'one',
      album: 'one',
      url: 'http://www.schillmania.com/projects/soundmanager2/demo/_mp3/rain.mp3'
    },
    {
      id: 'two',
      title: 'two',
      artist: 'two',
      album: 'one',
      url: 'http://www.schillmania.com/projects/soundmanager2/demo/_mp3/walking.mp3'
    },
    {
      id: 'three',
      title: 'three',
      artist: 'three',
      album: 'ones',
      url: 'http://www.freshly-ground.com/misc/music/carl-3-barlp.mp3'
    }
  ]

  $scope.isPlaying = false;
  $scope.songHover = false;
})

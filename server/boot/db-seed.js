'use strict';

module.exports = function(app) {
  app.dataSources.mongodbDs.automigrate('Song', function(err) {
    if (err) throw err;

    app.models.Song.create([{
      'title': 'So Cool',
      'artist': 'Sistar',
      'subTitle': 'So Cool Subtitle',
      'rating': 5,
      'comments': 'Best Ever',
      'album': 'So Cool',
      'year': '2018-02-22',
      'number': 1,
      'genre': 'pop',
      'length': '03:45',
    }, {
      'title': 'Alone',
      'artist': 'Sistar',
      'subTitle': 'Alone Subtitle',
      'rating': 5,
      'comments': 'Best Ever',
      'album': 'So Cool',
      'year': '2018-02-22',
      'number': 2,
      'genre': 'pop',
      'length': '04:31',
    }, {
      'title': 'Give It To Me',
      'artist': 'Sistar',
      'subTitle': 'Give It To Me Subtitle',
      'rating': 5,
      'comments': 'Best Ever',
      'album': 'Give It To Me',
      'year': '2018-02-22',
      'number': 1,
      'genre': 'pop',
      'length': '05:11',
    }], function(err, songs) {
      if (err) throw err;

      console.log('Seed data - songs created: \n', songs);
    });
  });

  app.dataSources.mongodbDs.automigrate('Playlist', function(err) {
    if (err) throw err;

    app.models.Playlist.create([{
      'name': 'Favorites',
      'description': 'My Favorite Songs',
    }, {
      'name': 'Good',
      'description': 'Good Songs',
    }], function(err, playlists) {
      if (err) throw err;

      console.log('Seed data - playlists created: \n', playlists);
    });
  });
};

module.exports = {
  app: {
    playing: 'by Kau goncalves',
    global: true,
    token: 'MTAzOTIwODEwMTU4MjIxNzM1Nw.GBmqxL.k1SxF6Mnn9wJ4UA6AUJEzKknPsnYPMzdOlGxV4',
    guild: '723751963489075251'
  },

  opt: {
    DJ: {
      enabled: false,
      roleName: '',
      commands: []
    },
    maxVol: 100,
    leaveOnEnd: true,
    loopMessage: false,
    spotifyBridge: true,
    defaultvolume: 75,
    discordPlayer: {
      ytdlOptions: {
        quality: 'highestaudio',
        highWaterMark: 1 << 25
      }
    }
  }
};

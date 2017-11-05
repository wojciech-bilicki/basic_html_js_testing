var detailsPage = {
  artistTitle: document.getElementsByTagName('h1')[0],
  shareButton: document.getElementsByClassName('share-button')[0],
  sharesLabel: document.getElementsByTagName('h5')[0],
  artistDescription: document.getElementsByTagName('p')[0],
  whereLabel: document.getElementsByTagName('li')[0],
  whenLabel: document.getElementsByTagName('li')[1],
  howMuchLabel: document.getElementsByTagName('li')[2],
  poster: document.getElementsByClassName('poster')[0],

  init: function() {
    var artistId = localStorage.getItem('artistId');
    var artistData = DATA[artistId];

    this.artistTitle.textContent = artistData.name;
    this.artistDescription.textContent = artistData.description;
    this.whereLabel.textContent = 'WHERE: ' + artistData.city;
    this.whenLabel.textContent = 'WHEN: ' + artistData.date;
    this.howMuchLabel.textContent = 'WHEN: ' + artistData.pricePerTicket + ' $';
    this.sharesLabel.textContent = artistData.shares + '  shares';
    this.poster.style.backgroundImage =
      'url(./assets/artists_posters/' + artistData.poster + ')';
    this.shareButton.addEventListener(
      'click',
      this.onShareClick.bind(this, [artistId])
    );
  },

  onShareClick: function(args) {
    var artistId = args[0];
    var artistShares = ++DATA[artistId].shares;
    this.sharesLabel.textContent = parseInt(artistShares) + ' shares';
  }
};
detailsPage.init();

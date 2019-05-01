import Component from '@ember/component';

export default Component.extend({
  latitude: null,
  longitude: null,

  fetchCoordinates(url) {
    fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((res) => {
      const lng = res.features[0].geometry.coordinates[0];
      const lat = res.features[0].geometry.coordinates[1];

      this.set('latitude', lat);
      this.set('longitude', lng);

      return `${lng} ${lat}`;
    });
  },

  didReceiveAttrs() {
    this._super();

    const limit = 1;
    const token = 'pk.eyJ1Ijoiam1tY2Nhc2xhbmQiLCJhIjoiY2pvMHQyNXFvMDRiajN2bm4xM251eTQ5OCJ9.WGlRWkIaHSs9dzHhr3uYkw';
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.city} ${this.state} ${this.country}.json?limit=${limit}&access_token=${token}`;

    this.fetchCoordinates(url);
  }
});

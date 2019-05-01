'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'book-better-ui',
    environment,
    rootURL: '/',
    locationType: 'auto',
    'mapbox-gl': {
      accessToken: "pk.eyJ1Ijoiam1tY2Nhc2xhbmQiLCJhIjoiY2pvMHQyNXFvMDRiajN2bm4xM251eTQ5OCJ9.WGlRWkIaHSs9dzHhr3uYkw",
      map: {
        minZoom: 2,
        maxZoom: 14,
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom: 4,
        center: [ -96.7969879, 32.7766642 ]
      },
      marker: {
        offset: [ -1, -1 ]
      },
      popup: {
        offset: [ 0, -10 ]
      }
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};

require('isomorphic-fetch');

const storeAllLocations = (locations) => {
  return {
    type: 'STORE_LOCATIONS',
    data: locations.locations,
  };
};

const storePolygonCoordinates = (polygonMarkers) => {
  return {
    type: 'STORE_POLYGON_COORDINATES',
    data: polygonMarkers.polygonMarkers,
  };
};


export const fetchAllLocations = () => {
  return (dispatch) => {
    return fetch('/locations', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(locations => locations.json())
      .then(json => dispatch(storeAllLocations(json)));
  };
};

export const fetchPolygonCoordinates = () => {
  return (dispatch) => {
    return fetch('/polygon-coordinates', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(polygonMarkers => polygonMarkers.json())
      .then(json => dispatch(storePolygonCoordinates(json)));
  };
};

export const postPolygonCoordinates = (coordinates) => {
  return (dispatch) => {
    return fetch('/polygon-coordinates', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(coordinates)
    })
      .then(newCoordinates => newCoordinates.json())
      .then(json => dispatch(storePolygonCoordinates(json)))
  };
};



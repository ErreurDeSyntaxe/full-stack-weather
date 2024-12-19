export const state = {
  location: {},
  search: {},
};

export const loadLocation = function (location) {
  state.location = location;
};

export const loadSearch = function (search) {
  state.search = search;
};

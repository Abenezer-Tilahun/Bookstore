export const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

export const checkStatus = () => ({
  type: CHECK_STATUS,
});

function reducer(state = [], action) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
}

export default reducer;

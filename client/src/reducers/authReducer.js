/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function (state = {}, action) {
  console.log(action);
  switch (action.type) {
    default:
      return state;
  }
}

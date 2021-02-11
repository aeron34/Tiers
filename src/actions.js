export const setSearch = (text) =>
{return {
  type: 'CHANGED_FIELD',
  payload: text
}};

export const act_change = () => {
  return {
    type: 'ACT_CHANGE',
    input: 1
  }
}

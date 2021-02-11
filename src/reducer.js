

export const search = (state="", action={}) =>
{
  switch(action.type) {
    case 'CHANGED_FIELD':
      return action.payload
    default:
      return state;
  }
}

export const acting = (count = 0, action={}) =>
{
    switch(action.type) {
      case 'ACT_CHANGE':
          let b = state + 1;
          return b;
          break;
      default:
        return state;
    }
}

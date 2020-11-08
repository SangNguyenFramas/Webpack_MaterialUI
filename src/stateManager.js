import {atom} from 'recoil'
export const tagsState = atom({
    key: 'tagsState', // unique ID (with respect to other atoms/selectors)
    default: [], // default value (aka initial value)
  });
  export const tagsFileState = atom({
    key: 'tagsFileState', // unique ID (with respect to other atoms/selectors)
    default: null, // default value (aka initial value)
  });
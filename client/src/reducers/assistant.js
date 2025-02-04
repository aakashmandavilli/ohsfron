//import types
import {INPUT_FAIL, INPUT_SUCCESS, SESSION_FAIL, SESSION_SUCCESS, MESSAGE_SUCCESS, MESSAGE_FAIL} from "../actions/types";

//Initial State
const initialState = {
  messages:[],
}

//Switch statement- on how to update states
export default (state = initialState, action) => {
  const { type, payload } = action;
  let { messages } = state;

  switch(type){
    case INPUT_SUCCESS:
      messages = [...messages, {message: payload, type:"User"}];
      return {
        ...state,
        messages
      }

    case INPUT_FAIL:
            return{
              ...state,
            }

    case SESSION_SUCCESS:
      localStorage.setItem("session", payload["session_id"]);
      return{
        ...state,
      }

    case SESSION_FAIL:
        return{
          ...state,
        }
    case MESSAGE_SUCCESS:
      console.log(payload);
      messages = [...messages,{message: payload, type:"bot"}]
      return{
        ...state,
        messages
      }

    case MESSAGE_FAIL:
      return{
        ...state,
      }


      default:
      return{
        ...state,
      }
  }
}

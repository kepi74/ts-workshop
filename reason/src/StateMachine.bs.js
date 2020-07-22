'use strict';


function transition(input, state) {
  if (typeof state === "number") {
    if (typeof input === "number" && input === 0) {
      return {
              TAG: /* Running */0,
              _0: 0.0
            };
    } else {
      return state;
    }
  }
  switch (state.TAG | 0) {
    case /* Running */0 :
        var elapsed = state._0;
        if (typeof input !== "number") {
          return {
                  TAG: /* Running */0,
                  _0: elapsed + input._0
                };
        }
        if (input === 0) {
          return state;
        }
        switch (input - 1 | 0) {
          case /* Start */0 :
              return {
                      TAG: /* Paused */1,
                      _0: elapsed
                    };
          case /* Pause */1 :
              return state;
          case /* Resume */2 :
              return {
                      TAG: /* Done */2,
                      _0: elapsed
                    };
          
        }
    case /* Paused */1 :
        var elapsed$1 = state._0;
        if (typeof input === "number") {
          if (input !== 2) {
            if (input >= 3) {
              return {
                      TAG: /* Done */2,
                      _0: elapsed$1
                    };
            } else {
              return state;
            }
          } else {
            return {
                    TAG: /* Running */0,
                    _0: elapsed$1
                  };
          }
        } else {
          return state;
        }
    case /* Done */2 :
        return state;
    
  }
}

exports.transition = transition;
/* No side effect */

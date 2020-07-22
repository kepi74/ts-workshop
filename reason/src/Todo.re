type action =
  | StartFetch;

type state =
  | NoData
  | Loading;

let reducer = (_state, action) => {
  switch (action) {
  | StartFetch => Loading
  };
};

[@react.component]
let make = () => {
  let (todosState, _dispatch) = React.useReducer(reducer, NoData);

  switch (todosState) {
  | NoData => <div> "No Data"->React.string </div>
  | Loading => <div> "Loading"->React.string </div>
  };
};

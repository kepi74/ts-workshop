[@react.component]
let make = (~age) => <div> {age->string_of_int->React.string} </div>;

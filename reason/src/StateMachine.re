// Homework :-)

// Margarita Krutikova: Modelling domain with state machines in ReasonML
// https://dev.to/margaretkrutikova/modelling-domain-with-state-machines-in-reasonml-n29

// Is it possible to model this in x-state?
// https://github.com/davidkpiano/xstate

type elapsed = float;

type taskStatus =
  | NotStarted
  | Running(elapsed)
  | Paused(elapsed)
  | Done(elapsed);

type input =
  | Start
  | Pause
  | Resume
  | Finish
  | Tick(elapsed);

let transition = (input, state) =>
  switch (state) {
  | NotStarted =>
    switch (input) {
    | Start => Running(0.0)
    | Pause
    | Finish
    | Tick(_)
    | Resume => state
    }
  | Running(elapsed) =>
    switch (input) {
    | Pause => Paused(elapsed)
    | Finish => Done(elapsed)
    | Tick(tick) => Running(elapsed +. tick)
    | Start
    | Resume => state
    }
  | Paused(elapsed) =>
    switch (input) {
    | Resume => Running(elapsed)
    | Finish => Done(elapsed)
    | Tick(_)
    | Start
    | Pause => state
    }
  | Done(_) => state
  };

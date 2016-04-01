import expect from 'expect'
import todos from '../../src/reducers/todos'
import components from '../../src/reducers/components'
import * as ToolBoxActions from '../../src/components/ToolBoxComponents';

describe('todos reducer', () => {
  it('should handle initial state', () => {
    expect(
      todos(undefined, {})
    ).toEqual([])
  });

  it('should handle ADD_TODO', () => {
    expect(
      todos([], {
        type: 'ADD_TODO',
        payload: {
          text: 'Run the tests',
          id: 0
        }
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 0
      }
    ]);

    expect(
      todos([
        {
          text: 'Run the tests',
          completed: false,
          id: 0
        }
      ], {
        type: 'ADD_TODO',
        payload: {
          text: 'Use Redux',
          id: 1
        }
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 0
      }, {
        text: 'Use Redux',
        completed: false,
        id: 1
      }
    ]);

    expect(
      todos([
        {
          text: 'Run the tests',
          completed: false,
          id: 0
        }, {
          text: 'Use Redux',
          completed: false,
          id: 1
        }
      ], {
        type: 'ADD_TODO',
        payload: {
          text: 'Fix the tests',
          id: 2
        }
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 0
      }, {
        text: 'Use Redux',
        completed: false,
        id: 1
      }, {
        text: 'Fix the tests',
        completed: false,
        id: 2
      }
    ])
  });

   it('should handle TOGGLE_TODO', () => {
     expect(
       todos([
         {
           text: 'Run the tests',
           completed: false,
           id: 1
         }, {
           text: 'Use Redux',
           completed: false,
           id: 0
         }
       ], {
         type: 'TOGGLE_TODO',
         payload: {
           id: 1
         }
       })
     ).toEqual([
       {
         text: 'Run the tests',
         completed: true,
         id: 1
       }, {
         text: 'Use Redux',
         completed: false,
         id: 0
       }
     ])
   });

  it('should handle TOGGLE_TODO', () => {
    expect(
        todos([
          {
            text: 'Run the tests',
            completed: false,
            id: 1
          }, {
            text: 'Use Redux',
            completed: false,
            id: 0
          }
        ], {
          type: 'TOGGLE_TODO',
          payload: {
            id: 1
          }
        })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: true,
        id: 1
      }, {
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ])
  });
}),

describe('Components reducer', () => {

it('should add a new component to the state', () => {
  let comp = ToolBoxActions.ButtonGroup;
  expect(
    components([], {
      type: 'ADD_COMPONENT',
      payload: {
        id: 0,
        component: comp,
        props: {
            label: "TextBox"
        }
      }
    })
  ).toEqual([
    {
      component: comp,
      props: {
          label: "TextBox"
      }
    }
  ])
});

it('should select the clicked component', () => {
  expect(
    components([], {
      type: 'SELECT_COMPONENT',
      payload: {
        id: 0
      }
    })
  ).toEqual([])
});

});
import store from './store';
import { bugAdded, bugRemoved, bugResolved } from './actions';

const unsubscribe = store.subscribe(() => {
  console.log("store changed", store.getState());
})

store.dispatch(bugAdded("BUG 1"));
store.dispatch(bugAdded("BUG 2"));
store.dispatch(bugAdded("BUG 3"));

unsubscribe();

store.dispatch(bugResolved(1))
store.dispatch(bugRemoved(1))

console.log(store.getState());

function App() {

  return (
    <div className="App">
      hello
    </div>
  );
}

export default App;

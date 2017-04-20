```
src/
  components/
    index.js
    Button.jsx
	Image.jsx
  modules/
    app/
	  index.js
	  App/
	    index.js
		presenter.jsx
		App.css
	  Header/
		index.js
		presenter.jsx
		Header.css
    todos/
	  index.js
      TodoItem/
        index.js
        presenter.jsx
        TodoItem.css
      TodoList/
        index.js
        presenter.jsx
        connector.jsx
        TodoList.css
	  actions.js
	  reducers.js
    projects/
	  index.js
	  ProjectList/
	    index.js
	    presenter.jsx
	    connector.jsx
	    ProjectList.css
	  actions.js
	  reducers.js
  util/
    date_helper.js
  constants.js
  reducer.js
```

```js
// modules/todos/index.js

import * as actions from './actions';
import * as components from './components';
import * as constants from './constants';
import reducer from './reducer';

export default { actions, components, constants, reducer };
```

```js
// modules/todos/components/index.js

import TodoItem from './TodoItem';
import TodoList from './TodoList';
```

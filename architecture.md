# App Architecture

## Structure
The app is divided into components and modules top-level directories, where components are reusable (agnostic) pieces and modules are larger feature sets. A module will contain several sub-components which are not reusable. All elements necessary for a component/module will be stored inside the component directory, including style files and other resources.

## Environment
In order to access components with an absolute path (rather than relative), the start script must include a `NODE_PATH` reference:
- `"start": "NODE_PATH=./src react-scripts start"`

## Modularization
Modules must expose their functionality and components through a defined public API, which shold be an `index.js` file in the module directory. Individual components should also include an `index.js` file to enable directory shortcuts (ie. `src/components/ProjectList` instead of `src/components/ProjectList/ProjectList`). Components **must** have a default export, but modules may optionally only use named exports. All reducers and actions will be stored within the module directory, possibly as a single file (Duck pattern). Finally, container and presentational components may optionally be merged into the same file, as the presentational component is rarely used by its own (away from the container).

## Usage

```js
// src/modules/Projects/index.js
// Defining Projects module API
import ProjectList from './ProjectList';
import ProjectItem from './ProjectItem';

export default ProjectList;
export { ProjectItem };

// src/modules/App/App/App.js
// Component interfacing with Projects API
import ProjectList, { ProjectItem } from 'modules/Projects';
```

## Sample Structure

```
src/
  components/
    Button/
	  index.js
	  Button.js
	  Button.css
	...
  modules/
    App/
	  index.js
	  App/
	    index.js
		App.js
		App.css
	  Header/
	    index.js
		Header.js
		Header.css
	  ...
	Projects/
	  index.js
	  actions/
	    index.js
		Projects.js
	  reducers/
	    index.js
		Projects.js
	  ProjectList/
	    index.js
		ProjectList.js
		ProjectListContainer.js
		ProjectList.css
	  ...
	...
```

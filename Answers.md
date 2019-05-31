# Answers

1.  What is React JS and what problems does it try and solve?
    
    - React is a Javascript Library that is used in building User Interfaces. It solves problems like:
    - Performance Manipulating the DOM directly can be expensive. React solves this problem using its virtualDOM(ReactDOM) The ReactDOM finds an efficient way of updating the DOM without reloading the whole page, just updating the changes in the DOM.
    - Modularity: Breaking web app down and building them in components fosters DRY(Don’t Repeat Yourself) and reusability, thereby improving development time and app scalability.

2.  What does it mean to _think_ in react?

    - Thinking in react means knowing how to break an app into components, information that should be held in the state, in what component the state should live in should that it would be accessible to components that need information from the state and how data flow through components downwards to child components or upward to parent component containing state. 

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
   
    - Class/Stateful Components can maintain or have state and gives access to methods that can be used in adding more functionality
    - Functional/Presentational are much easier to read and test but cannot maintain or have state. But performance wise, they are better than Class components.

4.  Describe state.

    - A state is a mutable object created in a component that holds information or data concerning the app in general or components that could be used to determine the output rendered.

5.  Describe props.
   - Props is an immutable object that is passed into a component that holds information needed by a particular component that could be used to influence what is rendered by the component.

# heroku-app-three

## Angular
Angular is any framework for a webpage needing to be async(loading simultaneously without the page itself refreshing).
### Angular Facts:
1. Open Source
2. Started in 2009
3. Newest version is version 10
4. Angular Developers are becoming more popular

Angular Data is automatically synchronized between the model and the view components which is called data binding.

Simple Angular App:

```javascript
<!doctype html>
<html ng-app>
  <head>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
  </head>
  <body>
    <div>
      <label>Name:</label>
      <input type="text" ng-model="yourName" placeholder="Enter a name here">
      <hr>
      <h1>Hello {{yourName}}!</h1>
    </div>
  </body>
</html>
```



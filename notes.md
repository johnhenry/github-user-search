Todo
Add Angular router /:uesernate
use $http, rather than fetch

1. suggestions

https://developer.github.com/v3/search/#search-users

```javascript
var transformResponse = (response)=>response.json();
var mapSearchResults = (users)=>users.items.map(({login, text_matches})=>{return {login, text_matches};});
var searchUsers = (login)=>window.fetch(
  `https://api.github.com/search/users?q=${login}+in:login`,
  {
    headers: {
      'Accept':'application/vnd.github.v3.text-match+json'
      }
  })
  .then(response=>response.json())
  .then(mapSearchResults);
//
searchUsers('te')
.then(console.log.bind(console));
```

```html
<md-autocomplete md-selected-item="selectedItem" md-search-text="searchText" md-items="item in ['1111','2222','3333']" md-item-text="item">
 <md-item-template>
   <span md-highlight-text="searchText">{{item}}</span>
 </md-item-template>
 <md-not-found>
   No matches found.
 </md-not-found>
</md-autocomplete>
```


2. repositories

```javascript
var transformResponses =
(responses) => Promise.all(responses.map(response=>response.json()));
var combineResults = ([user, repositories])=>{return {user,repositories};};
var getUserResult = (login)=>Promise.all(
  [
    window.fetch(
      `https://api.github.com/users/${login}`),
    window.fetch(
      `https://api.github.com/users/${login}/repos`)
  ]
)
.then(transformResponses)
.then(combineResults);
//
getUserResult('john')
.then(console.log.bind(console));
```

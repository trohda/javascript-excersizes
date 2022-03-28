## Zadanie nr 2 - DOM API

Crate a HTML table as below:
```html
    <table>
    <tr>
        <th>name</th>
        <th>height</th>
        <th>place</th>
    </tr>
    <tr>
        <td>Kilimanjaro</td>
        <td>5895</td>
        <td>Tanzania</td>
    </tr>
    </table>
```
Each row tag `<table>` has tag`<tr>`. Inside `<tr>` we can inject (`<td>`) or  (`<th>`) cells.

Use array `MOUNTAINS` and create DOM structure like below:

## Mountains 
|Name|Height|Place|
|----|------|-----|
|Kilimanjaro|5895|Tanzania|
|Everest|8848|Nepal|
|Mount Fuji|3776|Japan|
|Vaalserberg|323|Netherlands|
|Denali|6168|United States|
|Popocatepetl|5465|Mexico|
|Mont Blanc|4808|Italy/France|

After creating a structure add `style.textAlign` to `right` to numeric values.

```html
<h1>Mountains</h1>

<div id="mountains"></div>

<script>
  const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];

  // Your code
</script>
```
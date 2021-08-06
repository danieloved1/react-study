//Create a react app from scratch.
var React = require("react");
var reactdom = require("react-dom");

//It should display a h1 heading.
const fname = "daniel";
const lname = "oved";
var year = new Date();
year = year.getFullYear();
//console.log(year)
reactdom.render(
  <div>
    <div>
      <p>
        crated by {fname} {lname}
      </p>
      <p>copyright {year}</p>
    </div>
  </div>,
  document.getElementById("root")
);

//It should display an unordered list (bullet points).

//It should contain 3 list elements.

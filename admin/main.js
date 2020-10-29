const adminFiles = [
  {
    link: "../devfest-mailers/example-1.html",
    title: "Example 1",
  },
  {
    link: "../devfest-mailers/example-2.html",
    title: "Example 2",
  },
  {
    link: "../devfest-mailers/example-3.html",
    title: "Example 3",
  },
  {
    link: "../devfest-mailers/day-1.html",
    title: "Day 1",
  },
  {
    link: "../devfest-mailers/day-2.html",
    title: "Day 2",
  },
  {
    link: "../devfest-mailers/day-3.html",
    title: "Day 3",
  },
  {
    link: "../devfest-mailers/thanks.html",
    title: "Thanks",
  },
];

for (i of adminFiles) {
  document.getElementById(
    "admin-list"
  ).innerHTML += `<li><a href=${i.link} style="font-weight:bold; color: #4285f4">${i.title}</a></li>`;
}

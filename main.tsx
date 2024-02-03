/** @jsx h */

import blog, { ga, redirects, h } from "blog";

blog({
  title: "Ivan Caminal",
  description: "Ideas are my own",
  // header: <header>Your custom header</header>,
  // section: (post: Post) => <section>Your custom section with access to Post props.</section>,
  footer: <footer></footer>,
  avatar: "https://pbs.twimg.com/profile_images/954105024912789505/wRGsCTyx_400x400.jpg",
  avatarClass: "rounded-full",
  author: "Ivan Caminal",
  links: [
    { title: "GitHub", url: "https://github.com/ivancaminal72" },
    { title: "Twitter", url: "https://twitter.com/ICaminal" },
    { title: "Linkedin", url: "https://www.linkedin.com/in/ivan-caminal-colell-01b563110/" },
  ],

  // middlewares: [

    // If you want to set up Google Analytics, paste your GA key here.
    // ga("UA-XXXXXXXX-X"),

    // If you want to provide some redirections, you can specify them here,
    // pathname specified in a key will redirect to pathname in the value.
    // redirects({
    //  "/hello_world.html": "/hello_world",
    // }),

  // ]
});

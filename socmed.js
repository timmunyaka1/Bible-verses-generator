/*
SOCIAL MEDIA SHARE LINKS:

facebook:
https://www.facebook.com/sharer.php?u=[post-url]

twitter:
https://twitter.com/share?url=[post-url]&text=[post-title]&via=[via]&hashtags=[hashtags]

pinterest:
https://pinterest.com/pin/create/bookmarklet/?media=[post-img]&url=[post-url]&is_video=[is_video]&description=[post-title]

linkedin:
https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]

*/

let link = encodeURI(window.location.href);
let msg = encodeURIComponent("Let's read some bible verse!");
let title = encodeURIComponent(document.querySelector("title").textContent);

console.log([link, msg, title]);

const fb = document.querySelector(".facebook-share");
fb.href = `https://www.facebook.com/sharer.php?u=${link}`;

const twitter = document.querySelector(".twitter-share");
twitter.href = `https://twitter.com/share?url=${link}&text=${msg}`;

const linkedin = document.querySelector(".linkedin-share");
linkedin.href = `https://www.linkedin.com/shareArticle?url=${link}&title=${title}`;

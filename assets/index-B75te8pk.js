(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const locateIcon = document.createElementNS("http://www.w3.org/2000/svg", "path");
locateIcon.setAttributeNS(null, "fill-rule", "evenodd");
locateIcon.setAttributeNS(null, "d", "M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z");
const linkIcon = document.createElementNS("http://www.w3.org/2000/svg", "path");
linkIcon.setAttributeNS(null, "fill-rule", "evenodd");
linkIcon.setAttributeNS(null, "stroke", "currentColor");
linkIcon.setAttributeNS(null, "stroke-width", "2");
linkIcon.setAttributeNS(null, "d", "M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778");
const twitterIcon = document.createElementNS("http://www.w3.org/2000/svg", "path");
twitterIcon.setAttributeNS(null, "fill-rule", "evenodd");
twitterIcon.setAttributeNS(null, "d", "M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z");
const houseIcon = document.createElementNS("http://www.w3.org/2000/svg", "path");
houseIcon.setAttributeNS(null, "fill-rule", "evenodd");
houseIcon.setAttributeNS(null, "d", "M4 4a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2v14a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2V5a1 1 0 0 1-1-1Zm5 2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H9Zm5 0a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-1Zm-5 4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H9Zm5 0a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-1Zm-3 4a2 2 0 0 0-2 2v3h2v-3h2v3h2v-3a2 2 0 0 0-2-2h-2Z");
const sunIcon = document.createElementNS("http://www.w3.org/2000/svg", "path");
sunIcon.setAttributeNS(null, "fill-rule", "evenodd");
sunIcon.setAttributeNS(null, "d", "M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V3ZM6.343 4.929A1 1 0 0 0 4.93 6.343l1.414 1.414a1 1 0 0 0 1.414-1.414L6.343 4.929Zm12.728 1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414l1.414-1.414ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7.757 17.657a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414Zm9.9-1.414a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z");
const moonIcon = document.createElementNS("http://www.w3.org/2000/svg", "path");
moonIcon.setAttributeNS(null, "fill-rule", "evenodd");
moonIcon.setAttributeNS(null, "d", "M11.675 2.015a.998.998 0 0 0-.403.011C6.09 2.4 2 6.722 2 12c0 5.523 4.477 10 10 10 4.356 0 8.058-2.784 9.43-6.667a1 1 0 0 0-1.02-1.33c-.08.006-.105.005-.127.005h-.001l-.028-.002A5.227 5.227 0 0 0 20 14a8 8 0 0 1-8-8c0-.952.121-1.752.404-2.558a.996.996 0 0 0 .096-.428V3a1 1 0 0 0-.825-.985Z");
document.getElementById("locateIconContainer").appendChild(locateIcon);
document.getElementById("linkIconContainer").appendChild(linkIcon);
document.getElementById("twitterIconContainer").appendChild(twitterIcon);
document.getElementById("houseIconContainer").appendChild(houseIcon);
const paletIcon = document.getElementById("paletIcon");
const paletName = document.getElementById("paletName");
paletIcon.appendChild(sunIcon);
document.getElementById("togglePalet").addEventListener("click", () => {
  let isDark = document.documentElement.getAttribute("data-theme");
  if (isDark === "dark") {
    document.documentElement.removeAttribute("data-theme");
    paletIcon.removeChild(sunIcon);
    paletIcon.appendChild(moonIcon);
    paletName.textContent = "DARK";
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    paletIcon.removeChild(moonIcon);
    paletIcon.appendChild(sunIcon);
    paletName.textContent = "LIGHT";
  }
});
const profileCard = document.getElementById("profileCard");
const profileImg = document.getElementById("profileImg");
const profileName = document.getElementById("profileName");
const profileTag = document.getElementById("profileTag");
const profileJoined = document.getElementById("profileJoined");
const profileBio = document.getElementById("profileBio");
const profileRepos = document.getElementById("profileRepos");
const profileFollowers = document.getElementById("profileFollowers");
const profileFollowing = document.getElementById("profileFollowing");
const profileLocation = document.getElementById("profileLocation");
const profileLink = document.getElementById("profileLink");
const profileTwitter = document.getElementById("profileTwitter");
const profileCompany = document.getElementById("profileCompany");
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
document.getElementById("searchTButton").addEventListener("click", () => {
  const inputText = document.getElementById("inputSearch").value;
  fetch(`https://api.github.com/users/${inputText}`).then((response) => response.json()).then((data) => {
    profileCard.removeAttribute("hidden");
    profileImg.src = data.avatar_url == null ? "N/A" : data.avatar_url;
    profileName.textContent = data.login == null ? "N/A" : data.login;
    profileTag.textContent = data.login == null ? "N/A" : "@" + data.login;
    if (data.created_at == null) profileJoined.textContent = "N/A";
    else {
      const date = data.created_at.split("-");
      profileJoined.textContent = date[2].substring(0, 2) + " " + months[Number(date[1]) - 1] + " " + date[0];
    }
    profileBio.textContent = data.bio == null ? "N/A" : data.bio;
    profileRepos.textContent = data.public_repos == null ? "N/A" : data.public_repos;
    profileFollowers.textContent = data.followers == null ? "N/A" : data.followers;
    profileFollowing.textContent = data.following == null ? "N/A" : data.following;
    profileLocation.textContent = data.location == null ? "N/A" : data.location;
    profileLink.textContent = data.blog == null ? "N/A" : data.blog;
    profileLink.href = data.blog == null ? "N/A" : data.blog;
    profileTwitter.textContent = data.twitter_username == null ? "N/A" : data.twitter_username;
    profileCompany.textContent = data.company == null ? "N/A" : data.company;
  }).catch((error) => console.error("Error:", error));
});

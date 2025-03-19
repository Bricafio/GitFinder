import './style.css'
import {locateIcon, linkIcon, twitterIcon, houseIcon, sunIcon, moonIcon} from './iconPaths'

document.getElementById('locateIconContainer').appendChild(locateIcon);
document.getElementById('linkIconContainer').appendChild(linkIcon);
document.getElementById('twitterIconContainer').appendChild(twitterIcon);
document.getElementById('houseIconContainer').appendChild(houseIcon);

const paletIcon = document.getElementById('paletIcon');
const paletName = document.getElementById('paletName');
paletIcon.appendChild(sunIcon);

document.getElementById('togglePalet').addEventListener("click", () => {
  let isDark = document.documentElement.getAttribute("data-theme");
  
  if (isDark === "dark") {
    document.documentElement.removeAttribute("data-theme");
    paletIcon.removeChild(sunIcon);
    paletIcon.appendChild(moonIcon);
    paletName.textContent = "DARK";
  } else {
    document.documentElement.setAttribute("data-theme","dark")
    paletIcon.removeChild(moonIcon);
    paletIcon.appendChild(sunIcon);
    paletName.textContent = "LIGHT";
  }
});

const profileCard = document.getElementById('profileCard');
const profileImg = document.getElementById('profileImg');
const profileName = document.getElementById('profileName');
const profileTag = document.getElementById('profileTag');
const profileJoined = document.getElementById('profileJoined');
const profileBio = document.getElementById('profileBio');
const profileRepos = document.getElementById('profileRepos');
const profileFollowers = document.getElementById('profileFollowers');
const profileFollowing = document.getElementById('profileFollowing');
const profileLocation = document.getElementById('profileLocation');
const profileLink = document.getElementById('profileLink');
const profileTwitter = document.getElementById('profileTwitter');
const profileCompany = document.getElementById('profileCompany');

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

document.getElementById('searchTButton').addEventListener("click", ()=>{
  const inputText = document.getElementById('inputSearch').value;
  fetch(`https://api.github.com/users/${inputText}`)
  .then(response => response.json())
  .then(data => {
    profileCard.removeAttribute('hidden');
    profileImg.src = data.avatar_url  == null? "N/A" : data.avatar_url;
    profileName.textContent = data.login == null? "N/A" : data.login;
    profileTag.textContent = data.login == null? "N/A" : "@" + data.login;
    if (data.created_at == null) profileJoined.textContent = "N/A";
    else{
      const date = data.created_at.split("-");
      profileJoined.textContent = date[2].substring(0,2) + " " + months[Number(date[1]) - 1] + " " + date[0];
    } 
    profileBio.textContent = data.bio == null? "N/A" : data.bio;
    profileRepos.textContent = data.public_repos == null? "N/A" : data.public_repos;
    profileFollowers.textContent = data.followers == null? "N/A" : data.followers;
    profileFollowing.textContent = data.following == null? "N/A" : data.following;
    profileLocation.textContent = data.location == null? "N/A" : data.location;
    profileLink.textContent = data.blog == null? "N/A" : data.blog;
    profileLink.href = data.blog == null? "N/A" : data.blog;
    profileTwitter.textContent = data.twitter_username == null? "N/A" : data.twitter_username;
    profileCompany.textContent = data.company == null? "N/A" : data.company;
  })
  .catch(error => console.error('Error:', error));
});


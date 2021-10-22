const linksSocialMedia = {
    github: "Bujira",
    youtube: "channel/UCqwEBs6BdYYdWhkRKjpfQmQ",
    instagram: "yurifcorrea",
    facebook: "yurifcorrea",
    twitter: "maykbrito"
};

function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
        const socialMediaName = li.getAttribute("class");
        li.children[0].href = `https://www.${socialMediaName}.com/${linksSocialMedia[socialMediaName]}`;
    }
}

changeSocialMediaLinks();

function getGitHubUserInfo() {
    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            userAvatar.src = data.avatar_url;
            userName.textContent = data.name;
            userLink.href = data.html_url;
            userBio.textContent = data.bio;
            userUrlName.textContent = data.login;
        });
}

getGitHubUserInfo();
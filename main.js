const LinkSocialMedia = {
  github: 'LucasdosSantosDiniz',
  youtube: 'UCfODIr2PXTV4JzbqU1xHuKA',
  facebook: 'lucas.diniz.5059',
  instagram: 'lucasdiniz_13',
  twitter: 'LukaoZL'
}

function ChangeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinkSocialMedia[social]}`
  }
}

ChangeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${LinkSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGithubProfileInfos()

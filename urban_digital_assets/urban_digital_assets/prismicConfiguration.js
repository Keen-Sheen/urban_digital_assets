// -- Prismic Repo Name
export const repoName = 'uda-webiste'

// -- Prismic API endpoint
// Determines which repository to query and fetch data from
// Configure your site's access point here
export const apiEndpoint = `https://${repoName}.prismic.io/api/v2`

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken = 'MC5ZY1hrb3hFQUFDUUE5QjNV.77-9bO-_vVon77-9dkpX77-977-9X--_ve-_ve-_vV9yM--_ve-_ve-_vUA_Pu-_vT7vv70M77-977-977-977-9'

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc) => {
  if (doc.type === 'post') {
    return `/${doc.uid}`
  }
  if (doc.type === 'home_page') {
    return `/${doc.uid}`
  }
  if (doc.type === 'about_us') {
    return `/${doc.uid}`
  }
  return '/'
}

// -- Route Resolver rules
// Manages the url links to internal Prismic documents two levels deep (optionals)
export const Router = {
  routes: [
    {
      "type":"home_page",
      "path":"/:uid"
    },
    {
      "type":"about_us",
      "path":"/:uid"
    },
  ]
};
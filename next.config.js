module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['media.graphassets.com','/media.graphcms.com', 'fakestoreapi.com', "links.papareact.com"],
  },
  env: {
    URL: process.env.ENDPOINT,
    TOKEN:process.env.GRAPH_CMS_TOKEN,
  },
}

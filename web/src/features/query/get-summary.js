export const getSummary = (params) => ({
    url: `/summarize?url${encodeURIComponent(params.articleUrl)}&length=100`,
    method: 'get'
})
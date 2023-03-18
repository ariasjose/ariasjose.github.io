// export default function myImageLoader({ src, width, quality }) {
//     return `https://example.com/${src}?w=${width}&q=${quality || 75}`
// }

function normalizeSrc(src) {
    return src[0] === '/' ? src.slice(1) : src
}

export default function imgixLoader({ src, width, quality, }) {
    // Demo: https://static.imgix.net/daisy.png?auto=format&fit=max&w=300
    const imgix_endpoint = 'https://ariasjose1.imgix.net/'
    const url = new URL(`${imgix_endpoint}${normalizeSrc(src)}`)
    const params = url.searchParams

    // auto params can be combined with comma separation, or reiteration
    params.set('auto', params.getAll('auto').join(',') || 'format')
    params.set('fit', params.get('fit') || 'max')
    params.set('w', params.get('w') || width.toString())

    if (quality) {
        params.set('q', quality.toString())
    }

    return url.href
}

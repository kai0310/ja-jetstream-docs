module.exports = {
    title: "Laravel Jetstream",
    description: "Beautifully designed application scaffolding for Laravel",
    base: '/',

    head: require('./head'),

    themeConfig: {
        logo: '/assets/img/logo.svg',
        displayAllHeaders: true,
        activeHeaderLinks: false,
        searchPlaceholder: 'Press / to search',
        lastUpdated: false, // string | boolean
        sidebarDepth: 0,

        repo: 'laravel/jetstream',

        docsRepo: 'kai0310/ja-jetstream-docs',
        editLinks: true,
        editLinkText: 'この日本語ドキュメントを改善する',

        nav: [
            { text: 'Home', link: '/', target: '_self' },
        ],

        sidebar: {
            '/2.x/': require('./2.x')
        },
    },
}

export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e925995396d248f21f67f2c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-qvd8gk5i',
                  apiId: '434da19c-72c5-4c88-b249-aeda39e9c705'
                },
                {
                  buildHookId: '5e925995802adae11b8bc743',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-f64qo8sj',
                  apiId: 'd1eba908-2381-4bcb-8258-f2e48133b39c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dragonrapstar/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-f64qo8sj.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

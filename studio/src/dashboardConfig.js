export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '604066d26bc20f6690aaf4ae',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-demo-1-studio',
                  apiId: '66d80917-e74c-4cef-89de-6f9a05e954f4'
                },
                {
                  buildHookId: '604066d29425c256b872e655',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-demo-1',
                  apiId: 'a0e6fc3f-02d3-4c01-89a5-f2c06c706e84'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pkeyser10/sanity-gatsby-demo1',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-demo-1.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

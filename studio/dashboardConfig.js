export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '6200d18c3491d74597566745',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-bu9c5z95',
                  apiId: 'd56b67f6-a606-4fa4-bc0c-bc0c4fee1242'
                },
                {
                  buildHookId: '6200d18cdb14963da57f45cc',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-nmukx68x',
                  apiId: '44912916-e889-4501-af52-cccb294ad1df'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/forest1206/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-nmukx68x.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

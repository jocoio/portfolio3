import HomePage from '../home/HomePage.js';
import AboutPage from '../about/AboutPage.js';
import ProjectPage from '../project/ProjectPage.js';

export default [
  {
    key: 'home',
    Component: HomePage,
    path: {
      path: '/',
      exact: true,
    },
  },
  {
    key: 'about',
    Component: AboutPage,
    path: {
      path: `/about`,
    },
  },
  {
    key: 'scout',
    Component: ProjectPage,
    path: {
			path: `/scout`,
    },
	},
	{
    key: 'hellola',
    Component: ProjectPage,
    path: {
			path: `/hellola`,
    },
  },
  {
    key: 'portfolio',
    Component: ProjectPage,
    path: {
			path: `/portfolio`,
    },
  },
  {
    key: 'scoutsite',
    Component: ProjectPage,
    path: {
			path: `/scoutsite`,
    },
  },

  {
    key: 'unsize',
    Component: ProjectPage,
    path: {
			path: `/unsize`,
    },
  },
  {
    key: 'thisgirlcodes',
    Component: ProjectPage,
    path: {
			path: `/thisgirlcodes`,
    },
  },
  {
    key: 'myhousing',
    Component: ProjectPage,
    path: {
			path: `/myhousing`,
    },
  },
]
import pages from './pages';

const {
	AddTransport,
	EditTransport,
    TransList,
    Login
} = pages;

export const groups = [
    {
    	group: 'TransList',
		isPublic: true,
		routes: [
			{
				title: 'TransList',
				path: '/transport-list',
				icon: 'TransList',
                component: TransList,
                isExact: true,
                subRoutes: [],
				isPublic: true,
				visible: true,
				index: 1
            }
		]
    },
    {
    	group: 'Login',
		isPublic: true,
		routes: [
			{
				title: 'Login',
				path: '/login',
				icon: 'Login',
                component: Login,
                isExact: true,
                subRoutes: [],
				isPublic: true,
				visible: true,
				index: 1
            }
		]
    },
	{
    	group: 'AddTransport',
		isPublic: true,
		routes: [
			{
				title: 'Add transport',
				path: '/add-transport',
				icon: 'Add Transport',
                component: AddTransport,
                isExact: true,
                subRoutes: [],
				isPublic: true,
				visible: true,
				index: 1
            }
		]
    },
	{
    	group: 'EditTransport',
		isPublic: true,
		routes: [
			{
				title: 'Edit transport',
				path: '/transport/edit/:id',
				icon: 'Edit Transport',
                component: EditTransport,
                isExact: true,
                subRoutes: [],
				isPublic: true,
				visible: true,
				index: 1
            }
		]
    }
];

const joinFn = (acc = [], curr) => {
	return acc.concat(curr);
};

export const allRoutes = groups
	.map(function merge(group) {
		const { routes } = group;
		const subRoutes = routes.map(route => route.subRoutes).reduce(joinFn);
		return routes.concat(subRoutes);
	})
	.reduce(joinFn);

export const getGroups = () => groups;

export default {
	groups,
	allRoutes
};
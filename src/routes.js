import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProductList from './pages/ProductListPage/ProductListPage';
import ProductAction from './pages/ProductActionPage/ProductActionPage';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => { 
            return <HomePage></HomePage>
        }
    },
    {
        path: '/product-list',
        exact: false,
        main:  () => {
            return <ProductList></ProductList>
        }
    },
    {
        path: '/product/add',
        exact: false,
        main:  (history) => {
            return <ProductAction history={history}></ProductAction>
        }
    },
    {
        path: '/product/:id/edit',
        exact: false,
        main:  (history) => {
            return <ProductAction history={history}></ProductAction>
        }
    },
    {
        path: '',
        exact: false,
        main:  () => {
            return <NotFoundPage></NotFoundPage>
        }
    },
];

export default routes;
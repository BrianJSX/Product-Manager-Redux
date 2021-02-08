import React, { Component } from 'react';
import { Link, Route, BrowserRouter as Router} from 'react-router-dom';

const links = [
    {
        name: 'Trang chủ',
        to: '/',
        exact: true
    },
    {
        name: 'Quản lý sản phẩm',
        to: '/product-list',
        exact: true
    },
];

const MenuLink = ({ lable, to, ActiveExact }) => {
    return (
        <Route
            path={to}
            exact={ActiveExact}
            children={(match) => {
                let active = match ? 'active' : '';
                return (
                    <li className={`nav-item ${active}`}>
                        <Link className="nav-link" to={to}>{lable}</Link>
                    </li>
                );
            }}
        >
        </Route>
    )
}

class Menu extends Component {

    render() {
        return (
            <ul className="nav nav-tabs" id="navId">
                {this.showMenuLink(links)}
            </ul>
        );
    }

    showMenuLink = (links) => {
        let result = null;
        result = links.map((link, index) => {
            return <MenuLink key={index} lable={link.name} to={link.to} exact={link.exact}></MenuLink>
        });
        return result;
    }
}

export default Menu;

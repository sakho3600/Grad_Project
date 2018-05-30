import React, { Component } from 'react';
import { Header, Icon, Image } from 'semantic-ui-react';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <ul className='header-items'>
                <li className='header-item'>
                    <Header color='grey' as='h6' icon textAlign='center'>
                        <Icon name='users' color='teal' />
                        <Header.Content >
                            Customers
                        </Header.Content>
                    </Header>
                </li>
                <li className='header-item'>
                    <Header color='grey' as='h6' icon textAlign='center'>
                        <Icon name='users' color='teal' />
                        <Header.Content>
                            Branches
                        </Header.Content>
                    </Header>
                </li>
                <li className='header-item'>
                    <Header color='grey' as='h6' icon textAlign='center'>
                        <Icon name='users' color='teal' />
                        <Header.Content>
                            Expansion
                        </Header.Content>
                    </Header>
                </li>
                <li className='header-item'>
                    <Header color='grey' as='h6' icon textAlign='center'>
                        <Icon color='teal' name='users' />
                        <Header.Content>
                            Advertisments
                        </Header.Content>
                    </Header>
                </li>
            </ul>
        )
    }
}

export default Home;

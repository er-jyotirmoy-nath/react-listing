import React,{Component} from 'react';
import { Button, Card, Image} from 'semantic-ui-react'
import { browserHistory} from 'react-router'
//import blogo from './img/Buildcert.jpg';
export default class Home extends Component {
    redirectTo(to){
        browserHistory.push({
            pathname: to
        })
    }
    render() {
        return (
            <div className="container-fluid">
                <hr />
                <div className="slideanim slide">
                    <Card.Group>
                        <Card>
                            
                            <Card.Content>
                                <Image floated='right' size='small' src='img/tmv2.jpg' />
                                <Card.Header>
                                    NSF TMV2
                                </Card.Header>
                                <Card.Meta>
                                </Card.Meta>
                                <Card.Description>                                   
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <div className='ui two buttons'>
                                    <Button basic color='blue' role="link" href='#/tmv2'>Check Listings for NSF TMV2.</Button>    
                                </div>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content>
                                <Image floated='right' size='small' src='img/tmv3.jpg' />
                                <Card.Header>
                                    NSF TMV3
                                </Card.Header>
                                <Card.Meta>
                                </Card.Meta>
                                <Card.Description>                                    
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <div className='ui two buttons'>
                                    <Button basic color='blue' role="link" href='#/tmv3'>Check Listings for NSF TMV3.</Button>    
                                </div>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content>
                                <Image floated='right' size='small' src='img/CI_Logo.jpg' style={{'width':'30%'}} />
                                <Card.Header>
                                    NSF CIAS
                                </Card.Header>
                                <Card.Meta>                                    
                                </Card.Meta>
                                <Card.Description>                                    
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <div className='ui two buttons'>
                                    <Button basic color='blue' role="link" href='#/cias'>Check Listing for NSF CIAS.</Button>    
                                </div>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content>
                                <Image floated='right' size='small' src='img/dtc.jpg' style={{ 'width': '30%' }} />
                                <Card.Header>
                                    NSF UKAS Product Certification
                                </Card.Header>
                                <Card.Meta>
                                </Card.Meta>
                                <Card.Description>                                    
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <div className='ui two buttons'>
                                    <Button basic color='blue' role="link" href='#/dtc'>Check Listings for NSF UKAS Product Certification.</Button>    
                                </div>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content>
                                <Image floated='right' size='small' src='img/Buildcert.jpg' />
                                <Card.Header>
                                    BS EN 15092
                                </Card.Header>
                                <Card.Meta>
                                </Card.Meta>
                                <Card.Description>                                   
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <div className='ui two buttons'>
                                    <Button basic color='blue' role="link" href='#/pdcert'> Check Listings for the Former BuildCert Program.</Button>                                    
                                </div>
                            </Card.Content>
                        </Card>
                    </Card.Group>
         </div>
        </div>                 
        );
    }
}

import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import {Tabs, Tab} from 'react-bootstrap-tabs';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Home from '@material-ui/icons/Home';
import Person from '@material-ui/icons/Person';
import ContactPhone from '@material-ui/icons/ContactPhone';
import PhotoAlbum from '@material-ui/icons/PhotoAlbum';
import BusinessCenter from '@material-ui/icons/BusinessCenter';
import Star from '@material-ui/icons/Star';
import Favorite from '@material-ui/icons/Favorite';
import LocalLibrary from '@material-ui/icons/LocalLibrary';
import FormatListBulleted from '@material-ui/icons/FormatListBulleted'
import QueryBuilder from '@material-ui/icons/QueryBuilder';
import StarBorder from '@material-ui/icons/StarBorder';
import Message from '@material-ui/icons/Message';
import Autorenew from '@material-ui/icons/Autorenew';
import Search from '@material-ui/icons/Search';
import Visibility from '@material-ui/icons/Visibility';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Navbar, Input, Button, Fa, Card, CardBody, Modal } from 'mdbreact';


const styles = theme => ({
  root: {
    position: 'fixed',
    width: '100%',
    flexGrow: 1,
  },

  div: {
    background: 'linear-gradient(to bottom, white, #808080)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    padding: '30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    height: '200%',
  },
  
  flex: {
    flexGrow: 1,
  },

  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },

  signUp_Advocate: {
    display: 'none',
    color: 'white',
  },
});
var obj1;
var obj2;
var i = 0;
var funcs = ['addClass1', 'addClass2', 'addClass3'];

class TemporaryDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      btnClass : '',
    };

    this.toggle = this.toggle.bind(this);
    this.changeBtnClass = this.changeBtnClass.bind(this);
    this.addClass1 = this.addClass1.bind(this);
    this.addClass2 = this.addClass2.bind(this);
    this.addClass3 = this.addClass3.bind(this);

  }

  changeBtnClass(){ 
    i++;
    if(i === 1){
      this.addClass1();
    }
    else if(i === 2){
      this.addClass2();
    }
    else{
      this.addClass3();
    }
    if (i < funcs.length) setTimeout(this.changeBtnClass, 4000);
  }
  
  addClass1(){
    this.setState({
      btnClass:'onclic'
    });
  }
  addClass2(){
    this.setState({
      btnClass:'validate'
    });
  }

  addClass3(){
    this.setState({
      btnClass:''
    });
  }  

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  // change(page)
  // {
  //   obj2 = document.getElementById('signUp_Advocate');
  //   obj1 = document.getElementById('signUp_Client');
  //   switch(page)
  //   {
  //     default: alert("Error");
  //     case 1: obj1.style.display='block';
  //     case 2: obj2.style.display='block';
  //   }
  // }
  
  state = {
    open: false,
    left: false,
    isListOpen:false,
  };

  handleClick = () => {
    this.setState({
      isListOpen: !this.state.isListOpen,
    });
  };

  handleClick1 = () => {
    this.setState({
      isListOpen1: !this.state.isListOpen1,
    });
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;
    
    return (
      <div id="apppage">
        <Navbar dark expand="md" fixed="top" scrolling >
            <IconButton onClick={this.toggleDrawer('left', true)} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>

            <div className={classes.flex} >
              <img src="https://static.wixstatic.com/media/6f38c3_1d7d6ecf60d141c8a4bf993da41b5505~mv2.png/v1/fill/w_212,h_69,al_c,q_80/6f38c3_1d7d6ecf60d141c8a4bf993da41b5505~mv2.webp" className="App-logo rounded" alt="logo" width="150px" height="auto"/>
            </div>

            <Link to='#' style={{textDecoration: 'none'}} onClick={this.toggle} className="btn btn-black rounded btn-sm waves-effect waves-light" data-toggle="modal" data-target="#navbarLogin">Log in/ Sign Up<i className="fa fa-sign-in ml-2"></i></Link>
            <Modal style={{paddingTop: '35px'}} isOpen={this.state.modal} toggle={this.toggle}>
              <Card>
                <Tabs headerStyle={{fontSize:'20px', fontWeight: 'bold', color: 'black'}} className="nav-justified" activeHeaderStyle={{backgroundColor: '#000', color:'white'}}>
                  <Tab label=" Login ">
                    <CardBody>
                    <div className="grey-text">
                      <div className="grey-text" required >
                        <Input label="Your email" icon="envelope" group type="email" validate error="wrong" success="right" />
                        <Input label="Your password" icon="lock" group type="password" validate containerClass="mb-0"/>
                      </div>  
                        <p className="font-small d-flex justify-content-end pb-3">Forgot <a href="#" className="black-text ml-1"> Password</a>?</p>
                      <div className="text-center mb-3">
                        {/* <button id="button" className={this.state.btnClass} onClick={this.changeBtnClass} style={{outline:"none"}}>Login</button> */}
                        <Button className="btn-block rounded z-depth-1a">Login</Button>
                      </div>
                      <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2"> or Sign in with:</p>
                      <div className="row my-3 d-flex justify-content-center">
                        <Button color="white" className=" face mr-md-3 z-depth-1a rounded"><Fa icon="facebook" className="indigo-text" /></Button>
                        <Button color="white" className="twi mr-md-3 z-depth-1a rounded"><Fa icon="twitter" className="blue-text" /></Button>
                        <Button color="white" className=" goop z-depth-1a rounded"><Fa icon="google-plus" className="red-text" /></Button>
                      </div>
                    </div>
                    </CardBody>
                  </Tab>
                  <Tab label="Sign Up">
                    <CardBody>
                      <div className="grey-text" id="signUp_Client">
                      <p className="font-small d-flex justify-content-end pb-3">Are you an Advocate?<Link to="" className="black-text ml-1" > Register Here</Link></p>
                      <Input label="Your name" icon="user" group type="text" validate error="wrong" success="right"/>
                      <Input label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                      <Input label="Your password" icon="lock" group type="password" validate/>
                      <Input label="Confirm password" icon="lock" group type="password" validate/>
                      </div>
                      {/* <div className="grey-text" id="signUp_Advocate">
                      <p className="font-small d-flex justify-content-end pb-3">Are you a Client?<a onClick={this.change(2).bind(this)} className="black-text ml-1" > Register Here</a></p>
                      <Input label="Your name" icon="user" group type="text" validate error="wrong" success="right"/>
                      <Input label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                      <Input label="Your password" icon="lock" group type="password" validate/>
                      <Input label="Confirm password" icon="lock" group type="password" validate/>
                      </div> */}
                      <div className="text-center mb-3">
                      <Button className="btn-block rounded z-depth-1a" >Register</Button>
                      </div>
                    </CardBody>
                  </Tab>
                </Tabs>
              </Card>
            </Modal>
            
            <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)} >
              <div
                className={classes.div}
                tabIndex={0}
                role="button"
              >
              <img src="https://static.wixstatic.com/media/6f38c3_1d7d6ecf60d141c8a4bf993da41b5505~mv2.png/v1/fill/w_212,h_69,al_c,q_80/6f38c3_1d7d6ecf60d141c8a4bf993da41b5505~mv2.webp" alt="logo" width="170" height="auto" className="rounded"/>
        
              <List className="list">
                <Link to='/' style={{ textDecoration: 'none', color: 'black'}}>
                <ListItem button onClick={this.toggleDrawer('left', false)}>
                <ListItemIcon>
                  <Home color="black" />
                </ListItemIcon>
                  Home
                </ListItem>
                </Link>
                <Divider />
                
                <ListItem button onClick={this.handleClick} >
                  <ListItemIcon>
                    <BusinessCenter color="black" />
                  </ListItemIcon>
                  <Link to='#the-firm' style={{ textDecoration: 'none', color: 'black'}}>The Firm</Link>
                  {this.state.isListOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem><Divider />
                <Collapse in={this.state.isListOpen} onClick={this.toggleDrawer('left', false)}>
                  <List component="div" disablePadding>
                    <Link to='/about-us' style={{ textDecoration: 'none', color: 'black'}}>
                    <ListItem button className={classes.nested}>
                      <ListItemIcon>
                       <LocalLibrary color="action" />
                      </ListItemIcon>
                      About us
                    </ListItem>
                    </Link>
                    <Divider />
                    <Link to='/our-objectives' style={{ textDecoration: 'none', color: 'black'}}>
                    <ListItem button className={classes.nested}>
                      <ListItemIcon>
                       <FormatListBulleted color="action" />
                      </ListItemIcon>
                      Our objectives
                    </ListItem>
                    </Link>
                    <Divider />
                    <Link to='/history' style={{ textDecoration: 'none', color: 'black'}}>
                    <ListItem button className={classes.nested}>
                      <ListItemIcon>
                        <QueryBuilder color="action" />
                      </ListItemIcon>
                      History
                    </ListItem>
                    </Link>
                    <Divider />
                    <Link to='/awards' style={{ textDecoration: 'none', color: 'black'}}>
                    <ListItem button className={classes.nested}>
                      <ListItemIcon>
                        <StarBorder color="action" />
                      </ListItemIcon>
                      Awards
                    </ListItem>
                    </Link>
                    <Divider />
                  </List>
                </Collapse>
                
                <Link to='/practice-areas' style={{ textDecoration: 'none', color: 'black'}}>
                <ListItem button onClick={this.toggleDrawer('left', false)}>
                <ListItemIcon>
                  <Star color="black" />
                </ListItemIcon>
                  Practice Areas
                </ListItem>
                </Link>
                <Divider />
                
                <Link to='/services' style={{ textDecoration: 'none', color: 'black'}}>
                <ListItem button onClick={this.toggleDrawer('left', false)}>
                <ListItemIcon>
                  <Favorite color="black" />
                </ListItemIcon>  
                  Services
                </ListItem>
                </Link>
                <Divider />
                
                <Link to='/portfolio' style={{ textDecoration: 'none', color: 'black'}}>
                <ListItem button onClick={this.toggleDrawer('left', false)}>
                <ListItemIcon>
                  <PhotoAlbum color="black" />
                </ListItemIcon>
                  Portfolio
                </ListItem>
                </Link>
                <Divider />

                <Link to='/our-people' style={{ textDecoration: 'none', color: 'black'}}>
                <ListItem button onClick={this.toggleDrawer('left', false)}>
                <ListItemIcon>
                  <Person color="black" />
                </ListItemIcon>
                  Our Team
                </ListItem>
                </Link>
                <Divider />

                <ListItem button onClick={this.handleClick1}>
                  <ListItemIcon>
                    <Visibility color="black" />
                  </ListItemIcon>
                  <Link to='#insights' style={{ textDecoration: 'none', color: 'black'}}>Insights</Link>
                  {this.state.isListOpen1 ? <ExpandLess /> : <ExpandMore />}
                  </ListItem><Divider />
                  <Collapse in={this.state.isListOpen1} onClick={this.toggleDrawer('left', false)}>
                    <List component="div" disablePadding>
                      <Link to='/articles' style={{ textDecoration: 'none', color: 'black'}}>
                      <ListItem button className={classes.nested}>
                        <ListItemIcon>
                          <Message color="action" />
                        </ListItemIcon>
                        Articles
                      </ListItem>
                      </Link>
                      <Divider />
                      <Link to='/legal-updates' style={{ textDecoration: 'none', color: 'black'}}>
                      <ListItem button className={classes.nested}>
                        <ListItemIcon>
                          <Autorenew color="action" />
                        </ListItemIcon>
                        Legal Updates
                      </ListItem>
                      </Link>
                      <Divider />
                    </List>
                  </Collapse>

                <Link to='/referrals' style={{ textDecoration: 'none', color: 'black'}}>
                <ListItem button onClick={this.toggleDrawer('left', false)}>
                <ListItemIcon>
                  <Person color="black" />
                </ListItemIcon>
                  Referrals
                </ListItem>
                </Link>
                <Divider />
                <Link to='/contact-us' style={{ textDecoration: 'none', color: 'black'}}>
                <ListItem button onClick={this.toggleDrawer('left', false)}>
                <ListItemIcon>
                  <ContactPhone color="black" />
                </ListItemIcon>
                  Contact Us
                </ListItem>
                </Link>
                <Divider />
                <Link to='/user-profile' style={{ textDecoration: 'none', color: 'black'}}>
                <ListItem button onClick={this.toggleDrawer('left', false)}>
                <ListItemIcon>
                  <Person color="black" />
                </ListItemIcon>
                  User Profile
                </ListItem>
                </Link>
                <Divider />
                <Link to='/search' style={{ textDecoration: 'none', color: 'black'}}>
                <ListItem button onClick={this.toggleDrawer('left', false)}>
                <ListItemIcon>
                  <Search color="black" />
                </ListItemIcon>
                  Search
                </ListItem>
              </Link>
            </List>
          </div>
        </Drawer>
      </Navbar>
    </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);

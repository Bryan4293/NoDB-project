import React, {Component} from 'react';
import NavBar from './components/NavBar/NavBar'
import axios from 'axios';
import "./App.css";
import Menu from './components/Menu/menu';
import CheckOut from './components/Check out/checkout';
// import './reset.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state= {
      menu: [],
      chkOut: [],
      showFood: false
    }
    this.navClick = this.navClick.bind(this)
    this.addToCheck = this.addToCheck.bind(this)
    this.removeItem = this.removeItem.bind(this)
    this.updateCheck = this.updateCheck.bind(this)
  }

  componentDidMount() {
    axios
    .get("/api/menu")
    .then(res =>{
      this.setState({menu: res.data })
    })
    .catch(error => {
      console.log(error)
    })
  }
  addToCheck(item){
      this.setState({
      chkOut: [...this.state.chkOut, item]
    })
  }

  updateCheck(update){
    this.setState({chkOut : update})
  }

  removeItem(index){
 
    let deleteItem = this.state.chkOut.slice();
    deleteItem.splice(index, 1);
    this.setState({
      chkOut: deleteItem
    });
  }

  navClick(location){
    if(location=== "chkOut"){
      this.setState({
        showFood:true
      })
    }else{
      this.setState({
        showFood:false
      })
    }
  }

  render(){
    const {menu, chkOut, showFood} = this.state;
    
    let menuDisplay = menu.map((menu, index) => <Menu key={index}
      addToCheck={this.addToCheck}
      menu={menu}/>)
    
    let checkDisplay = chkOut.map((chkOut, index) => <CheckOut 
      removeItem={this.removeItem}
      chkOut={chkOut}/>)
    
    return (
      <div >
        <header >
          <NavBar navClick={this.navClick}/>
        </header>
        <section className='menu_display'>
          {showFood ? (checkDisplay) : (menuDisplay)}
        </section>
      </div>
    );
  }
}

export default App;

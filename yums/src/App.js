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
      showFood: false,
      comment: "",
      userComment:''
    }
    this.navClick = this.navClick.bind(this)
    this.addToCheck = this.addToCheck.bind(this)
    this.removeItem = this.removeItem.bind(this)
    this.updateCheck = this.updateCheck.bind(this)
    this.handleComment= this.handleComment.bind(this)
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

  addComment(dish){
    console.log(dish)
    axios
          .post("/api/checkOut/"+dish,{
            comment: this.state.comment
          })
          .then(res =>{
            console.log(res.data)
            this.setState({menu: res.data, userComment: this.state.comment})
            this.handleComment()
          })
          .catch(error =>{
            console.log(error)
          })
  }

  deleteComment(dish){
 
    axios
        .delete(`/api/checkOut/${dish}`)
        // , {
        //   comment: this.state.comment
        // })
        .then(res =>{
          let newChkOut = [...this.state.chkOut]
          let index = newChkOut.findIndex(item => item.id === dish)
          newChkOut[index] = res.data[1]

          this.setState({
            menu: res.data[0],
            chkOut: newChkOut,
            userComment: ''
          }, () => console.log(this.state))


          this.handleComment('')
        })
        .catch(error =>{
          console.log(error)
        })
  }

  editComment(dish){
    axios
        .put(`/api/checkOut/${dish}`, {
          comment: this.state.comment
        })
        .then(res =>{
          let newChkOut = [...this.state.chkOut]
          let index = newChkOut.findIndex(item => item.id === dish)
          newChkOut[index] = res.data[1]

          this.setState({
            menu: res.data[0],
            chkOut: newChkOut,
            userComment: this.state.comment
          }, () => console.log(this.state))


          this.handleComment(res.data[1].comment)
        })
        .catch(error =>{
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
  handleComment(val){
    this.setState({comment: val})
  }

  render(){
    const {menu, chkOut, showFood} = this.state;
    
    let menuDisplay = menu.map((menu, index) => <Menu key={index}
      addToCheck={this.addToCheck}
      menu={menu}/>)
  
    
    return (
      <div >
        <header >
          <NavBar navClick={this.navClick}/>
        </header>
        <section className='menu_display'>
          {showFood ? 
           <CheckOut 
           removeItem={this.removeItem} 
           chkOut={chkOut} 
           addComment={e=> this.addComment(e)} 
           handleComment={this.handleComment} 
           comment={this.state.userComment}
           deleteComment={e => this.deleteComment(e)}
           editComment={e => this.editComment(e)}
           /> 
            : (menuDisplay)}
        </section>
      </div>
    );
  }
}

export default App;

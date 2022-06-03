import React , { useEffect, useState } from 'react'
import styled from 'styled-components';
import deletesvg from './assets/delete.svg';
import revert from './assets/revert.svg';
import tick from './assets/tick-green.svg';

function App(props) {
  const [id,setId]=useState(0)
  const [itemList ,setItemList] = useState([])
  const [userInput,setUserInput] = useState("")
  const [completeList,setCompletelist] = useState([])

  useEffect(()=>{
    setId(itemList.length)   
},[])

const reverter = (id,title) => {
    let new_ = {
        id:id,
        title:title
    }
    setItemList([...itemList,new_])
    let finalrevert = completeList.filter((final)=> final.id!==id)
    setCompletelist(finalrevert)
}

const addItemToList = () => {
    let newItems={
        id:id+1,
        title:userInput
    }
    setItemList([...itemList, newItems]);
    setUserInput("")
    setId((prev)=>prev+1)
}

let completedremove = (id) => {
    let completedelete = completeList.filter((complete) => complete.id!==id);
    setCompletelist(completedelete)
    console.log(completedelete)
}
let removeItem = (id) => {
    let new_Items_done = itemList.filter((item) =>item.id!==id);
    setItemList(new_Items_done);
}
const completeTask = (item,id) => {
    let completeItems={
        id:id,
        title:item.title
    }
    setCompletelist([...completeList, completeItems]);
    let tobe = itemList.filter((listcomp) => listcomp.id!==id);
    setItemList(tobe);
    
}
const listitems=itemList.map((item,key)=>
              <Item key={key}>
                <Circle onClick={()=>completeTask(item,item.id)}>

                </Circle>
                <Para>
                {item.id}.{item.title} 
                </Para>
                <Del2 onClick={()=>removeItem(item.id)} >
                  <img src={deletesvg}></img>
                </Del2>
              </Item>
              )
              const completedList = completeList.map((item,key) =>
              <CompList key={key}>
              <Circle2>
                <img src={tick}>
                </img>
              </Circle2>
              <Para2>
              {item.id}.{item.title}
              </Para2>
              <Rev>
                <img src={revert} onClick={()=>reverter(item.id,item.title)}></img>
              </Rev>
              <Del><img src={deletesvg} onClick={()=>completedremove(item.id)}></img></Del>
            </CompList>
            )
            return(
  
    <div>
      <Main>
        <Wrapper>
          <Container>
            <Mainhead>
              ToDo List
            </Mainhead>
            <Subhead>
              Things To Be Done
            </Subhead>
            <Listone>
            {listitems}
            </Listone>
            <AddItem type="text" placeholder="Type new task..." value={userInput} onChange={ (e) => setUserInput(e.currentTarget.value)} >
            </AddItem>
            <Addnew  onClick={addItemToList} >Add New
            </Addnew>
            <Subhead>Completed</Subhead>
            <Complitem>
            {completedList}
            </Complitem>
          
          </Container>
        </Wrapper>
      </Main>
    </div>
  );
}

const Main = styled.section`
padding-top : 120px;`
const Wrapper = styled.section`
width : 30%;
margin : 0 auto;`
const Container = styled.section`
Text-align : center;`
const Mainhead = styled.section`
font-size : 48px;
color : Black;
font-weight : Bold;
`
const Subhead = styled.section`
color : #040241;
text-align : left;
font-size : 32px;
font-weight : Bold;
margin-top : 40px`
const Listone = styled.section`
font-size : 20px;
`
const Item = styled.section``
const Circle = styled.section`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  display: inline-block;
  border : 2px solid black;`
const Para = styled.section`
margin : 20px;
display: inline-block;`
const Del = styled.section`
display : inline-block;`
const Del2 = styled.section`
display : inline-block;`

const AddItem = styled.input`
	padding:8px 15px;
	width:200px;
	height:auto;
	overflow:hidden;
	background:white;
	border-radius:5px;
  display : inline-block;
  border-right: hidden;
`
const Addnew = styled.a`
display : inline-block;
padding : 8px 16px;
border-radius : 4px;
background-color : #040241;
color : white;`

const Complitem = styled.section``
const CompList = styled.section``
const Circle2 = styled.section`
height: 25px;
width: 25px;
border-radius: 50%;
display: inline-block;
border : 2px solid #42c592;
`
const Para2 = styled.section`
margin : 20px;
color :#42c592;
display : inline-block;`
const Rev = styled.section`
display : inline-block;
margin : 0 41px 0px 80px;`


export default App;

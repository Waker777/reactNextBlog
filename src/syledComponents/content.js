import style from 'styled-components';

export const Content = style.div`
display: grid;
margin-top: 35px;
`;

export const CreatePost = style.div`
   display:grid;
   width:50%;
   margin-left:auto;
   margin-right:auto;
   box-shadow: 0px 0px 30px black;
   justify-items:center;
    background:rgb(6,6,125,0.7);
    border-radius:10px;
    padding:10px;

 
   
`;
export const ButtonCreate = style.button`
     background:black;
     border-radius:10px;
     border:none;
     color:white;
     width:250px;
     height:50px;
     font-size:20px;
     margin-top:20px;
     cursor:pointer;
     &:active{
       background:blue;
     }
`;
export const InputTitle = style.input`
font-size:17px;
height:50px;
width:100%;
border-radius:10px;
padding: 0 10px;
border:none;
`;

export const InputText = style.textarea`
  width:100%;
  padding:10px;
  resize: none;
  height:150px;
  margin-top:10px;
  border:none;
`;

export const PostCard = style.div`
 display:grid;
 overflow-wrap: anywhere;
 background:rgb(6,6,125,0.7);
 color:white;
 justify-items:center;
 width:50%;
 cursor:pointer;
 margin-left:auto;
 margin-right:auto;
 padding: 0 20px;
 border-radius:10px;
 margin-bottom: 35px;
 border: none;
 text-align: justify;
 box-shadow: 0px 0px 30px black;
 &:last-child{
   margin-bottom:0;
 }
 & p:first-child {
  font-size:20px;
 }
 & hr{
  width: 100%;
 }
`;

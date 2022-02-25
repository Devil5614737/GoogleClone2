import '../styles/home.css';
 
const SearchBox=({children,...props})=>{
return (

   <div {...props} className="inputContainer">
       {children}
   </div>
)
}

export default SearchBox;
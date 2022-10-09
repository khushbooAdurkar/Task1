
import './App.css';
const books=[
  {
    id:1,
  img:"https://m.media-amazon.com/images/I/410llGwMZGL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
  title:"The Alchemist",
  author:"Paulo Coelho",
  link:"#"
},
{
  id:2,
  img:"https://m.media-amazon.com/images/I/51QnuLIY2uL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
  title:"The Power of Your Subconscious Mind",
  author:"Joseph Murphy",
  link:"#"
},
{
  id:3,
  img:"https://m.media-amazon.com/images/I/51PJyvcfPGL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
  title:"Life's Amazing Secrets",
  author:"Gaur Gopal Das",
  link:"#"
}
]
function App(){
  return(
    <section className="booklist">
      <h1 className='header'>Amazon Books</h1>
      {books.map((book)=>{
        // return <Book key={book.id} {...book} ></Book>
        return <Book book={book} key={book.id}></Book>
      })}
      
    </section>
  )
}

const Book =(props)=>{
  //const {id,img,title,author}=props;
  const {id,img,title,author,link}=props.book;
  return (
    
    <article className="book">
      <img src={img}/>
      <h5 id='title'>{title}</h5>
      <p id='author'>{author}</p>
      <a href={link}>Buy Book</a>
    </article>
    
  );
}
export default App;

// import { useState } from "react";

// interface PaginatedProps{
//     booksPerPage:number
// }

// function PaginatedBooks({ booksPerPage }:PaginatedProps) {
//     // Here we use item offsets; we could also use page offsets
//     // following the API or data you're working with.
//     const [itemOffset, setItemOffset] = useState(0);
  
//     // Simulate fetching books from another resources.
//     // (This could be books from props; or books loaded in a local state
//     // from an API endpoint with useEffect and useState)
//     const endOffset = itemOffset + booksPerPage;
//     console.log(`Loading books from ${itemOffset} to ${endOffset}`);
//     const currentBooks = books.slice(itemOffset, endOffset);
//     const pageCount = Math.ceil(books.length / booksPerPage);
  
//     // Invoke when user click to request another page.
//     const handlePageClick = (event:any) => {
//       const newOffset = (event.selected * booksPerPage) % books.length;
//       console.log(
//         `User requested page number ${event.selected}, which is offset ${newOffset}`
//       );
//       setItemOffset(newOffset);
//     };
// }
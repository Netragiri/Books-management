import { useContext, useEffect, useState } from "react";
import { BookContext } from "../Context/BookContext";
import { BookAddValues } from "../../types/global";

export const useDashboard = () => {
  const [currentItems, setCurrentItems] = useState<any>(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [limit, setLimit] = useState(10);
  const { bookList }: any = useContext(BookContext);
  const [order, setOrder] = useState("");
  const [selectedGenre, setSelectedGenre] = useState<string>("");
  const [allbooks, setAllBooks] = bookList;

  // useEffect(() => {
  //   const endOffset = itemOffset + limit;
  //   setCurrentItems(allbooks.slice(itemOffset, endOffset));
  //   setPageCount(Math.ceil(allbooks.length / limit));
  // }, [itemOffset, limit, allbooks]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * limit) % allbooks.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    if (currentItems?.length === 0) {
      setItemOffset(0);
    }
  }, [currentItems]);

  const sortHandler = () => {
    if (order === "asc") {
      setOrder("desc");
    } else if (order === "desc") {
      setOrder("");
    } else if (!order) {
      setOrder("asc");
    }
  };

  useEffect(() => {
    if (order === "asc") {
      const sortedAsc = [...allbooks].sort(
        (a: { year: number }, b: { year: number }) => a.year - b.year
      );
      setAllBooks(sortedAsc);
    } else if (order === "desc") {
      const sortedAsc = [...allbooks].sort(
        (a: { year: number }, b: { year: number }) => b.year - a.year
      );
      setAllBooks(sortedAsc);
    } else {
      setAllBooks(allbooks);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [order]);

  useEffect(() => {
    let filteredBooks = [];
    if (selectedGenre) {
      filteredBooks = allbooks.filter(
        (i: BookAddValues) => i.genre === selectedGenre
      );
    } else {
      filteredBooks = allbooks;
    }
    setCurrentItems(filteredBooks.slice(itemOffset, itemOffset + limit));
    setPageCount(Math.ceil(filteredBooks.length / limit));
  }, [selectedGenre, allbooks, itemOffset, limit]);

  return {
    setLimit,
    setSelectedGenre,
    currentItems,
    order,
    sortHandler,
    pageCount,
    limit,
    handlePageClick,
  };
};

import { useSelector } from "react-redux";
import { PaginationStyle } from "./style";
import { IStore } from "../../store";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export const Pagination = () => {
  const { totalOfPages, page } = useSelector((state: IStore) => state.filters);

  const [pages, setPages] = useState<number[]>([1]);

  const dispatch = useDispatch();

  useEffect(() => {
    const pages = [];
    if (page < 3) {
      if (totalOfPages <= 5) {
        for (let i = 1; i <= totalOfPages; i++) {
          pages.push(i);
        }
      } else {
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
      }
      setPages(pages);
    } else if (totalOfPages - page < 2) {
      if (totalOfPages - 4 <= 0) {
        for (let i = totalOfPages; i > 0; i--) {
          pages.push(i);
        }
      } else {
        for (let i = totalOfPages; i >= totalOfPages - 4; i--) {
          pages.push(i);
        }
      }
      pages.reverse();
      setPages(pages);
    } else {
      for (let i = page - 2; i <= page + 2; i++) {
        pages.push(i);
      }
      setPages(pages);
    }
  }, [totalOfPages, page]);

  return (
    <PaginationStyle>
      {pages.map((elem: number) => (
        <button
          className={page === elem ? "actualPage" : ""}
          onClick={() => dispatch({ type: "page", page: elem })}
        >
          {elem}
        </button>
      ))}
    </PaginationStyle>
  );
};

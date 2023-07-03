import React from "react";

interface PaginationProps {
  totalCount: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  maxVisiblePages: number;
}

const PaginationComponent: React.FC<PaginationProps> = ({
  totalCount,
  pageSize,
  currentPage,
  onPageChange,
  maxVisiblePages,
}) => {
  const totalPages = Math.ceil(totalCount / pageSize);

  const handlePageChange = (page: number) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  const renderPaginationItems = () => {
    const paginationItems = [];

    let startPage = 1;
    let endPage = Math.min(maxVisiblePages, totalPages);

    if (currentPage > Math.floor(maxVisiblePages / 2)) {
      startPage = currentPage - Math.floor(maxVisiblePages / 2);
      endPage = startPage + maxVisiblePages - 1;

      if (endPage > totalPages) {
        endPage = totalPages;
        startPage = endPage - maxVisiblePages + 1;
      }
    }

    if (startPage > 1) {
      paginationItems.push(
        <li
          key="previous"
          className="bg-white text-accent border rounded-md px-3 py-1 cursor-pointer"
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Prev
        </li>
      );
    }

    for (let i = startPage; i <= endPage; i++) {
      paginationItems.push(
        <li
          key={i}
          className={`${
            i === currentPage ? "bg-accent text-white" : "bg-white text-accent"
          } border rounded-md px-3 py-1 cursor-pointer`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </li>
      );
    }

    if (endPage < totalPages) {
      paginationItems.push(
        <li
          key="next"
          className="bg-white text-accent border rounded-md px-3 py-1 cursor-pointer"
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </li>
      );
    }

    return paginationItems;
  };

  return (
    <div className="flex justify-center">
      <ul className="flex space-x-2">{renderPaginationItems()}</ul>
    </div>
  );
};

export default PaginationComponent;

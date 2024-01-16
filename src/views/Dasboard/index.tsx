import Select from "react-select";
import { Button, Col, Container, Row } from "react-bootstrap";
import { genreTypesBooks, pagePerLimitArray } from "../../Shared/Constant";
import ReactPaginate from "react-paginate";
import Books from "../Books";
import { Link, useNavigate } from "react-router-dom";
import { useDashboard } from "../../Shared/Hooks/useDashboard";

function Dashboard() {
  const navigate = useNavigate();
  const {
    setLimit,
    setSelectedGenre,
    currentItems,
    order,
    sortHandler,
    pageCount,
    limit,
    handlePageClick,
  } = useDashboard();

  return (
    <>
      <Container fluid="md" className="pt-3">
        <Row>
          <Col xs={12} sm={2}>
            <Select
              options={pagePerLimitArray}
              onChange={(e: any) => setLimit(e?.value)}
              placeholder="Select Page Size"
              defaultValue={{ value: 10, label: "10" }}
            />
          </Col>
          <Col xs={12} sm={5}></Col>
          <Col xs={12} sm={5} className="d-flex justify-content-end">
            <Select
              options={genreTypesBooks}
              onChange={(e: any) => setSelectedGenre(e?.value)}
              placeholder="Genre"
              isClearable
            />
            <Button className="ms-3" onClick={() => navigate("/add-book")}>
              Add book
            </Button>
          </Col>
        </Row>
        {currentItems?.length > 0 ? (
          <>
            <Books
              books={currentItems}
              order={order}
              sortHandler={sortHandler}
            />
            <ReactPaginate
              breakLabel="..."
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={limit}
              pageCount={pageCount}
              previousLabel="<"
              containerClassName="pagination justify-content-center"
              activeClassName="active"
              pageLinkClassName="page-link"
              previousLinkClassName="page-link"
              nextLinkClassName="page-link"
              breakLinkClassName="page-link"
            />
          </>
        ) : (
          <p className="text-center mt-4 fw-bold">
            No books available <Link to="/add-book">Click here</Link> to add
          </p>
        )}
      </Container>
    </>
  );
}

export default Dashboard;

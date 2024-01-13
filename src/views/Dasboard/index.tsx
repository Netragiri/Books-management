import { useContext, useEffect, useState } from "react"
import Select from 'react-select'
import { Button, Col, Container, Row, Table } from "react-bootstrap"
import { pagePerLimitArray } from "../../Shared/constant"
import ReactPaginate from "react-paginate"
import Books from "../Books"
import { Link, useNavigate } from "react-router-dom"
import { BookContext } from "../../Shared/Context/BookContext"

function Dashboard() {
  const navigate = useNavigate()
  const [currentItems, setCurrentItems] = useState<any>(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [limit, setLimit] = useState(10)
  const { bookList }: any = useContext(BookContext)
  const [allbooks] = bookList

  useEffect(() => {
    const endOffset = itemOffset + limit;
    setCurrentItems(allbooks.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(allbooks.length / limit));
  }, [itemOffset, limit, allbooks]);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = event.selected * limit % allbooks.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Container fluid="md" className="pt-3">
        <Row>
          <Col xs={12} sm={4}>
            <Select options={pagePerLimitArray} onChange={(e: any) => setLimit(e?.value)} placeholder="Select Page Size" defaultValue={{ value: 10, label: '10' }} />
          </Col>
          <Col xs={12} sm={4}></Col>
          <Col xs={12} sm={4} className="text-end"><Button onClick={() => navigate("/add-book")}>Add book</Button></Col>
        </Row>
        {allbooks?.length > 0 ? <>
          <Table striped bordered hover className="mt-3">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Author</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <Books books={currentItems} />
          </Table>
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={limit}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
            containerClassName="pagination justify-content-center"
            activeClassName="active"
            pageLinkClassName="page-link"
            previousLinkClassName="page-link"
            nextLinkClassName="page-link"
            breakLinkClassName="page-link"
          />
        </> : <p className="text-center mt-4 fw-bold">No books available {" "}
          <Link to="/add-book">Click here</Link> to add
        </p>}
      </Container>
    </>
  )
}

export default Dashboard

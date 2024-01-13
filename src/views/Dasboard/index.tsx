import { useEffect, useState } from "react"
import Select from 'react-select'
import { Button, Col, Container, Row, Table } from "react-bootstrap"
import { BOOKS, pagePerLimitArray } from "../../Shared/constant"
import ReactPaginate from "react-paginate"
import Books from "../Books"

function Dashboard() {
  const [currentItems, setCurrentItems] = useState<any>(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [limit, setLimit] = useState(10)

  useEffect(() => {
    const endOffset = itemOffset + limit;
    setCurrentItems(BOOKS.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(BOOKS.length / limit));
  }, [itemOffset, limit]);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = event.selected * limit % BOOKS.length;
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
          <Col xs={12} sm={4} className="text-end"><Button>Add book</Button></Col>
        </Row>
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
      </Container>
    </>
  )
}

export default Dashboard

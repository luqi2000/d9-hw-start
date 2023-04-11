import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { useSelector } from "react-redux";
import { searchCompany } from "../redux/actions";

const CompanySearchResults = () => {
  const jobs = useSelector(state => state.search.content);
  searchCompany();

  return (
    <Container>
      <Row>
        <Col>
          {jobs.map(jobData => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;

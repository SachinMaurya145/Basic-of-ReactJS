import Card from 'react-bootstrap/Card';

function BoostrapTesting({ data, newArray, children }) {
  let { dataValue } = data // descrureing -- img 

  console.log("children props --  ", children);
  console.log("COMMING props --  ", data);
  console.log("dataValue DAT A", dataValue.age)
  // console.log("COMMING DAT A", dataValue.kkkur)

  return (
    <>
      {[
        'Primary',
        'Dark',].map((variant) => (
          <Card
            bg={variant.toLowerCase()}
            key={variant}
            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
            style={{ width: '18rem' }}
            className="mb-2"
          >
            <Card.Header>{ }</Card.Header>
            <Card.Body>
              <Card.Title>{variant} Card Title </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
    </>
  );
}

export default BoostrapTesting;
import React, { useEffect, useState } from 'react';
import { Accordion, Card } from 'react-bootstrap';
import mockData from '../../mocks/data';
import '../../scss/transactions.scss';

const Transactions = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
            const res = await fetch(`${process.env.REACT_APP_PATH_SERVICE}/api/transactions`);
            const data = await res.json();
            
            setData(data);
        };

        fetchProduct();
    }, []);
    
    return (
        <Accordion defaultActiveKey="0">
            {data.map(item => 
                <Card key={item.id}>
                    <Accordion.Toggle as={Card.Header} eventKey={item.id} className={"transaction transaction-" + item.type}>
                        {"$" + item.amount + " - " + item.type}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={item.id}>
            <Card.Body>Product: <strong>{item.description}</strong></Card.Body>
                    </Accordion.Collapse>
                </Card>
            )}
        </Accordion>
    )
}

export default Transactions;
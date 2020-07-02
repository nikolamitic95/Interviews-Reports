import React from 'react';
import styles from './Search.module.css';

import { Form, FormControl, Row, Col } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

const Search = ({ searchedCandidates }) => {

    const onSearch = (e) => {
        searchedCandidates(e.target.value)
    }

    return (
        <Row className={styles.search}>
            <Col xl='4' lg='4' md='12' sm='12' className={styles.title}><h5>Candidates</h5></Col>
            <Col xl='8' lg='8' md='12' sm='12' className={styles.form}>
                <span>
                    <Form >
                        <FaSearch className={styles.icon} />
                        <FormControl onChange={onSearch} type="text" placeholder="Search Candidates" className={`${styles.input} mr-sm-2 `} />
                    </Form>
                </span>
            </Col>
        </Row>
    )
}

export { Search }
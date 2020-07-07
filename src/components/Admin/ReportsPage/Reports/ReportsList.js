import React from 'react';

import { Report } from './Report'
import { Table } from 'react-bootstrap'


const ReportsList = ({ reports, openModal, modalIsOpen, removeReport }) => {
    return (
        <Table striped bordered hover>
            <thead>
                {reports.map(report => (
                    <Report
                        key={report.reportId}
                        id={report.reportId}
                        phase={report.phase}
                        companyName={report.companyName}
                        candidateName={report.candidateName}
                        interviewDate={report.interviewDate}
                        status={report.status}
                        note={report.note}
                        openModal={openModal}
                        modalIsOpen={modalIsOpen}
                        removeReport={removeReport}
                    />

                ))}
            </thead>

        </Table>
    )
}

export { ReportsList }
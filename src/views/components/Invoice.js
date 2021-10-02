import React from 'react'
import PropTypes from 'prop-types'
import {
  CCard,
  CCardBody,
  CCol,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import logo from '../../logo/logo.jpg'
export class ComponentToPrint extends React.PureComponent {
  render() {
    const data = this.props.cndata
    console.log()
    return (
      <div className="page">
        <div className="page-header">
          {/* <h2>APS Translines</h2> */}
          <img className="page-header-logo" src={logo} alt="APS Translines" />
          <div>
            <h4>EAST SERVICE TO SOUTH SEVICE </h4>
            <h6>Near Ganesh Mandir,Shiroli Phata(p),Kolhapur-416005</h6>
          </div>
          <div>
            <h5>CN No:-</h5>
            <h5>Date:-</h5>
            <h6>TO PAY/PAID</h6>
          </div>
        </div>
        <hr />
        <div className="stake-details">
          <div>
            <div className="stake-top">
              <h6>Lorry NO:-</h6>
              <h6>Owe</h6>
            </div>
            <div>
              <h6>consignor{data.formData.consigneeaddress1}</h6>
              <h6>consignee</h6>
            </div>
          </div>
          <div>
            <h6>Address of Booking Office</h6>
            <h6>from</h6>
            <h6>To</h6>
          </div>
        </div>
        <hr />
        <CCol xs={12}>
          <CCard className="mb-4 invoice-card">
            <CCardBody>
              <CTable className="invoice-table" bordered>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">Sr.No</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Descriptions</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Rate</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Freight Ch</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Freight </CTableHeaderCell>
                    <CTableHeaderCell scope="col">Remarks</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Marsadsadasdadadask</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>@mdo</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                    <CTableDataCell>Jacob</CTableDataCell>
                    <CTableDataCell>Thornton</CTableDataCell>
                    <CTableDataCell>@fat</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">3</CTableHeaderCell>
                    <CTableDataCell>Larry the Bird</CTableDataCell>
                    <CTableDataCell>@twitter</CTableDataCell>
                  </CTableRow>
                </CTableBody>
                <CTableHead>
                  <CTableRow>
                    <CTableDataCell colSpan="3">
                      <h6>Value Rs</h6>
                    </CTableDataCell>
                    <CTableDataCell>Balance </CTableDataCell>
                    <CTableDataCell>Footer</CTableDataCell>
                    <CTableDataCell>Footer</CTableDataCell>
                  </CTableRow>
                </CTableHead>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
        <div className="footer-top">
          <div className="footer-topleft">
            <p>Subject to Kolhapur Jurusdiction</p>

            <p>Leakage and Breakage Carries Not Responsible</p>
            <p>Consignor/Consignee Copy</p>
          </div>
          <div>
            <h6 className="page-sign">For APS Translines</h6>
          </div>
        </div>
      </div>
    )
  }
}
ComponentToPrint.propTypes = {
  cndata: PropTypes.any,
  items: PropTypes.any,
  navigation: PropTypes.any,
}

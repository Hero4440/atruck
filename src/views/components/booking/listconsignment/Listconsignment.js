import React, { useEffect, useState } from 'react'
import { db } from '../../../../firebase'
import CIcon from '@coreui/icons-react'
import {
  CCardHeader,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton,
} from '@coreui/react'
function Listconsignment() {
  const [consignments, setConsignments] = useState([])
  function getconsignments() {
    const getData = db.collection('/Consignment')

    getData.get().then((consignment) => {
      const temp = consignment.docs.map((doc) => doc.data())
      setConsignments(temp)
    })
  }
  useEffect(() => {
    getconsignments()
  }, [])
  const handleDelete = (index) => {}
  return (
    <div>
      <CRow>
        <CCardHeader>Latest Shipments</CCardHeader>
        <CTable striped hover>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">CN no.</CTableHeaderCell>
              <CTableHeaderCell scope="col">Class</CTableHeaderCell>
              <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
              <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
              <CTableHeaderCell scope="col">View Pdf</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {consignments.map((consignment, index) => (
              <CTableRow key={index}>
                <CTableHeaderCell scope="row">{consignment.items.actualweight}</CTableHeaderCell>
                <CTableDataCell>{consignment.details.billno}</CTableDataCell>
                <CTableDataCell>{consignment.details.billno}</CTableDataCell>
                <CTableDataCell>{consignment.details.billno}</CTableDataCell>
                <CTableDataCell>
                  {/* <CButton onClick={() => handleEdit(index)} size="sm" color="info">
                    <CIcon name="cil-pencil" className="me-0" />
                  </CButton> */}
                  <CButton size="sm" color="success">
                    <CIcon
                      name="cil-calculator"
                      onClick={() => handleDelete(index)}
                      className="me-0"
                    />
                  </CButton>
                </CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </CRow>
    </div>
  )
}

export default Listconsignment

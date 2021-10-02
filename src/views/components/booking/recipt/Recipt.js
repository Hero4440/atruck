import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import PropTypes from 'prop-types'

import { CButton } from '@coreui/react'
import { ComponentToPrint } from '../../Invoice'
import { useHistory } from 'react-router-dom'
export default function Recipt({ formData, items, navigation }) {
  const history = useHistory()
  const componentRef = useRef()
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })
  const props = { formData, items }
  const routeChange = () => {
    let path = `/`
    history.push(path)
  }

  return (
    <>
      <div>
        <ComponentToPrint cndata={props} ref={componentRef} />

        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <CButton xs onClick={handlePrint} className="me-md-2" color="primary">
            Print this Recipt
          </CButton>
          <CButton xs onClick={routeChange} className="me-md-2" color="danger">
            Back to Dashboard
          </CButton>
        </div>
      </div>
    </>
  )
}
Recipt.propTypes = {
  formData: PropTypes.any,
  items: PropTypes.any,
  navigation: PropTypes.any,
}

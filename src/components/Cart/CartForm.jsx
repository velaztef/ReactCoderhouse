import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const CartForm = ({clear, finishBuy, setDataForm, dataForm}) => {
  
  const schema = Yup.object().shape({
    fullName: Yup.string()
      .required('Campo requerido')
      .min(5, 'Min 5 caracteres')
      .max(255, 'Max 255 caracteres'),
    email: Yup.string()
      .required('Campo requerido')
      .email('Correo invalido')
      .max(255, 'Max 255 caracteres'),
    phone:Yup.string()
      .required('Ingrese solo números')
      .min(8, 'Min 8 caracteres')
      .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,'El teléfono no es válido'),
    payment:Yup.string()
      .required('Campo requerido'),
  })
  
  return (
    <>
      <Formik
        initialValues={{
          fullName: '',
          email: '',
          phone: '',
          payment: '',
        }}
        validationSchema={schema}
        onSubmit={(e, {resetForm}) => {
          setDataForm({...e});
          finishBuy(dataForm);
          resetForm();
        }}
        >
        {() => (
          <Form>
            <Row className="mb-3">
              <div className="position-relative col-md-4" >
                <label className="form-label" >Nombre y Apellido</label>
                <Field className="form-control"
                  type="text"
                  name="fullName"
                  placeholder="Nombre y Apellido"
                />
                <ErrorMessage
                  name="fullName"
                  component="div"
                  className="field-error text-danger" />
              </div>
              <div className="position-relative col-md-4" >
                <label className="form-label">Email</label>
                <Field className="form-control"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="field-error text-danger" />
              </div>
              <div className="position-relative col-md-4" >
                <label className="form-label">Telefono</label>
                <Field className="form-control"
                  type="text"
                  name="phone"
                  placeholder="Telefono"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="field-error text-danger" />
              </div>
            </Row>
            <Row className="mb-3">
              <Col className="position-relative col-md-4" >
                <label className="form-label">Medio de Pago</label>
                <Field as="select" 
                  className="form-select"
                  name="payment" 
                  defaultValue="Efectivo" 
                  >
                  <option>Elegir medio de pago</option>  
                  <option>Efectivo</option>
                  <option>Tarjeta Débito</option>
                  <option>Tarjeta Crédito</option>
                  <option>Transferencia</option>
                </Field>
                <ErrorMessage
                  name="payment"
                  component="div"
                  className="field-error text-danger" />
              </Col>
            </Row>
            <Button onClick={clear} variant="danger">Vaciar Carrito</Button>{' '}    
            <Button type="submit" variant="success">Terminar Compra</Button>
          </Form>
        )}
      </Formik>    
    </> 
  );
}

export default CartForm;
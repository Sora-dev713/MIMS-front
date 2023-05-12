
import { Table, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Inventario = () => {
    const [productos, setProductos] = useState([]);
    const [productoReal, setProductoReal] = useState(null);
  
    const getProductoReal = async (id) => {
      try {
        const res = await axios.get('http://localhost:8080/inventario/' + id);
        setProductoReal(res.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    const getProductos = async () => {
      try {
        const res = await axios.get('http://localhost:8080/inventario');
        setProductos(res.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    const handleUpdate = async (productoReal) => {
      try {
        let url = 'http://localhost:8080/inventario/' + productoReal.id;
        const res = await axios.put(url, productoReal);
        if (res.status === 200) {
          getProductos();
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    const handleChangeplus = async (producto) => {
      await getProductoReal(producto.id);
      setProductoReal((prevState) => {
        const updatedProductoReal = { ...prevState, cantidad: prevState.cantidad + 1 };
        handleUpdate(updatedProductoReal);
        return updatedProductoReal;
      });
    };
  
    const handleChangeless = async (producto) => {
      await getProductoReal(producto.id);
      setProductoReal((prevState) => {
        const updatedProductoReal = { ...prevState, cantidad: prevState.cantidad - 1 };
        handleUpdate(updatedProductoReal);
        return updatedProductoReal;
      });
    };
  
    useEffect(() => {
      getProductos();
    }, []);
  
    return (
        <Container style={{ marginTop: '50px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '48px' }}>Inventario</h1>
        <Row style={{ marginTop: '20px' }}>
    <Col>
      <Button variant="primary" style={{ marginRight: '10px' }}>Agregar</Button>
      <Button variant="danger">Eliminar</Button>
    </Col>
  </Row>
        <Table bordered hover style={{ marginTop: '20px' }}>
        <thead>
            <tr>
                <th>#</th>
                <th>Local</th>
                <th>Cantidad</th>
                <th>Joya</th>
                <th>Precio</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            {productos.map((producto, index) => (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{producto.local}</td>
                    <td>{producto.cantidad}</td>
                    <td>{producto.joya}</td>
                    <td>{producto.precio}</td>
                    <td>
                        <Button variant='primary' style={{ marginRight: '5px' }} onClick={() => handleChangeplus(producto)}> + </Button>
                        <Button variant='danger' style={{ marginLeft: '5px' }} onClick={() => handleChangeless(producto)}> - </Button>
                    </td>
                </tr>
            ))}

        </tbody>
    </Table>
    </Container>
    );
  };
  
  export default Inventario;

import { Table, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Inventario = () => {
    const [productos, setProductos] = useState([]);
    const [cantidad, setCantidad] = useState(0);
    const [precio, setPrecio] = useState(0);
    const [producto, setProducto] = useState({
        id: null,
        id_joya: null,
        id_locacion: null,
        precio : 0,
        cantidad: 0,
        deleted: false,
        id_tipo_joya: null,
    });

    const getProducto = async (id) => {
        try {
            const res = await axios.get('http://localhost:8080/inventario/' + id);
            setProducto(res.data);
        }
        catch (error) {
            console.log(error);
        }
    }

    const getProductos = async () => {
        try {
            const res = await axios.get('http://localhost:8080/inventario');
            setProductos(res.data);
        }
        catch (error) {
            console.log(error);
        }
    }

    const retrieveReal = async (producto) => {
        try {
            let url = 'http://localhost:8080/inventario/' + producto.id;
            const res = await axios.get(url);
            if(res.status === 200){ 
                setProducto(res.data);
            } 
        }
        catch (error) {
            console.log(error);
        }
    }

    const handleUpdate = async (p) => {
        try {
            let url = 'http://localhost:8080/inventario/' + p.id;
            const res = await axios.put(url, p);
            if (res.status === 200) {
                getProductos();
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    const handleChangeplus = async (id) => {
            p = getProducto(id);
            p.cantidad = p.cantidad + 1;
            handleUpdate(p);
    }

    const handleChangeless = async (id) => {
        p = getProducto(id);
        p.cantidad = p.cantidad - 1;
        handleUpdate(p);
    }

    useEffect(() => {
        getProductos();
    },[]);

    return (
        <Table striped bordered hover size="sm">
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
                            <Button variant='primary' onClick={() => handleChangeplus(producto)}> + </Button>
                            <Button variant='danger' onClick={() => handleChangeless(producto)}> - </Button>
                        </td>
                    </tr>
                ))}

            </tbody>
        </Table>
    );

}
export default Inventario;
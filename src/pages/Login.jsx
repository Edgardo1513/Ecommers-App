import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useForm } from 'react-hook-form';


const Login = () => {

    const { register, handleSubmit } = useForm()

    const submit = data => {
        console.log(data)
    }
    return (
        <div>
            <Form onSubmit={ handleSubmit(submit) } className='p-3' style={{border:"1px solid black"}}>
                <h1>Inicia sesión</h1>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                    Email
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control 
                        type="email"
                        placeholder="Email" 
                        { ...register("email") }
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                    Password
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        { ...register("password") }
                        />
                    </Col>
                </Form.Group>          
                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button type="submit">Sign in</Button>
                    </Col>
                 </Form.Group>

            </Form>
        </div>
    );
};



export default Login;
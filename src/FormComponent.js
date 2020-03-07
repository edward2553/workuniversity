import React , { Fragment }from 'react';
import axios from 'axios';

const FormComponent = ()=>{

   

    return(
        <Fragment>
            <form>
                <div className="form-group">
                    <label>id del vehiculo</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label >Fecha de pedido</label>
                    <input type="Date" className="form-control"/>
                </div>
                <div className="form-group">
                    <label >Cliente</label>
                    <input type="number" className="form-control"/>
                </div>
                <div className="form-group">
                    <label >Precio</label>
                    <input type="number" className="form-control" />
                </div>
                <div className="form-group">
                    <label >Cantidad</label>
                    <input type="number" className="form-control" />
                </div>
                <div className="form-group">
                    <button type="button" className="btn btn-success btn-sm">Enviar datos</button>
                </div>
            </form>
        </Fragment>
    )

}

export default FormComponent;
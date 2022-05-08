import React, { useContext, useRef, useState } from "react";
import { onAdd } from "../controller/controllerForm";
import { onEdit } from "../controller/controllerForm";
import { Store } from "../state/state";

const Form = () => {
  const formRef = useRef(null);
  const {
    dispatch,
    state: { todo },
  } = useContext(Store);
  const item = todo.item;
  const [state, setState] = useState(item);

  return (
    <>
      <form className="form-group " ref={formRef}>
        <div>
          <input
            className="col-md-4"
            type="text"
            name="name"
            placeholder="Agrega una actividad"
            defaultValue={item.name}
            onChange={(event) => {
              setState({ ...state, name: event.target.value });
            }}
          ></input>
        </div>
        <div className="mt-2">
          {item.id && (
            <button
              className="btn btn-primary"
              onClick={async (event) => {
                event.preventDefault();

                await onEdit(state, dispatch, item);

                setState({ name: "" });
                formRef.current.reset();
              }}
            >
              Actualizar tarea
            </button>
          )}
          {!item.id && (
            <button
              className="btn btn-secondary"
              onClick={async (event) => {
                event.preventDefault();

                await onAdd(state, dispatch, item);

                setState({ name: "" });
                formRef.current.reset();
              }}
            >
              Crear tarea
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default Form;

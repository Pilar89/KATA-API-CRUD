import React, { useContext, useEffect } from "react";
import { Store } from "../state/state";

import {
  initTodos,
  onDelete,
  onEdit,
  onChange,
} from "../controller/controllerList";

const List = () => {
  const {
    dispatch,
    state: { todo },
  } = useContext(Store);
  const currentList = todo.list;

  useEffect(() => {
    initTodos(dispatch);
  }, [dispatch]);

  const decorationDone = {
    textDecoration: "line-through",
  };

  return (
    <div>
      <table className="table table-striped mt-5 text-center">
        <thead>
          <tr>
            <td>ID</td>
            <td>Tarea</td>
            <td>┬┐Completado?</td>
          </tr>
        </thead>
        <tbody>
          {currentList.map((todo) => {
            return (
              <tr key={todo.id} style={todo.completed ? decorationDone : {}}>
                <td>{todo.id}</td>
                <td>{todo.name}</td>
                <td>
                  <input
                    type="checkbox"
                    defaultChecked={todo.completed}
                    onChange={(event) => onChange(event, todo, dispatch)}
                  ></input>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => onDelete(todo.id, dispatch)}
                  >
                    Eliminar
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => onEdit(todo, dispatch)}
                  >
                    Editar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default List;

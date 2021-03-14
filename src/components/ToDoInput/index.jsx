import React, { useContext } from "react";
import styles from "./ToDoInput.module.scss";
import TasksContext from "../../contexts/TasksContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import INPUT_SCHEMA from "../../common/validationSchema";
import ErrMsg from "../ErrMsg";
import _ from "lodash";

const ToDoInput = () => {
  const [tasks, setTasks] = useContext(TasksContext);
  

  const handleBtnClick = (inputValue) => {
    const newTasks = _.cloneDeep(tasks);
    newTasks.newTask(inputValue);
    setTasks(newTasks);
  };

  const onSubmit = (values, formikBag) => {
    formikBag.resetForm();
    handleBtnClick(values.input);
  };

  return (
    <div>
      <Formik
        initialValues={{ input: "" }}
        onSubmit={onSubmit}
        validationSchema={INPUT_SCHEMA}
      >
        <Form>
          <label>
            <Field type="text" name="input" />
            <ErrorMessage
              name="input"
              children={(msg) => <ErrMsg msg={msg} />}
            />
          </label>
          <button type="submit">+</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ToDoInput;

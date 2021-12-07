import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../src/form.css";

const initialValues = {
  nameSurname: "",
  email: "",
  gender: "",
};

const userValidationSchema = Yup.object().shape({
  nameSurname: Yup.string().required("Pole wymagane"),
  email: Yup.string()
    .required("Pole wymagane")
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Wpisany email nie jest poprawny"
    ),
});

export const FormikForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={userValidationSchema}
      onSubmit={(values) => console.log(values)}
    >
      {(props) => {
        return (
          <Form>
            <div>
              <label htmlFor="nameSurname">Imię i Nazwisko</label>
              <Field
                type="text"
                id="nameSurname"
                className="form-control"
                value={props.values.nameSurname}
              />
              <ErrorMessage name="nameSurname">
                {(msg) => <div className="text-danger">{msg}</div>}
              </ErrorMessage>
            </div>
            <div>
              <label htmlFor="email">E-mail</label>
              <Field
                type="text"
                id="email"
                className="form-control"
                value={props.values.email}
              />

              <ErrorMessage name="email" className="text-danger">
                {(msg) => <div className="text-danger">{msg}</div>}
              </ErrorMessage>
            </div>
            <div>
              <label htmlFor="gender" className="form-check-label">
                Płeć
              </label>
              <div className="radio-wrapper form-check">
                <div>
                  <Field
                    type="radio"
                    name="gender"
                    value="M"
                    className="form-check-input"
                  />
                  M
                </div>
                <div>
                  <Field
                    type="radio"
                    name="gender"
                    value="K"
                    className="form-check-input"
                  />
                  K
                </div>
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              Wyślij!
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

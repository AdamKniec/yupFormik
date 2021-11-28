import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// 1. Dodanie podstawowego markupu
// 2. Initial values w console.logu
// 2a.  Pokazanie formularza przed dodaniem values i po
// 3 yup + validation schema

const initialValues = {
  nameSurname: "",
  email: "",
  gender: "",
};

const userValidationSchema = Yup.object().shape({
  nameSurname: Yup.string().required("Pole wymagane"),
  email: Yup.string()
    .required("wpisuj email")
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "niepoprawny email"
    ),
});

export const FormikForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={() => alert("Formularz wysłany!")}
      validationSchema={userValidationSchema}
    >
      {(values) => {
        console.log(values);
        return (
          <Form>
            <div>
              <label htmlFor="nameSurname">Imię i Nazwisko</label>
              <Field type="text" id="nameSurname" value={values.nameSurname} />
              <ErrorMessage name="nameSurname" />
            </div>
            <div>
              <label htmlFor="email">E-mail</label>
              <Field type="text" id="email" value={values.email} />
              <ErrorMessage name="email" />
            </div>
            <div>
              <label htmlFor="gender">Płeć</label>
              <Field type="radio" name="gender" value="M" />M
              <Field type="radio" name="gender" value="K" />K
            </div>

            <button type="submit">SEND!</button>
          </Form>
        );
      }}
    </Formik>
  );
};


import './App.css';
import { Field, Formik,Form, ErrorMessage } from 'formik';
import * as yup from 'yup'

function App() {
const defaultValue = {
  Username :"",
  Email  : "",
  Password : "",
  ConfirmPassword : ""
}
const validationSchema = yup.object().shape({
  Username : yup.string().required("Please Enter an Username"),
  Email : yup.string().email('Invalid email format').required("Please enter valid Email"),
  Password : yup.string().required("Please enter valid Password").min(6).matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  ConfirmPassword: yup
  .string()
  .required()
  .oneOf([yup.ref("Password"), null], "Passwords must match")
})

const handleSubmit=(values)=>{
  console.log( "VALUES",values)
}

  return (
    <Formik 
    initialValues={defaultValue}
    validationSchema = {validationSchema}
    onSubmit={handleSubmit}
    >
      <Form>
    <div className="container ">         
    <div  className='form p-10 '>
      <h1 className='text-3xl text-center'>Login Form</h1>
          <label className='text-2xl '>Username</label>
          <br/>
          <div className='field'>
          <Field
            type="text"
            name="Username"
            placeholder="Username"
           
           />
           <p className=' text-red-400 text-center'><ErrorMessage name='Username'/></p>
        </div>

         <br/>
          <label className='text-2xl'>Email</label>
          <br/>
          <div className='field'>  
          <Field 
            type="text"
            name="Email"
            placeholder="Email"
           
          />
            <p className=' text-red-400 text-center'><ErrorMessage name='Email'/></p>
          </div>

          <br/>
          <label className='text-2xl'>Password</label>
          <br/>
          <div className='field'>
          <Field
            type="text"
            name="Password"
            placeholder="Password"
           
           
          />
            <p className='mt-3 text-red-400 text-center'><ErrorMessage name='Password'/></p>
         </div>

          <br/>
          <label className='text-2xl '> Confirm Password</label>
          <br/>
          <div className='field'>
          <Field 
            type="text"
            name="ConfirmPassword"
            placeholder="Confrim Password"
            
          />
            <p className=' text-red-400 text-center'><ErrorMessage name='ConfirmPassword'/></p>
          </div>  
         <br/>    
        <button className=' bg-gray-500 ' type='submit'>Login</button>
       
      
    </div>
  </div> 
  </Form>
  </Formik>
  );
}

export default App;

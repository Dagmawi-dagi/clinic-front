// for handling errors that are not operational
export const global_error_handler = (err)=>{
  if( err.message === 'Network Error' ) window.alert(err.message)
    ///......incude other errors as needed
}
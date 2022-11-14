const getData = async () => {
    try {
      const data = await fetch(`http://localhost:3000/estudiantes/`);
      const res = await data.json();
    //   console.log(data)
      return res;
    } catch (error) {
      return Error(error);
    }
  };
  
  const Error = (error) => `<p>Error:${error}</p>`;
  
  export default getData;
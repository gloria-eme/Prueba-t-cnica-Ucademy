const NewStudent = () => {
    const [name, setName] = useState('');
    const [lastname, setLastName] = useState('');
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const navigate = useNavigate();
  
    const createUser = (ev) => {
      ev.preventDefault();
      const newUser = {
        name: name,
        lastname: lastname,
        user: user,
        email: email,
        mobile: mobile,
        id: mobile,
      };
      postNewUser(newUser);
    };
  
    const refreshPage = () => {
      window.location.reload(false);
    };
  
    const postNewUser = async (item) => {
      axios({
        method: 'post',
        url: 'http://localhost:3000/estudiantes',
        data: item,
      });
    };
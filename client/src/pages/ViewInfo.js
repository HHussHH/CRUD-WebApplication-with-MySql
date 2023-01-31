import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const initialState = {
  name: "",
  email: "",
  contact: "",
};
const ViewInfo = () => {
  const { id } = useParams();
  const history = useNavigate();

  const [state, setState] = useState(initialState);

  const { name, email, contact } = state;

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/get/${id}`)
      .then((resp) => setState({ ...resp.data[0] }));
  }, [id]);
  return (
    <>
      <div>Person id: {id}</div>
      <div>Person name: {name}</div>
      <div>Person email: {email}</div>
      <div>Person contact:{contact} </div>
      <button
        onClick={() => {
          history("/");
        }}
      >
        Go back
      </button>
    </>
  );
};

export default ViewInfo;

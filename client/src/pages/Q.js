import { React, useState } from "react";
import { Heading, Box, Input } from "@chakra-ui/react";
import { ADD_RESPONSE } from "../mutations/responseMutations";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

function Q() {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    name: "",
    yesno: "",
    day: "",
    location: "",
    venue: "",
  });
  const [addResponse, { error }] = useMutation(ADD_RESPONSE);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addResponse({
        variables: { ...formState },
      });
    } catch (e) {
      console.error(e);
    }

    setFormState({
      name: "",
      yesno: "",
      day: "",
      location: "",
      venue: "",
    });

    console.log(formState);

    if (!error) {
      navigate("/results");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div>
      <Box>
        <form onSubmit={handleSubmit}>
          <Heading>Name</Heading>
          <Input type="text" name="name" placeholder="Name" />
          <Heading>Would you attend a graduation party?</Heading>
          <select name="yesno" value={formState.yesno} onChange={handleChange}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <Heading>Which day would you prefer?</Heading>
          <select name="day" value={formState.day} onChange={handleChange}>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>
          <Heading>Which borough is most convenient for you?</Heading>
          <select
            name="location"
            value={formState.location}
            onChange={handleChange}
          >
            <option value="Manhattan">Manhattan</option>
            <option value="Brooklyn">Brooklyn</option>
            <option value="Queens">Queens</option>
            <option value="Bronx">Bronx</option>
            <option value="Staten Island">Staten Island</option>
          </select>
          <Heading>Suggest a venue (optional)</Heading>
          <Input
            type="text"
            name="venue"
            placeholder="Venue"
            value={formState.venue}
            onChange={handleChange}
          />
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </Box>
      {error && <div>Something went wrong...</div>}
    </div>
  );
}

export default Q;

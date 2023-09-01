import {
  Box,
  Container,
  Card,
  Typography,
  Button,
  CardContent,
} from "@mui/material"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import PersonIcon from "@mui/icons-material/Person"
import Diversity3Icon from "@mui/icons-material/Diversity3"
import axios from "axios"

function Chats() {
  const [friends, setFriends] = useState([])

  useEffect(() => {
    const res = axios
      .get("http://localhost:5000/users/friends", { withCredentials: true })
      .then((res) => {
        setFriends(res.data.friends)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <Card
      elevation={3}
      sx={{ maxWidth: "290px", mb: "10px", mt: "20px", borderRadius: "10px" }}
    >
      <CardContent>
        <Typography fontFamily="Phudu" mb="30px" ml="20px">
          Contacts
        </Typography>
        {friends.length === 0 ? (
          <Typography
            display="flex"
            gap="5px"
            alignItems="center"
            mb="20px"
            ml="5px"
          >
            <PersonIcon />
            <h5 className="font-sans cursor-pointer transition duration-300 ease-in-out font-medium hover:text-yellow-600">
              You have no friends
            </h5>
          </Typography>
        ) : (
          friends.map((friend) => (
            <Typography
              display="flex"
              gap="5px"
              alignItems="center"
              mb="20px"
              ml="5px"
            >
              <PersonIcon />
              <h5 className="font-sans cursor-pointer transition duration-300 ease-in-out font-medium hover:text-yellow-600">
                {friend}
              </h5>
            </Typography>
          ))
        )}
      </CardContent>
      {/* <CardContent>
        <Typography fontFamily="Phudu" mb="30px" ml="20px">
          Groups
        </Typography>
        <Typography
          display="flex"
          gap="5px"
          alignItems="center"
          mb="20px"
          ml="5px"
        >
          <Diversity3Icon />
          <h5 className="font-sans transition duration-300 ease-in-out font-medium hover:text-yellow-600">
            PEC Boys
          </h5>
        </Typography>
      </CardContent> */}
    </Card>
  )
}

export default Chats

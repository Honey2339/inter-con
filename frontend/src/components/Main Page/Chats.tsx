import {
  Box,
  Container,
  Card,
  Typography,
  Button,
  CardContent,
} from "@mui/material"
import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import PersonIcon from "@mui/icons-material/Person"
import Diversity3Icon from "@mui/icons-material/Diversity3"

function Chats() {
  return (
    <Card
      elevation={3}
      sx={{ maxWidth: "290px", mb: "10px", mt: "20px", borderRadius: "10px" }}
    >
      <CardContent>
        <Typography fontFamily="Phudu" mb="30px" ml="20px">
          Contacts
        </Typography>
        <Typography
          display="flex"
          gap="5px"
          alignItems="center"
          mb="20px"
          ml="5px"
        >
          <PersonIcon />
          <h5 className="font-sans transition duration-300 ease-in-out font-medium hover:text-yellow-600">
            Abhiraj
          </h5>
        </Typography>
        <Typography
          display="flex"
          gap="5px"
          alignItems="center"
          mb="20px"
          ml="5px"
        >
          <PersonIcon />
          <h5 className="font-sans transition duration-300 ease-in-out font-medium hover:text-yellow-600">
            Soma Aakash
          </h5>
        </Typography>
        <Typography
          display="flex"
          gap="5px"
          alignItems="center"
          mb="20px"
          ml="5px"
        >
          <PersonIcon />
          <h5 className="font-sans transition duration-300 ease-in-out font-medium hover:text-yellow-600">
            Kishore
          </h5>
        </Typography>
        <Typography
          display="flex"
          gap="5px"
          alignItems="center"
          mb="20px"
          ml="5px"
        >
          <PersonIcon />
          <h5 className="font-sans transition duration-300 ease-in-out font-medium hover:text-yellow-600">
            John
          </h5>
        </Typography>
        <Typography
          display="flex"
          gap="5px"
          alignItems="center"
          mb="20px"
          ml="5px"
        >
          <PersonIcon />
          <h5 className="font-sans transition duration-300 ease-in-out font-medium hover:text-yellow-600">
            Michael
          </h5>
        </Typography>
      </CardContent>
      <CardContent>
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
      </CardContent>
    </Card>
  )
}

export default Chats

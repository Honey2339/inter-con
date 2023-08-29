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
import FestivalIcon from "@mui/icons-material/Festival"
import ChatIcon from "@mui/icons-material/Chat"
import VideoCallIcon from "@mui/icons-material/VideoCall"
import SettingsIcon from "@mui/icons-material/Settings"

function Navigator() {
  return (
    <Card
      elevation={3}
      sx={{ maxWidth: "280px", mb: "10px", mt: "20px", borderRadius: "10px" }}
    >
      <CardContent>
        <Typography fontFamily="Phudu" mb="20px" ml="20px">
          Navigate
        </Typography>
        <Typography
          display="flex"
          gap="5px"
          alignItems="center"
          mb="15px"
          ml="5px"
        >
          <FestivalIcon />
          <Link to="/">
            <h5 className="font-sans transition duration-300 ease-in-out font-semibold hover:text-blue-400">
              Home
            </h5>
          </Link>
        </Typography>
        <Typography
          display="flex"
          gap="5px"
          alignItems="center"
          mb="15px"
          ml="5px"
        >
          <ChatIcon />
          <Link to="/">
            <h5 className="font-sans transition duration-300 ease-in-out font-semibold hover:text-blue-400">
              Chat
            </h5>
          </Link>
        </Typography>
        <Typography
          display="flex"
          gap="5px"
          alignItems="center"
          mb="15px"
          ml="5px"
        >
          <VideoCallIcon />
          <Link to="/">
            <h5 className="font-sans transition duration-300 ease-in-out font-semibold hover:text-blue-400">
              Video Call
            </h5>
          </Link>
        </Typography>
        <Typography
          display="flex"
          gap="5px"
          alignItems="center"
          mb="15px"
          ml="5px"
        >
          <SettingsIcon />
          <Link to="/">
            <h5 className="font-sans transition duration-300 ease-in-out font-semibold hover:text-blue-400">
              Settings
            </h5>
          </Link>
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Navigator

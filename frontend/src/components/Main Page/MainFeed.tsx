import {
  Box,
  Container,
  Card,
  Typography,
  Button,
  CardContent,
  Divider,
} from "@mui/material"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import PersonIcon from "@mui/icons-material/Person"
import ThumbUpIcon from "@mui/icons-material/ThumbUp"
import ThumbDownIcon from "@mui/icons-material/ThumbDown"
import ShareIcon from "@mui/icons-material/Share"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import Cookies from "js-cookie"
import axios from "axios"

function MainFeed(props: any) {
  const [options, setOptions] = useState(false)

  const handleOptions = (e: any) => {
    e.preventDefault()
    setOptions(!options)
  }

  const handleAdd = (e: any) => {
    e.preventDefault()
    const loggedUser = Cookies.get("username")
    const ToUser = props.username
    const sendReq = axios
      .post(
        "http://localhost:5000/users/sendrequest",
        { loggedUser, ToUser },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <Card
      elevation={3}
      sx={{ maxWidth: "550px", mb: "10px", mt: "20px", borderRadius: "10px" }}
    >
      <CardContent>
        <Box display="flex" gap="10px" alignItems="center">
          <PersonIcon sx={{ fontSize: "29px" }} />
          <h5 className="font-sans font-medium ml-1">
            {props.username} <div>•</div>
          </h5>
          <div className="ml-80" onClick={handleOptions}>
            <MoreHorizIcon sx={{ cursor: "pointer" }} />
            {options ? (
              <Card elevation={5}>
                <CardContent>
                  <Typography
                    className="hover:text-blue-500 cursor-pointer"
                    onClick={handleAdd}
                  >
                    Add
                  </Typography>
                </CardContent>
              </Card>
            ) : null}
          </div>
        </Box>
        <Box mt="10px" mb="15px">
          <Typography variant="body2" className="text-sm">
            {props.message}
          </Typography>
        </Box>
        <Divider />
        <Box display="flex" gap="10px" alignItems="center">
          <div className="text-blue-400 mt-2">
            <ThumbUpIcon sx={{ ":hover": { cursor: "pointer" } }} />
          </div>
          <div className="text-red-400 mt-2">
            <ThumbDownIcon sx={{ ":hover": { cursor: "pointer" } }} />
          </div>
          <div className="ml-96 mt-2">
            <ShareIcon />
          </div>
        </Box>
      </CardContent>
    </Card>
  )
}

export default MainFeed

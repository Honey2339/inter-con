import {
  Box,
  Container,
  Card,
  Typography,
  Button,
  CardContent,
  Divider,
  TextField,
} from "@mui/material"
import { useEffect, useState } from "react"
import Cookies from "js-cookie"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

function CreatePost() {
  const [message, setMessage] = useState("")

  const user = Cookies.get("username")

  const handlePost = (e: any) => {
    e.preventDefault()
    const res = axios
      .post("http://localhost:5000/users/createpost", {
        message,
      })
      .then((res) => {
        setMessage("")
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
        <Typography variant="h6" gutterBottom>
          Create A Post
        </Typography>
        <h5 className="mb-4">User : {user}</h5>
        <Box display="flex">
          <TextField
            sx={{ width: "450px", mb: "20px" }}
            placeholder="What's on your mind?"
            onChange={(e) => {
              setMessage(e.target.value)
            }}
            value={message}
          />
        </Box>
        <Button variant="contained" className="" onClick={handlePost}>
          Post
        </Button>
      </CardContent>
    </Card>
  )
}

export default CreatePost

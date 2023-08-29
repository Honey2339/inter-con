import { useState } from "react"
import {
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
  Input,
  Button,
  Alert,
  Snackbar,
} from "@mui/material"
import { Link, useNavigate } from "react-router-dom"
import Cookies from "js-cookie"
import axios from "axios"

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [open, setOpen] = useState(false)

  const navigate = useNavigate()

  const handleSumbit = (e: any) => {
    e.preventDefault()
    const res = axios
      .post("http://localhost:5000/users/login", { username, password })
      .then((res) => {
        const token = res.data.token
        setUsername("")
        setPassword("")
        setOpen(true)
        Cookies.set("username", username, { expires: 0.1 })
        Cookies.set("token", token, { expires: 0.1 })
        setTimeout(() => {
          navigate("/page")
        }, 2000)
      })
  }

  return (
    <Box
      height="94vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Card elevation={6} sx={{ bgcolor: "white", width: "400px" }}>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography fontSize="25px" fontFamily="Poppins" fontWeight="600">
            Login
          </Typography>
        </CardContent>
        <Divider />
        <CardContent
          sx={{
            ml: "20px",
            display: "flex",
            flexDirection: "column",
            maxWidth: "250px",
          }}
        >
          <Typography fontSize="17px" fontFamily="Poppins">
            Username :
          </Typography>
          <Input
            type="text"
            placeholder="..."
            sx={{ mb: "20px" }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Typography fontSize="17px" fontFamily="Poppins">
            Password :
          </Typography>
          <Input
            type="password"
            placeholder="..."
            sx={{ mb: "20px" }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            sx={{ width: "90px", mb: "20px" }}
            onClick={handleSumbit}
          >
            Submit
          </Button>
          <Box>
            <Typography gap="6px">
              Dont have an account?
              <Link to="/signup">
                <Typography color="purple">Sign Up</Typography>
              </Link>
            </Typography>
          </Box>
        </CardContent>
      </Card>
      <Box>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={() => {
            setOpen(false)
          }}
        >
          <Alert>Successfully Logged In</Alert>
        </Snackbar>
      </Box>
    </Box>
  )
}

export default Login

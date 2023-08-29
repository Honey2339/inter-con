import {
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
  Input,
  Button,
  Snackbar,
  Alert,
} from "@mui/material"
import { Link } from "react-router-dom"
import axios from "axios"
import { useState } from "react"

function Signup() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [cpassword, setCpassword] = useState("")

  const [open, setOpen] = useState(false)

  const handleSumbit = (e: any) => {
    e.preventDefault()
    if (password !== cpassword) {
      console.log("Password does not match")
    } else if (username == "" && password == "" && cpassword == "") {
      console.log("Cannot put empty strings")
    } else {
      const res = axios
        .post("http://localhost:5000/users/signup", {
          username,
          password,
        })
        .then((res) => {
          setUsername("")
          setPassword("")
          setCpassword("")
          setOpen(true)
          console.log(res.data)
        })
    }
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
            Sign Up
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
            onChange={(e) => setUsername(e.target.value)}
            value={username}
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
          <Typography fontSize="17px" fontFamily="Poppins">
            Confirm Password :
          </Typography>
          <Input
            type="password"
            placeholder="Re-Enter Password..."
            sx={{ mb: "20px" }}
            onChange={(e) => setCpassword(e.target.value)}
            value={cpassword}
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
              Already have an account?{" "}
              <Link to="/login">
                <Typography color="purple">Login</Typography>
              </Link>
            </Typography>
          </Box>
        </CardContent>
      </Card>
      <Box>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={() => setOpen(false)}
        >
          <Alert>Account Created</Alert>
        </Snackbar>
      </Box>
    </Box>
  )
}

export default Signup

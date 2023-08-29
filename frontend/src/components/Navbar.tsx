import { Box, Typography } from "@mui/material"
import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import Cookies from "js-cookie"

function Navbar() {
  const navigate = useNavigate()

  const refresh = Cookies.get("username") && Cookies.get("token")

  const handleSignOut = () => {
    Cookies.remove("token")
    Cookies.remove("username")
    window.location.reload()
  }

  const [username, setUsername] = useState("")

  useEffect(() => {
    const getUser = Cookies.get("username")
    if (!getUser) {
      setUsername("")
    } else if (getUser) {
      setUsername(getUser)
    }
  }, [refresh])

  return (
    <Box p="12px" className="bg-green-300" sx={{ boxShadow: 2 }}>
      <Box ml="20px" display="flex" alignItems="center" gap="50px">
        <Link to="/">
          <Typography
            display="flex"
            fontWeight="700"
            className="text-black"
            gap="3px"
            fontFamily="Phudu"
            fontSize="20px"
          >
            Inter
            <Typography
              className="text-white"
              fontFamily="Phudu"
              fontSize="20px"
              fontWeight="700"
            >
              Con.
            </Typography>
          </Typography>
        </Link>
        {username && username ? (
          <Box position="absolute" right="40px" display="flex" gap="70px">
            <Typography
              fontSize="18px"
              className="register-btn"
              fontFamily="Poppins"
            >
              Hello , {username}
            </Typography>
            <Link to="/page">
              <Typography
                fontSize="18px"
                className="register-btn "
                fontFamily="Poppins"
                sx={{
                  transition: "all 0.2s ease-in-out",
                  ":hover": { color: "white" },
                }}
              >
                Connect
              </Typography>
            </Link>
            <Typography
              fontSize="18px"
              className="register-btn"
              fontFamily="Poppins"
              onClick={handleSignOut}
              sx={{
                cursor: "pointer",
                transition: "all 0.2s ease-in-out",
                ":hover": { color: "crimson", fontWeight: "900" },
              }}
            >
              SignOut
            </Typography>
          </Box>
        ) : (
          <Box>
            <Link to="/signup">
              <Typography
                fontSize="20px"
                className="register-btn"
                fontFamily="Poppins"
                sx={{
                  transition: "all 0.2s ease-in-out",
                  ":hover": { color: "white" },
                }}
              >
                Register
              </Typography>
            </Link>
          </Box>
        )}
        <Box>
          <Link to="/contact">
            <Typography
              fontSize="20px"
              className="register-btn"
              fontFamily="Poppins"
              sx={{
                transition: "all 0.2s ease-in-out",
                ":hover": { color: "white" },
              }}
            >
              Contact
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default Navbar

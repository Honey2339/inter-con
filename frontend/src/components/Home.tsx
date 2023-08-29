import { Box, Container, Card, Typography, Button } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import Cookies from "js-cookie"

function Home() {
  const verify = Cookies.get("token") && Cookies.get("username")
  const navigate = useNavigate()
  useEffect(() => {
    if (verify) {
      navigate("/page")
    }
  }, [])

  return (
    <Box>
      <Box ml="90px" mt="200px">
        <Typography
          variant="h4"
          display="flex"
          fontWeight="600"
          fontFamily="Phudu"
        >
          Inter
          <Typography
            variant="h4"
            fontWeight="600"
            fontFamily="Phudu"
            color="greenyellow"
          >
            Con
          </Typography>
        </Typography>
        <Typography fontFamily="Poppins" maxWidth="500px" mt="20px" mb="20px">
          Inter-Con is a social media application where people can post , update
          and connect with people to have fun and joyful interaction over seas
        </Typography>
        <Link to="/signup">
          <Button
            variant="contained"
            sx={{
              color: "yellowgreen",
              bgcolor: "black",
              fontFamily: "Poppins",
              fontSize: "15px",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                bgcolor: "yellowgreen",
                color: "black",
              },
            }}
          >
            Join Now
          </Button>
        </Link>
      </Box>
    </Box>
  )
}

export default Home

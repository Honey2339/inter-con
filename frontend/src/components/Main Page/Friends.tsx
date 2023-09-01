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
import Cookies from "js-cookie"

function Friends(props: any) {
  const [request, setRequest] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios
        .get("http://localhost:5000/users/allrequest", {
          withCredentials: true,
        })
        .then((res) => {
          setRequest(res.data)
          console.log(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    fetchData()
  }, [])

  const handleAccept = (toUser: any) => {
    const userLogged = Cookies.get("username")
    const accept = axios
      .post(
        "http://localhost:5000/users/accrequest",
        { userLogged, toUser },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data)
        setTimeout(() => {
          window.location.reload()
        }, 500)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <Card
      elevation={3}
      sx={{ maxWidth: "290px", mb: "10px", mt: "20px", borderRadius: "10px" }}
    >
      <CardContent>
        <Typography fontFamily="Phudu" mb="30px" ml="20px">
          Friend Request
        </Typography>
        {request.length === 0 ? (
          <Typography
            display="flex"
            gap="5px"
            alignItems="center"
            mb="20px"
            ml="5px"
            mt="9px"
          >
            <h5 className="font-sans  font-medium">No Friend Request</h5>
          </Typography>
        ) : (
          request &&
          request.map((req) => (
            <Card elevation={3} className="mb-3" key={req}>
              <Typography
                display="flex"
                gap="5px"
                alignItems="center"
                mb="20px"
                ml="5px"
                mt="9px"
              >
                <PersonIcon />
                <h5 className="font-sans  font-medium">{req}</h5>
              </Typography>
              <Typography display="flex" gap="5px" ml="5px" mb="5px">
                <Button
                  size="small"
                  variant="contained"
                  onClick={() => handleAccept(req)}
                >
                  Accept
                </Button>
                <Button size="small" variant="outlined" color="error">
                  Delete
                </Button>
              </Typography>
            </Card>
          ))
        )}
      </CardContent>
    </Card>
  )
}

export default Friends

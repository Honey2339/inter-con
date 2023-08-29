import { Box, Container, Card, Typography, Button } from "@mui/material"
import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import Cookies from "js-cookie"
import Navigator from "./Main Page/Navigator"
import Chats from "./Main Page/Chats"
import NewsFeed from "./Main Page/NewsFeed"
import MainFeed from "./Main Page/MainFeed"
import CreatePost from "./Main Page/CreatePost"

function MainPage() {
  const navigate = useNavigate()
  const verify = Cookies.get("token") && Cookies.get("username")
  useEffect(() => {
    if (!verify) {
      navigate("/")
    }
  }, [])

  return (
    <Box height="94vh" display="flex" justifyContent="space-between">
      <Box width="300px" position="sticky" ml="20px">
        <Navigator />
        <NewsFeed />
      </Box>
      <Box justifyContent="center">
        <CreatePost />
        <MainFeed />
      </Box>
      <Box mr="20px" flex="0 0 280px">
        <Chats />
      </Box>
    </Box>
  )
}

export default MainPage

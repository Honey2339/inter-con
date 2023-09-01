import { Box, Container, Card, Typography, Button } from "@mui/material"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Cookies from "js-cookie"
import Navigator from "./Main Page/Navigator"
import Chats from "./Main Page/Chats"
import NewsFeed from "./Main Page/NewsFeed"
import MainFeed from "./Main Page/MainFeed"
import CreatePost from "./Main Page/CreatePost"
import axios from "axios"
import Friends from "./Main Page/Friends"

interface Chat {
  id: number
  username: string
  message: string
}

function MainPage() {
  const navigate = useNavigate()
  const verify = Cookies.get("token") && Cookies.get("username")
  useEffect(() => {
    if (!verify) {
      navigate("/")
    }
  }, [])
  const [chats, setChats] = useState<Chat[]>([])

  useEffect(() => {
    axios
      .get("http://localhost:5000/users/getpost")
      .then((res) => {
        setChats(res.data.allpost)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <Box height="94vh" display="flex" justifyContent="space-between">
      <Box width="300px" position="sticky" ml="20px">
        <Navigator />
        <NewsFeed />
      </Box>
      <Box justifyContent="center">
        <CreatePost />
        {chats &&
          chats.map((chat) => (
            <MainFeed username={chat.username} message={chat.message} />
          ))}
      </Box>
      <Box mr="20px" flex="0 0 280px">
        <Chats />
        <Friends />
      </Box>
    </Box>
  )
}

export default MainPage

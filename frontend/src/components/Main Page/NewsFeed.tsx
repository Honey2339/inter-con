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
import TvIcon from "@mui/icons-material/Tv"
import LabelIcon from "@mui/icons-material/Label"
import WhatshotIcon from "@mui/icons-material/Whatshot"
import GroupsIcon from "@mui/icons-material/Groups"

function NewsFeed() {
  return (
    <Card
      elevation={3}
      sx={{ maxWidth: "280px", mb: "10px", mt: "20px", borderRadius: "10px" }}
    >
      <CardContent>
        <Typography fontFamily="Phudu" mb="20px" ml="20px">
          News Feed
        </Typography>
        <Typography
          display="flex"
          gap="5px"
          alignItems="center"
          mb="15px"
          ml="5px"
        >
          <div className="bg-blue-400 rounded-full py-2 px-2">
            <TvIcon sx={{ color: "white" }} />
          </div>
          <Link to="/news">
            <h5 className="font-sans transition duration-300 ease-in-out font-semibold hover:text-blue-400">
              Latest News
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
          <div className="bg-orange-400 rounded-full py-2 px-2">
            <LabelIcon sx={{ color: "white" }} />
          </div>
          <Link to="/news">
            <h5 className="font-sans transition duration-300 ease-in-out font-semibold hover:text-blue-400">
              Badges
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
          <div className="bg-red-400 rounded-full py-2 px-2">
            <WhatshotIcon sx={{ color: "white" }} />
          </div>
          <Link to="/news">
            <h5 className="font-sans transition duration-300 ease-in-out font-semibold hover:text-blue-400">
              Trends
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
          <div className="bg-blue-700 rounded-full py-2 px-2">
            <GroupsIcon sx={{ color: "white" }} />
          </div>
          <Link to="/news">
            <h5 className="font-sans transition duration-300 ease-in-out font-semibold hover:text-blue-400">
              Popular Groups
            </h5>
          </Link>
        </Typography>
      </CardContent>
    </Card>
  )
}

export default NewsFeed

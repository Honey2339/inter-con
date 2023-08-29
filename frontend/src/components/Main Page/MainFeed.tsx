import {
  Box,
  Container,
  Card,
  Typography,
  Button,
  CardContent,
  Divider,
} from "@mui/material"
import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import PersonIcon from "@mui/icons-material/Person"
import ThumbUpIcon from "@mui/icons-material/ThumbUp"
import ThumbDownIcon from "@mui/icons-material/ThumbDown"
import ShareIcon from "@mui/icons-material/Share"

function MainFeed() {
  return (
    <Card
      elevation={3}
      sx={{ maxWidth: "550px", mb: "10px", mt: "20px", borderRadius: "10px" }}
    >
      <CardContent>
        <Box display="flex" gap="10px" alignItems="center">
          <PersonIcon sx={{ fontSize: "29px" }} />
          <h5 className="font-sans font-medium ml-1">
            John <div>•</div>
          </h5>
        </Box>
        <Box mt="10px" mb="15px">
          <Typography variant="body2" className="text-sm">
            Im usually high on meth! What about u guys?
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

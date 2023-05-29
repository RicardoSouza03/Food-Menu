import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom"

type Props = {
    id: number,
    name: string,
    description: string,
    thumbImg: string,
    isCategories: boolean,
}

export default function CardComponent (itemInfo: Props) {
    const navigate = useNavigate()

    const redirectTo = () => {
        if (itemInfo.isCategories) {
            const url = "/category/" + itemInfo.name
            return navigate(url)
        }
        const url = "/meal/" + itemInfo.id
        return navigate(url)
    }

    return (
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea  onClick={() => redirectTo()}>
            <CardMedia
              component="img"
              height="140"
              image={itemInfo.thumbImg}
              alt={itemInfo.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {itemInfo.name}
              </Typography>
              <Typography 
                sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: "2",
                    WebkitBoxOrient: "vertical",
                }} 
                variant="body2" 
                color="text.secondary">
                {itemInfo.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      );
}
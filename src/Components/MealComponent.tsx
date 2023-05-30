import { useEffect, useState } from "react"
import { getMealById } from "../utils/ApiRequest";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom"

type Props = {
    id: string,
}

type Meal = {
    dateModified: string | undefined,
    idMeal: string | undefined,
    strArea: string | undefined,
    strCategory: string | undefined,
    strCreativeCommonsConfirmed: string | undefined,
    strDrinkAlternate: string | undefined,
    strImageSource: string | undefined,
    strInstructions: string | undefined,
    strMeal: string | undefined,
    strMealThumb: string | undefined,
    strSource: string | undefined,
    strTags: string | undefined,
    strYoutube: string | undefined,
}

export default function MealComponent(props: Props) {
    const [meal, setMeal] = useState<Meal>()
    const navigate = useNavigate()

    const getMeal = async () => {
        const meal = await getMealById(props.id)
        setMeal(meal)
    }

    const returnToCategory = () => {
        const url = "/category/" + meal?.strCategory
        return navigate(url)
    }

    useEffect(() => {
        getMeal()
    }, [])

    return (
        <Card sx={{ width: "100vh", margin: "auto" }}>
            <IconButton 
                onClick={() => returnToCategory()} 
                aria-label="return" 
                size="small"
                sx={{ position: "fixed", backgroundColor: "white", margin: 0.5 }}
            >
                <ArrowBackIcon />
            </IconButton>
            <CardMedia
                component="img"
                height="450vh"
                image={meal?.strMealThumb}
                alt={meal?.strMeal}
            />
            <CardContent>
                <Typography 
                    sx={{
                        display: "flex",
                        flexFlow: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderBottom: 1,
                    }}
                    gutterBottom
                    variant="h5"
                    component="div"
                >
                    {meal?.strMeal}
                    <Typography
                        sx={{
                            marginBottom: 2,
                            maxWidth: "80vh",
                            padding: 1,
                            border: "1px solid black",
                            borderRadius: 1.5
                        }}
                        component="div"
                    >
                        Category: {meal?.strCategory}
                        <br />
                        From: {meal?.strArea}
                        <Typography color="InactiveBorder">
                            Tags: {meal?.strTags}
                        </Typography>
                    </Typography>
                </Typography>
                <Typography sx={{ fontSize: 20, marginBottom: 3, borderBottom: 1 }} variant="body1" color="text.primary">
                    {meal?.strInstructions}
                    <Typography color="InactiveBorder">
                        Source: {meal?.strSource}
                    </Typography>
                </Typography>
                <CardMedia
                    component="iframe"
                    title="Tutorial"
                    src={"https://www.youtube-nocookie.com/embed/" + meal?.strYoutube?.split('=')[1]}
                    height="500vh"
                />
            </CardContent>
        </Card>
    )
    
}

import { useParams } from "react-router-dom";
import MealComponent from "../Components/MealComponent";
import Grid from "@mui/material/Grid"

export default function MealPage() {
    const { mealId } = useParams()

    return (
        <Grid container padding={1.5}>
            <MealComponent id={mealId as string}/>
        </Grid>
    )
}
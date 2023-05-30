import { useParams } from "react-router-dom";
import MealComponent from "../Components/MealComponent";
import Grid from "@mui/material/Grid"
import NavigationSpeedDial from "../Components/NavigationComponent";

export default function MealPage() {
    const { mealId } = useParams()

    return (
        <Grid container padding={1.5}>
            <MealComponent id={mealId as string}/>
            <NavigationSpeedDial />
        </Grid>
    )
}
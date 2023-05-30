import GalleryComponent from "../Components/GalleryComponent";
import { useParams } from "react-router-dom";
import { getByCategory } from "../utils/ApiRequest";
import Grid from "@mui/material/Grid"
import NavigationSpeedDial from "../Components/NavigationComponent";

export default function ByCatergory() {
    const { categoryName } = useParams()

    const handler = () => {
        return getByCategory(categoryName as string)
    }

    return (
    <Grid container sx={{ padding: 5 }}>
        <GalleryComponent fetch={handler} isCategories={false}/>
        <NavigationSpeedDial />
    </Grid>
    )
}
import GalleryComponent from '../Components/GalleryComponent'
import { getCategories } from "../utils/ApiRequest";
import Grid from "@mui/material/Grid"

export default function AllCategories () {
  return (
    <Grid container sx={{ padding: 5 }}>
      <GalleryComponent fetch={getCategories} isCategories={true}/>
    </Grid>
  )
}


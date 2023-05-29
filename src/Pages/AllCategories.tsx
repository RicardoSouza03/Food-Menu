import GalleryComponent from '../Components/GalleryComponent'
import { getCategories } from "../utils/ApiRequest";

export default function AllCategories () {
  return (
    <GalleryComponent fetch={getCategories} isCategories={true}/>
  )
}


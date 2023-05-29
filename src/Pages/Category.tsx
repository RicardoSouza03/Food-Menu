import GalleryComponent from "../Components/GalleryComponent";
import { useParams } from "react-router-dom";
import { getByCategory } from "../utils/ApiRequest";

export default function ByCatergory() {
    const { categoryName } = useParams()

    const handler = () => {
        return getByCategory(categoryName as string)
    }

    return (
        <GalleryComponent fetch={handler} isCategories={false}/>
    )
}
import { useParams } from "react-router-dom";
import MealComponent from "../Components/MealComponent";

export default function MealPage() {
    const { mealId } = useParams()

    return (
        <MealComponent id={mealId as string}/>
    )
}
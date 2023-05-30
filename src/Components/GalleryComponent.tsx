import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import CardComponent from "./CardComponent";

type Props = {
    fetch: Function,
    isCategories: boolean,
}

export default function GalleryComponent(props: Props) {
    const [items, setItems] = useState([])

    const getItems = async () => {
        const items = await props.fetch()
        setItems(items)
    }

    useEffect(() => {
        getItems()
    }, [])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ md: 1.5 }} columns={{ xs: 4, sm: 2, md: 20 }}>
                {items.map((item) => (
                    <Grid item xs={2} sm={4} md={4} key={item['idCategory'] || item['idMeal']}>
                            <CardComponent
                                id={item['idCategory'] || item['idMeal']}
                                description={item['strCategoryDescription'] || null}
                                name={item['strCategory'] || item['strMeal']}
                                thumbImg={item['strCategoryThumb'] || item['strMealThumb']}
                                isCategories={props.isCategories}
                            />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
    
}

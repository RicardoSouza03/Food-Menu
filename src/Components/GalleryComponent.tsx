import { useEffect, useState } from "react";
import Grid from '@mui/material/Grid'
import CardComponent from "./CardComponent";
import Box from '@mui/material/Box';

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
            <Grid container spacing={{ md: 1.5, xs: 1.5 }} columns={{ xs: 1, sm: 2, md: 20 }}>
                {items.map((item) => (
                    <Grid item xs={1} sm={1} md={4} key={item['idCategory'] || item['idMeal']}>
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

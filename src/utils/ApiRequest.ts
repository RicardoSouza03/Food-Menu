export async function getCategories () {
    const url = "https://themealdb.com/api/json/v1/1/categories.php";
    const request = await fetch(url);
    const { categories } = await request.json();

    return categories;
}

export async function getByCategory(category: string) {
    const url = `https://themealdb.com/api/json/v1/1/filter.php?c=${category}`;
    const request = await fetch(url);
    const { meals } = await request.json();

    return meals;
}

export async function getMealById(id: string) {
    const url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    const request = await fetch(url);
    const { meals } = await request.json();

    return meals[0];
}
export type Food = {
    id: string;
    name: string;
}

export type RandomList = {
    id: string,
    name: string,
    created_at: Date,
    items: Food[]
}


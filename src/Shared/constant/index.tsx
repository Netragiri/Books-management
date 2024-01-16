export interface BookInterface {
    id?: number | string;
    name: string;
    author: string;
    year: string;
    genre?: string
}

export const BOOKS: BookInterface[] = [
    {
        name: "The wolf",
        author: "Albert wig",
        year: "2011",
        genre: "fiction",
        id: "1"
    },
    {
        name: "The Skyscrapper",
        author: "John boush",
        year: "1997",
        genre: "novel",
        id: "2"
    },
    {
        name: "Harry Potter",
        author: "Charles",
        year: "2000",
        genre: "thriller",
        id: "3"
    },
    {
        name: "The Art of Ignored",
        author: "Eithen less",
        year: "1992",
        genre: "mystry",
        id: "4"
    }, {
        name: "Atomic Habits",
        author: "Willson rock",
        year: "2009",
        genre: "mystry",
        id: "5"
    }
];

export const pagePerLimitArray = [
    { value: 10, label: '10' },
    { value: 20, label: '20' },
    { value: 30, label: '30' }
]

export const genreTypesBooks: { value?: string; label?: string }[] = [
    { value: "fiction", label: 'Fiction' },
    { value: "novel", label: 'Novel' },
    { value: "mystry", label: 'Mystry' },
    { value: "thriller", label: 'Thriller' },
]


export const TITLES = {
    book: {
        add: "Add Book",
        edit: "Update Book"
    }
}

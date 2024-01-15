export interface BookInterface {
    id?: number | string;
    name: string;
    author: string;
    year: string;
    genre: string
}

export const BOOKS: BookInterface[] = [
    {
        id: 1,
        name: "Book1",
        author: "Andrew",
        year:"2001",
        genre:"Story"
    },
    {
        id: 2,
        name: "Book2",
        author: "Bob",
        year:"2001",
        genre:"Story"
    },
    {
        id: 3,
        name: "Book3",
        author: "Charlie",
        year:"2001",
        genre:"Story"
    },
    {
        id: 4,
        name: "Book3",
        author: "Charlie",
        year:"2001",
        genre:"Story"
    }, {
        id: 5,
        name: "Book3",
        author: "Charlie",
        year:"2001",
        genre:"Story"
    }, {
        id: 6,
        name: "Book3",
        author: "Charlie",
        year:"2001",
        genre:"Story"
    }, {
        id: 7,
        name: "Book3",
        author: "Charlie",
        year:"2001",
        genre:"Story"
    }, {
        id: 8,
        name: "Book3",
        author: "Charlie",
        year:"2001",
        genre:"Story"
    }, {
        id: 9,
        name: "Book3",
        author: "Charlie",
        year:"2001",
        genre:"Story"
    }, {
        id: 10,
        name: "Book3",
        author: "Charlie",
        year:"2001",
        genre:"Story"
    }
];

export const pagePerLimitArray = [
    { value: 10, label: '10' },
    { value: 20, label: '20' },
    { value: 30, label: '30' }
  ]


  export const TITLES = {
    book:{
        add: "Add Book",
        edit: "Update Book"
    }
  }

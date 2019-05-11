# graphbooks 📗📓📒
A simple book collections using Awesome Graphql on the server and client side 😀

## Features 
- [x] Adding a new book
- [x] Adding new authors
- [x] Getting all books by an author
- [x] view book details
- [x] Viewing all books

## Tech Stack
- Node
- Express
- HTML5 & CSS
- React
- Graphql

## Graphql endpoints
- Getting a book :

```
{
     book(id: "") { name,
                    genre,
                    author{ name,
                            age,
                            books{ name,
                                   genre
                                 }
                          }
                    }
}
```

- Getting all books :

```
{
     books{ name,
            genre,
            author{ name,
                    age,
                    books{ name,
                           genre
                         }
                   }
          }
}
```

- Getting all authors :

```
{
     authors{ name,
              age,
              books{ name,
                     genre,
                   }
             }
}
```



import { http, graphql, HttpResponse } from 'msw'

export const handlers = [
  http.get('https://api.example.com/user', () => {
    const headers = new Headers()
    headers.append('Content-Type', 'application/json');
    return new Response(JSON.stringify({
      firstName: 'John',
      lastName: 'Maverick',
    }), {headers, status: 200, statusText: 'OK'})
  }),
  graphql.query('ListMovies', () => {
    return HttpResponse.json({
      data: {
        movies: [
          {
            title: 'The Lord of The Rings',
          },
          {
            title: 'The Matrix',
          },
          {
            title: 'Star Wars: The Empire Strikes Back',
          },
        ],
      },
    })
  }),
]

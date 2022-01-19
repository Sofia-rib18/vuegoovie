import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: localStorage.users ? JSON.parse(localStorage.users) : [
      {
        username: 'Admin',
        password: 'Esmad_2122',
        type: 'admin'
      },
      {
        username: 'User',
        password: 'Esmad_2122',
        type: 'regular',
        location: 'pt',
        points: 70
      },
      {
        username: 'User1',
        password: 'Esmad_2122',
        type: 'regular',
        location: 'fr',
        points: 60
      },
      {
        username: 'User2',
        password: 'Esmad_2122',
        type: 'regular',
        location: 'it',
        points: 50
      },
    ],
    loggedUser: null,
    films: localStorage.films ? JSON.parse(localStorage.films) : [
      {
        id: 1,
        title: '007: No Time to Die',
        year: 2021,
        time: '2h 43m',
        poster: 'https://m.media-amazon.com/images/M/MV5BYWQ2NzQ1NjktMzNkNS00MGY1LTgwMmMtYTllYTI5YzNmMmE0XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg',
        trailer: 'https://www.youtube.com/watch?v=vw2FOYjCz38',
        imdbScore: '7.4',
        genre: ['Action', 'Adventure', 'Thriller'],
        sipnose: 'James Bond has left active service. His peace is short-lived when Felix Leiter, an old friend from the CIA, turns up asking for help, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.',
        director: 'Cary Joji Fukunaga',
        actors: [{
          name: 'Daniel Craig',
          photo: 'https://m.media-amazon.com/images/M/MV5BMjEzMjk4NDU4MF5BMl5BanBnXkFtZTcwMDMyNjQzMg@@._V1_UY1200_CR88,0,630,1200_AL_.jpg'
        }, {
          name: 'Rami Malek',
          photo: 'https://m.media-amazon.com/images/M/MV5BODA3OTM4ODU0MV5BMl5BanBnXkFtZTgwNjQ5Njg3NjM@._V1_UY1200_CR88,0,630,1200_AL_.jpg'
        }, {
          name: 'Léa Seydoux',
          photo: 'https://m.media-amazon.com/images/M/MV5BMjM3MTczNzY1MF5BMl5BanBnXkFtZTgwNjgwODgzNDE@._V1_.jpg'
        }, {
          name: 'Lashana Lynch',
          photo: 'https://m.media-amazon.com/images/M/MV5BMjI0ZGE0ZTYtYmY1MS00MGU0LWEwMDQtMzYxMDFmMmFjZjUyXkEyXkFqcGdeQXVyMzczOTY5ODk@._V1_.jpg'
        }, {
          name: 'Ben Whishaw',
          photo: 'https://m.media-amazon.com/images/M/MV5BMTc1MDYzNzY4MF5BMl5BanBnXkFtZTcwMDcwNzU0OA@@._V1_.jpg'
        }, {
          name: 'Naomie Harris',
          photo: 'https://m.media-amazon.com/images/M/MV5BMTUyMDU1MTU2N15BMl5BanBnXkFtZTgwODkyNzQ3MDE@._V1_UY1200_CR84,0,630,1200_AL_.jpg'
        }, {
          name: 'Jeffrey Wright',
          photo: 'https://m.media-amazon.com/images/M/MV5BMTg0ODMzMzIyN15BMl5BanBnXkFtZTcwMTQxNTI4Mw@@._V1_.jpg'
        }, {
          name: 'Christoph Waltz',
          photo: 'https://m.media-amazon.com/images/M/MV5BOTA5OTcyMTU2Nl5BMl5BanBnXkFtZTcwMjA4MTMyMw@@._V1_.jpg'
        }, {
          name: 'Ralph Fiennes',
          photo: 'https://m.media-amazon.com/images/M/MV5BMzc5MjE1NDgyN15BMl5BanBnXkFtZTcwNzg2ODgwNA@@._V1_UY264_CR12,0,178,264_AL_.jpg'
        }, {
          name: 'Ana de Armas',
          photo: 'https://m.media-amazon.com/images/M/MV5BMWM3MDMzNjMtODM5Ny00YmY0LWJhNzQtNTE1ZDNlNjllNDQ0XkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_UY1200_CR585,0,630,1200_AL_.jpg'
        }, {
          name: 'Billy Magnussen',
          photo: 'https://m.media-amazon.com/images/M/MV5BMTg0MjA0Nzc4MF5BMl5BanBnXkFtZTcwNDU3NTE2Mw@@._V1_.jpg'
        }, {
          name: 'Rory Kinnear',
          photo: 'https://m.media-amazon.com/images/M/MV5BMTQwOTMwMDM5OV5BMl5BanBnXkFtZTcwODQ1MDExOA@@._V1_.jpg'
        }, {
          name: 'David Dencik',
          photo: 'https://m.media-amazon.com/images/M/MV5BMjI4OTExNTg3NF5BMl5BanBnXkFtZTgwNzE2NzQ4ODE@._V1_.jpg'
        },],
        whereWatch: 'Amazon',
      },
      {
        id: 2,
        title: 'Dune',
        year: 2021,
        time: '2h 35m',
        poster: 'https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg',
        trailer: 'https://www.youtube.com/watch?v=n9xhJrPXop4',
        imdbScore: '8.2',
        genre: ['Action', 'Adventure', 'Drama'],
        sipnose: "Feature adaptation of Frank Herbert's science fiction novel about the son of a noble family entrusted with the protection of the most valuable asset and most vital element in the galaxy.",
        director: 'Denis Villeneuve',
        actors: [{
          name: 'Timothée Chalamet',
          photo: 'https://m.media-amazon.com/images/M/MV5BOWU1Nzg0M2ItYjEzMi00ODliLThkODAtNGEyYzRkZTBmMmEzXkEyXkFqcGdeQXVyNDk2Mzk2NDg@._V1_.jpg'
        }, {
          name: 'Rebecca Ferguson',
          photo: 'https://m.media-amazon.com/images/M/MV5BNzA4NDA1MTA5NV5BMl5BanBnXkFtZTcwNjMyNTQ3OA@@._V1_.jpg'
        }, {
          name: 'Zendaya',
          photo: 'https://m.media-amazon.com/images/M/MV5BMjAxZTk4NDAtYjI3Mi00OTk3LTg0NDEtNWFlNzE5NDM5MWM1XkEyXkFqcGdeQXVyOTI3MjYwOQ@@._V1_.jpg'
        }, {
          name: 'Oscar Isaac',
          photo: 'https://m.media-amazon.com/images/M/MV5BMTQ2ODE2NDQ5OF5BMl5BanBnXkFtZTcwOTU3OTM1OQ@@._V1_.jpg'
        }, {
          name: 'Jason Momoa',
          photo: 'https://m.media-amazon.com/images/M/MV5BODJlNWQ4ZjUtYjRhNi00NGQ1LWE3YTItYjRmZGI3YzI4YTEyXkEyXkFqcGdeQXVyMTA2MDIzMDE5._V1_UY264_CR109,0,178,264_AL_.jpg'
        }, {
          name: 'Stellan Skarsgård',
          photo: 'https://m.media-amazon.com/images/M/MV5BMTg4NDUzOTY0N15BMl5BanBnXkFtZTYwNjYxODE0._V1_.jpg'
        }, {
          name: 'Josh Brolin',
          photo: 'https://m.media-amazon.com/images/M/MV5BMTQ1MzYyMjQ0Nl5BMl5BanBnXkFtZTcwMTA0ODkyMg@@._V1_.jpg'
        }, {
          name: 'Javier Bardem',
          photo: 'https://m.media-amazon.com/images/M/MV5BMTY1NTc4NTYzMF5BMl5BanBnXkFtZTcwNDIwOTY1NA@@._V1_UY1200_CR86,0,630,1200_AL_.jpg'
        }, {
          name: 'Dave Bautista',
          photo: 'https://m.media-amazon.com/images/M/MV5BNTZkYzU0ZGUtZTk1MC00MzJjLWFmMzItY2M0ODY1ZmI2OGQ0XkEyXkFqcGdeQXVyMjI0MjgwNjc@._V1_UY264_CR146,0,178,264_AL_.jpg'
        }, {
          name: '	Charlotte Rampling',
          photo: 'https://m.media-amazon.com/images/M/MV5BMTU0MTgyMjIzMF5BMl5BanBnXkFtZTcwOTc3NTA0Nw@@._V1_UY1200_CR85,0,630,1200_AL_.jpg'
        },],
        whereWatch: 'Amazon',
      }, {
        id: 3,
        title: 'Knives Out',
        year: 2019,
        time: '2h 10m',
        poster: 'https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_.jpg',
        trailer: 'https://www.youtube.com/watch?v=xi-1NchUqMA',
        imdbScore: '7.9',
        genre: ['Comedy', 'Crime', 'Drama'],
        sipnose: "A detective investigates the death of a patriarch of an eccentric, combative family.",
        director: 'Denis Villeneuve',
        actors: [{
          name: 'Daniel Craig',
          photo: 'https://m.media-amazon.com/images/M/MV5BMjEzMjk4NDU4MF5BMl5BanBnXkFtZTcwMDMyNjQzMg@@._V1_UY1200_CR88,0,630,1200_AL_.jpg'
        }, {
          name: 'Ana de Armas',
          photo: 'https://m.media-amazon.com/images/M/MV5BMWM3MDMzNjMtODM5Ny00YmY0LWJhNzQtNTE1ZDNlNjllNDQ0XkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_UY1200_CR585,0,630,1200_AL_.jpg'
        }, {
          name: 'Chris Evas',
          photo: 'https://m.media-amazon.com/images/M/MV5BMTU2NTg1OTQzMF5BMl5BanBnXkFtZTcwNjIyMjkyMg@@._V1_UY1200_CR112,0,630,1200_AL_.jpg'
        }, {
          name: 'Jamie Lee Curtis',
          photo: 'https://m.media-amazon.com/images/M/MV5BMjI0MTI0MDk2OV5BMl5BanBnXkFtZTgwODQ4MTE0NDE@._V1_UY1200_CR136,0,630,1200_AL_.jpg'
        }, {
          name: 'Michael Shannon',
          photo: 'https://m.media-amazon.com/images/M/MV5BMjE0NzM5MTc5OF5BMl5BanBnXkFtZTgwMjc3ODYxODE@._V1_.jpg',
        }, {
          name: 'Don Johson',
          photo: 'https://m.media-amazon.com/images/M/MV5BMTg4ODYwOTU0N15BMl5BanBnXkFtZTgwNjc5NDM2MTE@._V1_UY1200_CR154,0,630,1200_AL_.jpg'
        }, {
          name: 'Toni Collette',
          photo: 'https://m.media-amazon.com/images/M/MV5BODYzOTE3ODc1Ml5BMl5BanBnXkFtZTgwODYwMjE4NTM@._V1_UY1200_CR156,0,630,1200_AL_.jpg'
        }, {
          name: 'LaKeith Stanfield',
          photo: 'https://m.media-amazon.com/images/M/MV5BMTU3NTg3MTc5NV5BMl5BanBnXkFtZTgwNzUzMzg1MzI@._V1_.jpg'
        }, {
          name: 'Christopher Plummer',
          photo: 'https://m.media-amazon.com/images/M/MV5BMTU5MzQ5MDY3NF5BMl5BanBnXkFtZTcwNzMxOTU5Ng@@._V1_.jpg'
        }, {
          name: 'Katherine Langford',
          photo: 'https://m.media-amazon.com/images/M/MV5BMTA0ODU1OTE5NTNeQTJeQWpwZ15BbWU4MDUwMzg2NDQz._V1_UY1200_CR84,0,630,1200_AL_.jpg'
        }, {
          name: 'Jaeden Martell',
          photo: 'https://m.media-amazon.com/images/M/MV5BYmNkZjgwZmYtNzNjOC00ZGUxLTgzMmQtYWU0NDQyNmE4NWM5XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg'
        }, {
          name: 'Riki Lindhome',
          photo: 'https://m.media-amazon.com/images/M/MV5BMTAxNzM1NTkxOTleQTJeQWpwZ15BbWU3MDUwNDU2MjE@._V1_UY1200_CR113,0,630,1200_AL_.jpg'
        }, {
          name: 'Edi Patterson',
          photo: 'https://m.media-amazon.com/images/M/MV5BZDQ4ODc5YTAtMDhiOC00NWM0LWEwY2EtNTI1Y2JjOGZjZGU1XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_UY1200_CR85,0,630,1200_AL_.jpg'
        }, {
          name: 'Frank Oz',
          photo: 'https://m.media-amazon.com/images/M/MV5BMTI1NTM4ODA0OV5BMl5BanBnXkFtZTYwODMxMjQ0._V1_UY1200_CR117,0,630,1200_AL_.jpg'
        }, {
          name: 'K Callan',
          photo: 'https://m.media-amazon.com/images/M/MV5BZDliYjk2YjAtMzU5Yi00M2Q1LWJjZGQtNjkzOGM4MDM0MWEzXkEyXkFqcGdeQXVyMDc0NzUzNA@@._V1_.jpg'
        }, {
          name: 'Noah Segan',
          photo: 'https://m.media-amazon.com/images/M/MV5BMTQ5NTE2ODI1OV5BMl5BanBnXkFtZTcwNjYzOTk0Ng@@._V1_.jpg'
        }, {
          name: 'M. Emmet Walsh',
          photo: 'https://m.media-amazon.com/images/M/MV5BMTYxNjgyNzgwMl5BMl5BanBnXkFtZTcwODA2MTM0OA@@._V1_UY1200_CR145,0,630,1200_AL_.jpg'
        }, {
          name: 'Marlene Forte',
          photo: 'https://m.media-amazon.com/images/M/MV5BMjE5NTkyNDUyOF5BMl5BanBnXkFtZTgwODE2MDcyMDI@._V1_.jpg'
        },],
        whereWatch: 'Amazon',
      },
    ],
    series: localStorage.series ? JSON.parse(localStorage.series) : [
      {
        id: 1,
        title: 'Friends',
        year: '1994 - 2004',
        time: '22m',
        seasons: 10,
        poster: 'https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg',
        trailer: 'https://www.youtube.com/watch?v=hDNNmeeJs1Q',
        imdbScore: '8.8',
        genre: ['Comedy', 'Romance'],
        sipnose: 'Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.',
        director: 'David Crane',
        actors: [{
          name: 'Jennifer Anniston',
          photo: 'https://m.media-amazon.com/images/M/MV5BNjk1MjIxNjUxNF5BMl5BanBnXkFtZTcwODk2NzM4Mg@@._V1_UY1200_CR103,0,630,1200_AL_.jpg'
        }, {
          name: 'Courteney Cox',
          photo: 'https://m.media-amazon.com/images/M/MV5BMTA4OTczNDExNDNeQTJeQWpwZ15BbWU3MDUyNTIzMTM@._V1_.jpg'
        }, {
          name: 'Lisa Kudrow',
          photo: 'https://m.media-amazon.com/images/M/MV5BMTU5OTA0ODcxNl5BMl5BanBnXkFtZTcwMjE3NjQxMw@@._V1_UY264_CR7,0,178,264_AL_.jpg'
        }, {
          name: 'Matt LeBlanc',
          photo: 'https://m.media-amazon.com/images/M/MV5BODQ0NTI0OTk0M15BMl5BanBnXkFtZTcwMDk2MDg5Nw@@._V1_UY1200_CR54,0,630,1200_AL_.jpg'
        }, {
          name: 'Matthew Perry',
          photo: 'https://m.media-amazon.com/images/M/MV5BMTMwODc5NjI3N15BMl5BanBnXkFtZTcwNDEyMTE3Mw@@._V1_UY1200_CR156,0,630,1200_AL_.jpg'
        }, {
          name: 'David Schwimmer',
          photo: 'https://m.media-amazon.com/images/M/MV5BMTQ2Mjg5ODIzNF5BMl5BanBnXkFtZTgwNjIwMjI0ODE@._V1_.jpg'
        }, {
          name: 'James Michael Tyler',
          photo: 'https://m.media-amazon.com/images/M/MV5BODE5NGEyZjktMGRlNy00OTNjLWE1NDYtMzJkYWI5MmM3YWY2XkEyXkFqcGdeQXVyNTc2ODgwNw@@._V1_UY1200_CR85,0,630,1200_AL_.jpg'
        }, {
          name: 'Maggie Wheeler',
          photo: 'https://m.media-amazon.com/images/M/MV5BMTA5NjA1NDM4NDFeQTJeQWpwZ15BbWU3MDM2Mjk5MDQ@._V1_UY1200_CR124,0,630,1200_AL_.jpg'
        }, {
          name: 'Paul Rudd',
          photo: 'https://m.media-amazon.com/images/M/MV5BMTY4NTEwNDg1MV5BMl5BanBnXkFtZTgwODMwMDA0ODE@._V1_.jpg'
        },],
        whereWatch: 'HBO',
      },
      {
        id: 2,
        title: 'Bad and Crazy',
        year: '2021 -',
        time: '1h 10m',
        seasons: 1,
        poster: 'https://m.media-amazon.com/images/M/MV5BMWEzZWRjNjUtYWFjYS00MjNjLWE0MzMtNWI3YmEyZjc4OWUzXkEyXkFqcGdeQXVyMTMxMTgyMzU4._V1_.jpg',
        trailer: 'https://www.youtube.com/watch?v=vLOQkT2B_rk',
        imdbScore: '8.7',
        genre: ['Action', 'Crime', 'Fantasy'],
        sipnose: 'A mystery drama in which detectives with different personalities solve various cases.',
        director: 'Seon-dong Yoo',
        actors: [{
          name: 'Lee Dong-Wook',
          photo: 'https://m.media-amazon.com/images/M/MV5BYTc1ZTA1YmItMTIwZS00ZDczLTk1NzEtMTE4OWNkNzE5MzQyXkEyXkFqcGdeQXVyMjMxNTAxNDk@._V1_.jpg'
        }, {
          name: 'Han Ji-Eun',
          photo: 'https://m.media-amazon.com/images/M/MV5BNGFjYjQyZGMtOWNkMC00ZWM3LWFhNjgtYWFlYWJjOGM4ZDU1XkEyXkFqcGdeQXVyNDY5MjMyNTg@._V1_UY1200_CR85,0,630,1200_AL_.jpg'
        }, {
          name: 'Cha Hak-yeon',
          photo: 'https://1739752386.rsc.cdn77.org/data/images/full/246914/cha-hak-yeon.jpg'
        }, {
          name: 'Wi Ha-Joon',
          photo: 'https://i.mydramalist.com/xzdP0_5f.jpg'
        },],
        whereWatch: 'iQIYI',
      },
      {
        id: 3,
        title: 'WandaVision',
        year: '2021',
        time: '38m',
        seasons: 1,
        poster: 'https://m.media-amazon.com/images/M/MV5BZGEwYmMwZmMtMTQ3MS00YWNhLWEwMmQtZTU5YTIwZmJjZGQ0XkEyXkFqcGdeQXVyMTI5MzA5MjA1._V1_FMjpg_UX1000_.jpg',
        trailer: 'https://www.youtube.com/watch?v=sj9J2ecsSpo',
        imdbScore: '8.0',
        genre: ['Comedy', 'Action', 'Drama'],
        sipnose: 'Blends the style of classic sitcoms with the MCU, in which Wanda Maximoff and Vision - two super-powered beings living their ideal suburban lives - begin to suspect that everything is not as it seems.',
        director: 'Matt Shakman',
        actors: [{
          name: 'Elizabeth Olsen',
          photo: 'https://m.media-amazon.com/images/M/MV5BMjEzMjA0ODk1OF5BMl5BanBnXkFtZTcwMTA4ODM3OQ@@._V1_.jpg'
        }, {
          name: 'Paul Bettany',
          photo: 'https://m.media-amazon.com/images/M/MV5BNjUzMDIzNjkxMl5BMl5BanBnXkFtZTgwNjgyNzA0MjI@._V1_UY1200_CR585,0,630,1200_AL_.jpg'
        }, {
          name: 'Kathryn Hahn',
          photo: 'https://m.media-amazon.com/images/M/MV5BMjE1OTcxNDczMl5BMl5BanBnXkFtZTcwMDA1NDcyMQ@@._V1_.jpg'
        }, {
          name: 'Teyonah Parris',
          photo: 'https://m.media-amazon.com/images/M/MV5BMjIzNzc4MTg3NF5BMl5BanBnXkFtZTgwMDE4ODM0NTE@._V1_UY264_CR43,0,178,264_AL_.jpg'
        }, {
          name: 'Kat Dennings',
          photo: 'https://m.media-amazon.com/images/M/MV5BMTQ0NjU4MDU1Nl5BMl5BanBnXkFtZTYwMjQ5Mjk1._V1_.jpg'
        }, {
          name: 'Evan Peters',
          photo: 'https://m.media-amazon.com/images/M/MV5BMjA2NDg2ODYwMV5BMl5BanBnXkFtZTgwNTE4MzQyNzE@._V1_UY1200_CR89,0,630,1200_AL_.jpg'
        }, {
          name: 'Randall Park',
          photo: 'https://m.media-amazon.com/images/M/MV5BY2ViZjE4ZmItM2M5NC00NTI4LWI3YjEtZjk4ZWU5ODZkZThjXkEyXkFqcGdeQXVyMzQ5MjIzMA@@._V1_UY1200_CR85,0,630,1200_AL_.jpg'
        }, {
          name: 'Josh Stamberg',
          photo: 'https://m.media-amazon.com/images/M/MV5BNTE3ODE3MTAwOF5BMl5BanBnXkFtZTgwMDM4MzMwNzE@._V1_UY1200_CR84,0,630,1200_AL_.jpg'
        }, {
          name: 'Julian Hilliard',
          photo: 'https://m.media-amazon.com/images/M/MV5BMjYyMDA3NzUtMmIxNS00OTg4LTk4Y2EtZmRhM2IwZTVjN2Q5XkEyXkFqcGdeQXVyODA4MTYwMjc@._V1_UX178_CR0,0,178,264_AL_.jpg'
        }, {
          name: 'Jett Klyne',
          photo: 'https://m.media-amazon.com/images/M/MV5BYzYzODZmMWMtNGEzZS00YTk5LWI1MDEtNzUyZjFlOTBiMjdiXkEyXkFqcGdeQXVyNTg3OTIyNzc@._V1_UY1200_CR85,0,630,1200_AL_.jpg'
        }, {
          name: 'Asif Ali',
          photo: 'https://m.media-amazon.com/images/M/MV5BM2MxYWFhYjEtZjliNi00ZjQwLTk5ZDUtOGI5MzhjYWQ1NzVhXkEyXkFqcGdeQXVyMTk4ODcyMTM@._V1_UY264_CR39,0,178,264_AL_.jpg'
        },],
        whereWatch: 'Disney +',
      },
    ],
    countries: localStorage.countries ? JSON.parse(localStorage.countries) : [
      {value: "af", text: "Afghanistan"},
      {value: "al", text: "Albania"},
      {value: "dz", text: "Algeria"},
      {value: "as", text: "American Samoa"},
      {value: "ad", text: "Andorra"},
      {value: "ao", text: "Angola"},
      {value: "ai", text: "Anguilla"},
      {value: "aq", text: "Antarctica"},
      {value: "ag", text: "Antigua and Barbuda"},
      {value: "ar", text: "Argentina"},
      {value: "am", text: "Armenia"},
      {value: "aw", text: "Aruba"},
      {value: "au", text: "Australia"},
      {value: "at", text: "Austria"},
      {value: "az", text: "Azerbaijan"},
      {value: "bs", text: "Bahamas"},
      {value: "bh", text: "Bahrain"},
      {value: "bd", text: "Bangladesh"},
      {value: "bb", text: "Barbados"},
      {value: "by", text: "Belarus"},
      {value: "be", text: "Belgium"},
      {value: "bz", text: "Belize"},
      {value: "bj", text: "Benin"},
      {value: "bm", text: "Bermuda"},
      {value: "bt", text: "Bhutan"},
      {value: "bo", text: "Bolivia"},
      {value: "bq", text: "Bonaire, Sint Eustatius and Saba"},
      {value: "ba", text: "Bosnia and Herzegovina"},
      {value: "bw", text: "Botswana"},
      {value: "bv", text: "Bouvet Island"},
      {value: "br", text: "Brazil"},
      {value: "io", text: "British Indian Ocean Territory"},
      {value: "bn", text: "Brunei Darussalam"},
      {value: "bg", text: "Bulgaria"},
      {value: "bf", text: "Burkina Faso"},
      {value: "bi", text: "Burundi"},
      {value: "cv", text: "Cabo Verde"},
      {value: "kh", text: "Cambodia"},
      {value: "cm", text: "Cameroon"},
      {value: "ca", text: "Canada"},
      {value: "ky", text: "Cayman Islands"},
      {value: "cf", text: "Central African Republic"},
      {value: "td", text: "Chad"},
      {value: "cl", text: "Chile"},
      {value: "cn", text: "China"},
      {value: "cx", text: "Christmas Island"},
      {value: "co", text: "Colombia"},
      {value: "km", text: "Comoros"},
      {value: "cd", text: "Congo (the Democratic Republic of the)"},
      {value: "cg", text: "Congo"},
      {value: "ck", text: "Cook Islands"},
      {value: "cr", text: "Costa Rica"},
      {value: "hr", text: "Croatia"},
      {value: "cu", text: "Cuba"},
      {value: "cw", text: "Curaçao"},
      {value: "cy", text: "Cyprus"},
      {value: "cz", text: "Czechia"},
      {value: "ci", text: "Côte d'Ivoire"},
      {value: "dk", text: "Denmark"},
      {value: "dj", text: "Djibouti"},
      {value: "dm", text: "Dominica"},
      {value: "do", text: "Dominican Republic"},
      {value: "ec", text: "Ecuador"},
      {value: "eg", text: "Egypt"},
      {value: "sv", text: "El Salvador"},
      {value: "gq", text: "Equatorial Guinea"},
      {value: "er", text: "Eritrea"},
      {value: "ee", text: "Estonia"},
      {value: "sz", text: "Eswatini"},
      {value: "et", text: "Ethiopia"},
      {value: "fk", text: "Falkland Islands [Malvinas]"},
      {value: "fo", text: "Faroe Islands"},
      {value: "fj", text: "Fiji"},
      {value: "fi", text: "Finland"},
      {value: "fr", text: "France"},
      {value: "gf", text: "French Guiana"},
      {value: "pf", text: "French Polynesia"},
      {value: "tf", text: "French Southern Territories"},
      {value: "ga", text: "Gabon"},
      {value: "gm", text: "Gambia"},
      {value: "ge", text: "Georgia"},
      {value: "de", text: "Germany"},
      {value: "gh", text: "Ghana"},
      {value: "gi", text: "Gibraltar"},
      {value: "gr", text: "Greenland"},
      {value: "gl", text: "Congo"},
      {value: "gd", text: "Grenada"},
      {value: "gp", text: "Guadeloupe"},
      {value: "gu", text: "Guam"},
      {value: "gt", text: "Guatemala"},
      {value: "gg", text: "Guernsey"},
      {value: "gn", text: "Guinea"},
      {value: "gw", text: "Guinea-Bissau"},
      {value: "gy", text: "Guyana"},
      {value: "ht", text: "Haiti"},
      {value: "hm", text: "Heard Island and McDonald Islands"},
      {value: "va", text: "Holy See"},
      {value: "hn", text: "Honduras"},
      {value: "hk", text: "Hong Kong"},
      {value: "hu", text: "Hungary"},
      {value: "is", text: "Iceland"},
      {value: "in", text: "India"},
      {value: "id", text: "Indonesia"},
      {value: "ir", text: "Iran (Islamic Republic of)"},
      {value: "iq", text: "Iraq"},
      {value: "ie", text: "Ireland"},
      {value: "im", text: "Isle of Man"},
      {value: "il", text: "Israel"},
      {value: "it", text: "Italy"},
      {value: "jm", text: "Jamaica"},
      {value: "jp", text: "Japan"},
      {value: "je", text: "Jersey"},
      {value: "jo", text: "Jordan"},
      {value: "kz", text: "Kazakhstan"},
      {value: "ke", text: "Kenya"},
      {value: "ki", text: "Kiribati"},
      {value: "kp", text: "Korea (the Democratic People's Republic of)"},
      {value: "kr", text: "Korea (the Republic of)"},
      {value: "kw", text: "Kuwait"},
      {value: "kg", text: "Kyrgyzstan"},
      {value: "la", text: "Lao People's Democratic Republic"},
      {value: "lv", text: "Latvia"},
      {value: "lb", text: "Lebanon"},
      {value: "ls", text: "Lesotho"},
      {value: "lr", text: "Liberia"},
      {value: "ly", text: "Libya"},
      {value: "li", text: "Liechtenstein"},
      {value: "lt", text: "Lithuania"},
      {value: "lu", text: "Luxembourg"},
      {value: "mo", text: "Macao"},
      {value: "mg", text: "Madagascar"},
      {value: "mw", text: "Malawi"},
      {value: "my", text: "Malaysia"},
      {value: "mv", text: "Maldives"},
      {value: "ml", text: "Mali"},
      {value: "mt", text: "Malta"},
      {value: "mh", text: "Marshall Islands"},
      {value: "mq", text: "Martinique"},
      {value: "mr", text: "Mauritania"},
      {value: "mu", text: "Mauritius"},
      {value: "yt", text: "Mayotte"},
      {value: "mx", text: "Mexico"},
      {value: "fm", text: "Micronesia (Federated States of)"},
      {value: "md", text: "Moldova (the Republic of)"},
      {value: "mc", text: "Monaco"},
      {value: "mn", text: "Mongolia"},
      {value: "me", text: "Montenegro"},
      {value: "ms", text: "Montserrat"},
      {value: "ma", text: "Morocco"},
      {value: "mz", text: "Mozambique"},
      {value: "mm", text: "Myanmar"},
      {value: "na", text: "Namibia"},
      {value: "nr", text: "Nauru"},
      {value: "np", text: "Nepal"},
      {value: "nl", text: "Netherlands"},
      {value: "nc", text: "New Caledonia"},
      {value: "nz", text: "New Zealand"},
      {value: "ni", text: "Nicaragua"},
      {value: "ne", text: "Niger"},
      {value: "ng", text: "Nigeria"},
      {value: "nu", text: "Niue"},
      {value: "nf", text: "Norfolk Island"},
      {value: "mp", text: "Northern Mariana Islands"},
      {value: "no", text: "Norway"},
      {value: "om", text: "Oman"},
      {value: "pk", text: "Pakistan"},
      {value: "pw", text: "Palau"},
      {value: "ps", text: "Palestine, State of"},
      {value: "pa", text: "Panama"},
      {value: "pg", text: "Papua New Guinea"},
      {value: "py", text: "Paraguay"},
      {value: "pe", text: "Peru"},
      {value: "ph", text: "Philippines"},
      {value: "pn", text: "Pitcairn"},
      {value: "pl", text: "Poland"},
      {value: "pt", text: "Portugal"},
      {value: "pr", text: "Puerto Rico"},
      {value: "qa", text: "Qatar"},
      {value: "mk", text: "Republic of North Macedonia"},
      {value: "ro", text: "Romania"},
      {value: "ru", text: "Russian Federation"},
      {value: "rw", text: "Rwanda"},
      {value: "re", text: "Réunion"},
      {value: "bl", text: "Saint Barthélemy"},
      {value: "sh", text: "Saint Helena, Ascension and Tristan da Cunha"},
      {value: "kn", text: "Saint Kitts and Nevis"},
      {value: "lc", text: "Saint Lucia"},
      {value: "mf", text: "Saint Martin (French part)"},
      {value: "pm", text: "Saint Pierre and Miquelon"},
      {value: "vc", text: "Saint Vincent and the Grenadines"},
      {value: "ws", text: "Samoa"},
      {value: "sm", text: "San Marino"},
      {value: "st", text: "Sao Tome and Principe"},
      {value: "sa", text: "Saudi Arabia"},
      {value: "sn", text: "Senegal"},
      {value: "rs", text: "Serbia"},
      {value: "sc", text: "Seychelles"},
      {value: "sl", text: "Sierra Leone"},
      {value: "sg", text: "Singapore"},
      {value: "sx", text: "Sint Maarten (Dutch part)"},
      {value: "sk", text: "Slovakia"},
      {value: "si", text: "Slovenia"},
      {value: "sb", text: "Solomon Islands"},
      {value: "so", text: "Somalia"},
      {value: "za", text: "South Africa"},
      {value: "gs", text: "South Georgia and the South Sandwich Islands"},
      {value: "ss", text: "South Sudan"},
      {value: "es", text: "Spain"},
      {value: "lk", text: "Sri Lanka"},
      {value: "sd", text: "Sudan"},
      {value: "sr", text: "Suriname"},
      {value: "sj", text: "Svalbard and Jan Mayen"},
      {value: "se", text: "Sweden"},
      {value: "ch", text: "Switzerland"},
      {value: "sy", text: "Syrian Arab Republic"},
      {value: "tw", text: "Taiwan"},
      {value: "tj", text: "Tajikistan"},
      {value: "tz", text: "Tanzania, United Republic of"},
      {value: "th", text: "Thailand"},
      {value: "tl", text: "Timor-Leste"},
      {value: "tg", text: "Togo"},
      {value: "tk", text: "Tokelau"},
      {value: "to", text: "Tonga"},
      {value: "tt", text: "Trinidad and Tobago"},
      {value: "tn", text: "Tunisia"},
      {value: "tr", text: "Turkey"},
      {value: "tm", text: "Turkmenistan"},
      {value: "tc", text: "Turks and Caicos Islands"},
      {value: "tv", text: "Tuvalu"},
      {value: "ug", text: "Uganda"},
      {value: "ua", text: "Ukraine"},
      {value: "ae", text: "United Arab Emirates"},
      {value: "gb", text: "United Kingdom of Great Britain and Northern Ireland"},
      {value: "um", text: "United States Minor Outlying Islands"},
      {value: "us", text: "United States of America"},
      {value: "uy", text: "Uruguay"},
      {value: "uz", text: "Uzbekistan"},
      {value: "vu", text: "Vanuatu"},
      {value: "ve", text: "Venezuela (Bolivarian Republic of)"},
      {value: "vn", text: "Viet Nam"},
      {value: "vg", text: "Virgin Islands (British)"},
      {value: "vi", text: "Virgin Islands (U.S.)"},
      {value: "wf", text: "Wallis and Futuna"},
      {value: "eh", text: "Western Sahara"},
      {value: "ye", text: "Yemen"},
      {value: "zm", text: "Zambia"},
      {value: "zw", text: "Zimbabwe"},
      {value: "ax", text: "Åland Islands"},
    ]
  },
  getters: {
    isUser: (state) => (username, password) =>
      state.users.some(
        (user) => user.username === username && user.password === password),
    isUsernameAvailable: (state) => (username) => state.users.every((user) => user.username !== username),
    // isPasswordRight: (state) => (password, passwordConfirm) => state.users.every((user) =>user.password !== password),
    getLoggedUser: (state) => state.loggedUser,
    getMovies: (state) => state.films,
    getSeries: (state) => state.series,
    getCountries: (state) => state.countries,
  },
  mutations: {
    SET_LOGGED_USER(state, payload) {
      state.loggedUser = state.users.find((user) => user.username === payload)
    },
    SET_NEW_USER(state, payload) {
      state.users.push(payload)
    },
    SET_LOGOUT(state) {
      state.loggedUser = null
    }
  },
  actions: {
  },
  modules: {
  }
})

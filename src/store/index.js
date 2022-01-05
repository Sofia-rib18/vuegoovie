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
        location: 'Portugal'
      }
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

/**

d1 = day1
w1 = workout1
n = name

exs = exercises

e1 = exercise1

t = title
p = poster
s = series
yt
v = video
u = url

"exercises": {
        "ex1": {
          "title": "The bird dog en movimiento",
          "series": "2 series 5/5 reps o 10 secs",
          "yt": "https://youtu.be/-x5RkmWtXrQ",
          "video": "the_bird_dog.mp4"
          "poster": ""
        },
 */

export interface Training {
  days: Day[];
}

export interface Day {
  workouts: Workout[];
}

export interface Workout {
  exercises: Exercise[];
  name?: WorkoutName;
}

// export interface Exercises {
//   e1: Exercise;
//   e2?: Exercise;
//   e3?: Exercise;
// }

export interface Exercise {
  poster: string;
  series: string;
  title: string;
  url: string;
  video: string;
  yt: string;
}

export enum WorkoutName {
  EntradaEnCalor = 'Entrada en calor',
  Finisher = 'Finisher',
  Fuerza = 'Fuerza',
  HombrosYBrazos = 'Hombros y Brazos',
  Relajacion = 'Relajacion',
  Tabata = 'Tabata',
}

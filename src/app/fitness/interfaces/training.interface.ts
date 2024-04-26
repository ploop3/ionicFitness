/**
d01 = day1
w1 = workout1
n = name

exs = exercises

e1 = exercise1

t = title
p = poster
s = series
yt = youtube
v = video
u = url
*/

export interface Training {
  d01: Day;
  d02: Day;
  d03: Day;
  d04: Day;
  d05: Day;
  d06: Day;
  d07: Day;
  d08: Day;
  d09: Day;
  d10: Day;
  d11: Day;
  d12: Day;
  d13: Day;
  d14: Day;
  d15: Day;
  d16: Day;
  d17: Day;
  d18: Day;
  d19: Day;
  d20: Day;
  d21: Day;
  d22: Day;
  d23: Day;
  d24: Day;
  d25: Day;
  d26: Day;
  d27: Day;
  d28: Day;
  d29: Day;
  d30: Day;
  d31: Day;
  d32: Day;
  d33: Day;
  d34: Day;
  d35: Day;
  d36: Day;
  d37: Day;
  d38: Day;
  d39: Day;
  d40: Day;
  d41: Day;
  d42: Day;
  d43: Day;
  d44: Day;
  d45: Day;
  d46: Day;
  d47: Day;
  d48: Day;
}

export interface Day {
  w1?: Workout;
  w2?: Workout;
  w3?: Workout;
  w4?: Workout;
}

export interface Workout {
  exs: Exercises;
  n: WorkoutName;
}

export interface Exercises {
  e1: Exercise;
  e2?: Exercise;
  e3?: Exercise;
}

export interface Exercise {
  p: string;
  s: string;
  t: string;
  u: string;
  v: string;
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

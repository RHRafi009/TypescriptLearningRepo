let result: number | string;
result = 10;
result = 'Pass';

// with type aliases
type mood = string | boolean;
let myMood: mood;
myMood = 'Meh';
myMood = false;
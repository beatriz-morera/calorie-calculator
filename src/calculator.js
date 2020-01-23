export function calculator(values) {
  let { gender, age, height, weight, activity } = values;

  if (!gender || !age || !height || !weight || !activity) {
    return 'missing data!';
  }

  let calories;
  if (gender === 'MALE') {
    calories = 5 + 10 * weight + 6.5 * height - 5 * age;
  } else if (gender === 'FEMALE') {
    calories = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  switch (activity) {
    case '1st':
      activity = 1.2;
      break;
    case '2nd':
      activity = 1.375;
      break;
    case '3rd':
      activity = 1.55;
      break;
    case '4th':
      activity = 1.72;
      break;
    case '5th':
      activity = 1.9;
      break;
    default:
      activity = null;
  }
  calories *= activity;

  return Math.round(calories);
}

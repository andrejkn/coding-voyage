/**
 * Input:
 *  [{ name: 'banana', protein: 1, carbs: 23, fat: 0 }]
 * Output:
 *  [{ name: 'banana', calories: 96 }]
 */
// function calculateTotalCalories(foods) {
//   const CALORIES_PER_ONE_GRAM_OF_PROTEIN = 4;
//   const CALORIES_PER_ONE_GRAM_OF_CARBS = 4;
//   const CALORIES_PER_ONE_GRAM_OF_FAT = 9;

//   const foodCalories = [];

//   for (let food of foods) {
//     foodCalories.push({
//       name: food.name,
//       calories: (food.protein * CALORIES_PER_ONE_GRAM_OF_PROTEIN) +
//         (food.carbs * CALORIES_PER_ONE_GRAM_OF_CARBS) +
//         (food.fat * CALORIES_PER_ONE_GRAM_OF_FAT)
//     });
//   }

//   return foodCalories;
// }

// calories per 1g
const caloriesMap = {
  protein: 4,
  carbs: 4,
  fat: 9,
};

const calculateTotalCalories = (foods, caloriesMap) =>
  foods.map(({ name, protein, carbs, fat }) => ({
    name,
    calories: (protein * caloriesMap.protein) + (carbs * caloriesMap.carbs) + (fat * caloriesMap.fat),
  }));

function test() {
  const foods = [
    {
      name: 'banana',
      protein: 1,
      carbs: 23,
      fat: 0,
    }, {
      name: 'chicken',
      protein: 26,
      carbs: 0,
      fat: 2,
    }, {
      name: 'apple',
      protein: 0,
      carbs: 14,
      fat: 0,
    }, 
  ];

  const calories = calculateTotalCalories(foods, caloriesMap);
  console.log(calories);
}

test();
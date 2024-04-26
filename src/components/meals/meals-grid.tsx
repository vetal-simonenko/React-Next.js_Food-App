import classes from './meals-grid.module.css';
import MealItem from '@/components/meals/meal-item';

const MealsGrid = ({ meals }: { meals: any }) => {
	return (
		<ul className={classes.meals}>
			{meals.map((meal: any) => (
				<li key={meal.id}>
					<MealItem {...meal} />
				</li>
			))}
		</ul>
	);
};

export default MealsGrid;
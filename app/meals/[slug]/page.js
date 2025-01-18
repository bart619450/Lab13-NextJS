// app/meals/[someName]/page.js
import Image from 'next/image';
import { getMeals,getMeal } from '@/lib/meals';
import classes from './page.module.css';



// Funkcja pobierająca dane posiłku z bazy danych


export default async function MealsDynamicPage({ params }) {
    
    const { slug } = await params;  // Extract slug correctly
    const meal = await getMeal(slug);

  if (!meal) {
    return (
      <main>
        <h1 className="loading">Loading meal data...</h1>
      </main>
    );
  }

  return (
    <main className={classes.main}>
      <header className={classes.header}>
        
        <img
            src={meal.image}
            alt={meal.title}
            />
        
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          
          <div className={classes.summary}>{meal.summary}</div>
          <div className={classes.creator}>
            Created by: <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </div>
          </div>
        
      </header>
      <section className={classes.instructions}>
        <h2>Instructions</h2>
        {meal.instructions.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
        ))}
    </section>
    </main>
  );
}

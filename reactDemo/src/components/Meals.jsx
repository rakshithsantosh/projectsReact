import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Meals = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themeldb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        setItems(res.data.meals);
      })
      .catch((e) => console.log(e));
  }, []);

  const itemsList = items.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <section>
        <img src={strMealThumb} alt={strMeal} />
        <section>
          <p>{strMeal}</p>
          <p>#{idMeal}</p>
        </section>
      </section>
    );
  });

  return <>{itemsList}</>;
};

export default Meals;

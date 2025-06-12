// Updated JavaScript for Cooking Delight

const recipes = [
  {
    id: 1,
    title: "Quinoa Salad",
    image: "images/receta1.jpg",
    description: "A fresh and healthy salad packed with protein.",
    ingredients: [
      "1 cup quinoa",
      "2 cups water",
      "1 cucumber, diced",
      "1 tomato, diced",
      "1/4 cup feta cheese",
      "2 tbsp olive oil",
      "1 tbsp lemon juice",
      "Salt and pepper to taste"
    ],
    steps: [
      "Rinse quinoa under cold water.",
      "Combine quinoa and water in a pot; bring to a boil.",
      "Reduce heat, cover, and simmer for 15 minutes.",
      "Fluff quinoa with a fork and let cool.",
      "Toss quinoa with cucumber, tomato, feta, olive oil, and lemon juice.",
      "Season with salt and pepper, then serve."
    ]
  },
  {
    id: 2,
    title: "Citrus-Glazed Salmon",
    image: "images/receta2.jpg",
    description: "Gourmet salmon fillets with a tangy citrus glaze.",
    ingredients: [
      "4 salmon fillets",
      "1/4 cup orange juice",
      "2 tbsp lemon juice",
      "2 tbsp honey",
      "1 garlic clove, minced",
      "Salt and pepper to taste",
      "Fresh parsley for garnish"
    ],
    steps: [
      "Preheat oven to 200°C (400°F).",
      "In a bowl, whisk together orange juice, lemon juice, honey, and garlic.",
      "Place salmon on a parchment-lined baking sheet; season with salt and pepper.",
      "Brush salmon with half of the citrus glaze.",
      "Bake for 12–15 minutes, basting once more with glaze halfway through.",
      "Garnish with parsley and serve hot."
    ]
  },
  {
    id: 3,
    title: "Gluten-Free Chocolate Tart",
    image: "images/receta3.jpg",
    description: "Decadent chocolate tart with a crispy gluten-free crust.",
    ingredients: [
      "200g dark chocolate",
      "1/2 cup heavy cream",
      "1/4 cup sugar",
      "3 eggs",
      "1/2 cup almond flour",
      "2 tbsp cocoa powder",
      "Pinch of salt"
    ],
    steps: [
      "Preheat oven to 180°C (350°F).",
      "Melt chocolate and cream together in a double boiler; let cool slightly.",
      "In a bowl, whisk eggs and sugar until pale.",
      "Stir almond flour, cocoa powder, and salt into egg mixture.",
      "Fold in melted chocolate until smooth.",
      "Pour into a greased tart pan and bake for 20–25 minutes.",
      "Cool completely before slicing; serve with whipped cream if desired."
    ]
  }
];

function renderRecipes(containerSelector, recipeArray) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  container.innerHTML = recipeArray.map(recipe => `
    <article class="recipe-card">
      <h2>${recipe.title}</h2>
      <img src="${recipe.image}" alt="${recipe.title}" loading="lazy">
      <p>${recipe.description}</p>
      <h3>Ingredients:</h3>
      <ul>
        ${recipe.ingredients.map(item => `<li>${item}</li>`).join('')}
      </ul>
      <h3>Steps:</h3>
      <ol>
        ${recipe.steps.map(step => `<li>${step}</li>`).join('')}
      </ol>
    </article>
  `).join('');
}

function initHeroButton() {
  const btn = document.getElementById('btn-explorar');
  if (btn) {
    btn.textContent = "Explore Recipes";
    btn.addEventListener('click', () => {
      const featured = document.getElementById('featured') || document.getElementById('all-recipes');
      if (featured) {
        featured.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}

function initLocalStorage() {
  const visits = JSON.parse(localStorage.getItem('visits') || '{}');
  recipes.forEach(r => {
    if (!(r.id in visits)) visits[r.id] = 0;
  });
  localStorage.setItem('visits', JSON.stringify(visits));
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const data = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
      };
      console.log('Form submitted:', data);
      form.reset();
      alert('Thank you for contacting us! 😊');
    });
  }
}

function updateYearInFooter() {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderRecipes('#recetas-list', recipes);
  renderRecipes('#all-recipes', recipes);
  initHeroButton();
  initLocalStorage();
  initContactForm();
  updateYearInFooter();
});

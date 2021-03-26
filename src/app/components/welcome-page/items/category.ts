export class Category {
    id: string;
    title: string;
    desc: string;
    image: string;
}

var categories: Category[] = [
    { id: '1', title: 'Bread & Bakery',  image: 'http://placehold.it/270x171',
   desc: 'The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread,biscotti, muffins, bagels, fresh coffee and more.' },

    { id: '2', title: 'Takeaway', image: 'http://placehold.it/270x171', 
    desc: 'Its consistently excellent, dishes are superb and healthily cooked with high quality ingredients.' },

    { id: '3', title: 'Dairy', image: 'http://placehold.it/270x171', 
    desc: 'A dairy product is food produced from the milk of mammals, primarily cows, water buffaloes, goats, sheep, yaks.' },

    { id: '4', title: 'Meat', image: 'http://placehold.it/270x171', 
    desc: 'Only superior quality beef, lamb, pork.' },

    { id: '5', title: 'Seafood',image: 'http://placehold.it/270x171', 
    desc: 'Great place to buy fresh seafood.' },

    { id: '6', title: 'Fruit & Veg', image: 'http://placehold.it/270x171',
   desc: 'A variety of fresh fruits and vegetables.' }
   ];
   
export function getCategories() {
    return categories;
} 

export function getCategory(id: string): Category {
    for (let i = 0; i < categories.length; i++) {
    if (categories[i].id === id) {
    return categories[i];
        }
    }
    throw new CategoryNotFoundException(`Category ${id} not found`);
}

export class CategoryNotFoundException extends Error {
   constructor(message?: string) {
   super(message);
    }
}
   
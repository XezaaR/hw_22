// (()=>{
    class Product{
        id;
        title;
        manufacture;
        price;
        constructor(id,title,manufacture,price) {
            // if (!title || !manufacture || !price) {
            //     console.error("All fields are required: title, manufacture and price")
            // }else if (typeof price !== 'number') {
            //     console.error("Price must be a number.")
            // }
            // else {
                this.id = id;
                this.title = title;
                this.manufacture = manufacture;
                this.price = price;
            //}
        }
    }
    class Milk extends Product{
        fat;
        constructor(id,title,manufacture,price,fat) {
            super(id,title,manufacture,price);
            this.fat = fat;
        }
    }
    class Chocolate extends Product{
        kind;
        constructor(id,title,manufacture,price,kind) {
            super(id,title,manufacture,price);
            this.kind = kind;
        }
    }
    class Wine extends Product{
        alcohol;
        constructor(id,title,manufacture,price,alcohol) {
            super(id,title,manufacture,price);
            this.alcohol = alcohol;
        }
    }
    class Store{
        products;

        constructor() {
            this.products = [];
        }
        add(product) {
            if (!this.products.includes(product)) {
                this.products.push(product);
            }
        }
        // add(product){
        //     if(this.products.find(t => t.id === product.id))
        //         return false;
        //     else{
        //         this.products.push(product);
        //         return true;
        //     }
        // }
        getAll() {
            return [...this.products];
        }
        getByType(type) {
            return this.products.filter(product => product.constructor.name === type);
        }
    }
    let store = new Store();

    let milk = new Milk(885,"Milk1", "Dairy", 2.5, 0.5);
    let chocolate = new Chocolate(732,"Chocolate1", "Nestle", 5.0, "Dark");
    let wine = new Wine(601,"Wine1", "France", 15.0, 12.5);

    store.add(milk);
    store.add(chocolate);
    store.add(wine);
// })();
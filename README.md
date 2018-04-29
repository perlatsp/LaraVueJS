 **LaraVueJS**
 Project is divided into two sections:
 - Server - where there is a simple Laravel app providing an api for products
 - Client - a VueJS app which retrieves data from server
 
 ## Server
 
Get up and running change database details in .env file
```bash
cd server
 composer install
 php artisan migrate:fresh --seed will // will migrate and seed the databse
```
Server can be accessed from : http://localhost:8000/api/products to get the products

## Client
```bash
cd client
npm install
npm run dev
```
Client is built with VueJS and [Vuetify](https://vuetifyjs.com) package.
Displays the products paginated with an option to change the amount of products to view per page, user can change on demand the number of product to be shown and change page ov viewing.
Client is running http://localhost:8080

## Todo
 - [ ] Load more Button
 - [ ] Infinity scroll

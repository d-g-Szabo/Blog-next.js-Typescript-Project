# week08-assignment

Project: Database Driven Full Stack Next.js app!

# Requirements:

🎯 Design a SQL schema for a posts table, and a comments table that has a post_id column connecting it to the posts table.

🎯 Either create a form where users can add posts OR seed your database with at least 4 posts that comments can be added to (if you do the seed, one of the stretch goals will be harder).

🎯 Add a form to the individual post page to allow creating a new comment, which is saved to the new comments table including the Post ID.

🎯 Refresh the /posts route data when adding a new post, and redirect the user to the list of posts

🎯 Refresh the /post/:postId route when adding a new comment, so the new comment is displayed on the page

🎯 Add static and dynamic metadata to your pages

I met all the requirements for this assignment.

# User Stories:

    🐿️ As a user, I want to browse a list of posts, sortable by ascending or descending order
    🐿️ As a user, I want to be able to leave a comment sharing my thoughts on each post
    Stretch goal:
    🐿️ As a user, I want to see a list of categories, and click on a category to see a list of posts in that category

# Wireframe:

![](https://github.com/d-g-Szabo/react-full-stack-app/blob/ca99ec2c35d12d46869c01f128fd5ed8eed837d0/client/public/database_driven_full_stack_react___express_app_wireframe1.jpg)
![](https://github.com/d-g-Szabo/react-full-stack-app/blob/ca99ec2c35d12d46869c01f128fd5ed8eed837d0/client/public/database_driven_full_stack_react___express_app_wireframe2.jpg)
![](https://github.com/d-g-Szabo/react-full-stack-app/blob/ca99ec2c35d12d46869c01f128fd5ed8eed837d0/client/public/database_driven_full_stack_react___express_app_wireframe3.jpg)
![](https://github.com/d-g-Szabo/react-full-stack-app/blob/ca99ec2c35d12d46869c01f128fd5ed8eed837d0/client/public/database_driven_full_stack_react___express_app_wireframe4.jpg)

# Component flow:

![](https://github.com/d-g-Szabo/react-full-stack-app/blob/ca99ec2c35d12d46869c01f128fd5ed8eed837d0/client/public/database_driven_full_stack_react_express_app-component-tree.jpg)

# Database schema:

![](https://github.com/d-g-Szabo/react-full-stack-app/blob/ca99ec2c35d12d46869c01f128fd5ed8eed837d0/client/public/database_driven_full_stack_react___express_app-database-schema.jpg)

# Trello project planning:

![](https://github.com/d-g-Szabo/react-full-stack-app/blob/7ebfb55698386939315740c6befbb125b88703ae/client/public/database_driven_full_stack_react___express_app-trello.jpg)

# Stretch Goals:

🏹 Add a categories table to allow categorisation of posts at creation time using a dropdown menu. Add a /categories route that lists all categories, and a /categories/:id route that lists all posts in a category.

🏹 Add a new /posts/:id/edit route that allows editing a post. Populate the form with the post data, and save changes by updating the post in the database with a server action.

🏹 Add a delete button to the post page that removes the post from the database.

🏹 Add a new /posts/:id/comments/:id/edit route that allows editing a comment. Populate the form with the comment data, and save changes by updating the comment in the database with a server action.

# Reflections:

What went really well, and what could have gone better?

Making new pages and components was straightforward. I was trying to make a seed.ts file, but I couldn't make it work. I guess that's something that is no longer a thing without a server.

Useful external sources that helped me complete the assignment (e.g Youtube tutorials).

- none

Errors or bugs I encountered while completing your assignment.
I was trying to access the DB more than once on the same page to show the categories for the newPost page, but I got an error, so if I wanted to have more than one function accessing the DB, then I had to make a component inside that page so it would give me an error.

Requesting feedback about a specific part of your submission:
As I said above, I had to separate pages to make it work. Is there a way to just have one single page and do all of those things in one file, or the best way is to separate it into components as I did it?

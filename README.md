# Cart and Task Manager

This project is a simple React + TypeScript application that provides two main features:
- Task Management (add, toggle, delete tasks)
- Cart Management (add products to cart after login)

Built with:
- Vite 
- React Hook Form and Zod for form handling and validation
- Redux Toolkit for state management
- React Query for API data fetching and mutations
- Axios for HTTP requests
- SCSS for styling
- Reqres API (https://reqres.in) as a mock backend for login and registration

# Getting Started
##  Install dependencies
```
npm install
```

##  Start the development server
```
npm run dev
```

## Compiles and minifies for production
```
npm run build
```

# Login & Register Information
This project uses Reqres API (a fake online REST API) to handle Register and Login.You must register first before you can login.
- Register Endpoint: POST /api/register
- Login Endpoint: POST /api/login

## Register Example
```
{
  "email": "eve.holt@reqres.in",
    "password": "pistol"
}
```

## Login Example
```
{
  "email": "eve.holt@reqres.in",
  "password": "cityslicka"
}
```

## Author 
@apclarity

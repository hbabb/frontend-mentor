# Tech Notes for Weather App

There is a bug in the Nx generate command for nest. You have to use the following format.
```bash
nx generate @nx/nest:module src/app/moduleName/moduleName
```
Use this for modules, services, and controllers. Run the command from the backend directory (api)
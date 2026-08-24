# NAMASTE REACT

# Parcel (functionalities)-
- Dev Build
- Local server
-HMR: Hot Module Replacement
- File Watching Algorithm- written in C++
-Caching- faster builds
- Image optimization (coz image processing is a tricky operation for the browser)
- Minifaction of files (in Production build)
-Bundling
-Compresses files
-Consistent Hashing
-Code Splitting
-Differential Bundling- (supports the app on older browsers as well)
-Diagn0stics (of app)
-Good error display and suggestions
-Allows hosting the app on HTTPs as well
- ZERO CONFIG TOOL
-Tree Shaking (removes unnecessary code)
-Different Production and Dev Bundles (produc builds have more optimizations compared to dev build)


#FOOD ORDERING APP STRUCTURE:
// Building 'Namaste Food' app

/* COMPONENTS INCLUDE:

HEADER
    -logo
    - nav items
BODY
    -search
    -restaurantContainer
        -restaurantCard
          -img
          -Name of Res, star rating, cuisine, delivery time
FOOTER
    -copyright
    -links
    -address
    -contact
*/


#TWO TYPES OF EXPORT/IMPORT-

-Default Export/import:

export default ComponentName;
import ComponentName from "path";


-Named Export/import:

export const ComponentName;
import {ComponentName} from "path";




# React Hook- 
-Normal JS utility func 
-written by Facebook devs
-is present inside the 'React' folder in node modules
-these need to be imported before use

- 2 most imp types of hook:
    - useState()         : (80% used)  - used to gen superppowerful state variables in React
    -useEffect()         : (20% used)


# React-status-controller

Usage example 

[codesandbox](https://codesandbox.io/s/modest-cache-hknp6?file=/src/App.js)

### Docs
 1. statuses - statuses array from redux state
 2. error - function. Use to display error from redux state
 3. reduxStatuses - you can pass your statuses to StatusController.   
    Default - 
    ```
    {
         none: 'none',
         loading: 'loading',
         error: 'error',
         success: 'success'
    }
    ``` 
    Your reduxStatuses should be an object with the same keys.
 4. loaderSettings - object. Use this parameter to set your custom styles to the loader (default)   
    loaderSettings have following keys:
    1. size - loader size;
    2. color - loader color;
    3. styles - loader wrapper styles.  
        Default
        ```
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
         width: '100%',
         height: '100%',
       ```
 5. Loader - Use this parameter to set your custom Loader component
    Example: 
    ```
     <StatusController Loader={() => <span>Loading...</span>}>
    
     </StatusController>
    ```     

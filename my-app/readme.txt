In this branch we have run command npm run eject which enables to use config files and webpack config files from react.
For detail information please read about react-scripts eject.

For react-scripts 2.x and higher, no need need of react-scripts eject (npm run eject)
as react-scripts is supporting css modules from 2.x version onwards.
Just rename the css file of component to filename.module.css and import that css file as

import styles from './filename.module.css    

//Give any suitable name you want, giving styles as name is not mandatory.

//And use css classes in component just like this

<div className={styles.App} >

</div>

//Where App is css class in css file
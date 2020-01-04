# FinalToDo
//*Technical spec, written by: Miro-png

This web application’s purpose is to be an online, accessible memo for the developer, me. 
It has simplistic UI and functions, which guarantee some level of privacy for the notes taken. However, it should be noted that if someone is smart enough to open the public repository under miro-png, they can open the JS file and see the password hiding in plain sight, so in other words, not secure. 
The web application is executed with JS, CSS and HTML and jquery was used while developing this application, the choice for using these tools and languages are simple - they are the only ones I have even the slightest grasp of. 
Password protection is executed in a way, that the page does not complete the loading until the PW is fed correctly to the pop-up window on the webpage, after which the user can add, delete and mark the notes as executed. The input of the password does not redirect to a different webpage, rather than gives access to the notes, which download after the password has been fed.
Input and output of the notes listed are executed with JS list-Items -function in localStorage.
The texts and other elements are aligned in the middle of the page according to CSS and HTML style guides. In the sake of honesty, during the development of the product, the developer (me) did cut some corners when it comes to the size of the elements on the application, as they seemed too small for the most devices used, this was resolved by automatic zoom of 140% in the loading phase, which works on the devices the end-user (me) uses. However, it should be noted that this solution might cause some problems in the future if the devices used will change.
The web app is published in GitHub pages as well as on Netlify.
https://miro-png.github.io/FinalToDo/
https://competent-gates-7f6f9f.netlify.com/
It should be noted that this specification is not complete. *//

# form-example
This is a responsive form that displays a success page, using data captured in the form, on submission.

## Prerequisites
* node should be installed on your computer so you can run the 'npm' command. <https://nodejs.org/en/>

## To build
1. Run 'npm install'
2. Run 'grunt build'

The production files should be available in the 'dist' folder after running 'grunt build'.

## Viewing the files in a browser
* I have cloned this repo into the Sites folder on my machine (Macbook Pro), it should be available at 'localhost/~<username>'.


## Discssion
### CSS
I've opted to use sass to compile the css, I hope this is ok. It allowed me to create mixins and extendable css. This in turn cut out repetition of css declarations.
I've broken the css into site components so I can easily find the css I need to edit.

###JS
I'm making an AJAX request to fetch the success page, and then rendering it on the same page as the form. I didn't want to load a new page as I don't want to lose the data from the form once it's submitted, I also didn't want to store the data in local storage, or in a cookie, or as a query string in a url which would require additional parsing.

The JS is in 3 files, 2 plugins and 1 main file which initialises the js plugins.

### Improvements
* Do a proper accessibility audit.
* Create skiplinks at the top of the page to allow the user to quickly access areas of the page using keyboard navigation
* There should really be placeholder values in the form, and visual indication for which fields are required.
* Make the "tablet" menu nicer.
* Create custom error handling to aid in accessibilty, such as returning errors at the top of the field, and then setting focus to the errors.

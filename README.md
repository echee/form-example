# form-example
This is a responsive form that displays a success page, using data captured in the form, on submission.

## Prerequisites
* node should be installed on your computer so you can run the 'npm' command. <https://nodejs.org/en/>

## To build
1. Run 'npm install'
2. Run 'grunt build'

The production files should be available in the 'dist' folder after running 'grunt build'.

## Viewing the files in a browser
* I have cloned this repo into the Sites folder on my machine (Macbook Pro), it should be available at http://localhost/form-example/dist/ if you have also setup a Sites directory on your machine.


## Discssion
### CSS
I've opted to use Sass to compile the CSS, I hope this is ok. It allowed me to create mixins and extendable CSS for CSS rules that were commonly used. This cut out repetition of CSS declarations.
I've broken the CSS into site components so I can easily find the CSS I need to edit.

###JS
I'm making an AJAX request to fetch the success page, and I am then rendering it on the same page as the initial. I didn't want to load a new page as I didn't want to lose the data once the form was submitted. I also didn't want to store the data in local storage, or in a cookie, or as a query string in a url, which would require additional parsing.

The JS is in 3 files, 2 plugins and 1 main file which initialises the js plugins.

### Improvements
* Create skiplinks at the top of the page to allow the user to quickly access areas of the page using keyboard navigation
* There should really be placeholder values in the form, and visual indication for which fields are required.
* Make the "tablet" menu nicer.
* Create custom error handling to aid in accessibilty, such as returning errors at the top of the field, and then setting focus to the errors.
* check the color accesibilty of the text
* Create a sprite sheet for the icons used. Or see if I can use fontello icons. This would make it easier to add more icons in the future and it would look better on retina screens.

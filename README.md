# UFOs

Overview of Project

## Overview
This week we are following Dana as she writes an article on UFO sightings. She has a large JavaScript file of UFO sightings as part of her research. Once her article is complete, she would like to publish this list of UFO sightings online with her article, and post the data in a JavaScript table that can be filtered. During the modules this week, we set up the webpage to display her article and the table to filter the UFO sightings by date. For the challenge, we are expanding the functionality of the UFO sightings table to have more filtering options. The updated table now filters on date, city, state, country, and shape.

## Results
Our webpage has a really nice look, with an X-Files vibe. Here's what users will see when they load it:

#### Original load look
![first time load picture](https://github.com/mgsrichard/UFOs/blob/main/Original_load_image.png)

The search is accomplished through the filter search box. You can enter date, city, state, country, or shape, and the page will automatically update to narrow the results to match the entered criteria. Be sure to enter lowercase letters for all text, and two letter abbreviations for states. The underlying data is all lowercase. Here's a look at the filter search box:

#### Filter search box
![filter box picture}(https://github.com/mgsrichard/UFOs/blob/main/filter_box_image.png)

To reset the table and start a new search, go back to the top of the page and click on "UFO Sightings" in the top bar.  If you don't reset the search, the page will continue to search on the already filtered data from your last search.  

#### Reset table by clicking UFO Sightings
![UFO sightings circled picture](https://github.com/mgsrichard/UFOs/blob/main/UFOs_sightings_circled_image.png)

There are a couple of situations where you wouldn't need to reset the page, but generally it's better if you reset to make sure you're getting what you think you are getting.
  - Exception 1: You are narrowing a search that you just made. For example, you entered 1/1/2010 but there are a lot of results, and so you enter a specific state to narrow the list.
#### Exception 1: narrowing the search
 ![side by side date and date plus image](https://github.com/mgsrichard/UFOs/blob/main/exception_1_side_by_side.png)
 
  - Exception 2: You have only entered criteria in one box since your last reset, and you want to search for a different criteria in the same category.  For example, you can enter 'ca' for California, then change it to 'va' for Virginia and the results will be accurate.

#### Exception 2: searching one box only and changing the same box doesn't require reset
![side by side change the same box](https://github.com/mgsrichard/UFOs/blob/main/Exception_2_side_by_side.png)

## Summary
This website works well for filtering the data from the table.  It has a clean look and it is fairly obvious how to start your search. However, there are two major issues that could be improved in future versions of the page. Firstly, we ought to move the reset function to be below the filter box and put a button there labeled "Reset". That would be a much more intuitive way for the page to operate and would likely save users much confusion.  Secondly, the text entered in the boxes currently has to be lowercase, and countries and states have to be lowercase 2 letter abbreviations. We ought to change the programming to allow more loose matchups: for example, by ignoring upper/lowercase and by recognizing state and country names (and not only the abbreviations.)

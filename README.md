# UFOs

Overview of Project

## Overview
This week we are following Dana as she writes an article on UFO sightings. She has a large JavaScript file of UFO sightings as part of her research. Once her article is complete, she would like to publish this list of UFO sightings online with her article, and post the data in a JavaScript table that can be filtered. During the modules this week, we set up the webpage to display her article and the table to filter the UFO sightings by date. For the challenge, we are expanding the functionality of the UFO sightings table to have more filtering options. The updated table now filters on date, city, state, country, and shape.


## Results
Our webpage has a really nice look, with an X-Files vibe. Here's what users will see when they load it:


### Original load look
![first time load picture](https://github.com/mgsrichard/UFOs/blob/main/Original_load_image.png)



### Filter search box
The search is accomplished through the filter search box. You can enter date, city, state, country, or shape, and the page will automatically update to narrow the results to match the entered criteria. Be sure to enter lowercase letters for all text, and two letter abbreviations for states. The underlying data is all lowercase. Here's a look at the filter search box:

![filter box picture](https://github.com/mgsrichard/UFOs/blob/main/filter_box_image.png)

### Entering criteria in the search boxes
You can sort the data by one or more criteria.  Every time you fill in a field, the table will update, with each additional field entered resulting in a more narrowed list of matching results. Additionally, if you delete any of the search terms the table updates again.  Here's what it looks like when you have entered a date of 1/10/2010 and California (ca) for the state.

![use search image](https://github.com/mgsrichard/UFOs/blob/main/use_search.png)

## Summary
This website works well for filtering the data from the table.  It has a clean look and it is fairly obvious how to start your search. However, there is an issue that could be improved in future versions of the page. The issue is that the text entered in the boxes currently has to be lowercase, and countries and states have to be lowercase 2 letter abbreviations. We ought to change the programming to allow more loose matchups: for example, by ignoring upper/lowercase and by recognizing state and country names (and not only the abbreviations.) Ideas to further develop this website would include the following:
  - add the functionality to the page for readers to submit their own UFO sightings
  - add an article search for articles relating to UFOs from the web generally or from news sources that Dana likes
  - allow users to comment on the UFO sightings in the list. Maybe someone out there can provide more information about these events!
  - add a google maps feature that allows the user to map where sightings happened and look for patterns

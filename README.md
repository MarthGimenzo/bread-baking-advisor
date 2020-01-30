Deployed site: [Bread Baking Adviser](https://marthgimenzo.github.io/bread-baking-advisor/)

*Note: This site is meant to be viewed on mobile devices, please toggle it to mobile view in inspect mode for best quality.*

# Bread Baking Adviser

The Bread Baking Advisers is a tool that can be used by bakers to carefully calculate the amount of bread that should be baked per day. Because a bakery needs to provide fresh bread every day, and therefore limit loss, it will always want to bake an amount of bread that is most sufficient. But at every bakery, it’s always a challenge to estimate how much bread will be sold every day. 

The Bread Baking Adviser is a tool that can be used by bakers to calculate the most sufficient amount of bread every day. It works fairly simple: Every day, the baker needs to input the amount of every type of bread that was baked, into the tool. At the end of the day, the baker inputs the amount of every type of bread that is left over. The more data has been inputted over time, the better the advice the tool will give. This way, a baker can get a good overview of how much they sell and how much bread they should prepare to bake every day. This will allow the baker to produce more efficiently and decrease loss.

## UX

The main user type of the Bread Baking Advicer is bakers. It is developed for bakeries and will be used by their employees and is therefore of little to no use for any other type of user. The UX of the tool will therefore solemnly targeted at this user type.

Since the goal of the app is fairly simple, the tool will be developed as a website that can be accessed easily by employees of the bakery and provide them with the needed advice as simple as possible. Therefore, the website will be developed as mobile first, so that users of the tool can access it easily when needed without the use of a computer. However, if needed the website can be accessed using a laptop or desktop computer as well. All data that will be input and viewed, should be displayed on one page as much as possible.

To simplify the initial development process, the tool will be designed for a specific bakery called The Bakery Café that is located in Groningen, the Netherlands. In a later stadium, the functionalities of the tool can be extended so that it can be used by all bakeries.

### The Bakery Café baking process

To make sense of the user stories in the next section, it should be mentioned that the bread baking process can be divided into three days at The Bakery Café and is as followed:

#### Day 1

The right amount of bread is placed on several bread wagons. There is a max of 40 pieces of bread per bread wagon. The bread wagons are then placed in the freezer until the next day. As for the use of the Bread Baking Advicer, this would be the moment to check for advice on the right amount of bread that should be placed on the bread wagons.

#### Day 2

The bread wagons are taken out of the freezer and semi-defrosted so that they can be decorated. After that, the bread wagons will be placed into the proofing unit.

#### Day 3

The bread wagons are taken out of the proofing unit and are ready to be baked. They will be placed into the oven. As for the use of the Bread Baking Advicer, this would be the moment to input the amount of bread that will be baked that day.

### User Stories

1.	Bakery employees want to check advice on how many bread pieces should be placed on the bread wagon at day 1, so that they can bake a sufficient amount of bread pieces on day 3.
2.	Bakery employees want to check if the amount of bread that should be baked that day is correct.
3.	When the bread wagons are placed into the oven, bakery employees want to input the amount of bread that is baked into the Bread Baking Advicer tool so that the tool will take this into its calculation.
4.	Bakery employees want to input the amount of bread pieces that are left at the end of the day into the Bread Baking Advicer tool so that the tool will take this into its calculation.
5.	Bakery employees want to see an overview of the average amount of bread that is baked every week so that they can adjust their weekly order of bread pieces.

### Mockups

Even though it is possible to view the website on a desktop computer, it is designed to be used on mobile devices only. Therefore, only mockups for a mobile first version were created.

- [Home](https://github.com/MarthGimenzo/bread-baking-advisor/blob/master/assets/mockups/Home.png)
- [Input](https://github.com/MarthGimenzo/bread-baking-advisor/blob/master/assets/mockups/Input.png)
- [Overview](https://github.com/MarthGimenzo/bread-baking-advisor/blob/master/assets/mockups/Overview.png)


### Design

•	Primary colours were derived from the colours of The Bakery Café website and corporate identity. 

•	The font that is used for the website is called ‘Traveling Typewriter’. It is the corporate identity font of the Bakery Café.

•	The ‘Bread Baking Adviser’ logo has been created in InDesign using the Bakery Café logo on the website, combined with the Traveling Typewriter font.

## Features

### Existing Features
•	A tab at the top of the website with 3 clickable tabs;

•	A dropdown button where the user can click on the day to be viewed;

• The dropdown button automatically detects the current day of the week and adjusts itself;

•	Advice section - This tab provides information about the amount of bread to be placed on the bread wagons and the amount of bread to baked that day;

• Input section - On this tab, the user is able to input and submit the amounts of bread that were baked and left ober on the selected day. It will check if the data is valid and then sends it to an external API;

• Overview section - This tab provides two horizontal barcharts; one about the amount of bread that was consumed last week, and one about the amount of bread that was consumed last four weeks. This section also provides advice on how much boxes should be ordered weekly, based on the weekly bread consumption;

• Documentation - The ReadMe file and Mockups;

• Responsive design;

• Accessibility - Simple transactions of information;

• Branding;

• Git Version Control;

• Hosted on GitHub pages;

• A Favicon icon.

### Features Left to Implement

•	Submitted data cannot be edited or deleted. In the future, this feature will be implemented;

• A feature that gives the user the ability to add or delete breadtypes, so it can be used by different bakeries;

• A feature that gives the user the ability to indicate if a special event is taking place. Thus, more or less bread will be calculated based on this.

• A feature that gives the user the ability to define how much bread should be added in the next calculation when a bread is sold out. For example, if a type of bread is sold out, the bread baking advisor will take into account that at least one more bread should be baked next time. In the future, the user can adjust this amount;

• A feature that gives the user the ability to define how much bread should at least be baked. For example, if not more than two pieces of a type of bread were sold in four consecutive weeks, it will want to advice not to bake more than two. However the user will be able to define the minimum amount of bread that should be baked.

• A feature to view graphs of specific types of bread. The user will be able to see a timeline of the consumption of a type of bread in the last 4 weeks for a specific day.

• A feature to view the numbers inside the bars of the barcharts. This will make the barcharts more clear.

## Technologies Used

- HTML
  - HTML for the structure of the website.

- CSS
  CSS for the styling of the website.

- Javascript
  Javascript was used for calculations and to make the website more interactive.
  
- Google Chrome
  - Developer Tools.

- Balsamiq
  - Used for creating mockups.

- Photoshop
  - Used for editing the background and to create the logo.
  
- Bootstrap
  - Used for frameworks.
  
- jQuery
  - The project uses jQuery to simplify DOM manipulation.
 
- Popper
  - Tooltip & popover positioning engine was used by Bootstrap.

- myJSON
  - myJSON is used to store all submitted data.

- D3
  - D3 was used for manipulating documents based on the data in the API.
  
- Crossfilter
  - Crossfilter was used to support D3.

- DC
  - DC was used to support Crossfilter and D3.
  
- Queue.js
  - Queue.js was used to support DC, Crossfilter and D3.
  
- Gitpod
  - The website was built in Gitpod.

- Git
  - Git was used for version control.

- GitHub
  - The repository is hosted on GitHub.

- GitHub Pages
  - The website is hosted on GitHub pages.
  
- W3C Markup Validation Service
  - Used to check the markup validity of the website.
  
- Responsitator
  - Responsinator.com was used to check if The Bread Baking Adviser works on all mobile devices.

- Favicon
  Favicon was used to replace the icon in the tab of the browser.

## Testing

#### Advice section

1. Users want to see how much bread they need to put on the bread wagon on the current day.
    1. When the page is visited the current day is automatically viewed. This has been tested on all days of the week.
    2. When another day is selected, all data changes immediately according to the selected day.
    3. All viewed amounts of bread are checked with the API it is loaded from. All numbers are viewed at the correct spots.
    4. Different data files with different amounts were tested to see if all calculations are done correctly. For example, all values were set to 5. This way it is easy to spot if something is miscalculated and if the averages are correct.
    5. The total amounts of bread are checked with different data values and are calculated correctly.

2. Users want to switch between the Advice, Input and Overview section.
    1. When clicked on the tabs at the top of the page the user is redirected to the correct page.
    2. When clicked on the 'Overview' button at the bottom of the page, the user is redirected to the overview page immediately.
  
#### Input section

1. Users want to edit or input the amounts of bread.
    1. When clicked on the input space, the space is automatically emptied for ease of use and to prevent the user from entering too many digits.
    2. The user is only able to enter a number between 0 and 40. This is defined in the form element. If the user does manage to enter a number that is not between 0 and 40 (for example by using copy-paste) and tries to submit it, an error message will pop up at the bottom of the page to point out that the user should input a number between 0 and 40.
    3. The user cannot submit an empty field. If the user uses backspace to delete the value in the form and leaves it empty when submitting, an error message will pop up at the bottom of the page to point out that all fields need to contain a value.
    4. The user cannot submit a letter or a float. When the user tries to submit this, an error message will pop up at the bottom of the page to point out that the user should input numerical value and that it should be an integer.
    5. The user cannot submit a negative value. When the user tries to submit this, an error message will pop up at the bottom of the page to point out that the user should input a positive value.
    6. The user cannot submit more leftover bread than baked bread. In other words: if the value in the left column is lower than the corresponding value in the right column, an error message will pop up at the bottom of the page to point out that leftover bread cannot be higher than the amount of baked bread.

2. Users want to submit their inputted data.
    1. When the inputted data is not valid according to the above described rules, the data won't be sent.
    2. When data has already been submitted for a certain day, the submit button will turn grey and displays the text: 'Already submitted'. This refreshes every day. For example, if a user enters data on a tuesday, for that tuesday, it can not be submitted again that tuesday. On wednesday, if needed, the user will be able to submit new data for tuesday. Because it is likely that several employees are at work on a certain day, it should be prevented that more than one user submits data for a certain day. **(Please read note)**
    3. When the user submits valid data, a modal appears that asks if the user is certain about the inputted data. The user can click on the close button to edit the inputted data if there are second thoughts.
    4. When the user is certain about the inputted values the confirm button is clicked in the modal. A loader appears and a confirmation message appears when the data is succesfully submitted. It has been tested if the data is correctly submitted by verifiying the data in the API. After a two second timeout, the user is redirected to the 'Advice' section to prevent the user from accidentally clicking the submit button more than once.
    
*Note: The bread baking advisors remembers all the data for a specific day, for all types of bread, for a total of four weeks. When new data is submitted, it forgets the data of week 4 and replaces it with the data of week 3. Data of week 3 becomes data of week 2, and data of week 2 becomes data of week 1. The newly submitted data is stored in week 1. Should it happen that data is submitted for a certain day more than once, the weeks will shift according to this system and the total amounts for that day wont be as accurate anymore. To prevent this from happening, a date is viewed above the submit button so the user can see when the data for a specific data has been updated most recently. I am aware that this is not the most solid system, but at the point of developing it seemed to complex to change this system. As described in the 'Features left to implement', it is planned to develop a system for editing data to make the system more solid.*

#### Overview section

1. Users want to see how much bread was sold relatively last week.
    1. When chart data is loaded, amounts are viewed correctly in the first barchart. This has been tested by logging the used data and checking it with the API. Also, different types of data have been used. For example, all values were set to 5. This way it is easy to spot if something is miscalculated and if the averages are correct.

2. Users want to see how much boxes of bread should be ordered for next week.
    1. New orders of boxes are done every tuesday morning. The user can immediately see how much boxes should be ordered. Some boxes of certain breadtypes are packed with 12 pieces, others are packed with 13 pieces. The amount of consumed pieces of every breadtype are gathered correctly per breadtype. This has been tested by logging the console and checking it with the API. To make safe orders, the Math. ceil() function was used to always make sure an extra box is taken into account.

3. Users want to see how much bread was sold last four weeks.
    1. When chart data is loaded, amounts are viewed correctly in the second barchart. This has been tested by logging the used data and checking it with the API. Also, different types of data have been used. For example, all values were set to 5. This way it is easy to spot if something is miscalculated and if the averages are correct.

#### Different mobile devices

1. The user wants to view the site on its preferred mobile device.
    1. Responsinator.com was used to see if all data is viewed correctly on mobile devices. It has been confirmed that it does so.

#### Different desktop browsers

1. The user wants to view the site on a desktop.
    1. As stated, the Bread Baking Advisor was not designed for use on desktops.
    2. The Bread Baking Advisor is not viewed perfectly in FireFox; the barcharts on the overview page are not rendered within page view.
    3. The Bread Baking Advisor is not viewed perfectly in Microsoft Explorer; the barcharts on the overview page are not rendered at all.

#### Alternative testing concerning The Bakery Cafe's needs

1. Adviced amounts should be correct according to the Bakery Cafe's needs.
    1. For two weeks long, the calculations of the app were tested by using their data and baking the amounts of bread adviced by the Bread Baking Adviser. All amounts seem to be correct. The Bakery Cafe was almost sold out every day.
    2. For two weeks long, the calculations of the app were tested by using their data and ordering the amount of boxes adviced by the Bread Baking Adviser. All amounts seem to be correct. There wasn't a shortage on any type of bread.

## Deployment

#### Main process

The project is hosted on GitHub Pages.

- A project was started on AWS Cloud9;
- A GitHub repository was created;
- Filetypes were segregated into seperate folders;
- Issues came up concerning correct previews, so the project was imported into GitPod;
- The repository includes a README.md and index.html files;
- The GitHub repository was moved to GitHub Pages;

### The myJSON API

Different sets of data were used for development and testing means. To test true values in the API, data of baked amounts of bread and leftover amounts of bread were collected by The Bakery Cafe employees every day, from week 39 to 51 in the year of 2019. These data were manually inputted into the API, and are used for deployment. 

Employees of The Bakery Cafe will start using the app on the 4th of februari 2020. From that day the Bread Baking Adviser will collect its data through the input of the users. (The Bakery Cafe employees)

The initial data used to start is based on data collected in week 47 to 50 of 2019.

*Note: The data stored in the API could have been arranged more systematically. Instead of defining different properties for different weeks. Arrays could have been implemented into existing arrays to make the data more abstract. I am aware of this and will dedicate myself to do this in future projects.*

### Run locally

- On the GitHub repository of The Bread Baking Advisor, click 'Clone or download';
- Click 'Download ZIP';
- Unpack the downloaded ZIP file;
- Open the Index.html file with your preferred browser.

## Credits

### Content

- The names of the breadtypes were invented by Borgesius.

### Media

- The logo of The Bread Baking Advisor is based on the logo used on the official website of The Bakery Cafe [Het Bakkerscafe](https://www.hetbakkerscafe.nl/)
- The background with yellow stripes is based on the background used on the official website of The Bakery Cafe [Het Bakkerscafe](https://www.hetbakkerscafe.nl/)
- The font used is 'Traveling Typewriter'. It is a free to use font found on [Dafont](https://www.dafont.com/traveling-typewriter.font)

### Special acknowledgements to used technologies

- To render the barcharts using D3 was hard for me to accomplish at first. Special thanks to [Qiita](https://qiita.com/ekzemplaro) for making me understand.

*Yes, thank you very much!*

### Acknowledgements

I made the Bread Baking Advisor at first for my employer and colleagues at Het Bakkerscafe. I have been working there for 6 years and always enjoyed baking bread for, and with them. We baked so much bread. Sometimes too much. Even though it took a while to do it because of personal reasons, I managed to create a website that gives us the ability to bake what we need and it gives me a great feeling of accomplishment. Because of the education at Code Institute I have been able to learn a lot myself, and I was able to give my employer and colleagues a valuable tool as well. I truly hope I will see the Bakery Cafe make use of the Bread Baking Advisor. If I'm correct, it will surely limit any loss concerning the amounts of bread baked. :) 

Thank you Code Institute and Borgesius!

#### Special Thanks

• Borgesius

• Code Institute

• Other students from Code Institute

• Diederik de Bruin

• Dietie Borgesius

• Mariska Steege

• Myself :)

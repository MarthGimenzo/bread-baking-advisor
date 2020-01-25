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

- D3
  - D3 was used for manipulating documents based on the data in the API.
  
- Crossfilter
  - Crossfilter was used to support D3.

- DC
  - DC was used to support Crossfilter and D3.
  
- Queue.js
  Queue.js was used to support DC, Crossfilter and D3.
  


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

- Favicon
  Favicon was used to replace the icon in the tab of the browser.


## Testing

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1.	Contact form:
i.	Go to the "Contact Us" page
ii.	Try to submit the empty form and verify that an error message about the required fields appears
iii.	Try to submit the form with an invalid email address and verify that a relevant error message appears
iv.	Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.
You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Deployment
This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).
In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:

•	Different values for environment variables (Heroku Config Vars)?
•	Different configuration files?
•	Separate git branch?

In addition, if it is not obvious, you should also describe how to run your code locally.

## Credits

### Content

•	The text for section Y was copied from the Wikipedia article Z

### Media

•	The photos used in this site were obtained from ...

### Acknowledgements

•	I received inspiration for this project from X






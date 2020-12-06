---
layout: essay
type: essay
title: Checkpoint
date: 2020-12-01
labels:
  - Education
  - Programming
---

<img src="https://raw.githubusercontent.com/britniej/britniej.github.io/master/images/Roach_3_outline.png">

Describe your design for your site’s shopping cart. That is, will it be a separate page that the user can view and edit, or will it be integrated into the product pages? If so, describe in detail how this will work on your site. Provide several examples of using the cart.
As seen on the PDF outline, my cart will be on a seperate page that can be assessed at anytime after a user has logged in. Once someone has chosen items on any product page they will be brought to the cart page if validation is a success. The NAV BAR will have a cart link that can also be accessed at anytime. If a customer goes to the cart page, they can either adjust or confirm their quantities and checkout to reach the invoice page.


Explain specifically how you will use sessions to manage your shopping cart. In particular, what shopping cart data will be stored in the session, what data format will be used (NOT what data type, but the format like with the data format used for your registration data). 

Use code examples showing what data structures (such as arrays and their objects) you will use to manage the shopping cart data and how they will be used in a session.

How will you avoid access to your application when the user has not logged in or registered? 
I plan to use ONSUBMIT validation to make sure that all the proper quantity and registration data is valid before the user can move forward in the app to their account, cart, or invoice.


What are the particular security concerns you must address?
I must make sure that my code is using server side validation and not just client side to make sure that the information is properly validated by my server instead of trusting the clients browser.


Upon a successful login, how do you provide personalization in your UI? Explain how you did or will do this (paste code if necessary)
I will put the users name next to their cart and the checkout button as well. I will also include their username and email on the invoice page after successful checkout. I also plan to allow the users to edit their information in the account tab after successful login/registration.


How are you approaching Assignment 3 differently than Assignment 2?
Since we have alot more time, I am definitely going to spend more quality time researching and LEARNING the different functions and designs I wish to implement. I realized that after many hours of debugging that when it was all over I was so proud of myself that I could actually understand what the issues were and try to fix them this time instead of just frantically throwing together whatever code and examples I could find last minute.

# Who's Selling My Info?

A browser extension to detect pages with a California Consumer Privacy Act data sale opt out and notify users. 

**Learn more:**  
[Blog Post](https://oapostrophe.github.io/whos-selling-my-info/) about the project

**Get the extension:**
[Mozilla Extension Page](https://addons.mozilla.org/en-US/developers/addon/who-s-selling-my-info/edit)

## Background

What do Hulu, Walmart, and CNN have in common? You may not have noticed, but there's a new link on their homepage, along with 35.8% of the top 500 US websites.

As of July 2020, the California Consumer Privacy Act (CCPA) mandates that websites which sell users' information post a "clear and conspicuous" opt-out link titled "Do Not Sell My Personal Information."  Unlike prior US privacy laws, which only considered personal information to be on identifying information like name and date of birth, CCPA updates the definition of personal information to reflect the age of big data.  In the modern internet, companies no longer need a name or physical address to identify who you are: for data brokers who hold extensive profiles on nearly every US consumer, it takes no more than an identifying number stored in a cookie, an IP address, or even someone's browsing history for them to match activity to a profile containing a name and other personal information.  And in an increasingly ubiquitous manner, websites we visit sell exactly such information to third-party data brokers, who track our activity across the web.

Since CCPA's passage, many website have added links for California users to opt out of their information being sold. However, despite CCPA's requirement such links be "clear and conspicuous", my summery 2020 [research](https://arxiv.org/abs/2009.07884) revealed that most are anything but. Companies use every trick in the book to hide the opt-out link in places that it won't be seen so that they can continue to sell users' information without us knowing it's even happening, let alone that there is a way to opt out.

This extension tries to correct that course and let you see the web the way the CCPA intended: with a clear and conspicuous notification when your information is being sold, along with the ability to opt out.  For more background, check out my [blog post](https://oapostrophe.github.io/ccpa-study/) about privacy, tracking, and my research on CCPA.

## The Extension

The extension will search any web-pages you visit for the presence of the words "Do Not Sell" or "Don't Sell", which represents almost every CCPA opt-out link and
are very rarely used in other contexts on website homepages. If such words are found, it means that the website is selling your personal information! The extension will display a red notification in the lower-left corner in these cases, which when clicked will directly take you to the site's opt-out page as if you clicked the link itself. You can also dismiss the notification by clicking the "x" button.

## Installation Instructions



## Limitations

This extension only detects websites that display a CCPA opt-out in the first place. Since many companies only display such a link to users with a California IP address, the extension will not be as effective for non-California residents. Furthermore, only 35.8% of the top 500 websites implemented a CCPA opt-out link after the law took effect. The number that actually sell user information is likely much higher, meaning that not all websites which sell your information will be detected by this extension. A few websites, instead of an opt-out link, display a CCPA notice in a banner, which may not be detected by this extension. The extension may also generate false positives if a website has the words "Do Not Sell" in some other context, like when viewing this ReadMe. The extension won't currently remember if you've already exercised your opt-out rights, and will keep saying that the page is selling your information based on the fact that it contains an opt-out link. Finally, while this extension can help let you know when your information is being sold, many websites make it difficult or impossible to actually complete their opt-out process. Intentionally difficult designs are common, and many opt-out requests don't actually stop your information from being sold.

## Guide to Source Files

Coming Soon!

# Who's Selling My Info?
Firefox Extension to detect pages with a California Consumer Privacy Act-mandated "Do Not Sell My Personal Information" link  and notify users with a banner through which they can access the opt-out.

Background:
The California Consumer Privacy Act, as of July 2020, mandates that websites which sell users' information post a link on their page allowing opt-out from this practice.  The act requires this link to be "clear and conspicuous" as well as to be specifically titled "Do Not Sell My Personal Information."  However, a study of the top 500 websites revealed that most of these links are anything but.  Companies use every trick in the book to hide the opt-out link in places that it won't be seen, so that they can continue to sell users' information without them knowing it's even happening, let alone that there is a way to opt out.

The reason this law is so impactful is that it expands the definition of "personal information" beyond the scope of what's been considered as such in the past.  While previous privacy laws like the GDPR focused on information identifying users by name, in the age of big data, companies don't need your name in order to identify who you are.  As data brokers hold profiles containing thousands of pieces of information on nearly every US consumer, it takes as little as an identifying number stored in a cookie on your computer, your IP address, or even your browsing history for them to match your activity to a profile with your name and other personal information.

In an increasingly ubiquitous manner, such information is used to track more and more of our activity across the web, potentially revealing sensitive information about us like health conditions, sexual orientation, and political beliefs.  An alarming number of websites sell the ability to track such activity to third parties without our knowledge or control.  And once sold, it's impossible to say whose hands our information will eventually end up in, and how it will be used.

The CCPA attempts to address these trends by expanding the definition of what information is considered personally identifiable to include such tracking practices.  Thus, since the law's passage, many website have added links for California users to opt-out of their information being sold.  However, a study has found that the law's actual impact has been almost entirely mitigated by the way these links have been implemented.  Most websites have hidden these links away in locations that almost no users ever see, let alone interact with.

This extension tries to correct that course and let you see the web the way the CCPA intended: with a clear and conspicuous notification when your information is being sold, along with the ability to opt out.

The Extension:
The extension will search any web-pages you visit for the presence of the words 'Do Not Sell' or 'Don't Sell', which represents almost every CCPA opt-out link and 
are very rarely used in other contexts on webpages.  If such words are found, it means that the website is selling your personal information!  The extension will display a red notification in the lower-left corner in these cases, which when clicked will directly take you to the site's opt-out page as if you clicked the link itself.  You can also dismiss the notification by clicking the "x" button.

Installation Instructions:
Coming Soon!

Limitations:
This extension only detects websites that display a CCPA opt-out in the first place.  Since most companies only display such a link to users with a California IP address, the extension will not be effective for non-California residents.  Furthermore, only 35.8% of the top 500 websites implemented a CCPA opt-out link after the law took effect.  The number that actually sell user information is likely much higher, meaning that not all websites which sell your information will be detected by this extension.  A few websites, instead of an opt-out link, display a CCPA notice in a banner, which may not be detected by this extension.  The extension may also generate false positives if a website has the words "Do Not Sell" in some other context, like when viewing this ReadMe.  The extension won't know if you've exercised your opt-out rights, and will keep saying that the page is selling your information based on the fact that it contains an opt-out link.  Finally, while this extension can help let you know when your information is being sold, many websites make it difficult or impossible to actually complete their opt-out process.  Intentionally difficult designs are common, and many opt-out requests don't actually stop your information from being sold.  As such, it's important to take further steps to protect your privacy to the extent possible.

Guide to Source Files:
Coming Soon!




"use client";

import { useState, use } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiArrowLeft, FiCalendar, FiClock, FiGlobe } from "react-icons/fi";

const translations = {
  en: {
    backToBlog: "Back to Blog",
    backToHome: "Back to Home",
    published: "Published",
    readTime: "read time",
    category: "Category",
    linkedInUrl: "https://www.linkedin.com/in/mhhaquejisan/",
    connectOnLinkedIn: "Connect on LinkedIn",
    letMeKnowYourThoughts: "Let me know your thoughts!",
    thoughtsDescription:
      "I'd love to hear your perspective on this topic. Feel free to share your thoughts and experiences in the comments or connect with me directly.",
  },
  bn: {
    backToBlog: "ব্লগে ফিরুন",
    backToHome: "হোম পেজে ফিরুন",
    published: "প্রকাশিত",
    readTime: "পাঠের সময়",
    category: "বিভাগ",
    linkedInUrl: "https://www.linkedin.com/in/mhhaquejisan/",
    connectOnLinkedIn: "লিংকডইনে সংযোগ করুন",
    letMeKnowYourThoughts: "আপনার চিন্তাভাবনা জানান!",
    thoughtsDescription:
      "আমি এই বিষয়ে আপনার দৃষ্টিভঙ্গি শুনতে চাই। মন্তব্যে আপনার চিন্তাভাবনা এবং অভিজ্ঞতা শেয়ার করতে বা সরাসরি আমার সাথে যোগাযোগ করতে দ্বিধা করবেন না।",
  },
};

const blogPosts = {
  en: {
    4: {
      id: 4,
      title: "Why Do Government Services Feel So Slow?",
      date: "2024-09-26",
      readTime: "12 min read",
      category: "Public Policy",
      content: `
Why Do Government Services Feel So Slow?
Is job security creating an incentive problem in Bangladesh's public sector?

Walk into a modern private bank in Bangladesh and you may notice something immediately.

The interior is polished.
The queue is organized.
The employees have performance targets.
Digital services are everywhere.
Processes are designed around the customer.

Then walk into many government offices—or some state-owned institutions—and the contrast can feel enormous.

Old files.
Paper-heavy processes.
Long queues.
Multiple desks for a single service.
Manual signatures.
Unclear procedures.

And sometimes, a simple task that could take minutes ends up taking hours—or days.

So the obvious question is:
Why?

Is it because the government doesn't have enough money?
Is it because government employees are paid too little?
Is it because they are less motivated?
Is it poor management?
Is it outdated technology?
Or is there something deeper happening inside the incentive structure of the public sector?

I think the answer is a combination of all of these—but incentives and accountability deserve much more attention than they usually receive.

The interesting paradox of the government job

In Bangladesh, government employment is highly desirable.

Every year, enormous numbers of young people compete for a limited number of government positions. The attraction is understandable:

- strong job security
- predictable career progression
- pensions and other benefits in many positions
- social prestige
- institutional authority
- comparatively stable employment
- and, in some roles, considerable influence over citizens and businesses

This creates an interesting paradox.

If government employment is so desirable, why doesn't that automatically produce highly motivated public servants?

Because job satisfaction and organizational performance are not the same thing.

A person can be very satisfied with their job while the organization they work for is still inefficient.

And this is where the discussion becomes much more interesting.

The private sector has a different equation

Imagine two employees.

Employee A works in a private company.
If they consistently perform badly, customers complain, targets are missed, revenue falls, their manager notices, and eventually their career may suffer.

Employee B works in an institution where performance is difficult to measure, promotion is heavily influenced by seniority or administrative rules, and dismissal for ordinary underperformance is extremely difficult.

Even if Employee A and Employee B are equally talented and equally hardworking at the beginning, their environments create different incentives over time.

This doesn't mean Employee B is lazy.
It means the system may not reward extra effort strongly enough.

The World Bank's global research on public-sector workforce performance makes a similar point: public-sector performance depends not only on wages and the number of employees, but also on management practices, performance evaluation, incentives, accountability and organizational systems.

That is a very important distinction.

People respond to the systems in which they work.

But is funding the real problem?

Partly.

Government offices need money for:

- modern buildings
- computers
- networks
- cybersecurity
- digital databases
- automation
- employee training
- customer-service infrastructure
- maintenance

Without investment, modernization is impossible.

But money alone doesn't solve the problem.

The World Bank has specifically emphasized that better public services do not come simply from modern facilities, technology or staff training. Institutional arrangements, accountability and citizen engagement also matter.

In fact, Bangladesh is currently receiving major support for exactly this type of institutional modernization. A World Bank project approved in 2025 includes $250 million aimed at improving transparency, accountability and efficiency in key government agencies, including through digitization of business processes.

So the problem is clearly bigger than simply:
"Government offices don't have enough money."

What about salaries?

This is another complicated issue.

It is tempting to say:
"Pay government employees more and they will work harder."

But compensation alone doesn't guarantee productivity.

Likewise, saying:
"Government employees are well paid, so they have no excuse."
is also too simplistic.

The more important question is:
How closely is compensation and career progression connected to performance?

A highly capable employee and a mediocre employee should not experience exactly the same professional incentives if their contributions are dramatically different.

The World Bank's research on public-sector workforce performance highlights the importance of compensation structures, merit-based hiring, performance management and management practices—not simply the absolute level of government salaries.

That brings us to perhaps the biggest issue.

The missing ingredient: accountability

This may be the heart of the problem.

In a competitive private company, the customer has an enormous amount of power.

If a bank provides terrible service, customers can move their money.
If a telecom company provides terrible service, customers can switch providers.
If a restaurant provides terrible service, customers can go somewhere else.

Competition creates pressure.

But what happens when citizens cannot easily choose another provider?

You cannot simply choose another passport office.
You cannot choose another land registry because your local office is slow.
You cannot change your government because one particular administrative process was frustrating.

And this creates a fundamental difference between customers in the private sector and citizens dealing with the state.

The citizen often has very little ability to exit.

Therefore, the system must create accountability through other mechanisms.

Performance measurement.
Transparent procedures.
Complaint mechanisms.
Digital tracking.
Independent oversight.
Service-level standards.
Audits.
Public reporting.
And consequences for persistent failure.

Job security isn't necessarily the problem

Here I would challenge one common assumption.

It is easy to say:
"Government employees are lazy because they cannot be fired."

But I don't think that explains the whole story.

Job security can actually be a good thing.

Imagine a civil servant responsible for collecting taxes, regulating businesses, administering justice, or approving public infrastructure.

You don't necessarily want that person worrying every morning:
"If I make an unpopular but correct decision, will my boss fire me?"

Public institutions need independence and stability.

The real problem is not job security.
The problem is job security without sufficiently strong performance accountability.

Those are very different things.

You can have:
High job security + high accountability
and create an excellent institution.

Or:
High job security + weak accountability
and gradually create organizational complacency.

That distinction matters.

And what about the office environment?

This is where we often confuse appearance with productivity.

A modern office doesn't automatically mean a productive institution.

A beautiful private bank branch with glass walls and digital screens can still provide terrible financial services.

Likewise, a government office with an old building can contain highly competent employees.

But physical infrastructure does matter because it reflects something larger:
How seriously does an organization think about the experience of the person it serves?

Modern service design asks:

How many steps does the citizen have to take?
How many documents are actually necessary?
Can the citizen complete this online?
Can information be entered once instead of five times?
Can the citizen see the status of the application?
Can two government departments share information rather than sending the citizen from one office to another?

This is not simply about interior decoration.
It is about process design.

The banking example is particularly interesting

Bangladesh's banking sector provides a useful comparison.

Bangladesh Bank currently identifies state-owned commercial banks alongside private commercial banks and foreign banks within the country's banking system.

And research published through the Bangladesh Bank Training Academy has found significant differences in measured efficiency among state-owned and private commercial banks. In one 2017–2022 study covering selected banks, the measured technical, allocative and cost-efficiency scores of conventional state-owned banks were substantially lower than those of the selected conventional private banks.

That doesn't prove that every private bank is better than every government bank.

But it does provide evidence for an important question:
What happens when organizations operate under different competitive and managerial incentives?

Private banks have strong reasons to think about:

- customer retention
- revenue
- operating costs
- technology
- brand reputation
- service speed
- employee productivity
- market share

A government-owned institution may have a different set of objectives.

It may be expected to provide services that are socially necessary even when they aren't commercially attractive.

That makes a direct comparison imperfect.

But it also makes management quality and institutional incentives even more important.

So, are government employees less motivated?

Not necessarily.

In fact, I think this is where the public debate often becomes unfair.

There are excellent government employees in Bangladesh.
There are civil servants who work extremely hard.
There are officers who stay late, solve complicated problems, introduce digital systems and genuinely care about citizens.

The problem is that a few highly motivated individuals cannot permanently compensate for a weak organizational system.

If the system rewards innovation poorly, eventually innovators become frustrated.
If promotions don't sufficiently reflect performance, high performers may stop pushing themselves.
If bad performance has few consequences, organizational standards can gradually decline.
If changing a process requires approval from five layers of hierarchy, employees may eventually stop trying to change it.

This is not a uniquely Bangladeshi human characteristic.
It is an organizational-design problem.

The real question: what does the system reward?

This may be the most important question we can ask.

Suppose an employee spends six months redesigning a process that reduces citizens' waiting time from three hours to thirty minutes.

What happens to that employee?

Does their organization recognize the achievement?
Does it affect promotion?
Does it affect compensation?
Does senior management celebrate it?
Does the new process become a standard across other offices?

Or does the employee receive nothing beyond a polite:
"Good job."

Now consider the opposite.

Suppose another employee continues using an inefficient process for ten years.

What happens?

If absolutely nothing happens, the system has communicated a very powerful message:
Improvement is optional.

That message can be more damaging than low salaries or old computers.

Digitalization can change the equation

Technology is one of the most powerful tools available to governments because it can make performance visible.

Consider the difference between:
"Your application is being processed."
and:
"Application #45821 — received at 10:42 AM — document verification completed — currently awaiting approval — expected completion: Thursday."

The second system creates transparency.
It also creates data.

Management can now ask:

- Which office takes the longest?
- Which process creates the most delays?
- Which employees handle the highest workload?
- Where are applications getting stuck?
- How many cases are completed within the promised time?
- Which offices consistently outperform others?

Once performance becomes measurable, accountability becomes much easier.

Bangladesh's current public-sector modernization efforts are moving in precisely this direction, including digital procurement, digital audit processes, tax administration modernization, integrated data systems and real-time monitoring.

Perhaps we need to change what "government job" means

For decades, the dream has often been:
Get a government job → secure your future → remain employed → retire safely.

Perhaps the future model should be:
Get a government job → serve citizens → keep learning → meet measurable standards → innovate → earn greater responsibility.

Security should remain.
But security should come with responsibility.
Authority should come with accountability.
Benefits should come with expectations.
And promotion should increasingly reflect contribution rather than simply the passage of time.

What would a better public sector look like?

Imagine a government office where:

1. Every service has a measurable time limit
Citizens know exactly how long something should take.

2. Every application is digitally trackable
No more wondering where the file is.

3. Employees have clear performance indicators
Not meaningless targets—but indicators connected to actual service outcomes.

4. High performers are recognized
Good work should create career opportunities.

5. Persistent underperformance is addressed
Accountability should be fair, transparent and evidence-based.

6. Citizens can easily complain
And complaints should generate data that management actually uses.

7. Offices benchmark themselves against each other
Why should one government office process something in two days while another takes two weeks?

8. Technology removes unnecessary human interaction
Whenever possible, the citizen shouldn't need to know which desk, officer or department handles a particular step.
The system should handle it.

So, is the problem laziness?

I don't think that is the right question.

The better question is:
Does the system consistently reward good performance and make poor performance visible?

If the answer is no, then even a workforce full of intelligent, ambitious people can eventually become less innovative.

And if the answer is yes, even a traditionally bureaucratic organization can transform itself.

That is why I don't believe the solution is simply:
"Hire better people."

Bangladesh already has many talented people.

Nor is it simply:
"Pay them more."

Compensation matters, but it is only one part of the equation.

Nor is it:
"Build nicer offices."

Infrastructure helps, but beautiful buildings cannot repair broken processes.

The deeper solution is to redesign the institutional incentive system.

The uncomfortable conclusion

Perhaps Bangladesh's public-sector challenge isn't that government employees have too many benefits.

Perhaps the bigger problem is that those benefits are not always sufficiently connected to measurable public value.

Job security can protect independence.
Good salaries can attract talented people.
Social prestige can attract ambitious candidates.
Authority can help officials make decisions.
Technology can increase efficiency.

But none of these automatically creates excellent public service.

What ultimately matters is the relationship between:
People + incentives + management + technology + accountability + citizen experience.

And that is why public-sector reform is much harder than simply buying computers or renovating offices.

The goal shouldn't be to make government employees work like private-sector employees.

The goal should be to build government institutions where public servants have the tools, incentives, autonomy and accountability to deliver excellent public service.

Because at the end of the day, citizens aren't asking government offices to look like corporations.

They are asking for something much simpler:
"If I am entitled to a service, please make it easy, transparent, predictable and respectful."

That should not be too much to ask.

And perhaps the next generation of Bangladesh's public-sector reform should start with one simple question:
"What would happen if we designed every government service around the citizen instead of around the bureaucracy?"

That question might be more important than any new building, new software or new policy.

I'd love to hear your thoughts on this topic!
      `,
    },
  },
  bn: {
    4: {
      id: 4,
      title: "সরকারি সেবাগুলো কেন এত ধীর মনে হয়?",
      date: "2024-09-26",
      readTime: "১২ মিনিটের পাঠ",
      category: "পাবলিক পলিসি",
      content: `
সরকারি সেবাগুলো কেন এত ধীর মনে হয়?
বাংলাদেশের পাবলিক সেক্টরে চাকরির নিরাপত্তা কি একটি প্রণোদনা সমস্যা তৈরি করছে?

বাংলাদেশের একটি আধুনিক বেসরকারি ব্যাংকে প্রবেশ করলে আপনি সাথে সাথে কিছু লক্ষ্য করতে পারেন।

ইন্টেরিয়রটি পরিষ্কার।
সারিটি সংগঠিত।
কর্মচারীদের কর্মক্ষমতার লক্ষ্য রয়েছে।
ডিজিটাল সেবা সর্বত্র।
প্রক্রিয়াগুলি গ্রাহকের চারপাশে ডিজাইন করা হয়েছে।

তারপর অনেক সরকারি অফিসে বা কিছু রাষ্ট্রীয় প্রতিষ্ঠানে হাঁটলে এবং বৈসাদৃশ্যটি বিশাল মনে হতে পারে।

পুরানো ফাইল।
কাগজ-ভারী প্রক্রিয়া।
দীর্ঘ সারি।
একটি একক সেবার জন্য একাধিক ডেস্ক।
ম্যানুয়াল স্বাক্ষর।
অস্পষ্ট পদ্ধতি।

এবং কখনও কখনও, মিনিটে সম্পন্ন হতে পারে এমন একটি সাধারণ কাজ শেষ পর্যন্ত ঘন্টা বা দিন লাগে।

তাই স্পষ্ট প্রশ্ন হল:
কেন?

এটা কি সরকারের কাছে পর্যাপ্ত অর্থ নেই বলে?
এটা কি সরকারি কর্মচারীদের খুব কম বেতন দেওয়া হয় বলে?
এটা কি তারা কম অনুপ্রাণিত বলে?
এটা কি দুর্বল ব্যবস্থাপনা বলে?
এটা কি পুরানো প্রযুক্তি বলে?
নাকি পাবলিক সেক্টরের প্রণোদনা কাঠামোর ভেতরে গভীর কিছু ঘটছে?

আমি মনে করি উত্তরটি এই সবগুলির সমষ্টি - কিন্তু প্রণোদনা এবং জবাবদিহিতা সাধারণত যা পায় তার চেয়ে অনেক বেশি মনোযোগ প্রাপ্য।

সরকারি চাকরির আকর্ষণীয় বৈপরীত্য

বাংলাদেশে, সরকারি কর্মসংস্থান অত্যন্ত আকাঙ্ক্ষিত।

প্রতি বছর, সীমিত সংখ্যক সরকারি পদের জন্য বিশাল সংখ্যক তরুণ প্রতিযোগিতা করে। আকর্ষণটি বোধগম্য:

- শক্তিশালী চাকরির নিরাপত্তা
- ভবিষ্যদ্বাণীযোগ্য ক্যারিয়ার অগ্রগতি
- অনেক পদে পেনশন এবং অন্যান্য সুবিধা
- সামাজিক মর্যাদা
- প্রাতিষ্ঠানিক কর্তৃত্ব
- তুলনামূলকভাবে স্থিতিশীল কর্মসংস্থান
- এবং, কিছু ভূমিকায়, নাগরিক এবং ব্যবসায়ের উপর উল্লেখযোগ্য প্রভাব

এটি একটি আকর্ষণীয় বৈপরীত্য তৈরি করে।

যদি সরকারি কর্মসংস্থান এত আকাঙ্ক্ষিত হয়, তবে এটি স্বয়ংক্রিয়ভাবে অত্যন্ত অনুপ্রাণিত পাবলিক সার্ভেন্ট তৈরি করে না কেন?

কারণ চাকরি সন্তুষ্টি এবং সাংগঠনিক কর্মক্ষমতা এক জিনিস নয়।

একজন ব্যক্তি তাদের চাকরি দিয়ে খুব সন্তুষ্ট হতে পারেন যখন তারা যে সংস্থায় কাজ করেন তা এখনও অদক্ষ।

এবং এখানেই আলোচনাটি আরও আকর্ষণীয় হয়ে ওঠে।

বেসরকারি সেক্টরের ভিন্ন সমীকরণ

দুই জন কর্মচারী কল্পনা করুন।

কর্মচারী এ একটি বেসরকারি কোম্পানিতে কাজ করেন।
তারা ধারাবাহিকভাবে খারাপ পারফর্ম করলে, গ্রাহকরা অভিযোগ করেন, লক্ষ্যগুলি মিস হয়, রাজস্ব কমে যায়, তাদের ম্যানেজার লক্ষ্য করেন, এবং অবশেষে তাদের ক্যারিয়ার ক্ষতিগ্রস্ত হতে পারে।

কর্মচারী বি এমন একটি প্রতিষ্ঠানে কাজ করেন যেখানে কর্মক্ষমতা পরিমাপ করা কঠিন, পদোন্নতি ভারীভাবে জ্যেষ্ঠতা বা প্রশাসনিক নিয়ম দ্বারা প্রভাবিত হয়, এবং সাধারণ অপর্যাপ্ত কর্মক্ষমতার জন্য বরখাস্ত করা অত্যন্ত কঠিন।

এমনকি যদি কর্মচারী এ এবং কর্মচারী বি শুরুতে সমানভাবে প্রতিভাবান এবং সমানভাবে কঠোর পরিশ্রমী হন, তবে তাদের পরিবেশ সময়ের সাথে সাথে ভিন্ন প্রণোদনা তৈরি করে।

এর মানে এই নয় যে কর্মচারী বি অলস।
এর মানে হল সিস্টেমটি অতিরিক্ত প্রচেষ্টাকে যথেষ্টভাবে পুরস্কৃত করতে পারে না।

বিশ্বব্যাংকের পাবলিক-সেক্টর কর্মশক্তি কর্মক্ষমতা সম্পর্কে বিশ্বব্যাপী গবেষণা একটি অনুরূপ পয়েন্ট তৈরি করে: পাবলিক-সেক্টর কর্মক্ষমতা কেবল বেতন এবং কর্মচারী সংখ্যার উপর নির্ভর করে না, তবে ব্যবস্থাপনা অনুশীলন, কর্মক্ষমতা মূল্যায়ন, প্রণোদনা, জবাবদিহিতা এবং সাংগঠনিক সিস্টেমের উপরও নির্ভর করে।

এটি একটি খুব গুরুত্বপূর্ণ পার্থক্য।

মানুষ তারা যে সিস্টেমে কাজ করে তার প্রতি সাড়া দেয়।

কিন্তু তহবিল কি আসল সমস্যা?

আংশিকভাবে।

সরকারি অফিসগুলির অর্থের প্রয়োজন:

- আধুনিক ভবন
- কম্পিউটার
- নেটওয়ার্ক
- সাইবার নিরাপত্তা
- ডিজিটাল ডেটাবেস
- অটোমেশন
- কর্মচারী প্রশিক্ষণ
- গ্রাহক-সেবা অবকাঠামো
- রক্ষণাবেক্ষণ

বিনিয়োগ ছাড়া আধুনিকীকরণ অসম্ভব।

কিন্তু অর্থ একা সমস্যা সমাধান করে না।

বিশ্বব্যাংক বিশেষভাবে জোর দিয়েছে যে উন্নত পাবলিক সেবা কেবল আধুনিক সুবিধা, প্রযুক্তি বা কর্মী প্রশিক্ষণ থেকে আসে না। প্রাতিষ্ঠানিক ব্যবস্থা, জবাবদিহিতা এবং নাগরিক জড়িতও গুরুত্বপূর্ণ।

বাস্তবে, বাংলাদেশ বর্তমানে এই ধরনের প্রাতিষ্ঠানিক আধুনিকীকরণের জন্য প্রধান সমর্থন পাচ্ছে। ২০২৫ সালে অনুমোদিত একটি বিশ্বব্যাংক প্রকল্পে $২৫০ মিলিয়ন অন্তর্ভুক্ত রয়েছে যা মূল সরকারি সংস্থাগুলিতে স্বচ্ছতা, জবাবদিহিতা এবং দক্ষতা উন্নত করার লক্ষ্যে, ব্যবসায়িক প্রক্রিয়াগুলির ডিজিটালাইজেশনের মাধ্যমে।

তাই সমস্যাটি স্পষ্টভাবে এর চেয়ে বড়:
"সরকারি অফিসগুলির কাছে পর্যাপ্ত অর্থ নেই।"

বেতন কীভাবে?

এটি আরেকটি জটিল সমস্যা।

এটি বলা প্রলোভনীয়:
"সরকারি কর্মচারীদের বেশি বেতন দিন এবং তারা আরও কঠোরভাবে কাজ করবে।"

কিন্তু ক্ষতিপূরণ একা উৎপাদনশীলতা নিশ্চিত করে না।

একইভাবে, বলা:
"সরকারি কর্মচারীরা ভাল বেতন পান, তাই তাদের কোনও অজুহাত নেই।"
এটিও খুব সরলীকৃত।

আরও গুরুত্বপূর্ণ প্রশ্ন হল:
ক্ষতিপূরণ এবং ক্যারিয়ার অগ্রগতি কর্মক্ষমতার সাথে কতটা ঘনিষ্ঠভাবে সংযুক্ত?

একজন অত্যন্ত সক্ষম কর্মচারী এবং একজন মধ্যম কর্মচারীর যদি অবদান নাটকীয়ভাবে ভিন্ন হয় তবে তাদের একই পেশাদার প্রণোদনা অনুভব করা উচিত নয়।

বিশ্বব্যাংকের পাবলিক-সেক্টর কর্মশক্তি কর্মক্ষমতা সম্পর্কে গবেষণা ক্ষতিপূরণ কাঠামো, মেরিট-ভিত্তিক নিয়োগ, কর্মক্ষমতা ব্যবস্থাপনা এবং ব্যবস্থাপনা অনুশীলনের গুরুত্ব তুলে ধরে - কেবল সরকারি বেতনের পরম স্তর নয়।

এটি আমাদের সম্ভবত সবচেয়ে বড় সমস্যায় নিয়ে আসে।

অনুপস্থিত উপাদান: জবাবদিহিতা

এটি সমস্যার হৃদয় হতে পারে।

একটি প্রতিযোগিতামূলক বেসরকারি কোম্পানিতে, গ্রাহকের কাছে বিশাল ক্ষমতা থাকে।

যদি একটি ব্যাংক ভয়ানক সেবা প্রদান করে, গ্রাহকরা তাদের অর্থ সরিয়ে নিতে পারেন।
যদি একটি টেলিকম কোম্পানি ভয়ানক সেবা প্রদান করে, গ্রাহকরা সরবরাহকারী পরিবর্তন করতে পারেন।
যদি একটি রেস্তোরাঁ ভয়ানক সেবা প্রদান করে, গ্রাহকরা অন্য কোথাও যেতে পারেন।

প্রতিযোগিতা চাপ তৈরি করে।

কিন্তু যখন নাগরিকরা সহজেই অন্য সরবরাহকারী চয়ন করতে পারেন না তখন কী হয়?

আপনি কেবল অন্য পাসপোর্ট অফিস চয়ন করতে পারেন না।
আপনি আপনার স্থানীয় অফিস ধীর হওয়ার কারণে অন্য জমি রেজিস্ট্রি চয়ন করতে পারেন না।
আপনি একটি নির্দিষ্ট প্রশাসনিক প্রক্রিয়া হতাশাজনক হওয়ার কারণে আপনার সরকার পরিবর্তন করতে পারেন না।

এবং এটি বেসরকারি সেক্টরের গ্রাহক এবং রাষ্ট্রের সাথে মোকাবিলা করা নাগরিকদের মধ্যে একটি মৌলিক পার্থক্য তৈরি করে।

নাগরিকের প্রায়শই প্রস্থান করার খুব কম ক্ষমতা থাকে।

তাই সিস্টেমটি অন্য প্রক্রিয়ার মাধ্যমে জবাবদিহিতা তৈরি করতে হবে।

কর্মক্ষমতা পরিমাপ।
স্বচ্ছ পদ্ধতি।
অভিযোগ প্রক্রিয়া।
ডিজিটাল ট্র্যাকিং।
স্বাধীন তত্ত্বাবধান।
সেবা-স্তরের মান।
অডিট।
পাবলিক রিপোর্টিং।
এবং অবিচ্ছিন্ন ব্যর্থতার জন্য পরিণতি।

চাকরির নিরাপত্তা কি সমস্যা?

এখানে আমি একটি সাধারণ ধারণা চ্যালেঞ্জ করব।

এটি বলা সহজ:
"সরকারি কর্মচারীরা অলস কারণ তাদের বরখাস্ত করা যায় না।"

কিন্তু আমি মনে করি না যে এটি পুরো গল্পটি ব্যাখ্যা করে।

চাকরির নিরাপত্তা আসলে একটি ভাল জিনিস হতে পারে।

কর সংগ্রহ, ব্যবসায় নিয়ন্ত্রণ, বিচার প্রশাসন, বা পাবলিক অবকাঠামো অনুমোদনের জন্য দায়িত্বে থাকা একজন সিভিল সার্ভেন্ট কল্পনা করুন।

আপনি অবশ্যই চান না যে সেই ব্যক্তি প্রতিদিন চিন্তা করুক:
"যদি আমি একটি অজনপ্রিয় কিন্তু সঠিক সিদ্ধান্ত নিই, তবে কি আমার বস আমাকে বরখাস্ত করবে?"

পাবলিক প্রতিষ্ঠানগুলির স্বাধীনতা এবং স্থিতিশীলতা প্রয়োজন।

প্রকৃত সমস্যাটি চাকরির নিরাপত্তা নয়।
সমস্যাটি হল পর্যাপ্তভাবে শক্তিশালী কর্মক্ষমতা জবাবদিহিতা ছাড়া চাকরির নিরাপত্তা।

এগুলি খুব ভিন্ন জিনিস।

আপনার থাকতে পারে:
উচ্চ চাকরির নিরাপত্তা + উচ্চ জবাবদিহিতা
এবং একটি চমৎকার প্রতিষ্ঠান তৈরি করুন।

অথবা:
উচ্চ চাকরির নিরাপত্তা + দুর্বল জবাবদিহিতা
এবং ধীরে ধীরে সাংগঠনিক অলসতা তৈরি করুন।

সেই পার্থক্যটি গুরুত্বপূর্ণ।

এবং অফিসের পরিবেশ কীভাবে?

এখানে আমরা প্রায়শই চেহারা এবং উৎপাদনশীলতা বিভ্রান্ত করি।

একটি আধুনিক অফিস স্বয়ংক্রিয়ভাবে একটি উৎপাদনশীল প্রতিষ্ঠান মানে নয়।

কাঁচের দেয়াল এবং ডিজিটাল স্ক্রিন সহ একটি সুন্দর বেসরকারি ব্যাংক শাখা এখনও ভয়ানক আর্থিক সেবা প্রদান করতে পারে।

একইভাবে, একটি পুরানো ভবন সহ একটি সরকারি অফিসে অত্যন্ত দক্ষ কর্মচারী থাকতে পারে।

কিন্তু শারীরিক অবকাঠামো গুরুত্বপূর্ণ কারণ এটি কিছু বড় প্রতিফলিত করে:
একটি সংস্থা তার যে ব্যক্তির সেবা করে তার অভিজ্ঞতা সম্পর্কে কতটা গুরুত্ব দেয়?

আধুনিক সেবা ডিজাইন জিজ্ঞাসা করে:

নাগরিককে কতগুলি পদক্ষেপ নিতে হবে?
কতগুলি নথি আসলে প্রয়োজন?
নাগরিক এটি অনলাইনে সম্পন্ন করতে পারেন?
তথ্য পাঁচবারের পরিবর্তে একবার প্রবেশ করা যায়?
নাগরিক আবেদনের অবস্থা দেখতে পারেন?
দুটি সরকারি বিভাগ তথ্য শেয়ার করতে পারে নাগরিককে এক অফিস থেকে অন্য অফিসে পাঠানোর পরিবর্তে?

এটি কেবল ইন্টেরিয়র সজ্জা সম্পর্কে নয়।
এটি প্রক্রিয়া ডিজাইন সম্পর্কে।

ব্যাংকিং উদাহরণটি বিশেষভাবে আকর্ষণীয়

বাংলাদেশের ব্যাংকিং সেক্টর একটি দরকারী তুলনা প্রদান করে।

বাংলাদেশ ব্যাংক বর্তমানে দেশের ব্যাংকিং ব্যবস্থার মধ্যে বেসরকারি বাণিজ্যিক ব্যাংক এবং বিদেশী ব্যাংকের পাশাপাশি রাষ্ট্রীয় মালিকানাধীন বাণিজ্যিক ব্যাংকগুলি চিহ্নিত করে।

এবং বাংলাদেশ ব্যাংক ট্রেনিং একাডেমির মাধ্যমে প্রকাশিত গবেষণায় রাষ্ট্রীয় মালিকানাধীন এবং বেসরকারি বাণিজ্যিক ব্যাংকগুলির মধ্যে পরিমাপযোগ্য দক্ষতায় উল্লেখযোগ্য পার্থক্য পাওয়া গেছে। ২০১৭–২০২২ সালের একটি গবেষণায়, নির্বাচিত প্রচলিত রাষ্ট্রীয় মালিকানাধীন ব্যাংকগুলির পরিমাপযোগ্য প্রযুক্তিগত, বরাদ্দকরণ এবং ব্যয়-দক্ষতা স্কোর নির্বাচিত প্রচলিত বেসরকারি ব্যাংকগুলির তুলনায় উল্লেখযোগ্যভাবে কম ছিল।

এটি প্রমাণ করে না যে প্রতিটি বেসরকারি ব্যাংক প্রতিটি সরকারি ব্যাংকের চেয়ে ভাল।

কিন্তু এটি একটি গুরুত্বপূর্ণ প্রশ্নের জন্য প্রমাণ প্রদান করে:
প্রতিষ্ঠানগুলি ভিন্ন প্রতিযোগিতামূলক এবং ব্যবস্থাপনাগত প্রণোদনার অধীনে কাজ করলে কী হয়?

বেসরকারি ব্যাংকগুলির চিন্তা করার শক্তিশালী কারণ রয়েছে:

- গ্রাহক ধরে রাখা
- রাজস্ব
- পরিচালন ব্যয়
- প্রযুক্তি
- ব্র্যান্ড খ্যাতি
- সেবা গতি
- কর্মচারী উৎপাদনশীলতা
- বাজার শেয়ার

একটি সরকারি মালিকানাধীন প্রতিষ্ঠানের একটি ভিন্ন লক্ষ্য থাকতে পারে।

এটি আশা করা যেতে পারে যে সেবাগুলি প্রদান করা হবে যা সামাজিকভাবে প্রয়োজনীয় এমনকি যখন তারা বাণিজ্যিকভাবে আকর্ষণীয় নয়।

এটি একটি সরাসরি তুলনা অপূর্ণ করে।

কিন্তু এটি ব্যবস্থাপনা মান এবং প্রাতিষ্ঠানিক প্রণোদনা আরও গুরুত্বপূর্ণ করে তোলে।

তাহলে, সরকারি কর্মচারীরা কি কম অনুপ্রাণিত?

অবশ্যই নয়।

বাস্তবে, আমি মনে করি এখানেই পাবলিক বিতর্ক প্রায়শই অন্যায় হয়ে ওঠে।

বাংলাদেশে চমৎকার সরকারি কর্মচারী আছেন।
সিভিল সার্ভেন্ট আছেন যারা অত্যন্ত কঠোরভাবে কাজ করেন।
অফিসার আছেন যারা দেরি পর্যন্ত থাকেন, জটিল সমস্যার সমাধান করেন, ডিজিটাল সিস্টেম প্রবর্তন করেন এবং প্রকৃতপক্ষে নাগরিকদের জন্য যত্নশীল।

সমস্যাটি হল যে কয়েকজন অত্যন্ত অনুপ্রাণিত ব্যক্তি একটি দুর্বল সাংগঠনিক সিস্টেমের জন্য স্থায়ীভাবে ক্ষতিপূরণ করতে পারে না।

যদি সিস্টেমটি উদ্ভাবনকে খারাপভাবে পুরস্কৃত করে, অবশেষে উদ্ভাবকরা হতাশ হয়ে পড়ে।
যদি পদোন্নতিগুলি যথেষ্টভাবে কর্মক্ষমতা প্রতিফলিত না করে, উচ্চ পারফর্মাররা নিজেদের ধাক্কা দিতে বন্ধ করতে পারে।
যদি খারাপ কর্মক্ষমতার কম পরিণতি থাকে, সাংগঠনিক মান ধীরে ধীরে হ্রাস পেতে পারে।
যদি একটি প্রক্রিয়া পরিবর্তন করতে পাঁচটি স্তরের অনুমোদনের প্রয়োজন হয়, কর্মচারীরা অবশেষে এটি পরিবর্তন করার চেষ্টা বন্ধ করতে পারে।

এটি একটি অনন্য বাংলাদেশী মানব বৈশিষ্ট্য নয়।
এটি একটি সাংগঠনিক-ডিজাইন সমস্যা।

প্রকৃত প্রশ্ন: সিস্টেমটি কী পুরস্কৃত করে?

এটি আমরা যে প্রশ্নটি জিজ্ঞাসা করতে পারি তার মধ্যে সম্ভবত সবচেয়ে গুরুত্বপূর্ণ।

ধরুন একজন কর্মচারী ছয় মাস একটি প্রক্রিয়া পুনরায় ডিজাইন করেছেন যা নাগরিকদের অপেক্ষা সময় তিন ঘন্টা থেকে ত্রিশ মিনিটে কমিয়েছে।

সেই কর্মচারীর কী হয়?

তাদের সংস্থা কি অর্জনটি স্বীকৃতি দেয়?
এটি কি পদোন্নতিকে প্রভাবিত করে?
এটি কি ক্ষতিপূরণকে প্রভাবিত করে?
সিনিয়র ব্যবস্থাপনা কি এটি উদযাপন করে?
নতুন প্রক্রিয়াটি কি অন্য অফিসগুলিতে একটি মান হয়ে ওঠে?

অথবা কর্মচারী কি একটি ভদ্র বাইরে কিছুই পান না:
"ভাল কাজ।"

এখন বিপরীতটি বিবেচনা করুন।

ধরুন অন্য একজন কর্মচারী দশ বছর ধরে একটি অদক্ষ প্রক্রিয়া ব্যবহার করে চলেছেন।

কী হয়?

যদি একেবারেই কিছু না হয়, তবে সিস্টেমটি একটি খুব শক্তিশালী বার্তা যোগাযোগ করেছে:
উন্নতি ঐচ্ছিক।

সেই বার্তাটি কম বেতন বা পুরানো কম্পিউটারের চেয়ে বেশি ক্ষতিকারক হতে পারে।

ডিজিটালাইজেশন সমীকরণ পরিবর্তন করতে পারে

প্রযুক্তি সরকারের জন্য উপলব্ধ সবচেয়ে শক্তিশালী সরঞ্জামগুলির মধ্যে একটি কারণ এটি কর্মক্ষমতা দৃশ্যমান করতে পারে।

মধ্যে পার্থক্য বিবেচনা করুন:
"আপনার আবেদন প্রক্রিয়া করা হচ্ছে।"
এবং:
"আবেদন #৪৫৮২১ — ১০:৪২ এএম-এ প্রাপ্ত — নথি যাচাই সম্পন্ন — বর্তমানে অনুমোদনের অপেক্ষায় — প্রত্যাশিত সমাপ্তি: বৃহস্পতিবার।"

দ্বিতীয় সিস্টেমটি স্বচ্ছতা তৈরি করে।
এটি ডেটা তৈরি করে।

ব্যবস্থাপনা এখন জিজ্ঞাসা করতে পারে:

- কোন অফিসটি সবচেয়ে বেশি সময় নেয়?
- কোন প্রক্রিয়াটি সবচেয়ে বেশি বিলম্ব তৈরি করে?
- কোন কর্মচারীরা সর্বোচ্চ কাজলোড পরিচালনা করে?
- আবেদনগুলি কোথায় আটকে যাচ্ছে?
- প্রতিশ্রুতিবদ্ধ সময়ের মধ্যে কতগুলি মামলা সম্পন্ন হয়?
- কোন অফিসগুলি ধারাবাহিকভাবে অন্যদের চেয়ে ভাল পারফর্ম করে?

একবার কর্মক্ষমতা পরিমাপযোগ্য হয়ে গেলে, জবাবদিহিতা অনেক সহজ হয়ে যায়।

বাংলাদেশের বর্তমান পাবলিক-সেক্টর আধুনিকীকরণ প্রচেষ্টাগুলি ঠিক এই দিকে এগিয়ে চলেছে, যার মধ্যে ডিজিটাল প্রক্রিয়াকরণ, ডিজিটাল অডিট প্রক্রিয়া, ট্যাক্স প্রশাসন আধুনিকীকরণ, একীভূত ডেটা সিস্টেম এবং রিয়েল-টাইম মনিটরিং অন্তর্ভুক্ত।

হয়তো আমাদের "সরকারি চাকরি" এর অর্থ পরিবর্তন করতে হবে

দশক ধরে, স্বপ্নটি প্রায়শই ছিল:
সরকারি চাকরি পান → আপনার ভবিষ্যৎ সুরক্ষিত করুন → কর্মরত থাকুন → নিরাপদে অবসর নিন।

হয়তো ভবিষ্যতের মডেলটি হওয়া উচিত:
সরকারি চাকরি পান → নাগরিকদের সেবা করুন → শিখতে থাকুন → পরিমাপযোগ্য মান পূরণ করুন → উদ্ভাবন করুন → আরও দায়িত্ব অর্জন করুন।

নিরাপত্তা থাকা উচিত।
কিন্তু নিরাপত্তা দায়িত্বের সাথে আসা উচিত।
কর্তৃত্ব জবাবদিহিতার সাথে আসা উচিত।
সুবিধাগুলি প্রত্যাশার সাথে আসা উচিত।
এবং পদোন্নতি ক্রমশ অবদানকে প্রতিফলিত করা উচিত কেবল সময়ের অতিবাহিত নয়।

একটি ভাল পাবলিক সেক্টর কেমন দেখতে পারে?

এমন একটি সরকারি অফিস কল্পনা করুন যেখানে:

১. প্রতিটি সেবার একটি পরিমাপযোগ্য সময় সীমা আছে
নাগরিকরা ঠিক জানেন কতক্ষণ সময় লাগতে হবে।

২. প্রতিটি আবেদন ডিজিটালভাবে ট্র্যাকযোগ্য
ফাইলটি কোথায় তা নিয়ে আর কোনও প্রশ্ন নেই।

৩. কর্মচারীদের স্পষ্ট কর্মক্ষমতা সূচক আছে
অর্থহীন লক্ষ্য নয় - কিন্তু প্রকৃত সেবা ফলাফলের সাথে সংযুক্ত সূচক।

৪. উচ্চ পারফর্মারদের স্বীকৃতি দেওয়া হয়
ভাল কাজ ক্যারিয়ার সুযোগ তৈরি করা উচিত।

৫. অবিচ্ছিন্ন অপর্যাপ্ত কর্মক্ষমতা সমাধান করা হয়
জবাবদিহিতা ন্যায্য, স্বচ্ছ এবং প্রমাণ-ভিত্তিক হওয়া উচিত।

৬. নাগরিকরা সহজেই অভিযোগ করতে পারেন
এবং অভিযোগগুলি ডেটা তৈরি করা উচিত যা ব্যবস্থাপনা আসলে ব্যবহার করে।

৭. অফিসগুলি একে অপরের সাথে বেঞ্চমার্ক করে
এক সরকারি অফিস কেন দুই দিনে কিছু প্রক্রিয়া করবে যখন অন্যটি দুই সপ্তাহ লাগে?

৮. প্রযুক্তি অপ্রয়োজনীয় মানব মিথস্ক্রিয়া সরিয়ে দেয়
যখনই সম্ভব, নাগরিকের জানা উচিত নয় যে কোন ডেস্ক, অফিসার বা বিভাগ একটি নির্দিষ্ট ধাপ পরিচালনা করে।
সিস্টেমটি এটি পরিচালনা করবে।

তাহলে, সমস্যাটি কি অলসতা?

আমি মনে করি না যে এটি সঠিক প্রশ্ন।

আরও ভাল প্রশ্ন হল:
সিস্টেমটি কি ধারাবাহিকভাবে ভাল কর্মক্ষমতা পুরস্কৃত করে এবং খারাপ কর্মক্ষমতা দৃশ্যমান করে?

যদি উত্তরটি না হয়, তবে এমনকি বুদ্ধিমান, উচ্চাভিলাষী মানুষের একটি কর্মশক্তি অবশেষে কম উদ্ভাবনী হতে পারে।

এবং যদি উত্তরটি হ্যাঁ হয়, এমনকি একটি ঐতিহ্যবাহী আমলাতান্ত্রিক সংস্থা নিজেকে রূপান্তর করতে পারে।

এটিই কারণ আমি বিশ্বাস করি না যে সমাধানটি কেবল:
"ভাল লোক নিয়োগ করুন।"

বাংলাদেশে ইতিমধ্যে অনেক প্রতিভাবান লোক আছে।

নাকি এটি:
"তাদের বেশি বেতন দিন।"

ক্ষতিপূরণ গুরুত্বপূর্ণ, কিন্তু এটি সমীকরণের কেবল একটি অংশ।

নাকি এটি:
"সুন্দর অফিস তৈরি করুন।"

অবকাঠামো সাহায্য করে, কিন্তু সুন্দর ভবন ভাঙা প্রক্রিয়া মেরামত করতে পারে না।

গভীর সমাধানটি হল প্রাতিষ্ঠানিক প্রণোদনা সিস্টেম পুনরায় ডিজাইন করা।

অস্বস্তিকর উপসংহার

হয়তো বাংলাদেশের পাবলিক-সেক্টর চ্যালেঞ্জ এই নয় যে সরকারি কর্মচারীদের অত্যধিক সুবিধা আছে।

হয়তো বড় সমস্যাটি হল যে সেই সুবিধাগুলি সর্বদা পরিমাপযোগ্য পাবলিক মূল্যের সাথে যথেষ্টভাবে সংযুক্ত থাকে না।

চাকরির নিরাপত্তা স্বাধীনতা রক্ষা করতে পারে।
ভাল বেতন প্রতিভাবান লোকদের আকর্ষণ করতে পারে।
সামাজিক মর্যাদা উচ্চাভিলাষী প্রার্থীদের আকর্ষণ করতে পারে।
কর্তৃত্ব কর্মকর্তাদের সিদ্ধান্ত নিতে সাহায্য করতে পারে।
প্রযুক্তি দক্ষতা বাড়াতে পারে।

কিন্তু এগুলির কোনওটিই স্বয়ংক্রিয়ভাবে চমৎকার পাবলিক সেবা তৈরি করে না।

চূড়ান্তভাবে গুরুত্বপূর্ণ হল মধ্যে সম্পর্ক:
মানুষ + প্রণোদনা + ব্যবস্থাপনা + প্রযুক্তি + জবাবদিহিতা + নাগরিক অভিজ্ঞতা।

এবং এটিই কারণ পাবলিক-সেক্টর সংস্কার কেবল কম্পিউটার কেনা বা অফিস সংস্কার করার চেয়ে অনেক কঠিন।

লক্ষ্যটি হওয়া উচিত নয় যে সরকারি কর্মচারীরা বেসরকারি সেক্টর কর্মচারীদের মতো কাজ করুক।

লক্ষ্যটি হওয়া উচিত সরকারি প্রতিষ্ঠান তৈরি করা যেখানে পাবলিক সার্ভেন্টদের চমৎকার পাবলিক সেবা দেওয়ার জন্য সরঞ্জাম, প্রণোদনা, স্বায়ত্তশাসন এবং জবাবদিহিতা রয়েছে।

কারণ দিনের শেষে, নাগরিকরা সরকারি অফিসগুলিকে কর্পোরেশনের মতো দেখতে চান না।

তারা অনেক সহজ কিছু চান:
"যদি আমি একটি সেবার অধিকারী হই, দয়া করে এটি সহজ, স্বচ্ছ, ভবিষ্যদ্বাণীযোগ্য এবং সম্মানজনক করুন।"

এটি খুব বেশি চাওয়া উচিত নয়।

এবং হয়তো বাংলাদেশের পাবলিক-সেক্টর সংস্কারের পরবর্তী প্রজন্ম একটি সাধারণ প্রশ্ন দিয়ে শুরু হওয়া উচিত:
"আমরা যদি প্রতিটি সরকারি সেবা আমলাতন্ত্রের পরিবর্তে নাগরিকের চারপাশে ডিজাইন করি তবে কী হবে?"

সেই প্রশ্নটি যেকোনও নতুন ভবন, নতুন সফটওয়্যার বা নতুন নীতির চেয়ে বেশি গুরুত্বপূর্ণ হতে পারে।

এই বিষয়ে আপনার চিন্তাভাবনা শুনতে আমি আগ্রহী!
      `,
    },
  },
};

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const postId = parseInt(id);
  const [language, setLanguage] = useState<"en" | "bn">("en");
  const t = translations[language];
  const post = blogPosts[language][postId as keyof typeof blogPosts.en];

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "bn" : "en"));
  };

  if (!post) {
    return (
      <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold">Post not found</h1>
          <Link
            href="/blog"
            className="mt-4 inline-block text-indigo-600 hover:text-indigo-500"
          >
            {t.backToBlog}
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-linear-to-br from-indigo-100 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        <div className="bg-grid-slate absolute inset-0 mix-blend-multiply dark:opacity-40" />
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur transition hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
            >
              <FiArrowLeft className="h-4 w-4" />
              {t.backToBlog}
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur transition hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
            >
              {t.backToHome}
            </Link>
          </div>

          <button
            onClick={toggleLanguage}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur transition hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
          >
            <FiGlobe className="h-4 w-4" />
            {language === "en" ? "বাংলা" : "English"}
          </button>
        </div>

        <article className="mx-auto max-w-4xl">
          {postId === 4 && (
            <div className="relative h-64 md:h-80 w-full mb-8 rounded-3xl overflow-hidden">
              <Image
                src="/blog/blog-government.png"
                alt="Government Services & Incentives"
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <header className="mb-8">
            <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
              <span className="inline-flex items-center gap-1">
                <FiCalendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString(
                  language === "en" ? "en-US" : "bn-BD",
                  {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  },
                )}
              </span>
              <span className="inline-flex items-center gap-1">
                <FiClock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl dark:text-white mb-4">
              {post.title}
            </h1>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300">
                {post.category}
              </span>
            </div>
          </header>

          <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
            {post.content.split("\n\n").map((paragraph, index) => {
              if (paragraph.trim().startsWith("- ")) {
                return (
                  <ul key={index} className="list-disc pl-6 my-4 space-y-2">
                    {paragraph
                      .split("\n")
                      .filter((line) => line.trim())
                      .map((line, i) => (
                        <li
                          key={i}
                          className="text-slate-700 dark:text-slate-300"
                        >
                          {line.replace("- ", "")}
                        </li>
                      ))}
                  </ul>
                );
              }

              if (paragraph.trim().endsWith(":")) {
                return (
                  <h3
                    key={index}
                    className="text-2xl font-semibold text-slate-900 dark:text-white mt-8 mb-4"
                  >
                    {paragraph}
                  </h3>
                );
              }

              if (
                paragraph.trim().startsWith("So, is the problem laziness?") ||
                paragraph.trim().startsWith("The better question:") ||
                paragraph
                  .trim()
                  .startsWith("এই বিষয়ে আপনার চিন্তাভাবনা শুনতে আমি আগ্রহী!")
              ) {
                return (
                  <h3
                    key={index}
                    className="text-2xl font-semibold text-slate-900 dark:text-white mt-8 mb-4"
                  >
                    {paragraph}
                  </h3>
                );
              }

              return (
                <p
                  key={index}
                  className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6"
                >
                  {paragraph}
                </p>
              );
            })}
          </div>

          {postId === 4 && (
            <div className="mt-12 rounded-2xl border border-slate-200/70 bg-gradient-to-br from-indigo-50 to-purple-50 p-8 dark:border-white/10 dark:from-indigo-900/20 dark:to-purple-900/20">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                {t.letMeKnowYourThoughts}
              </h3>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                {t.thoughtsDescription}
              </p>
              <a
                href={t.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-600/30 transition hover:-translate-y-0.5 hover:bg-indigo-500"
              >
                {t.connectOnLinkedIn}
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          )}
        </article>
      </div>
    </main>
  );
}

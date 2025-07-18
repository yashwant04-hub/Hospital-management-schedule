﻿# Hospital-management-schedule

 #  Hospital OT Scheduling System

This project is a web-based hospital **Operation Theater (OT) Scheduling System**, developed using HTML, CSS, JavaScript, and Firebase. It is designed to solve the logistical challenges faced in OT scheduling — such as doctor allocation, surgery timing, emergency handling, and resource management.

##  Problem Statement

Manual OT scheduling in hospitals is inefficient and lacks flexibility. This project transforms a **static schedule** into a **dynamic and interactive system** that allows hospital staff to:

- Manage doctor and patient information
- Organize and edit OT schedules dynamically
- Track surgical operations, anesthetics, pre/post-op events, and OT resources
- Monitor real-time and historical OT activities

##  System Modules

###  Admin Panel
-  Admin Login
-  Manage Doctor Details
-  Manage Patient Details
-  Post & Manage OT Schedules
-  Dashboard with OT analytics

###  User Panel
-  Register & Login
-  View Doctor Profiles
-  View Surgical Schedule (Upcoming & Past)

##  Features

- Dynamic surgery scheduling interface
- Emergency/addition/cancellation/postponement support
- Details captured per surgery:
  - Surgery date & time
  - OT ID
  - Anesthesia type & anesthesiologist
  - Assistant surgeon
  - Involved nurses (optional)
  - Pre-op and post-op events
  - Surgical reports (transcriptions, charts)
  - Materials, drugs, and special instruments
  - Doctor's remarks
- Admin dashboard for analyzing:
  - OT room usage
  - Daily/weekly OT activities
  - Material & resource planning

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: Firebase (Authentication + Realtime Database)
- **Design**: Responsive layout with modern UI/UX
- **Deployment**: Can be hosted using GitHub Pages, Firebase Hosting, or Netlify

##  Firebase Features

- Realtime storage for OT schedules, doctors, and patients
- Authentication system for Admins and Users
- Secure access for different modules (Admin vs User)

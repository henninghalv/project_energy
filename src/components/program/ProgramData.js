export default data = [
  {
    "title": "Start and registrations",
    "location": "Auditorium KA TBA001",
    "day": "Monday",
    "timeslot": "08:00 - 08:30",
    "timestamp": 0,  //TODO: Set using epoch
    "type": "info",
    "description": "The registrations for the conference will begin."
  },
  {
      "title": "Welcome from the Conference Chairs",
      "location": "Auditorium KA TBA001",
      "day": "Monday",
      "timeslot": "08:35 - 08:50",
      "timestamp": 0,  //TODO: Developers fix
      "type": "info",
      "description": "The Conference Chairs Pollet, Ødegård and Vik will give an opening welcome to the conferenc."
  },
  {
      "title": "???",
      "speaker": {
          "firstname": "Johan",
          "lastname": "Hustad",
          "title": "Mr."
      },
      "location": "Auditorium KA TBA001",
      "day": "Monday",
      "timeslot": "08:40 - 08:50",
      "timestamp": 0, //TODO: Developers fix
      "type": "keynote",
      "description": "What Johan Hustad will do, is unknown..."
  },
  {
      "title": "???",
      "speaker": {
          "firstname": "Bjarne",
          "lastname": "Foss",
          "title": "Mr."
      },
      "location": "Auditorium KA TBA001",
      "day": "Monday",
      "timeslot": "08:50 - 09:10",
      "timestamp": 0, //TODO: Developers fix
      "type": "keynote",
      "description": "What Bjarne Foss will do, is unknown... to us developers at least!"
  },
  {
      "title": "Hydrogen and Fuel Cells: The US DOE Perspective",
      "speaker": {
          "firstname": "Dimitrios",
          "lastname": " Papageorgopoulos",
          "title": "Dr."
      },
      "location": "Auditorium KA TBA001",
      "day": "Monday",
      "timeslot": "09:10 - 09:40",
      "timestamp": 0, //TODO: Developers fix
      "type": "keynote",
      "description": "What Dr. Papageorgopoulos will do, is unknown... to us developers at least!"
  },
  {
      "title": "???",
      "speaker": {
          "firstname": "Everett B.",
          "lastname": "Anderson",
          "title": "Mr."
      },
      "location": "Auditorium KA TBA001",
      "day": "Monday",
      "timeslot": "09:40 - 10:00",
      "timestamp": 0, //TODO: Developers fix
      "type": "keynote",
      "description": "What Mr. Anderson will do, is INDEED unknown... to us developers at least!"
  },
  {
      "title": "Coated stainless steel as bipolar plates in anion exchange membrane fuel cells ",
      "speaker": {
          "firstname": "Sebastian",
          "lastname": "Prouch",
          "title": "Mr."
      },
      "location": "Lecture Room KA-TB U302",
      "day": "Monday",
      "timeslot": "09:40 - 10:00",
      "timestamp": 0, //TODO: Developers fix
      "type": "workshop",
      "description": "What Mr. Prouch will do, is INDEED unknown... to us developers at least!"
  },
  {
      "title": "Refreshment break",
      "location": "???",
      "day": "Monday",
      "timeslot": "10:00 - 10:30",
      "timestamp": 0, //TODO: Developers fix
      "type": "refresh",
      "description": "Refreshment break! Feel free to mingle!"
  },

  //CONTINUE HERE!
  //EXAMPLE FOLLOWS>>>

  {
    "title": "Example event",  // Title of the event 
    "speaker": { // Speaker firstname, lastname and title (remove if no speaker). If no title, add "Mr." or "Ms.".
        "firstname": "Example", 
        "lastname": "Man",
        "title": "Mr."
    },
    "location": "", // Name of location where the event is happening
    "day": "", // Day given as "Monday" or "Tuesday". Remember capitalization!
    "timeslot": "", // Timeslot on the format "XX:XX - XX:XX"
    "timestamp": 0, //TODO: Developers fix
    "type": "", // Type of event: keynote | workshop | refresh | food | info
    "description": "" // A description of the event shown when event is pushed
},
  
//EXAMPLE END<<<


];
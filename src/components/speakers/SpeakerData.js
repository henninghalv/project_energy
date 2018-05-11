export default data = [
//       //EXAMPLE FOLLOWS>>>

//    {
//     "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
//       "first": "Example",
//       "last": "Man",
//       "title": "Mr.",
//     },
//     //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
//     "nationality": "", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
//     "workplace": "", // What workplace or company the speaker represents
//     "position": "", // The speakers position in given company
//     "info": "", // An abstract about the speaker
//   },
 
//   //EXAMPLE END<<<


// {
//     "name": {
//       "title": "Mr.",
//       "first": "Johan",
//       "last": "Hustad"
//     },
//     "nationality": "Norway",
//     "workplace": "NTNU Energy",
//     "position": "Director",
//     "info": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt, nunc in pharetra pellentesque, ipsum orci tincidunt enim, sit amet lacinia felis mauris ac mi. Integer ornare fermentum mi, id interdum nunc lobortis a. Quisque faucibus, erat eget pretium dapibus, elit lectus condimentum libero, feugiat tincidunt neque nisi quis dolor. Vivamus aliquet sagittis urna, sed dictum odio placerat vel. Donec sed blandit nisi. Curabitur ut leo commodo, hendrerit elit vitae, scelerisque nunc. Pellentesque nec lorem odio."
//   },
//   {
//     "name": {
//       "title": "Mr.",
//       "first": "Bjarne",
//       "last": "Foss"
//     },
//     "nationality": "Norway",
//     "workplace": "Research NTNU",
//     "position": "Pro-Rector",
//     "info": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt, nunc in pharetra pellentesque, ipsum orci tincidunt enim, sit amet lacinia felis mauris ac mi. Integer ornare fermentum mi, id interdum nunc lobortis a. Quisque faucibus, erat eget pretium dapibus, elit lectus condimentum libero, feugiat tincidunt neque nisi quis dolor. Vivamus aliquet sagittis urna, sed dictum odio placerat vel. Donec sed blandit nisi. Curabitur ut leo commodo, hendrerit elit vitae, scelerisque nunc. Pellentesque nec lorem odio."
//   },
//   {
//     "name": {
//       "title": "Dr.",
//       "first": "Dimitrios",
//       "last": "Papageorgopoulos"
//     },
//     "nationality": "United States of America",
//     "workplace": "US Department of Energy, USA",
//     "position": "???",
//     "info": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt, nunc in pharetra pellentesque, ipsum orci tincidunt enim, sit amet lacinia felis mauris ac mi. Integer ornare fermentum mi, id interdum nunc lobortis a. Quisque faucibus, erat eget pretium dapibus, elit lectus condimentum libero, feugiat tincidunt neque nisi quis dolor. Vivamus aliquet sagittis urna, sed dictum odio placerat vel. Donec sed blandit nisi. Curabitur ut leo commodo, hendrerit elit vitae, scelerisque nunc. Pellentesque nec lorem odio."
//   },
//   {
//     "name": {
//       "title": "Mr.",
//       "first": "Everett B.",
//       "last": "Anderson"
//     },
//     "nationality": "United States of America",
//     "workplace": "Proton OnSite",
//     "position": "???",
//     "info": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt, nunc in pharetra pellentesque, ipsum orci tincidunt enim, sit amet lacinia felis mauris ac mi. Integer ornare fermentum mi, id interdum nunc lobortis a. Quisque faucibus, erat eget pretium dapibus, elit lectus condimentum libero, feugiat tincidunt neque nisi quis dolor. Vivamus aliquet sagittis urna, sed dictum odio placerat vel. Donec sed blandit nisi. Curabitur ut leo commodo, hendrerit elit vitae, scelerisque nunc. Pellentesque nec lorem odio."
//   },
//   {
//     "name": {
//       "title": "Mr.",
//       "first": "Sebastian",
//       "last": "Prouch"
//     },
//     "nationality": "Sweeden",
//     "workplace": "SMT R&D, AB Sandvik Material Technology",
//     "position": "???",
//     "info": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt, nunc in pharetra pellentesque, ipsum orci tincidunt enim, sit amet lacinia felis mauris ac mi. Integer ornare fermentum mi, id interdum nunc lobortis a. Quisque faucibus, erat eget pretium dapibus, elit lectus condimentum libero, feugiat tincidunt neque nisi quis dolor. Vivamus aliquet sagittis urna, sed dictum odio placerat vel. Donec sed blandit nisi. Curabitur ut leo commodo, hendrerit elit vitae, scelerisque nunc. Pellentesque nec lorem odio."
//   },

  //CONTINUE HERE!
// Alt er i rekkefølge fra først alle keynote speakers så i programmets rekkefølge, note position utgår på alle. Si ifra hvis infoen om de blir for lang, kan prøve å kutte ned på de eventuelt. Bilder skal være delt med deg på drive.

// Rekkefølge Keynote
// Prof. Odne S. Burheim
// Bjørn Simonsen
// Dr Kerry-Ann Adamson
// Dr Steffen Møller-Holst 
// Shanna D. Knights
// Prof. Daniel Hissel
// Prof. Gregory Jerkiewicz
// Prof. Vladimir Molkov


  {
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Odne",
      "last": "S. Burheim",
      "title": "Prof.",
    },
    "picture": 0, // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Norway", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "NTNU", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "My fields of expertiese relate to thermodynamics of energy storage and conversion systems. Within this, both theoretical and experimental studies are included. Characterising electrochmical systems with respect to both heat and work constitutes one of the back bones in my research. Additionally, I also focus on non-equilibrium thermodynamics with an experiemntal approach to determine the coupling between transport of charge, mass, and heat.", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Bjørn",
      "last": "Simonsen",
      "title": "Mr.",
    },
    "picture": 1, // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Norway", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "NEL Hydrogen", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "Mr. Bjørn Simonsen serves as Vice President of Market Development & Public Relations at NEL ASA and served as its Director of Market Development & Public Relations since September 2015. Mr. Simonsen served as a Director of Market Development & Public Relations at NEL Hydrogen since September 2014 until August 2015. He has experience from the hydrogen sector since 2008 and began as a research engineer at Institute for Energy Technology (IFE), followed by key positions in the HyNor-project, The Norwegian Hydrogen Council and Norwegian Hydrogen Forum. He holds a MSc in Energy and Environmental Science from NTNU.", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Kerry-Ann",
      "last": "Adamson",
      "title": "Dr.",
    },
    "picture": 2, // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "United Kingdom", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "4th Energy Wave", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "Kerry-Ann has spent the last 20 years working in the fuel cell and hydrogen sectors. She is still best known for her time running Fuel Cell Today but has also, since then, ran the Smart Energy for Navigant Research building a cross focus team looking at all aspects of renewable energy, energy storage fuel cells and hydrogen. For the last three years she has ran her own specialist consulting firm. Working specifically in the fuel cell and hydrogen industry she has worked with a range of public and private sector organisations developing and helping them implement strategy, investment and project management. Her academic creds include a PhD from Imperial College of Science and Technology and a Marie Curie Research Fellowship at the TU Berlin.", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Steffen",
      "last": "Møller-Holst",
      "title": "Dr.",
    },
    "picture": 3, // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Norway", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "SINTEF", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "Steffen Møller-Holst earned his PhD in PEM fuel cells at NTNU in 1996 and was engaged as research fellow at Los Alamos National Laboratory, New Mexico, under US DoE's hydrogen program 1997-1999. His close to 30 years' experience with hydrogen is ranging from fuel cell materials research via systems development to decision support for industry and politicians. Møller-Holst was chairing the Norwegian Hydrogen Council (2006-2014), nominated by and advisory to the Ministries of Petroleum & Energy and Transportation. Since 2008 he has been chairing the Transport Pillar of the Fuel Cell and Hydrogen Joint Undertaking (FCHJU) representing the European Research community through Hydrogen Europe Research, and since 2015 he is acting as chairman for the Norwegian Hydrogen Association.", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Shanna",
      "last": "D. Knights",
      "title": "Ms.",
    },
    "picture": 4, // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Canada", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "Ballard Power Systems", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "Ms. Shanna Knights is Director of Research at Ballard Power Systems.  Her fuel cell research areas since joining Ballard in 1995 include durability, reliability, performance, and operational behavior, and span several fuel cell applications, including bus, light duty automotive, materials handling, back-up power, stationary power generation and cogeneration.  She is responsible for both internal research activities and significant collaboration with universities, research institutions and industry. She guides Canadian and international academic, government, and industrial fuel cell research through service on advisory boards and steering committees.   Ms. Knights is a frequently invited keynote and plenary speaker at international conferences, and is an author on numerous scientific journal publications and 3 book chapters. She holds 13 patents, with several more pending.  In 2017, she received the Association of Engineering BC’s highest honour, the R. A. McLachlan Memorial Award, for significant technical contributions and professional leadership, in combination with professional and community service.", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Daniel",
      "last": "Hissel",
      "title": "Prof.",
    },
    "picture": 5, // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "France", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "FCLAB, Université de Franche-Comté", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "Prof. Daniel Hissel (M’03, SM’04) obtained an electrical engineering degree from the Ecole Nationale Supérieure d’Ingénieurs Electriciens de Grenoble in 1994. Then, he obtained a PhD from the Institut National Polytechnique de Toulouse in 1998. Until 2000, he worked for ALSTOM Company where he was system engineer on electrical and fuel cell buses projects. From 2000 to 2006, he has been an Associate Professor at the University of Technology Belfort. Since 2006, he is a Full Professor at the University of Franche-Comté and ranked as “Exceptional Class Professor” (highest ranking in France). He was successively the Head of the “Fuel Cell Systems” Research Team of the Laboratory of Electrical Engineering and Systems (until 2008), then he joined the FEMTO-ST (CNRS) Institute and became Head of the “Energy systems modelling” research team. Since 2012, he is the Head of the “Electric Actuators, Hybrid & Fuel Cell Systems” research team in the same Institute and also currently the founding Director of the FCLAB Research Federation (CNRS), devoted to Fuel Cell Systems Research and Technology and gathering about 150 researchers. His main research activities are concerning fuel cell systems dedicated to automotive and stationary applications, modelling, non linear control and energy optimization of these systems and fuel cell system diagnostic/prognostic. He was Associate Editor of IEEE Transactions on Industrial Electronics between 2004 and 2012 and Associate Editor of ASME Fuel Cell Science and Technology between 2006 and 2015. He is also the Chair of the IEEE VTS French Chapter and member of the advisory board of the MEGEVH network, the French national network on EV and HEV. He has published more than 400 scientific papers in peer-reviewed international journals and/or international conferences. He has been awarded by the Blondel Medal in 2017 for his work towards industrialisation of fuel cell systems.", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Gregory",
      "last": "Jerkiewicz",
      "title": "Prof.",
    },
    "picture": 6, // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Canada", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "Queen's University", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "Gregory JERKIEWICZ, Ph.D. M.Eng., Professor at Queen's University is recognized for his groundbreaking and landmark contributions to physical electrochemistry and electrocatalysis.  He has made outstanding contributions to: (i) interfacial electrochemical thermodynamics; (ii) H electrochemistry and electrocatalysis; (iii) surface oxide growth on transition metals; (iv) electrochemical quartz-crystal nanobalance (EQCN); (v) preparation of multi-colored layers on Ti and Zr that reversibly switch their coloration; and (vi) interfacial electrochemistry through the discovery of the potential of minimum mass.  An overarching theme of his research is a genuine quest for deep comprehension of the physical nature of electrochemical processes.  His contributions to Pt electrochemistry are of extremely importance to fuel cells because the degradation of Pt electrocatalysts involves monolayer surface oxides.  The discovery of the potential of minimum mass and his determination of thermodynamic parameters that drive H electro-adsorption jointly explain the origin of electrocatalytic properties of Pt in electrochemical reactions involving H.  This new knowledge is essential to the eventual design and preparation of non-Pt electrocatalysts for fuel cells.  Dr. Jerkiewicz has authored 140 publications.  He received the Electrochemistry Award of La Société Française de Chimie in 1997, the W. A. E. McBryde Medal of the Canadian Society for Chemistry in 2004 and the R. C. Jacobsen Award of the Electrochemical Society, Canadian Section, in 2012.  In 2012, the President of Poland conferred on him the Knight’s Cross of the Order of Polonia Restituta (the Order of Polonia Restituta is equivalent to the Order of Canada).  In 2018, the President of Poland bestowed on him the title of Professor", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Vladimir",
      "last": "Molkov",
      "title": "Prof.",
    },
    "picture": 7, // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "United Kingdom", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "HySAFER, University of Ulster", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": 'Prof Vladimir Molkov is a physicist graduated Moscow Institute of Physics and Technology (1977). PhD in Chemical Physics, including Physics of Combustion and Explosion (1984). DSc in Fire and Explosion Safety (1997). Head of Fire Modelling Department in All-Russian Fire Research Institute (before 1999). Professor of Fire Safety Science at Ulster since 1999. In 2008 he established Hydrogen Safety Engineering and Research Centre (HySAFER), one of the key providers of safety research and education globally. Prof Molkov coordinated/participated in major European hydrogen safety projects. He champions hydrogen safety research in the UK. External funding during 2004-2015 is £4.3M. The thrust is on analytical and numerical studies, and strong international collaboration with experimental centres of excellence. Prof Molkov initiated research-led World\'s first MSc course in Hydrogen Safety Engineering (2007), since 2016 teaches module "Principles of hydrogen safety" at the University of Birmingham. The main vocational training is a short course series "Progress in Hydrogen Safety". In 2012 he published the textbook "Fundamentals of hydrogen safety engineering". Member, IEA HIA Task 37 "Hydrogen safety". UK expert, ISO/TC197 "Hydrogen technologies". Represents Ulster in General Assembly of International Association for Hydrogen Safety, and Research Grouping of Fuel Cell and Hydrogen Joint Undertaking.", // An abstract about the speaker'
  },

// Videre er det vanlige speakers, der utgår info delen og picture delen.

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Bjarne",
      "last": "Foss",
      "title": "Mr.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Norway", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "Research NTNU", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Johan",
      "last": "Hustad",
      "title": "Mr.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Norway", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "NTNU Energy", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Cory",
      "last": "Shumaker",
      "title": "Mr.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "United States of America", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "California Hydrogen Business Council", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Rohit",
      "last": "Prasad",
      "title": "Mr.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Germany", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "Proton Motor Fuel Cell", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Sindre",
      "last": "Zeiner-Gundersen",
      "title": "Mr.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Iceland", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "University of Iceland", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Bernhard",
      "last": "Kvaal",
      "title": "Mr.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Norway", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "TrønderEnergi", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

// {Samme som for programmet her skal byttes ut.
  {
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Anna",
      "last": "Pykhtina",
      "title": "Ms.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Russia", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "Moscow Institute of Physics and Technology", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Mark",
      "last": "Kammerer",
      "title": "Mr.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Germany", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "Hydrogenics", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Christophe",
      "last": "Turpin",
      "title": "Mr.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "France", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "LAPLACE University of Toulouse", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Théophile",
      "last": "Horde",
      "title": "Mr.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "France", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "Safran Power Units", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Geir Magnar",
      "last": "Brekke",
      "title": "Mr.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Norway", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "Statkraft", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Pelayo",
      "last": "García-Gutiérrez",
      "title": "Mr.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "United Kingdom", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "School of Chemical and Process Engineering University of Leeds", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Federico",
      "last": "Zenith",
      "title": "Mr.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Norway", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "SINTEF", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Mahdis",
      "last": "Moradi",
      "title": "Mr.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Norway", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "NTNU", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Jon",
      "last": "Eriksen",
      "title": "Mr.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Norway", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "Hystorsys", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Mohamad",
      "last": "Mustafa",
      "title": "Mr.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Norway", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "Artic University of Norway UiT", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Sebastian",
      "last": "Proch",
      "title": "Mr.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Sweden", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "SMT R&D, AB Sandvik Material Technology", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Florian",
      "last": "J. Wirkert",
      "title": "Mr.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Germany", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "Westfälische Hochschule University of Applied Sciences", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Björn",
      "last": "Wickman",
      "title": "Mr.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Sweden", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "Department of Physics, Chalmers University of Technology", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Michael",
      "last": "T.Y. Paul",
      "title": "Mr.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Canada", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "Department of Chemistry Simon Fraser University", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Attilio",
      "last": "Pigneri",
      "title": "Mr.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Australia", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "Hydrogen Utility", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "David",
      "last": "Hodgson",
      "title": "Mr.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "United Kingdom", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "PV3 Technologies", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Espen",
      "last": "Flo Bødal",
      "title": "Mr.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Norway", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "NTNU", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Roger",
      "last": "Sæther",
      "title": "Mr.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Norway", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "ASKO", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Nadia ",
      "last": "Yousfi Steiner",
      "title": "Ms.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "France", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "FCLAB, CNRS, Université Bourgogne Franche-Comté", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Tomas",
      "last": "Tronstad",
      "title": "Mr.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Norway", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "HYON", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Pit",
      "last": "Podleschny",
      "title": "Mr.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Germany", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "Westfälische Hochschule (WHS) Ruhr-University Bochum (RUB)", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Hans Aage",
      "last": "Hjuler",
      "title": "Mr.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Denmark", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "DPS", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Robert",
      "last": "Bock",
      "title": "Mr.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Norway", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "Department of Energy and Process Engineering NTNU", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Laurence",
      "last": "Grand-Clément",
      "title": "Mr.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "France", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "PersEE", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Lars",
      "last": "Baetcke",
      "title": "Mr.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Germany", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "Hamburg University of Technology (TUHH)", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Thomas",
      "last": "Lamberti",
      "title": "Mr.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Italy", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "DIME-TPG Polytechnic School, University of Genoa", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Vanesa",
      "last": "Gil Hernandez",
      "title": "Ms.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Spain", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "The Aragonese Foundation for Research & Development (ARAID) Foundation for the Development of the Hydrogen Technologies, Aragon (FHa)", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Randi",
      "last": "Mette Hegseth",
      "title": "Ms.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Norway", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "Statoil", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Trygve",
      "last": "Skjold",
      "title": "Mr.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Norway", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "Gexcon", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Sigrid",
      "last": "Lædre",
      "title": "Ms.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Norway", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "SINTEF Industry NTNU", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Daniel",
      "last": "Niblett",
      "title": "Mr.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "United Kingdom", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "University of Manchester", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Hans Christian",
      "last": "Koch Wintervoll",
      "title": "Mr.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Norway", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "DNV GL AS", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Volodymyr",
      "last": "A. Yartys",
      "title": "Mr.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Norway", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "IFE/NTNU", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Anne",
      "last": "Dalager Dyrli",
      "title": "Ms.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Norway", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "Cerpotech", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "David",
      "last": "Berstad",
      "title": "Mr.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Norway", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "SINTEF", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Adamo",
      "last": "Screnci",
      "title": "Mr.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Germany", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "Thyssenkrupp", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Jennifer",
      "last": "Hack",
      "title": "Ms.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "United Kingdom", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "Electrochemical Innovation Lab, Department of Chemical Engineering, University College London", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Jürgen",
      "last": "Kraft",
      "title": "Mr.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Germany", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "Elring Klingersindre", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Ivar",
      "last": "J. Halvorsen",
      "title": "Mr.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Norway", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "SINTEF Mathematics & Cybernetics", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Ingrid",
      "last": "Schjølberg",
      "title": "Ms.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Norway", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "NTNU", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Steffen",
      "last": "Poggel",
      "title": "Mr.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Germany", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "Deutsches Zentrum für Luft- und Raumfahrt e.V.", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Frode",
      "last": "Seland",
      "title": "Mr.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Norway", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "NTNU", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Thomas",
      "last": "Walter",
      "title": "Mr.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Switzerland", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "H2 Energy", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Lara",
      "last": "Rasha",
      "title": "Ms.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "United Kingdom", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "Electrochemical Innovation Lab, Department of Chemical Engineering, University College London", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Vilmar",
      "last": "Æsøy",
      "title": "Mr.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Norway", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "NTNU Ålesund", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Ika",
      "last": "Dewi Wijayanti",
      "title": "Mr.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Indonesia", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "Department of Battery Technology, Institute for Energy Technology (IFE), Kjeller, Department of Mechanical Engineering, ITS, Surabaya", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Thomas",
      "last": "Bjørdal",
      "title": "Mr.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Norway", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "NVES (G-PaTRA)", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Fredrik",
      "last": "Aarskog",
      "title": "Mr.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Norway", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "Institute for Energy Technology (IFE), Kjeller", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Torkild",
      "last": "Reinertsen",
      "title": "Mr.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Norway", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "Reinertsen New Energy", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Trond",
      "last": "Strømgren",
      "title": "Mr.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Norway", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "Maritim Association Sogn&Fjordane", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Anders",
      "last": "Ødegård",
      "title": "Mr.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Norway", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "SINTEF", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Jaakko",
      "last": "Akola",
      "title": "Mr.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Norway", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "NTNU", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Ole",
      "last": "Svendgård",
      "title": "Mr.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Norway", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "Fornybarklyngen (Renewable Energy Cluster)", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Kristian",
      "last": "M. Lien",
      "title": "Mr.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Norway", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "NTNU", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Øystein",
      "last": "Ulleberg",
      "title": "Mr.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Norway", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "IFE", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Olav",
      "last": "Roald Hansen",
      "title": "Mr.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Norway", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "Lloyd's Register Consulting", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Kyrre",
      "last": "Sundseth",
      "title": "Mr.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Norway", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "SINTEF", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Ambrose",
      "last": "Ugwu",
      "title": "Mr.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Norway", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "NTNU", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Bruno",
      "last": "G. Pollet",
      "title": "Mr.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Norway", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "NTNU", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },

{
    "name": { // Firstname, lastname, and title of speaker. If no title, add "Mr." or "Ms.".
      "first": "Helen",
      "last": "Hartel",
      "title": "Ms.",
    },
    //"picture": "/path/to/image.png", // If we have a photo, add the path to it. If no photo, remove attribute
    "nationality": "Norway", // Nationality, full name ("United States of America", not "USA")  TODO: Thought?
    "workplace": "Helen Hartel Rådgivning AS", // What workplace or company the speaker represents
    "position": "", // The speakers position in given company
    "info": "", // An abstract about the speaker
  },










  ];
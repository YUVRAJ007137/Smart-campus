import React, { useState } from 'react';

/**
 * Timetable Module Component
 * Displays lecture schedules for each department and academic year
 */
export default function TimetableModule() {
  const [selectedDepartment, setSelectedDepartment] = useState('cse');
  const [selectedYear, setSelectedYear] = useState('fe');

  // Department data
  const departments = [
    { id: 'cse', name: '💻 Computer Science & Engineering', short: 'CSE' },
    { id: 'ece', name: '⚡ Electronics & Communication', short: 'ECE' },
    { id: 'me', name: '🔧 Mechanical Engineering', short: 'ME' },
    { id: 'ce', name: '🏗️ Civil Engineering', short: 'CE' }
  ];

  const years = [
    { id: 'fe', name: 'First Year', label: 'FE' },
    { id: 'se', name: 'Second Year', label: 'SE' },
    { id: 'te', name: 'Third Year', label: 'TE' },
    { id: 'be', name: 'Fourth Year', label: 'BE' }
  ];

  // Timetable data for each department and year
  const timetables = {
    cse: {
      fe: [
        { day: 'Monday', lectures: [
          { time: '09:00 - 10:00', subject: 'Programming Fundamentals', room: 'Room 101', instructor: 'Dr. Faculty Member 1' },
          { time: '10:15 - 11:15', subject: 'Data Structures', room: 'Room 102', instructor: 'Dr. Faculty Member 2' },
          { time: '11:30 - 12:30', subject: 'Web Development', room: 'Lab 201', instructor: 'Prof. Faculty Member 3' },
          { time: '13:30 - 14:30', subject: 'Database Basics', room: 'Room 103', instructor: 'Dr. Faculty Member 4' }
        ]},
        { day: 'Tuesday', lectures: [
          { time: '09:00 - 10:00', subject: 'Mathematics - I', room: 'Room 104', instructor: 'Prof. Faculty Member 5' },
          { time: '10:15 - 11:15', subject: 'Physics Lab', room: 'Lab 101', instructor: 'Dr. Faculty Member 1' },
          { time: '11:30 - 12:30', subject: 'English Communication', room: 'Room 105', instructor: 'Prof. Faculty Member 2' }
        ]},
        { day: 'Wednesday', lectures: [
          { time: '09:00 - 10:00', subject: 'Programming Fundamentals', room: 'Lab 202', instructor: 'Dr. Faculty Member 3' },
          { time: '10:15 - 11:15', subject: 'Chemistry Lab', room: 'Lab 301', instructor: 'Prof. Faculty Member 4' },
          { time: '11:30 - 12:30', subject: 'Data Structures', room: 'Room 101', instructor: 'Dr. Faculty Member 5' },
          { time: '13:30 - 14:30', subject: 'Web Development Lab', room: 'Lab 203', instructor: 'Dr. Faculty Member 1' }
        ]},
        { day: 'Thursday', lectures: [
          { time: '09:00 - 10:00', subject: 'Database Basics', room: 'Room 102', instructor: 'Prof. Faculty Member 2' },
          { time: '10:15 - 11:15', subject: 'Mathematics - I', room: 'Room 106', instructor: 'Dr. Faculty Member 3' },
          { time: '11:30 - 12:30', subject: 'English Communication', room: 'Room 107', instructor: 'Prof. Faculty Member 4' }
        ]},
        { day: 'Friday', lectures: [
          { time: '09:00 - 10:00', subject: 'Physics Lecture', room: 'Room 108', instructor: 'Dr. Faculty Member 5' },
          { time: '10:15 - 11:15', subject: 'Chemistry Lecture', room: 'Room 109', instructor: 'Prof. Faculty Member 1' },
          { time: '11:30 - 12:30', subject: 'Seminar', room: 'Auditorium', instructor: 'Dr. Faculty Member 2' }
        ]}
      ],
      se: [
        { day: 'Monday', lectures: [
          { time: '09:00 - 10:00', subject: 'Object Oriented Programming', room: 'Room 201', instructor: 'Dr. Faculty Member 2' },
          { time: '10:15 - 11:15', subject: 'Database Design', room: 'Room 202', instructor: 'Dr. Faculty Member 3' },
          { time: '11:30 - 12:30', subject: 'Data Structures Lab', room: 'Lab 301', instructor: 'Prof. Faculty Member 1' }
        ]},
        { day: 'Tuesday', lectures: [
          { time: '09:00 - 10:00', subject: 'Web Technologies', room: 'Room 203', instructor: 'Prof. Faculty Member 4' },
          { time: '10:15 - 11:15', subject: 'Advanced Algorithms', room: 'Room 204', instructor: 'Dr. Faculty Member 5' }
        ]},
        { day: 'Wednesday', lectures: [
          { time: '09:00 - 10:00', subject: 'Operating Systems', room: 'Room 205', instructor: 'Dr. Faculty Member 1' },
          { time: '10:15 - 11:15', subject: 'Database Design Lab', room: 'Lab 302', instructor: 'Prof. Faculty Member 2' },
          { time: '11:30 - 12:30', subject: 'Object Oriented Programming Lab', room: 'Lab 303', instructor: 'Dr. Faculty Member 3' }
        ]},
        { day: 'Thursday', lectures: [
          { time: '09:00 - 10:00', subject: 'Software Engineering', room: 'Room 206', instructor: 'Prof. Faculty Member 4' },
          { time: '10:15 - 11:15', subject: 'Advanced Algorithms Lab', room: 'Lab 304', instructor: 'Dr. Faculty Member 5' }
        ]},
        { day: 'Friday', lectures: [
          { time: '09:00 - 10:00', subject: 'Web Technologies Lab', room: 'Lab 305', instructor: 'Prof. Faculty Member 1' },
          { time: '10:15 - 11:15', subject: 'Seminar', room: 'Auditorium', instructor: 'Dr. Faculty Member 2' }
        ]}
      ],
      te: [
        { day: 'Monday', lectures: [
          { time: '09:00 - 10:00', subject: 'Machine Learning', room: 'Room 301', instructor: 'Dr. Faculty Member 3' },
          { time: '10:15 - 11:15', subject: 'Cloud Computing', room: 'Room 302', instructor: 'Prof. Faculty Member 4' }
        ]},
        { day: 'Tuesday', lectures: [
          { time: '09:00 - 10:00', subject: 'Artificial Intelligence', room: 'Room 303', instructor: 'Dr. Faculty Member 5' },
          { time: '10:15 - 11:15', subject: 'Cybersecurity', room: 'Room 304', instructor: 'Prof. Faculty Member 1' }
        ]},
        { day: 'Wednesday', lectures: [
          { time: '09:00 - 10:00', subject: 'Machine Learning Lab', room: 'Lab 401', instructor: 'Dr. Faculty Member 2' },
          { time: '10:15 - 11:15', subject: 'Big Data Analytics Lab', room: 'Lab 402', instructor: 'Prof. Faculty Member 3' }
        ]},
        { day: 'Thursday', lectures: [
          { time: '09:00 - 10:00', subject: 'Big Data Analytics', room: 'Room 305', instructor: 'Dr. Faculty Member 4' },
          { time: '10:15 - 11:15', subject: 'Cloud Computing Lab', room: 'Lab 403', instructor: 'Prof. Faculty Member 5' }
        ]},
        { day: 'Friday', lectures: [
          { time: '09:00 - 10:00', subject: 'Cybersecurity Lab', room: 'Lab 404', instructor: 'Dr. Faculty Member 1' },
          { time: '10:15 - 11:15', subject: 'Project Work', room: 'Lab 405', instructor: 'Prof. Faculty Member 2' }
        ]}
      ],
      be: [
        { day: 'Monday', lectures: [
          { time: '09:00 - 10:00', subject: 'Capstone Project', room: 'Lab 501', instructor: 'Dr. Faculty Member 5' },
          { time: '10:15 - 11:15', subject: 'Advanced AI', room: 'Room 401', instructor: 'Prof. Faculty Member 1' }
        ]},
        { day: 'Tuesday', lectures: [
          { time: '09:00 - 10:00', subject: 'Research Methodology', room: 'Room 402', instructor: 'Dr. Faculty Member 2' },
          { time: '10:15 - 11:15', subject: 'Capstone Project', room: 'Lab 502', instructor: 'Prof. Faculty Member 3' }
        ]},
        { day: 'Wednesday', lectures: [
          { time: '09:00 - 10:00', subject: 'Emerging Technologies', room: 'Room 403', instructor: 'Dr. Faculty Member 4' },
          { time: '10:15 - 11:15', subject: 'Capstone Project', room: 'Lab 503', instructor: 'Prof. Faculty Member 5' }
        ]},
        { day: 'Thursday', lectures: [
          { time: '09:00 - 10:00', subject: 'Industry Interaction', room: 'Auditorium', instructor: 'Dr. Faculty Member 1' },
          { time: '10:15 - 11:15', subject: 'Capstone Project', room: 'Lab 504', instructor: 'Prof. Faculty Member 2' }
        ]},
        { day: 'Friday', lectures: [
          { time: '09:00 - 10:00', subject: 'Thesis Guidance', room: 'Room 404', instructor: 'Dr. Faculty Member 3' },
          { time: '10:15 - 11:15', subject: 'Seminar', room: 'Auditorium', instructor: 'Prof. Faculty Member 4' }
        ]}
      ]
    },
    ece: {
      fe: [
        { day: 'Monday', lectures: [
          { time: '09:00 - 10:00', subject: 'Circuit Analysis', room: 'Room 151', instructor: 'Dr. Faculty Member 1' },
          { time: '10:15 - 11:15', subject: 'Digital Electronics', room: 'Room 152', instructor: 'Prof. Faculty Member 2' },
          { time: '11:30 - 12:30', subject: 'Mathematics - I', room: 'Room 153', instructor: 'Dr. Faculty Member 3' }
        ]},
        { day: 'Tuesday', lectures: [
          { time: '09:00 - 10:00', subject: 'Physics Lab', room: 'Lab 151', instructor: 'Prof. Faculty Member 4' },
          { time: '10:15 - 11:15', subject: 'Chemistry Lecture', room: 'Room 154', instructor: 'Dr. Faculty Member 5' }
        ]},
        { day: 'Wednesday', lectures: [
          { time: '09:00 - 10:00', subject: 'Circuit Lab', room: 'Lab 152', instructor: 'Prof. Faculty Member 1' },
          { time: '10:15 - 11:15', subject: 'English Communication', room: 'Room 155', instructor: 'Dr. Faculty Member 2' },
          { time: '11:30 - 12:30', subject: 'Digital Electronics Lab', room: 'Lab 153', instructor: 'Prof. Faculty Member 3' }
        ]},
        { day: 'Thursday', lectures: [
          { time: '09:00 - 10:00', subject: 'Programming Basics', room: 'Lab 154', instructor: 'Dr. Faculty Member 4' },
          { time: '10:15 - 11:15', subject: 'Mathematics - I', room: 'Room 156', instructor: 'Prof. Faculty Member 5' }
        ]},
        { day: 'Friday', lectures: [
          { time: '09:00 - 10:00', subject: 'Physics Lecture', room: 'Room 157', instructor: 'Dr. Faculty Member 1' },
          { time: '10:15 - 11:15', subject: 'Seminar', room: 'Auditorium', instructor: 'Prof. Faculty Member 2' }
        ]}
      ],
      se: [
        { day: 'Monday', lectures: [
          { time: '09:00 - 10:00', subject: 'Signals and Systems', room: 'Room 251', instructor: 'Dr. Faculty Member 3' },
          { time: '10:15 - 11:15', subject: 'Microprocessors', room: 'Lab 251', instructor: 'Prof. Faculty Member 4' }
        ]},
        { day: 'Tuesday', lectures: [
          { time: '09:00 - 10:00', subject: 'Electromagnetic Fields', room: 'Room 252', instructor: 'Dr. Faculty Member 5' },
          { time: '10:15 - 11:15', subject: 'Analog Circuits', room: 'Lab 252', instructor: 'Prof. Faculty Member 1' }
        ]},
        { day: 'Wednesday', lectures: [
          { time: '09:00 - 10:00', subject: 'Control Systems', room: 'Room 253', instructor: 'Dr. Faculty Member 2' },
          { time: '10:15 - 11:15', subject: 'Signals and Systems Lab', room: 'Lab 253', instructor: 'Prof. Faculty Member 3' }
        ]},
        { day: 'Thursday', lectures: [
          { time: '09:00 - 10:00', subject: 'Microprocessor Lab', room: 'Lab 254', instructor: 'Dr. Faculty Member 4' },
          { time: '10:15 - 11:15', subject: 'Communication Systems', room: 'Room 254', instructor: 'Prof. Faculty Member 5' }
        ]},
        { day: 'Friday', lectures: [
          { time: '09:00 - 10:00', subject: 'Control Systems Lab', room: 'Lab 255', instructor: 'Dr. Faculty Member 1' },
          { time: '10:15 - 11:15', subject: 'Seminar', room: 'Auditorium', instructor: 'Prof. Faculty Member 2' }
        ]}
      ],
      te: [
        { day: 'Monday', lectures: [
          { time: '09:00 - 10:00', subject: 'Digital Signal Processing', room: 'Room 351', instructor: 'Dr. Faculty Member 3' },
          { time: '10:15 - 11:15', subject: 'Wireless Communications', room: 'Lab 351', instructor: 'Prof. Faculty Member 4' }
        ]},
        { day: 'Tuesday', lectures: [
          { time: '09:00 - 10:00', subject: 'VLSI Design', room: 'Room 352', instructor: 'Dr. Faculty Member 5' },
          { time: '10:15 - 11:15', subject: 'Embedded Systems', room: 'Lab 352', instructor: 'Prof. Faculty Member 1' }
        ]},
        { day: 'Wednesday', lectures: [
          { time: '09:00 - 10:00', subject: 'DSP Lab', room: 'Lab 353', instructor: 'Dr. Faculty Member 2' },
          { time: '10:15 - 11:15', subject: 'Wireless Lab', room: 'Lab 354', instructor: 'Prof. Faculty Member 3' }
        ]},
        { day: 'Thursday', lectures: [
          { time: '09:00 - 10:00', subject: 'VLSI Lab', room: 'Lab 355', instructor: 'Dr. Faculty Member 4' },
          { time: '10:15 - 11:15', subject: 'Embedded Systems Lab', room: 'Lab 356', instructor: 'Prof. Faculty Member 5' }
        ]},
        { day: 'Friday', lectures: [
          { time: '09:00 - 10:00', subject: 'Project Work', room: 'Lab 357', instructor: 'Dr. Faculty Member 1' },
          { time: '10:15 - 11:15', subject: 'Seminar', room: 'Auditorium', instructor: 'Prof. Faculty Member 2' }
        ]}
      ],
      be: [
        { day: 'Monday', lectures: [
          { time: '09:00 - 10:00', subject: 'Advanced Communication', room: 'Room 451', instructor: 'Dr. Faculty Member 3' },
          { time: '10:15 - 11:15', subject: 'Capstone Project', room: 'Lab 451', instructor: 'Prof. Faculty Member 4' }
        ]},
        { day: 'Tuesday', lectures: [
          { time: '09:00 - 10:00', subject: 'Research Methodology', room: 'Room 452', instructor: 'Dr. Faculty Member 5' },
          { time: '10:15 - 11:15', subject: 'Capstone Project', room: 'Lab 452', instructor: 'Prof. Faculty Member 1' }
        ]},
        { day: 'Wednesday', lectures: [
          { time: '09:00 - 10:00', subject: 'IoT Applications', room: 'Room 453', instructor: 'Dr. Faculty Member 2' },
          { time: '10:15 - 11:15', subject: 'Capstone Project', room: 'Lab 453', instructor: 'Prof. Faculty Member 3' }
        ]},
        { day: 'Thursday', lectures: [
          { time: '09:00 - 10:00', subject: 'Industry Interaction', room: 'Auditorium', instructor: 'Dr. Faculty Member 4' },
          { time: '10:15 - 11:15', subject: 'Capstone Project', room: 'Lab 454', instructor: 'Prof. Faculty Member 5' }
        ]},
        { day: 'Friday', lectures: [
          { time: '09:00 - 10:00', subject: 'Thesis Guidance', room: 'Room 454', instructor: 'Dr. Faculty Member 1' },
          { time: '10:15 - 11:15', subject: 'Seminar', room: 'Auditorium', instructor: 'Prof. Faculty Member 2' }
        ]}
      ]
    },
    me: {
      fe: [
        { day: 'Monday', lectures: [
          { time: '09:00 - 10:00', subject: 'Engineering Mechanics', room: 'Room 111', instructor: 'Dr. Faculty Member 1' },
          { time: '10:15 - 11:15', subject: 'Engineering Graphics', room: 'Lab 111', instructor: 'Prof. Faculty Member 2' },
          { time: '11:30 - 12:30', subject: 'Mathematics - I', room: 'Room 112', instructor: 'Dr. Faculty Member 3' }
        ]},
        { day: 'Tuesday', lectures: [
          { time: '09:00 - 10:00', subject: 'Physics Lab', room: 'Lab 112', instructor: 'Prof. Faculty Member 4' },
          { time: '10:15 - 11:15', subject: 'Chemistry Lecture', room: 'Room 113', instructor: 'Dr. Faculty Member 5' }
        ]},
        { day: 'Wednesday', lectures: [
          { time: '09:00 - 10:00', subject: 'CAD Lab', room: 'Lab 113', instructor: 'Prof. Faculty Member 1' },
          { time: '10:15 - 11:15', subject: 'English Communication', room: 'Room 114', instructor: 'Dr. Faculty Member 2' }
        ]},
        { day: 'Thursday', lectures: [
          { time: '09:00 - 10:00', subject: 'Programming Basics', room: 'Lab 114', instructor: 'Prof. Faculty Member 3' },
          { time: '10:15 - 11:15', subject: 'Mathematics - I', room: 'Room 115', instructor: 'Dr. Faculty Member 4' }
        ]},
        { day: 'Friday', lectures: [
          { time: '09:00 - 10:00', subject: 'Physics Lecture', room: 'Room 116', instructor: 'Prof. Faculty Member 5' },
          { time: '10:15 - 11:15', subject: 'Seminar', room: 'Auditorium', instructor: 'Dr. Faculty Member 1' }
        ]}
      ],
      se: [
        { day: 'Monday', lectures: [
          { time: '09:00 - 10:00', subject: 'Mechanics of Materials', room: 'Room 211', instructor: 'Dr. Faculty Member 2' },
          { time: '10:15 - 11:15', subject: 'Thermodynamics', room: 'Room 212', instructor: 'Prof. Faculty Member 3' }
        ]},
        { day: 'Tuesday', lectures: [
          { time: '09:00 - 10:00', subject: 'Machine Design', room: 'Lab 211', instructor: 'Dr. Faculty Member 4' },
          { time: '10:15 - 11:15', subject: 'Fluid Mechanics', room: 'Room 213', instructor: 'Prof. Faculty Member 5' }
        ]},
        { day: 'Wednesday', lectures: [
          { time: '09:00 - 10:00', subject: 'CAD Lab', room: 'Lab 212', instructor: 'Dr. Faculty Member 1' },
          { time: '10:15 - 11:15', subject: 'Thermodynamics Lab', room: 'Lab 213', instructor: 'Prof. Faculty Member 2' }
        ]},
        { day: 'Thursday', lectures: [
          { time: '09:00 - 10:00', subject: 'Fluid Mechanics Lab', room: 'Lab 214', instructor: 'Dr. Faculty Member 3' },
          { time: '10:15 - 11:15', subject: 'Manufacturing Tech', room: 'Room 214', instructor: 'Prof. Faculty Member 4' }
        ]},
        { day: 'Friday', lectures: [
          { time: '09:00 - 10:00', subject: 'Manufacturing Lab', room: 'Lab 215', instructor: 'Dr. Faculty Member 5' },
          { time: '10:15 - 11:15', subject: 'Seminar', room: 'Auditorium', instructor: 'Prof. Faculty Member 1' }
        ]}
      ],
      te: [
        { day: 'Monday', lectures: [
          { time: '09:00 - 10:00', subject: 'Heat Transfer', room: 'Room 311', instructor: 'Dr. Faculty Member 2' },
          { time: '10:15 - 11:15', subject: 'Power Plant Engineering', room: 'Lab 311', instructor: 'Prof. Faculty Member 3' }
        ]},
        { day: 'Tuesday', lectures: [
          { time: '09:00 - 10:00', subject: 'Refrigeration & AC', room: 'Room 312', instructor: 'Dr. Faculty Member 4' },
          { time: '10:15 - 11:15', subject: 'IC Engines', room: 'Lab 312', instructor: 'Prof. Faculty Member 5' }
        ]},
        { day: 'Wednesday', lectures: [
          { time: '09:00 - 10:00', subject: 'Heat Transfer Lab', room: 'Lab 313', instructor: 'Dr. Faculty Member 1' },
          { time: '10:15 - 11:15', subject: 'IC Engines Lab', room: 'Lab 314', instructor: 'Prof. Faculty Member 2' }
        ]},
        { day: 'Thursday', lectures: [
          { time: '09:00 - 10:00', subject: 'Power Plant Lab', room: 'Lab 315', instructor: 'Dr. Faculty Member 3' },
          { time: '10:15 - 11:15', subject: 'Refrigeration Lab', room: 'Lab 316', instructor: 'Prof. Faculty Member 4' }
        ]},
        { day: 'Friday', lectures: [
          { time: '09:00 - 10:00', subject: 'Project Work', room: 'Lab 317', instructor: 'Dr. Faculty Member 5' },
          { time: '10:15 - 11:15', subject: 'Seminar', room: 'Auditorium', instructor: 'Prof. Faculty Member 1' }
        ]}
      ],
      be: [
        { day: 'Monday', lectures: [
          { time: '09:00 - 10:00', subject: 'Advanced Manufacturing', room: 'Room 411', instructor: 'Dr. Faculty Member 2' },
          { time: '10:15 - 11:15', subject: 'Capstone Project', room: 'Lab 411', instructor: 'Prof. Faculty Member 3' }
        ]},
        { day: 'Tuesday', lectures: [
          { time: '09:00 - 10:00', subject: 'Research Methodology', room: 'Room 412', instructor: 'Dr. Faculty Member 4' },
          { time: '10:15 - 11:15', subject: 'Capstone Project', room: 'Lab 412', instructor: 'Prof. Faculty Member 5' }
        ]},
        { day: 'Wednesday', lectures: [
          { time: '09:00 - 10:00', subject: 'Robotics & Automation', room: 'Room 413', instructor: 'Dr. Faculty Member 1' },
          { time: '10:15 - 11:15', subject: 'Capstone Project', room: 'Lab 413', instructor: 'Prof. Faculty Member 2' }
        ]},
        { day: 'Thursday', lectures: [
          { time: '09:00 - 10:00', subject: 'Industry Interaction', room: 'Auditorium', instructor: 'Dr. Faculty Member 3' },
          { time: '10:15 - 11:15', subject: 'Capstone Project', room: 'Lab 414', instructor: 'Prof. Faculty Member 4' }
        ]},
        { day: 'Friday', lectures: [
          { time: '09:00 - 10:00', subject: 'Thesis Guidance', room: 'Room 414', instructor: 'Dr. Faculty Member 5' },
          { time: '10:15 - 11:15', subject: 'Seminar', room: 'Auditorium', instructor: 'Prof. Faculty Member 1' }
        ]}
      ]
    },
    ce: {
      fe: [
        { day: 'Monday', lectures: [
          { time: '09:00 - 10:00', subject: 'Surveying Basics', room: 'Room 131', instructor: 'Dr. Faculty Member 1' },
          { time: '10:15 - 11:15', subject: 'Engineering Geology', room: 'Lab 131', instructor: 'Prof. Faculty Member 2' },
          { time: '11:30 - 12:30', subject: 'Mathematics - I', room: 'Room 132', instructor: 'Dr. Faculty Member 3' }
        ]},
        { day: 'Tuesday', lectures: [
          { time: '09:00 - 10:00', subject: 'Physics Lab', room: 'Lab 132', instructor: 'Prof. Faculty Member 4' },
          { time: '10:15 - 11:15', subject: 'Chemistry Lecture', room: 'Room 133', instructor: 'Dr. Faculty Member 5' }
        ]},
        { day: 'Wednesday', lectures: [
          { time: '09:00 - 10:00', subject: 'Surveying Lab', room: 'Lab 133', instructor: 'Prof. Faculty Member 1' },
          { time: '10:15 - 11:15', subject: 'English Communication', room: 'Room 134', instructor: 'Dr. Faculty Member 2' }
        ]},
        { day: 'Thursday', lectures: [
          { time: '09:00 - 10:00', subject: 'Programming Basics', room: 'Lab 134', instructor: 'Prof. Faculty Member 3' },
          { time: '10:15 - 11:15', subject: 'Mathematics - I', room: 'Room 135', instructor: 'Dr. Faculty Member 4' }
        ]},
        { day: 'Friday', lectures: [
          { time: '09:00 - 10:00', subject: 'Physics Lecture', room: 'Room 136', instructor: 'Prof. Faculty Member 5' },
          { time: '10:15 - 11:15', subject: 'Seminar', room: 'Auditorium', instructor: 'Dr. Faculty Member 1' }
        ]}
      ],
      se: [
        { day: 'Monday', lectures: [
          { time: '09:00 - 10:00', subject: 'Structural Analysis', room: 'Room 221', instructor: 'Dr. Faculty Member 2' },
          { time: '10:15 - 11:15', subject: 'Soil Mechanics', room: 'Lab 221', instructor: 'Prof. Faculty Member 3' }
        ]},
        { day: 'Tuesday', lectures: [
          { time: '09:00 - 10:00', subject: 'RCC Design', room: 'Room 222', instructor: 'Dr. Faculty Member 4' },
          { time: '10:15 - 11:15', subject: 'Hydraulics', room: 'Lab 222', instructor: 'Prof. Faculty Member 5' }
        ]},
        { day: 'Wednesday', lectures: [
          { time: '09:00 - 10:00', subject: 'CAD Lab', room: 'Lab 223', instructor: 'Dr. Faculty Member 1' },
          { time: '10:15 - 11:15', subject: 'Soil Mechanics Lab', room: 'Lab 224', instructor: 'Prof. Faculty Member 2' }
        ]},
        { day: 'Thursday', lectures: [
          { time: '09:00 - 10:00', subject: 'Hydraulics Lab', room: 'Lab 225', instructor: 'Dr. Faculty Member 3' },
          { time: '10:15 - 11:15', subject: 'Surveying Lab', room: 'Lab 226', instructor: 'Prof. Faculty Member 4' }
        ]},
        { day: 'Friday', lectures: [
          { time: '09:00 - 10:00', subject: 'Structural Lab', room: 'Lab 227', instructor: 'Dr. Faculty Member 5' },
          { time: '10:15 - 11:15', subject: 'Seminar', room: 'Auditorium', instructor: 'Prof. Faculty Member 1' }
        ]}
      ],
      te: [
        { day: 'Monday', lectures: [
          { time: '09:00 - 10:00', subject: 'Bridge Engineering', room: 'Room 321', instructor: 'Dr. Faculty Member 2' },
          { time: '10:15 - 11:15', subject: 'Foundation Engineering', room: 'Lab 321', instructor: 'Prof. Faculty Member 3' }
        ]},
        { day: 'Tuesday', lectures: [
          { time: '09:00 - 10:00', subject: 'Water Resources', room: 'Room 322', instructor: 'Dr. Faculty Member 4' },
          { time: '10:15 - 11:15', subject: 'Environmental Eng', room: 'Lab 322', instructor: 'Prof. Faculty Member 5' }
        ]},
        { day: 'Wednesday', lectures: [
          { time: '09:00 - 10:00', subject: 'Bridge Lab', room: 'Lab 323', instructor: 'Dr. Faculty Member 1' },
          { time: '10:15 - 11:15', subject: 'Water Resources Lab', room: 'Lab 324', instructor: 'Prof. Faculty Member 2' }
        ]},
        { day: 'Thursday', lectures: [
          { time: '09:00 - 10:00', subject: 'Foundation Lab', room: 'Lab 325', instructor: 'Dr. Faculty Member 3' },
          { time: '10:15 - 11:15', subject: 'Environmental Lab', room: 'Lab 326', instructor: 'Prof. Faculty Member 4' }
        ]},
        { day: 'Friday', lectures: [
          { time: '09:00 - 10:00', subject: 'Project Work', room: 'Lab 327', instructor: 'Dr. Faculty Member 5' },
          { time: '10:15 - 11:15', subject: 'Seminar', room: 'Auditorium', instructor: 'Prof. Faculty Member 1' }
        ]}
      ],
      be: [
        { day: 'Monday', lectures: [
          { time: '09:00 - 10:00', subject: 'Advanced RCC Design', room: 'Room 421', instructor: 'Dr. Faculty Member 2' },
          { time: '10:15 - 11:15', subject: 'Capstone Project', room: 'Lab 421', instructor: 'Prof. Faculty Member 3' }
        ]},
        { day: 'Tuesday', lectures: [
          { time: '09:00 - 10:00', subject: 'Research Methodology', room: 'Room 422', instructor: 'Dr. Faculty Member 4' },
          { time: '10:15 - 11:15', subject: 'Capstone Project', room: 'Lab 422', instructor: 'Prof. Faculty Member 5' }
        ]},
        { day: 'Wednesday', lectures: [
          { time: '09:00 - 10:00', subject: 'Smart Cities', room: 'Room 423', instructor: 'Dr. Faculty Member 1' },
          { time: '10:15 - 11:15', subject: 'Capstone Project', room: 'Lab 423', instructor: 'Prof. Faculty Member 2' }
        ]},
        { day: 'Thursday', lectures: [
          { time: '09:00 - 10:00', subject: 'Industry Interaction', room: 'Auditorium', instructor: 'Dr. Faculty Member 3' },
          { time: '10:15 - 11:15', subject: 'Capstone Project', room: 'Lab 424', instructor: 'Prof. Faculty Member 4' }
        ]},
        { day: 'Friday', lectures: [
          { time: '09:00 - 10:00', subject: 'Thesis Guidance', room: 'Room 424', instructor: 'Dr. Faculty Member 5' },
          { time: '10:15 - 11:15', subject: 'Seminar', room: 'Auditorium', instructor: 'Prof. Faculty Member 1' }
        ]}
      ]
    }
  };

  const currentDeptTimetables = timetables[selectedDepartment];
  const currentYearTimetable = currentDeptTimetables[selectedYear];

  return (
    <div className="module-container">
      <div className="module-header">
        <h1>📅 Timetable</h1>
        <p>Lecture schedule for all departments and academic years</p>
      </div>

      <div className="timetable-content">
        {/* Department and Year Selection */}
        <div className="timetable-filters">
          {/* Department Selection */}
          <div className="filter-group">
            <label className="filter-label">Select Department:</label>
            <div className="button-group">
              {departments.map(dept => (
                <button
                  key={dept.id}
                  className={`filter-btn ${selectedDepartment === dept.id ? 'active' : ''}`}
                  onClick={() => setSelectedDepartment(dept.id)}
                >
                  {dept.name}
                </button>
              ))}
            </div>
          </div>

          {/* Year Selection */}
          <div className="filter-group">
            <label className="filter-label">Select Year:</label>
            <div className="button-group">
              {years.map(year => (
                <button
                  key={year.id}
                  className={`filter-btn ${selectedYear === year.id ? 'active' : ''}`}
                  onClick={() => setSelectedYear(year.id)}
                >
                  {year.name} ({year.label})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Current Selection Info */}
        <div className="selection-info">
          <h2>
            {departments.find(d => d.id === selectedDepartment)?.short} - {years.find(y => y.id === selectedYear)?.name}
          </h2>
        </div>

        {/* Weekly Timetable */}
        <div className="timetable-schedule">
          {currentYearTimetable.map((day, index) => (
            <div key={index} className="day-schedule">
              <div className="day-header">
                <h3>{day.day}</h3>
              </div>
              <div className="lectures-list">
                {day.lectures.map((lecture, idx) => (
                  <div key={idx} className="lecture-card">
                    <div className="lecture-time">
                      <span className="time">{lecture.time}</span>
                    </div>
                    <div className="lecture-details">
                      <h4 className="subject">{lecture.subject}</h4>
                      <p className="room">📍 {lecture.room}</p>
                      <p className="instructor">👨‍🏫 {lecture.instructor}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Timetable Legend */}
        <div className="timetable-legend">
          <h3>📋 Legend</h3>
          <div className="legend-items">
            <div className="legend-item">
              <span className="legend-icon">📍</span>
              <span>Classroom / Lab Location</span>
            </div>
            <div className="legend-item">
              <span className="legend-icon">👨‍🏫</span>
              <span>Faculty Instructor</span>
            </div>
            <div className="legend-item">
              <span className="legend-icon">⏰</span>
              <span>Lecture Duration: 60 minutes</span>
            </div>
            <div className="legend-item">
              <span className="legend-icon">📅</span>
              <span>Monday to Friday Schedule</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

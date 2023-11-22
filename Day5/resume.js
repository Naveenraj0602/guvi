var resume = {
    my_Name: "Naveen Raj R",
    Email: "naveenrajvimal@gmail.com",
    Date_of_birth: "06.02.2002",
    Gender: "Male",
    Nationality: "Indian",
    Marital_Status: "Single",
    Languages_known: ["English", "Tamil"],
    Age: 21,
    Marks: { "B.E": "CGPA 7.25", "Higher secondary": "55%", SSLC: "80%" },
    Qualification: "B.E ComputerScience",
    Years_of_Experience: 0,
    Software_proficiency: [
      "JavaScript",
      "React.js",
      "Node.js",
      "MongoDB",
      "HTML",
      "css",
      "Git, GitHub",
    ],
    Key_strength: ["short leaning curve", "creative", "apdaptive"],
    Personal_hobbies: ["Gaming", "Binge watching"],
  };
  
  var resume_JSON_Format = JSON.stringify(resume);
  console.log(resume_JSON_Format);
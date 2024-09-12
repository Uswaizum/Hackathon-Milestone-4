// Get references for form & display area
const form = document.getElementById('resume-form') as HTMLFormElement | null;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement | null;

// Handling Form Submission
form?.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  // page reload prevention.

  // Collect user input values
  const name = (document.getElementById('name') as HTMLInputElement |null)?.value;
  const email = (document.getElementById('email') as HTMLInputElement | null)?.value;
  const phone = (document.getElementById('phone') as HTMLInputElement | null)?.value;
  const address = (document.getElementById('address') as HTMLInputElement | null)?.value;
  const DOB = (document.getElementById('dob') as HTMLInputElement | null)?.value;
  const gender = (document.getElementById('gender') as HTMLInputElement | null)?.value;
  const education = (document.getElementById('education') as HTMLInputElement | null)?.value;
  const skills = (document.getElementById('skills') as HTMLInputElement | null)?.value;
  const workexperience = (document.getElementById('work-experience') as HTMLInputElement | null)?.value;

  // Generating the resume content dynamically.
  const resumeHTML = `
    <h2><b>Editable Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b><span contenteditable ="true">${name}</span></p>
    <p><b>Email:</b><span contenteditable ="true">${email}</span></p>
    <p><b>Phone:</b><span contenteditable ="true">${phone}</span></p>
    <h3>Address</h3>
    <p contenteditable ="true">${address}</p>
    <h3>DOB</h3>
    <p contenteditable ="true">${DOB}</p>
    <h3>Gender</h3>
    <p contenteditable ="true">${gender}</p>
    <h3>Education</h3>
    <p contenteditable ="true">${education}</p>
    <h3>skills</h3>
    <p contenteditable ="true">${skills}</p>
    <h3>workexperience</h3>
    <p contenteditable ="true">${workexperience}</p>
  `;

  // Displaying the resume in the display area.
  if (resumeDisplayElement) {
    resumeDisplayElement.innerHTML = resumeHTML;
  } else {
    console.error('Resume display element is missing');
  }
});
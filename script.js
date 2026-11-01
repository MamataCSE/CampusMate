// =====================================
// CAMPUSMATE - CAMPUS MANAGEMENT SYSTEM
// Help Desk Question and Answer System
// =====================================

function showSection(sectionId) {
    const sections = document.querySelectorAll(".section");

    sections.forEach(function(section) {
        section.classList.add("hidden");
    });

    const selectedSection = document.getElementById(sectionId);

    if (selectedSection) {
        selectedSection.classList.remove("hidden");
    }
}


// =====================================
// HELP DESK
// =====================================

function submitHelp(event) {
    event.preventDefault();

    const nameInput = document.getElementById("studentName");
    const messageInput = document.getElementById("message");
    const response = document.getElementById("response");

    const name = nameInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !message) {
        response.textContent = "Please enter your name and question.";
        return;
    }

    const question = message.toLowerCase();

    let answer = "";

    // =====================================
    // STUDENT DETAILS
    // =====================================

    if (
        question.includes("my details") ||
        question.includes("about me") ||
        question.includes("student details") ||
        question.includes("my profile")
    ) {
        answer = "You are a 3rd-year Computer Science and Engineering (CSE) student. Your admission year is 2024.";
    }

    else if (
        question.includes("my course") ||
        question.includes("which course") ||
        question.includes("my branch") ||
        question.includes("which branch")
    ) {
        answer = "You are studying Computer Science and Engineering (CSE).";
    }

    else if (
        question.includes("my year") ||
        question.includes("which year") ||
        question.includes("study year") ||
        question.includes("year am i")
    ) {
        answer = "You are currently studying in 3rd year.";
    }

    else if (
        question.includes("admission year") ||
        question.includes("admitted") ||
        question.includes("joining year") ||
        question.includes("when did i join")
    ) {
        answer = "Your college admission year is 2024.";
    }

    // =====================================
    // DAILY SCHEDULE
    // =====================================

    else if (
        question.includes("daily schedule") ||
        question.includes("my schedule") ||
        question.includes("daily routine") ||
        question.includes("my timings")
    ) {
        answer = "Your daily schedule: 8 AM to 9 AM: Bus to college. 9 AM to 4 PM: College. 4 PM to 5 PM: Bus to hostel. 5 PM to 8 AM the next day: Hostel.";
    }

    else if (
        question.includes("college timing") ||
        question.includes("college timings") ||
        question.includes("when does college start") ||
        question.includes("when does college end")
    ) {
        answer = "Your college timings are 9 AM to 4 PM.";
    }

    else if (
        question.includes("bus timing") ||
        question.includes("bus timings") ||
        question.includes("bus to college") ||
        question.includes("travel to college")
    ) {
        answer = "Your bus timing to college is 8 AM to 9 AM.";
    }

    else if (
        question.includes("bus to hostel") ||
        question.includes("return bus") ||
        question.includes("travel to hostel")
    ) {
        answer = "Your bus timing from college to the hostel is 4 PM to 5 PM.";
    }

    else if (
        question.includes("hostel timing") ||
        question.includes("hostel timings") ||
        question.includes("when am i in hostel")
    ) {
        answer = "You stay in the hostel from 5 PM until 8 AM the next day.";
    }

    // =====================================
    // GREETINGS
    // =====================================

    else if (
        question.includes("hello") ||
        question.includes("hi") ||
        question.includes("hey") ||
        question.includes("good morning") ||
        question.includes("good afternoon") ||
        question.includes("good evening")
    ) {
        answer = "Welcome to CampusMate! How can I help you today?";
    }

    // ASSISTANT NAME
    else if (
        question.includes("your name") ||
        question.includes("who are you")
    ) {
        answer = "My name is CampusMate! I am your campus management assistant.";
    }

    // ABOUT CAMPUSMATE
    else if (
        question.includes("what is campusmate") ||
        question.includes("about campusmate")
    ) {
        answer = "CampusMate is a campus management system that helps students access campus information.";
    }

    // HOW ARE YOU
    else if (question.includes("how are you")) {
        answer = "I am doing well! Thank you for asking. How can I help you?";
    }

    // =====================================
    // COLLEGE BLOCK INFORMATION
    // =====================================

    // A BLOCK
    else if (
        question.includes("a block") ||
        question.includes("block a")
    ) {
        answer = "A Block is used for college functions and seminars. A and B Blocks share one washroom.";
    }

    // B BLOCK
    else if (
        question.includes("b block") ||
        question.includes("block b")
    ) {
        answer = "B Block contains the college library and some faculty rooms. A and B Blocks share one washroom.";
    }

    // C BLOCK
    else if (
        question.includes("c block") ||
        question.includes("block c")
    ) {
        answer = "C Block contains classrooms. C and D Blocks share one washroom.";
    }

    // D BLOCK
    else if (
        question.includes("d block") ||
        question.includes("block d")
    ) {
        answer = "D Block contains classrooms. C and D Blocks share one washroom.";
    }

    // E BLOCK
    else if (
        question.includes("e block") ||
        question.includes("block e")
    ) {
        answer = "E Block is sometimes used for interviews. It has some faculty rooms and its own washroom.";
    }

    // LIBRARY
    else if (
        question.includes("library") ||
        question.includes("books") ||
        question.includes("book issue") ||
        question.includes("reading room")
    ) {
        answer = "The college library is located in B Block.";
    }

    // WASHROOM
    else if (
        question.includes("washroom") ||
        question.includes("restroom") ||
        question.includes("toilet") ||
        question.includes("bathroom")
    ) {
        answer = "A and B Blocks share one washroom. C and D Blocks share one washroom. E Block has its own washroom.";
    }

    // FUNCTIONS AND SEMINARS
    else if (
        question.includes("function") ||
        question.includes("seminar") ||
        question.includes("college fest") ||
        question.includes("celebration")
    ) {
        answer = "College functions and seminars are held in A Block.";
    }

    // INTERVIEWS
    else if (
        question.includes("interview") ||
        question.includes("interviews")
    ) {
        answer = "E Block is sometimes used for interviews.";
    }

    // FACULTY ROOMS
    else if (
        question.includes("faculty room") ||
        question.includes("faculty rooms") ||
        question.includes("teachers room") ||
        question.includes("teacher room")
    ) {
        answer = "Faculty rooms are located in both B Block and E Block.";
    }

    // CLASSROOMS
    else if (
        question.includes("classroom") ||
        question.includes("classrooms") ||
        question.includes("class room") ||
        question.includes("where are classes") ||
        question.includes("where are the classes")
    ) {
        answer = "College classrooms are located in C Block and D Block.";
    }

    // TIMETABLE
    else if (
        question.includes("timetable") ||
        question.includes("class time") ||
        question.includes("class schedule") ||
        question.includes("lecture time")
    ) {
        answer = "Open the Timetable section to check your class schedule.";
    }

    // FACULTY
    else if (
        question.includes("faculty") ||
        question.includes("teacher") ||
        question.includes("professor") ||
        question.includes("lecturer")
    ) {
        answer = "Open the Faculty section to check faculty information. Faculty rooms are located in B Block and E Block.";
    }

    // NOTICES
    else if (
        question.includes("notice") ||
        question.includes("announcement") ||
        question.includes("circular")
    ) {
        answer = "Open the Notices section to check campus announcements.";
    }

    // EVENTS
    else if (
        question.includes("event") ||
        question.includes("fest") ||
        question.includes("celebration")
    ) {
        answer = "Open the Events section to check campus events. College functions and seminars are held in A Block.";
    }

    // COLLEGE OFFICE
    else if (
        question.includes("office") ||
        question.includes("administration") ||
        question.includes("admin office")
    ) {
        answer = "Please contact the college reception or administration department for office location and working hours.";
    }

    // DEPARTMENTS
    else if (
        question.includes("department") ||
        question.includes("cse") ||
        question.includes("computer science") ||
        question.includes("ise") ||
        question.includes("information science")
    ) {
        answer = "You are a CSE student. For the exact location of your department or another department, please check your campus directory or ask the department office.";
    }

    // LABORATORY
    else if (
        question.includes("laboratory") ||
        question.includes("computer lab") ||
        question.includes(" lab")
    ) {
        answer = "Please ask your department faculty about the location and availability of your laboratory.";
    }

    // EXAMINATIONS
    else if (
        question.includes("exam") ||
        question.includes("examination") ||
        question.includes("test") ||
        question.includes("internal marks")
    ) {
        answer = "Check official college notices or contact your department for examination schedules and marks.";
    }

    // ATTENDANCE
    else if (
        question.includes("attendance") ||
        question.includes("absent") ||
        question.includes("present")
    ) {
        answer = "Please check with your faculty or department office for attendance details.";
    }

    // HOLIDAYS
    else if (
        question.includes("holiday") ||
        question.includes("holidays") ||
        question.includes("leave")
    ) {
        answer = "Check official college notices for holiday announcements and the academic calendar.";
    }

    // FEES
    else if (
        question.includes("fee") ||
        question.includes("fees") ||
        question.includes("payment")
    ) {
        answer = "Please contact the college accounts office for information about fees and payments.";
    }

    // ADMISSION
    else if (
        question.includes("admission") ||
        question.includes("admissions") ||
        question.includes("join college")
    ) {
        answer = "Contact the college admission office for eligibility, application procedures, and admission dates.";
    }

    // ID CARD
    else if (
        question.includes("id card") ||
        question.includes("identity card") ||
        question.includes("student card")
    ) {
        answer = "Contact the college administration office if you need a new student ID card or replacement.";
    }

    // TRANSPORT
    else if (
        question.includes("bus") ||
        question.includes("transport") ||
        question.includes("college bus")
    ) {
        answer = "Your bus to college is from 8 AM to 9 AM, and your bus to the hostel is from 4 PM to 5 PM.";
    }

    // PARKING
    else if (
        question.includes("parking") ||
        question.includes("park vehicle")
    ) {
        answer = "Ask campus security or the reception desk where student parking is permitted.";
    }

    // CANTEEN
    else if (
        question.includes("canteen") ||
        question.includes("food") ||
        question.includes("lunch") ||
        question.includes("breakfast")
    ) {
        answer = "Please check your campus for the canteen location and opening hours.";
    }

    // WIFI
    else if (
        question.includes("wifi") ||
        question.includes("wi-fi") ||
        question.includes("internet")
    ) {
        answer = "Contact your campus IT support team for Wi-Fi access and internet connection problems.";
    }

    // CERTIFICATES
    else if (
        question.includes("certificate") ||
        question.includes("documents") ||
        question.includes("transcript")
    ) {
        answer = "Contact your college administration office to ask about certificates and required documents.";
    }

    // SCHOLARSHIP
    else if (question.includes("scholarship")) {
        answer = "Contact your college scholarship section or student welfare office for scholarship information.";
    }

    // PLACEMENTS
    else if (
        question.includes("placement") ||
        question.includes("job") ||
        question.includes("campus interview")
    ) {
        answer = "Contact your college placement cell for placement updates and company visits.";
    }

    // INTERNSHIPS
    else if (question.includes("internship")) {
        answer = "Check your college placement cell and official internship announcements for opportunities.";
    }

    // SPORTS
    else if (
        question.includes("sports") ||
        question.includes("playground") ||
        question.includes("chess") ||
        question.includes("games")
    ) {
        answer = "Ask the campus sports department about sports facilities and available games.";
    }

    // LOST AND FOUND
    else if (
        question.includes("lost") ||
        question.includes("found") ||
        question.includes("missing item")
    ) {
        answer = "Please report lost belongings to campus security or the college reception.";
    }

    // SECURITY
    else if (
        question.includes("security") ||
        question.includes("emergency") ||
        question.includes("safety")
    ) {
        answer = "Contact campus security or the college administration for assistance. For an immediate emergency, contact emergency services.";
    }

    // CONTACT DETAILS
    else if (
        question.includes("contact") ||
        question.includes("phone number") ||
        question.includes("email address")
    ) {
        answer = "Check your college's official website or contact the reception desk for verified contact details.";
    }

    // LOCATION
    else if (
        question.includes("location") ||
        question.includes("address") ||
        question.includes("where is the college")
    ) {
        answer = "Check your college's official website or campus map for the correct address and directions.";
    }

    // THANK YOU
    else if (
        question.includes("thank you") ||
        question.includes("thanks")
    ) {
        answer = "You're welcome! Happy to help.";
    }

    // GOODBYE
    else if (
        question.includes("bye") ||
        question.includes("goodbye")
    ) {
        answer = "Goodbye! Have a wonderful day.";
    }

    // WHAT CAN YOU DO?
    else if (
        question.includes("what can you do") ||
        question.includes("help me") ||
        question.includes("your features")
    ) {
        answer = "I can help you find information about your student details, daily schedule, college blocks, classrooms, faculty, library, washrooms, timetable, notices, events, examinations, fees, transport, and other campus services.";
    }

    // DEFAULT RESPONSE
    else {
        answer = "I don't have an answer for that question yet. Please ask about your student details, daily schedule, college blocks, classrooms, library, washrooms, faculty, timetable, functions, seminars, or other campus services.";
    }

    // DISPLAY ANSWER
    response.textContent = "CampusMate: Hello, " + name + "! " + answer;

    // CLEAR INPUT FIELDS AFTER ANSWER IS DISPLAYED
    event.target.reset();
}

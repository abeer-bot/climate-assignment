const OPEN_DATE = new Date("2026-04-28T00:00:00");
const CLOSE_DATE = new Date("2026-05-02T23:59:59");
const TOTAL_POINTS = 75;

const questions = [
  { section: "שאלות איתור מידע" },
  {
    id: "q1",
    type: "text",
    points: 5,
    title: "1. על פי פסקה א, אילו שני סימנים לשינוי סביבתי מתאר פרידמן?",
    keywords: [["שדה", "לא קיים"], ["זחלים", "לא רואה", "בעלי חיים"]],
    answer: "השדה כבר לא קיים, והוא כבר לא רואה זחלים / בעלי חיים כמו בעבר."
  },
  {
    id: "q2",
    type: "text",
    points: 8,
    title: "2. ציינו על פי פסקה ב, שתי השפעות נפשיות שעלולות להיגרם בעקבות משבר האקלים.",
    keywordsAnyCount: 2,
    keywordsAny: ["פחד", "כעס", "דיכאון", "דאגה", "יגון"],
    answer: "יש לקבל שתיים מתוך: פחד, כעס, דיכאון, דאגה, יגון אקלים."
  },
  {
    id: "q3",
    type: "text",
    points: 6,
    title: "3. על פי פסקה ג, מה עשתה גרטה תונברג כדי לקדם פעולה נגד משבר האקלים? ציינו שתי פעולות או תוצאות.",
    keywords: [["הפסיקה ללמוד", "בית הספר"], ["להקשיב למדע", "מנהיג", "סחפה", "מחאה", "לפעול"]],
    answer: "הפסיקה ללמוד כדי לעסוק במשבר האקלים, קראה למנהיגי העולם להקשיב למדע ולפעול, וסחפה אחריה אנשים למחאה."
  },
  { section: "שאלות יישום" },
  {
    id: "q4",
    type: "fill",
    points: 8,
    title: "4. קראו את הקטע הקצר וענו: יש בני נוער שמרגישים כי בעיות עולמיות גדולות מדי בשבילם. הם טוענים שאין להם השפעה אמיתית על החלטות של ממשלות, ולכן הם מעדיפים לא להשתתף במחאות.",
    prompt: "לפי הקטע הקצר, חלק מבני הנוער מרגישים ________. לעומת זאת, על פי פסקה ה במאמר, מאיה ונובל מאמינות שהפחד צריך לגרום ל ________ ושיש לבני הנוער ________.",
    blanks: [
      { label: "חלק מבני הנוער מרגישים", keywords: ["חוסר אונים", "אין השפעה", "חוסר השפעה", "אין להם השפעה"] },
      { label: "הפחד צריך לגרום ל", keywords: ["פעולה", "לפעול"] },
      { label: "שיש לבני הנוער", keywords: ["כוח", "לשנות", "להשפיע", "לפעול", "יכולת"] }
    ],
    answer: "חוסר אונים / אין השפעה; פעולה; כוח לשנות / להשפיע / לפעול."
  },
  {
    id: "q5",
    type: "fill",
    points: 6,
    title: "5. קראו את הקטע הקצר וענו: יש אנשים הסבורים שמחאות תלמידים פוגעות בלמידה, מפני שהתלמידים אינם מגיעים לכיתות ומפסידים חומר לימודי.",
    prompt: "על פי הקטע הקצר, חלק מהאנשים חושבים שמחאות תלמידים פוגעות ב ________. לעומת זאת, על פי פסקה ד במאמר, התלמידים שבתו כדי להעלות את ________.",
    blanks: [
      { label: "מחאות תלמידים פוגעות ב", keywords: ["למידה", "לימודים", "חומר לימודי"] },
      { label: "התלמידים שבתו כדי להעלות את", keywords: ["מודעות", "משבר האקלים"] }
    ],
    answer: "למידה / לימודים / חומר לימודי; מודעות למשבר האקלים."
  },
  { section: "שאלות הבנה והסקת מסקנות" },
  {
    id: "q6",
    type: "choice",
    points: 5,
    title: "6. מהו הרעיון המרכזי של פסקה ו?",
    options: [
      "דור ה־Z מאמין בפעולה, בשינוי ובעוררות תקווה.",
      "דור ה־Y אינו מכיר במשבר האקלים.",
      "המחאה בישראל נכשלה ולא השפיעה.",
      "משבר האקלים אינו קשור לבני נוער."
    ],
    correct: 0
  },
  {
    id: "q7",
    type: "choice",
    points: 5,
    title: "7. מדוע בני דור ה־Z יוצאים למחאה, על פי פסקאות ד–ה?",
    options: [
      "כדי לבטל את כל השיעורים בבית הספר.",
      "כדי להעלות מודעות למשבר האקלים ולדרוש פעולה.",
      "כדי להוכיח שאין שינוי באקלים.",
      "כדי להיפגש עם מנהיגי העולם בלבד."
    ],
    correct: 1
  },
  { section: "שאלות על משמעות של מילים, צירופים ומאזכרים" },
  {
    id: "q8",
    type: "choice",
    points: 5,
    title: "8. בפסקה ב כתוב: ״Climate Grief, יגון האקלים״. למה הכוונה בצירוף ״יגון האקלים״?",
    options: [
      "שמחה בעקבות מזג אוויר נעים.",
      "תחושת פחד, עצב ודאגה בעקבות משבר האקלים.",
      "שם של ארגון סביבתי.",
      "פעילות ספורטיבית בטבע."
    ],
    correct: 1
  },
  {
    id: "q9",
    type: "choice",
    points: 5,
    title: "9. בפסקה ד כתוב: ״כדי להעלות את המודעות למשבר האקלים״. למה הכוונה במילה ״מודעות״?",
    options: [
      "ידיעה והבנה של הבעיה.",
      "התעלמות מן הבעיה.",
      "שיעור בבית הספר בלבד.",
      "תחושת עייפות."
    ],
    correct: 0
  },
  {
    id: "q10",
    type: "choice",
    points: 5,
    title: "10. בפסקה ג כתוב: ״היא הפסיקה ללמוד בבית הספר״. למי הכוונה במילה ״היא״?",
    options: [
      "מאיה גנאים",
      "גרטה תונברג",
      "יעל וענבל",
      "האגודה האמריקאית"
    ],
    correct: 1
  },
  { section: "11. מילות קישור" },
  {
    id: "q11a",
    type: "choice",
    points: 4,
    title: "11.1 משבר האקלים משפיע על בני נוער, משום שהוא מעורר פחד ודאגה. בחרו מילת קישור מתאימה:",
    options: ["מפני ש", "למרות ש", "אחרי ש", "משום כך"],
    correct: 0
  },
  {
    id: "q11b",
    type: "choice",
    points: 4,
    title: "11.2 בני נוער יוצאים למחאה בשביל להעלות מודעות למשבר האקלים. בחרו מילת קישור מתאימה:",
    options: ["כמו", "כדי", "אולם", "למרות"],
    correct: 1
  },
  {
    id: "q11c",
    type: "choice",
    points: 4,
    title: "11.3 דור ה־Y מרגיש חוסר אונים, _________ דור ה־Z מאמין שאפשר לשנות את המצב.",
    options: ["אם", "בגלל", "או", "אבל"],
    correct: 3
  }
];

function includesAny(text, arr) {
  return arr.some(k => text.includes(k));
}

function gradeTextAnswer(answer, q) {
  const text = (answer || "").trim().toLowerCase();
  if (!text) return 0;

  if (q.keywordsAny) {
    const found = q.keywordsAny.filter(k => text.includes(k.toLowerCase()));
    return Math.min(q.points, (found.length / q.keywordsAnyCount) * q.points);
  }

  if (q.keywords) {
    let groupsFound = 0;
    q.keywords.forEach(group => {
      if (includesAny(text, group.map(k => k.toLowerCase()))) groupsFound++;
    });
    return (groupsFound / q.keywords.length) * q.points;
  }

  return 0;
}

function gradeFillAnswer(q) {
  let earned = 0;
  const perBlank = q.points / q.blanks.length;

  q.blanks.forEach((blank, idx) => {
    const value = (document.querySelector(`[name="${q.id}_${idx}"]`)?.value || "").toLowerCase();
    if (includesAny(value, blank.keywords.map(k => k.toLowerCase()))) {
      earned += perBlank;
    }
  });

  return earned;
}

function renderQuestions() {
  const wrapper = document.getElementById("questions");
  questions.forEach(q => {
    if (q.section) {
      const section = document.createElement("div");
      section.className = "section-title";
      section.textContent = q.section;
      wrapper.appendChild(section);
      return;
    }

    const div = document.createElement("div");
    div.className = "question";

    let html = `<div class="q-title">${q.title} <span class="points">(${q.points} נק׳)</span></div>`;

    if (q.type === "text") {
      html += `<textarea name="${q.id}" placeholder="כתבו את התשובה כאן"></textarea>`;
    }

    if (q.type === "fill") {
      html += `<p>${q.prompt}</p><div class="fill-row">`;
      q.blanks.forEach((blank, idx) => {
        html += `<label>${blank.label}<input type="text" name="${q.id}_${idx}" /></label>`;
      });
      html += `</div>`;
    }

    if (q.type === "choice") {
      html += `<div class="options">`;
      q.options.forEach((option, idx) => {
        html += `<label><input type="radio" name="${q.id}" value="${idx}" /> ${option}</label>`;
      });
      html += `</div>`;
    }

    div.innerHTML = html;
    wrapper.appendChild(div);
  });
}

function checkAvailability() {
  const box = document.getElementById("availability");
  const now = new Date();

  if (now < OPEN_DATE) {
    box.textContent = "המטלה עדיין לא נפתחה. ניתן להגיש החל מתאריך 28/04/2026.";
  } else if (now > CLOSE_DATE) {
    box.textContent = "תאריך סגירת המטלה עבר: 02/05/2026. ניתן לצפות, אך יש לבדוק מול המורה אם ההגשה מתקבלת.";
  } else {
    box.textContent = "המטלה פתוחה להגשה כעת.";
  }
}

function handleSubmit(event) {
  event.preventDefault();

  let score = 0;
  const review = [];

  questions.forEach(q => {
    if (q.section) return;

    let earned = 0;

    if (q.type === "choice") {
      const selected = document.querySelector(`[name="${q.id}"]:checked`);
      if (selected && Number(selected.value) === q.correct) {
        earned = q.points;
      }
    }

    if (q.type === "text") {
      const value = document.querySelector(`[name="${q.id}"]`)?.value || "";
      earned = gradeTextAnswer(value, q);
    }

    if (q.type === "fill") {
      earned = gradeFillAnswer(q);
    }

    earned = Math.round(earned * 10) / 10;
    score += earned;

    review.push({
      title: q.title,
      earned,
      points: q.points,
      answer: q.answer || (q.options ? q.options[q.correct] : "")
    });
  });

  score = Math.round(score * 10) / 10;

  const result = document.getElementById("result");
  const percent = Math.round((score / TOTAL_POINTS) * 100);

  result.classList.remove("hidden");
  result.innerHTML = `
    <h2>תוצאה</h2>
    <p class="score">ציון: ${score} מתוך ${TOTAL_POINTS} נקודות (${percent})</p>
    <p><strong>שם:</strong> ${document.getElementById("studentName").value || "לא הוזן"}</p>
    <p><strong>כיתה:</strong> ${document.getElementById("studentClass").value || "לא הוזנה"}</p>
    <p class="notice">שימו לב: בשאלות פתוחות וחצי־פתוחות הציון מחושב לפי מילות מפתח. מומלץ שהמורה תבדוק את התשובות לפני קביעת ציון סופי.</p>
    <h3>פירוט בדיקה</h3>
    ${review.map(item => {
      const cls = item.earned === item.points ? "correct" : item.earned > 0 ? "partial" : "wrong";
      return `<div class="review-item">
        <p><strong>${item.title}</strong></p>
        <p class="${cls}">ניקוד: ${item.earned}/${item.points}</p>
        <p><strong>תשובה מצופה:</strong> ${item.answer}</p>
      </div>`;
    }).join("")}
  `;

  result.scrollIntoView({ behavior: "smooth" });
}

renderQuestions();
checkAvailability();
document.getElementById("assignmentForm").addEventListener("submit", handleSubmit);

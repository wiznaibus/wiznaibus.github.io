
window.onload = function () {
    var chart01 = new CanvasJS.Chart("chartQuestion01", {
        title: {
            text: "What is your age?"
        },
        data: [{
            type: "column",
            dataPoints: [
                { label: "13", y: 3 },
                { label: "14", y: 2 },
                { label: "15", y: 4 },
                { label: "16", y: 6 },
                { label: "17", y: 5 },
                { label: "18", y: 6 },
                { label: "19", y: 11 },
                { label: "20", y: 5 },
                { label: "21", y: 5 },
                { label: "22", y: 5 },
                { label: "23", y: 11 },
                { label: "24", y: 6 },
                { label: "25", y: 5 },
                { label: "26", y: 4 },
                { label: "27", y: 6 },
                { label: "28", y: 4 },
                { label: "29", y: 5 },
                { label: "30", y: 1 },
                { label: "31", y: 3 },
                { label: "32", y: 3 },
                { label: "33", y: 1 },
                { label: "34", y: 1 },
                { label: "35", y: 2 },
                { label: "38", y: 1 },
                { label: "39", y: 2 },
                { label: "43", y: 1 },
                { label: "45", y: 1 },
                { label: "Prefer not to say", y: 6 },

            ]
        }]
    });

    var chart02 = new CanvasJS.Chart("chartQuestion02", {
        title: {
            text: "What is your gender?"
        },
        data: [{
            type: "column",
            dataPoints: [
                { label: "Female", y: 96 },
                { label: "Male", y: 9 },
                { label: "Nonbinary", y: 9 },
                { label: "Prefer not to say", y: 1 },

            ]
        }]
    });

    var chart03 = new CanvasJS.Chart("chartQuestion03", {
        title: {
            text: "Are you transgender?"
        },
        data: [{
            type: "column",
            dataPoints: [
                { label: "No", y: 109 },
                { label: "Not sure", y: 1 },
                { label: "Prefer not to say", y: 1 },
                { label: "Yes", y: 4 },

            ]
        }]
    });

    var chart04 = new CanvasJS.Chart("chartQuestion04", {
        title: {
            text: "What is your sexuality?"
        },
        data: [{
            type: "column",
            dataPoints: [
                { label: "Asexual", y: 12 },
                { label: "Bisexual", y: 26 },
                { label: "Heterosexual (straight)", y: 48 },
                { label: "Homosexual (lesbian or gay)", y: 7 },
                { label: "Other", y: 5 },
                { label: "Pansexual", y: 10 },
                { label: "Prefer not to say", y: 5 },
                { label: "Queer", y: 1 },

            ]
        }]
    });

    var chart05 = new CanvasJS.Chart("chartQuestion05", {
        title: {
            text: "What is your relationship status?"
        },
        data: [{
            type: "column",
            dataPoints: [
                { label: "Engaged", y: 4 },
                { label: "In a relationship", y: 16 },
                { label: "Married", y: 9 },
                { label: "Prefer not to say", y: 3 },
                { label: "Single", y: 80 },

            ]
        }]
    });

    var chart06 = new CanvasJS.Chart("chartQuestion06", {
        title: {
            text: "What is your country of residence?"
        },
        data: [{
            type: "column",
            dataPoints: [
                { label: "Australia", y: 3 },
                { label: "Bahrain", y: 1 },
                { label: "Brazil", y: 2 },
                { label: "Brunei", y: 1 },
                { label: "Canada", y: 11 },
                { label: "Chile", y: 1 },
                { label: "Egypt", y: 1 },
                { label: "Finland", y: 2 },
                { label: "France", y: 1 },
                { label: "Germany", y: 5 },
                { label: "Indonesia", y: 2 },
                { label: "Japan", y: 1 },
                { label: "Mexico", y: 1 },
                { label: "New Zealand", y: 1 },
                { label: "Norway", y: 1 },
                { label: "Philippines", y: 3 },
                { label: "Poland", y: 1 },
                { label: "Scotland", y: 1 },
                { label: "Singapore", y: 6 },
                { label: "Spain", y: 1 },
                { label: "United Kingdom", y: 5 },
                { label: "United States", y: 59 },

            ]
        }]
    });

    var chart07 = new CanvasJS.Chart("chartQuestion07", {
        title: {
            text: "How would you describe your racial and ethnic background?"
        },
        data: [{
            type: "column",
            dataPoints: [
                { label: "banana", y: 18 }
            ]
        }]
    });

    var chart08 = new CanvasJS.Chart("chartQuestion08", {
        title: {
            text: "What is your occupational status?"
        },
        data: [{
            type: "column",
            dataPoints: [
                { label: "Employed, full-time", y: 36 },
                { label: "Employed, part-time", y: 20 },
                { label: "Homemaker and/or primary caregiver", y: 3 },
                { label: "Self-employed", y: 4 },
                { label: "Unable to work (including if you are too young to work)", y: 17 },
                { label: "Unemployed, looking for work", y: 10 },
                { label: "Unemployed, not looking for work", y: 18 },

            ]
        }]
    });

    var chart09 = new CanvasJS.Chart("chartQuestion09", {
        title: {
            text: "Which categories best describe your occupation?"
        },
        data: [{
            type: "column",
            dataPoints: [
                { label: "Agriculture, food, and natural resources", y: 2 },
                { label: "Architecture and construction", y: 2 },
                { label: "Arts, audio/video technology, and communications", y: 15 },
                { label: "Business management and administration", y: 5 },
                { label: "Education and training", y: 12 },
                { label: "Engineering (civil, mechanical, electrical)", y: 1 },
                { label: "Finance", y: 1 },
                { label: "Government and public administration", y: 5 },
                { label: "Health science", y: 6 },
                { label: "Human services (social work, public planning, nonprofit)", y: 4 },
                { label: "Information technology", y: 3 },
                { label: "Law, public safety, corrections, and security", y: 1 },
                { label: "Marketing, sales, and service", y: 12 },
                { label: "Not employed", y: 47 },
                { label: "Science and mathematics", y: 4 },
                { label: "Technology and software", y: 7 },

            ]
        }]
    });

    var chart10 = new CanvasJS.Chart("chartQuestion10", {
        title: {
            text: "Are you currently a student?"
        },
        data: [{
            type: "column",
            dataPoints: [
                { label: "No", y: 52 },
                { label: "Yes, full-time student", y: 58 },
                { label: "Yes, part-time student", y: 5 },

            ]
        }]
    });

    var chart11 = new CanvasJS.Chart("chartQuestion11", {
        title: {
            text: "What is your education level? (If you are a student, please select the highest degree you have received)"
        },
        data: [{
            type: "column",
            dataPoints: [
                { label: "Associate's degree (AA, AS)", y: 8 },
                { label: "Bachelor's degree (BA, BS)", y: 31 },
                { label: "High school diploma or equivalent (GED)", y: 22 },
                { label: "Master's degree (MA, MS, MEd)", y: 14 },
                { label: "Primary education, no degree (K-12)", y: 15 },
                { label: "Professional degree (MD, DDS, DVM)", y: 1 },
                { label: "Secondary education, no degree (College, university, trade school, etc...)", y: 18 },

            ]
        }]
    });

    var chart12 = new CanvasJS.Chart("chartQuestion12", {
        title: {
            text: "Please list your educational field(s) of study"
        },
        data: [{
            type: "column",
            dataPoints: [
                { label: "Agriculture", y: 1 },
                { label: "Biology and biomedical", y: 6 },
                { label: "Business", y: 5 },
                { label: "Communication and journalism", y: 5 },
                { label: "Computer and information science", y: 17 },
                { label: "Education", y: 8 },
                { label: "Engineering", y: 7 },
                { label: "General or nonspecified", y: 19 },
                { label: "Language", y: 16 },
                { label: "Law", y: 1 },
                { label: "Mathematics and other science", y: 12 },
                { label: "Medical and health science", y: 7 },
                { label: "Psychology", y: 8 },
                { label: "Social science and history", y: 15 },
                { label: "Visual and performing arts", y: 20 },
            ]
        }]
    });

    var chart13 = new CanvasJS.Chart("chartQuestion13", {
        title: {
            text: "Have you ever been to South Korea?"
        },
        data: [{
            type: "column",
            dataPoints: [
                { label: "No", y: 89 },
                { label: "Yes", y: 26 },

            ]
        }]
    });

    var chart14 = new CanvasJS.Chart("chartQuestion14", {
        title: {
            text: "Do you want to visit Korea?"
        },
        data: [{
            type: "column",
            dataPoints: [
                { label: "Not interested", y: 11 },
                { label: "Yes, influenced by Kpop and Korean culture", y: 67 },
                { label: "Yes, influenced by other factors not including Kpop/K-culture", y: 35 },

            ]
        }]
    });

    var chart15 = new CanvasJS.Chart("chartQuestion15", {
        title: {
            text: "Do you speak Korean?"
        },
        data: [{
            type: "column",
            dataPoints: [
                { label: "A few words", y: 60 },
                { label: "A moderate amount", y: 21 },
                { label: "Conversational", y: 2 },
                { label: "Fluent", y: 3 },
                { label: "None", y: 30 },

            ]
        }]
    });

    var chart16 = new CanvasJS.Chart("chartQuestion16", {
        title: {
            text: "Are you studying Korean?"
        },
        data: [{
            type: "column",
            dataPoints: [
                { label: "Currently studying", y: 31 },
                { label: "Fluent", y: 3 },
                { label: "Not interested", y: 20 },
                { label: "Used to study", y: 14 },
                { label: "Want to study", y: 48 },

            ]
        }]
    });

    var chart17 = new CanvasJS.Chart("chartQuestion17", {
        title: {
            text: "Did you listen to Kpop before ONEUS?"
        },
        data: [{
            type: "column",
            dataPoints: [
                { label: "No", y: 3 },
                { label: "Yes", y: 111 },

            ]
        }]
    });

    var chart18 = new CanvasJS.Chart("chartQuestion18", {
        title: {
            text: "How long have you been listening to Kpop?"
        },
        data: [{
            type: "column",
            dataPoints: [
                { label: "1 year", y: 7 },
                { label: "11 or more years", y: 20 },
                { label: "2 years", y: 15 },
                { label: "3 years", y: 19 },
                { label: "4 years", y: 11 },
                { label: "5-6 years", y: 9 },
                { label: "7-8 years", y: 14 },
                { label: "9-10 years", y: 8 },
                { label: "Less than 6 months", y: 5 },
                { label: "Less than a year", y: 7 },

            ]
        }]
    });

    var chart19 = new CanvasJS.Chart("chartQuestion19", {
        title: {
            text: "How many Kpop artists would you consider yourself a fan/stan of?"
        },
        data: [{
            type: "column",
            dataPoints: [
                { label: "1", y: 5 },
                { label: "11-20", y: 17 },
                { label: "21-30", y: 9 },
                { label: "2-5", y: 48 },
                { label: "31-50", y: 4 },
                { label: "51-74", y: 4 },
                { label: "6-10", y: 26 },
                { label: "75+", y: 3 },

            ]
        }]
    });

    var chart20 = new CanvasJS.Chart("chartQuestion20", {
        title: {
            text: "What types of Kpop artists are you mostly a fan of?"
        },
        data: [{
            type: "column",
            dataPoints: [
                { label: "Bands", y: 45 },
                { label: "Boy groups", y: 109 },
                { label: "Co-ed groups", y: 18 },
                { label: "Female soloists", y: 36 },
                { label: "Girl groups", y: 51 },
                { label: "Male soloists", y: 31 },
                { label: "Other", y: 3 },

            ]
        }]
    });

    var chart21 = new CanvasJS.Chart("chartQuestion21", {
        title: {
            text: "How long have you been a fan of ONEUS?"
        },
        data: [{
            type: "bar",
            dataPoints: [
                { label: "Fly With Us era (Sept 30, 2019-Mar 23, 2020)", y: 29 },
                { label: "In Its Time era (Mar 24, 2020 - Apr 29, 2020)", y: 12 },
                { label: "Light Us era (Jan 9, 2019 - May 28, 2019)", y: 28 },
                { label: "Lived era (Aug 19, 2020 - Now)", y: 7 },
                { label: "Predebut (Produce 101 S2/RBW Boyz)", y: 13 },
                { label: "Raise Us era (May 29, 2019 - Sept 29, 2019)", y: 10 },
                { label: "Road to Kingdom (Apr 30, 2020 - Aug 18, 2020)", y: 17 },

            ]
        }]
    });

    var chart22 = new CanvasJS.Chart("chartQuestion22", {
        title: {
            text: "How did you discover ONEUS?"
        },
        data: [{
            type: "column",
            dataPoints: [
                { label: "Another RBW artist", y: 4 },
                { label: "Competition show", y: 4 },
                { label: "Music apps (Spotify, Apple Music, other)", y: 6 },
                { label: "News/Media (Music shows, news coverage, Asian entertainment)", y: 7 },
                { label: "Social media (Twitter, reddit, other SNS)", y: 18 },
                { label: "Word of mouth", y: 13 },
                { label: "Youtube (Browsing, reaction videos)", y: 63 },

            ]
        }]
    });

    var chart23 = new CanvasJS.Chart("chartQuestion23", {
        title: {
            text: "How do you obtain ONEUS' music?"
        },
        data: [{
            type: "column",
            dataPoints: [
                { label: "Arr, matey", y: 9 },
                { label: "Digital downloads", y: 29 },
                { label: "Free streaming", y: 78 },
                { label: "Paid streaming", y: 56 },
                { label: "Physical albums", y: 64 },

            ]
        }]
    });

    var chart24 = new CanvasJS.Chart("chartQuestion24", {
        title: {
            text: "Do you buy ONEUS-related products?"
        },
        data: [{
            type: "column",
            dataPoints: [
                { label: "Albums", y: 77 },
                { label: "Fan-made merchandise (dolls, unofficial prints, fanart, etc...)", y: 7 },
                { label: "Fansite merchandise (photobooks, frames, slogans, calendars, etc...)", y: 9 },
                { label: "No", y: 29 },
                { label: "Official merchandise (photobooks, fanclub-related, apparel, etc...)", y: 29 },
                { label: "Official photocards", y: 26 },
                { label: "Unofficial merchandise (apparel, magazines, photocards, etc...)", y: 5 },

            ]
        }]
    });

    var chart25 = new CanvasJS.Chart("chartQuestion25", {
        title: {
            text: "Have you seen ONEUS perform in person?"
        },
        data: [{
            type: "column",
            dataPoints: [
                { label: "Interested but haven't had the opportunity", y: 96 },
                { label: "Not interested", y: 5 },
                { label: "Yes", y: 14 },

            ]
        }]
    });

    var chart26 = new CanvasJS.Chart("chartQuestion26", {
        title: {
            text: "Are you a member of the fancafe?"
        },
        data: [{
            type: "column",
            dataPoints: [
                { label: "Interested but not a member", y: 39 },
                { label: "Member, leveled up", y: 25 },
                { label: "Member, not leveled up", y: 11 },
                { label: "Not interested", y: 39 },

            ]
        }]
    });

    var chart27 = new CanvasJS.Chart("chartQuestion27", {
        title: {
            text: "How do you get news and updates about ONEUS?"
        },
        data: [{
            type: "column",
            dataPoints: [
                { label: "/r/ONEUS", y: 65 },
                { label: "ONEUScord", y: 55 },
                { label: "Other SNS", y: 33 },
                { label: "Twitter", y: 92 },
                { label: "/r/kpop", y: 44 },
                { label: "Word of mouth", y: 14 },
                { label: "Korean entertainment news", y: 14 },
                { label: "Youtube/V Live", y: 3 },
                { label: "Asian entertainment news", y: 7 },
                { label: "Western Kpop media", y: 5 },

            ]
        }]
    });

    var chart28 = new CanvasJS.Chart("chartQuestion28", {
        title: {
            text: "How often do you visit ONEUScord?"
        },
        data: [{
            type: "column",
            dataPoints: [
                { label: "A few times a month", y: 4 },
                { label: "A few times a week", y: 16 },
                { label: "I'm not a member", y: 49 },
                { label: "Multiple times a day", y: 32 },
                { label: "Once a day", y: 5 },
                { label: "Once a week", y: 2 },
                { label: "Very rarely", y: 7 },

            ]
        }]
    });

    var chart29 = new CanvasJS.Chart("chartQuestion29", {
        title: {
            text: "How often do you visit /r/ONEUS?"
        },
        data: [{
            type: "column",
            dataPoints: [
                { label: "A few times a month", y: 8 },
                { label: "A few times a week", y: 25 },
                { label: "I'm not subscribed", y: 23 },
                { label: "Multiple times a day", y: 13 },
                { label: "Once a day", y: 23 },
                { label: "Once a week", y: 10 },
                { label: "Very rarely", y: 14 },

            ]
        }]
    });

    var chart30 = new CanvasJS.Chart("chartQuestion30", {
        title: {
            text: "Who is your favorite member/bias?"
        },
        data: [{
            type: "column",
            dataPoints: [
                { label: "Hwanwoong", y: 28 },
                { label: "Keonhee", y: 14 },
                { label: "Leedo", y: 15 },
                { label: "OT6", y: 15 },
                { label: "Ravn", y: 14 },
                { label: "Seoho", y: 19 },
                { label: "Undecided/no favorite", y: 3 },
                { label: "Xion", y: 10 },

            ]
        }]
    });

    var chart31 = new CanvasJS.Chart("chartQuestion31", {
        title: {
            text: "Who is your second-favorite member?"
        },
        data: [{
            type: "column",
            dataPoints: [
                { label: "Hwanwoong", y: 20 },
                { label: "Keonhee", y: 10 },
                { label: "Leedo", y: 16 },
                { label: "Ravn", y: 6 },
                { label: "Seoho", y: 21 },
                { label: "Undecided/no favorite", y: 27 },
                { label: "Xion", y: 11 },

            ]
        }]
    });

    var chart32 = new CanvasJS.Chart("chartQuestion32", {
        title: {
            text: "What is your favorite album?"
        },
        data: [{
            type: "bar",
            dataPoints: [
                { label: "808", y: 3 },
                { label: "FLY WITH US", y: 26 },
                { label: "IN ITS TIME", y: 6 },
                { label: "LIGHT US", y: 13 },
                { label: "LIVED", y: 25 },
                { label: "RAISE US", y: 9 },
                { label: "Twilight", y: 3 },
                { label: "Undecided/no favorite", y: 25 },

            ]
        }]
    });

    var chart33 = new CanvasJS.Chart("chartQuestion33", {
        title: {
            text: "What is your favorite music video?"
        },
        data: [{
            type: "bar",
            dataPoints: [
                { label: "808", y: 4 },
                { label: "A Song Written Easily (쉽게 쓰여진 노래)", y: 18 },
                { label: "COME BACK HOME", y: 3 },
                { label: "LAST SONG", y: 1 },
                { label: "LIT (가자)", y: 45 },
                { label: "TO BE OR NOT TO BE", y: 20 },
                { label: "Twilight (태양이떨어진다)", y: 12 },
                { label: "Undecided/no favorite", y: 5 },
                { label: "Valkyrie (발키리)", y: 5 },

            ]
        }]
    });

    var chart34 = new CanvasJS.Chart("chartQuestion34", {
        title: {
            text: "What is your favorite song choreography? (The dance itself, not a specific video or performance)"
        },
        data: [{
            type: "bar",
            dataPoints: [
                { label: "A Song Written Easily (쉽게 쓰여진 노래)", y: 3 },
                { label: "Bad Blood", y: 1 },
                { label: "Be Mine (내꺼하자)", y: 4 },
                { label: "BingBing (개와 늑대의 시간)", y: 7 },
                { label: "COME BACK HOME", y: 14 },
                { label: "English Girl", y: 1 },
                { label: "Level Up", y: 4 },
                { label: "LIT (가자)", y: 17 },
                { label: "Plastic Flower (윙윙윙윙)", y: 2 },
                { label: "Red Thread (붉은 실)", y: 4 },
                { label: "The Hills", y: 1 },
                { label: "TO BE OR NOT TO BE", y: 24 },
                { label: "Twilight (태양이떨어진다)", y: 9 },
                { label: "Undecided/no favorite", y: 13 },
                { label: "Valkyrie (발키리)", y: 5 },
                { label: "Warrior's Descendant (전사의 후예)", y: 1 },
                { label: "ZigZag (삐뚤빼뚤)", y: 2 },

            ]
        }]
    });

    var chart35 = new CanvasJS.Chart("chartQuestion35", {
        title: {
            text: "What are your favorite songs?"
        },
        data: [{
            type: "bar",
            dataPoints: [
                { label: "808", y: 23 },
                { label: "A Song Written Easily (쉽게 쓰여진 노래)", y: 59 },
                { label: "A Thousand Stars", y: 13 },
                { label: "Airplane", y: 24 },
                { label: "Be Mine (내꺼하자)", y: 37 },
                { label: "BingBing (개와 늑대의 시간)", y: 42 },
                { label: "Blue Sky", y: 27 },
                { label: "COME BACK HOME", y: 44 },
                { label: "CRAZY&CRAZY (ㅁㅊㄷㅁㅊㅇ) (Prod. CyA)", y: 23 },
                { label: "Dead Or Alive", y: 37 },
                { label: "Dizzy (혼란하다 혼란해)", y: 33 },
                { label: "English Girl", y: 16 },
                { label: "EYE CONTACT", y: 13 },
                { label: "HERO", y: 26 },
                { label: "Hide and Seek", y: 21 },
                { label: "In My Arms", y: 7 },
                { label: "Intro : Fly me to the moon", y: 4 },
                { label: "Intro : LIGHT US", y: 5 },
                { label: "Intro : LIVED", y: 11 },
                { label: "Intro : TIME", y: 15 },
                { label: "kiseki (キセキ)", y: 7 },
                { label: "koisii (恋しい)", y: 12 },
                { label: "LAST SONG", y: 17 },
                { label: "Level Up", y: 25 },
                { label: "LIT (Road to Kingdom ver.)", y: 29 },
                { label: "LIT (가자)", y: 69 },
                { label: "LOST", y: 10 },
                { label: "Now", y: 8 },
                { label: "Plastic Flower (윙윙윙윙)", y: 35 },
                { label: "Red Thread (붉은 실)", y: 33 },
                { label: "Stand By", y: 14 },
                { label: "TO BE OR NOT TO BE", y: 64 },
                { label: "Twilight (Japanese ver.)", y: 6 },
                { label: "Twilight (태양이떨어진다)", y: 53 },
                { label: "Valkyrie (Japanese ver.)", y: 5 },
                { label: "Valkyrie (발키리)", y: 60 },
                { label: "White Night (백야(白夜))", y: 13 },
                { label: "ZigZag (삐뚤빼뚤)", y: 17 },

            ]
        }]
    });

    chart01.render();
    chart02.render();
    chart03.render();
    chart04.render();
    chart05.render();
    chart06.render();
    chart07.render();
    chart08.render();
    chart09.render();
    chart10.render();
    chart11.render();
    chart12.render();
    chart13.render();
    chart14.render();
    chart15.render();
    chart16.render();
    chart17.render();
    chart18.render();
    chart19.render();
    chart20.render();
    chart21.render();
    chart22.render();
    chart23.render();
    chart24.render();
    chart25.render();
    chart26.render();
    chart27.render();
    chart28.render();
    chart29.render();
    chart30.render();
    chart31.render();
    chart32.render();
    chart33.render();
    chart34.render();
    chart35.render();
}
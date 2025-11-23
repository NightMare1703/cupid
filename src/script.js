// // background
// const body = document.getElementById('body');
// body.style.backgroundImage = `url('/images/1.jpg')`; 
// body.style.backgroundSize = `cover`; 

// audio button
const audio = document.getElementById("bgm");
const btn = document.getElementById("musicBtn");

let isPlay = true;
btn.addEventListener("click", () => {
    if (!isPlay) {
        audio.play();
        btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-pause-fill mx-auto" viewBox="0 0 16 16">
                        <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5"/>
                        </svg>`;
        return (isPlay = true);
    } else {
        audio.pause();
        btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-fill mx-auto" viewBox="0 0 16 16">
            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
            </svg>`;
        return (isPlay = false);
    }
});

// Delete ALl Local Storage
localStorage.clear();

// Difine All Displays
const first = document.querySelector("#first");
const second = document.querySelector("#second");
const fourth = document.querySelector("#fourth");
const fifth = document.querySelector("#fifth");

// First Display Script

// Define all Elements
const inputName = document.querySelector("#name");
const submitName = document.querySelector("#submitName");

// klik tombol submit nama (index)

submitName.addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = inputName.value.trim();
    if (nama === "") {
        alert("Isi dulu nama kamu ya cantik! 🤗");
        return;
    }
    localStorage.setItem("name", nama.toUpperCase());
    localStorage.setItem("sendTo", "6285173036787");
    first.classList.add("hidden");
    second.classList.remove("hidden");
    getNameFunction();
});

// First Display Script End

// Second Display Script

// Define all elements
const nextPage = document.querySelector(".next-page");
const displayName = document.querySelector("#titleName");
const secondTitleName = document.querySelector("#secondTitleName");
const h1DisplayName = document.querySelector("#h1TitleName");
const h1SecondTitleName = document.querySelector("#h1SecondTitleName");
const mau = document.querySelector("#mau");
const gakMau = document.querySelector("#gakMau");
const img = document.querySelector("#img");
const next = document.querySelector("#next");

// ambil data nama dari localStorage & tampilkan (index2)

function getNameFunction() {
    const getName = localStorage.getItem("name");
    displayName.innerHTML = getName.toUpperCase();
    thanksTitleName.innerHTML = getName.toUpperCase();
    secondTitleName.innerHTML = getName.toUpperCase();
    return getName;
}

// Tombol mau ditekan

mau.addEventListener("click", function () {
    img.setAttribute("src", "images/2_3.gif");
    next.classList.remove("hidden");
    mau.classList.add("hidden");
    gakMau.classList.add("hidden");

    h1DisplayName.innerHTML = "Makasih Ya 🥰";
    h1SecondTitleName.innerHTML = `Sekarang <span id="secondTitleName" class="text-pink-600 bg-white px-1 rounded-sm">${getNameFunction().toUpperCase()}</span><br> udah jadi pacar aku..`;
});

// Tombol gakMau ditekan

gakMau.addEventListener("click", function () {
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    let x = getRandomNumber(-100, 100);
    let y = getRandomNumber(-150, 150);
    gakMau.style.transform = `translate(${x}px, ${y}px)`;
    img.setAttribute("src", "images/2_5.gif");
});

// Tombil Lanjut ditekan

next.addEventListener("click", function () {
    second.classList.add("hidden");
    whenDisplay.classList.remove("hidden");
});

// Second Display Script End

// Third Display Script

// Define all elements
const whenDisplay = document.querySelector("#when");
const filmDisplay = document.querySelector("#film");
const date = document.querySelector("#date");
const time = document.querySelector("#time");
const nextChoseFilmButton = document.querySelector("#nextChoseFilm");
const posters = document.querySelectorAll(".film-poster");
const inputFilm = document.querySelector("#title");
const nextButton = document.querySelector("#nextButton");

// Menentukan tanggal dan waktu
nextChoseFilmButton.addEventListener("click", function () {
    const setDate = date.value;
    const setTime = time.value;
    if (setDate === "" || setTime === "") {
        alert("Tolong diisi tanggal & waktunya ya cantik! 🥰");
        return;
    }
    localStorage.setItem("date", setDate);
    localStorage.setItem("time", setTime);
    whenDisplay.classList.add("hidden");
    filmDisplay.classList.remove("hidden");
});

// Memilih film dan dimasukkan ke value input
posters.forEach((poster) => {
    poster.addEventListener("click", function () {
        const title = poster.getAttribute("alt");
        inputFilm.value = title.toUpperCase();
    });
});

// Tombol lanjut menuju index4
nextButton.addEventListener("click", function () {
    const film = inputFilm.value;
    if (film === "") {
        alert("Pilih film dulu please! 🥲");
        return;
    }
    localStorage.setItem("film", film);
    filmDisplay.classList.add("hidden");
    fourth.classList.remove("hidden");
});

// Third Display Script End

// Fourth Display Script

// Define all Elements
const foodPosters = document.querySelectorAll(".food-poster");
const inputFood = document.querySelector("#food");
const fourthNextButton = document.querySelector("#fourthNextButton");

// Pilih makanan & Input ke form input
foodPosters.forEach((poster) => {
    poster.addEventListener("click", function () {
        const food = poster.getAttribute("alt");
        inputFood.value = food.toUpperCase();
    });
});

// Tombol lanjut ditekan
fourthNextButton.addEventListener("click", function () {
    if (inputFood.value === "") {
        alert("Pilih dulu makanannya ya🤗");
        return;
    }
    const food = inputFood.value;
    localStorage.setItem("food", food.toUpperCase());
    fourth.classList.add("hidden");
    fifth.classList.remove("hidden");
    tableScheduleFunction();
});

// Fourth Display Script End

// Fifth Display Script

// Define all Elements
const tableSchedule = document.querySelector("#schedule");
const waLink = document.querySelector("#whatsapp");
const sendMessage = document.querySelector("#sendMessage");
const thanksTitleName = document.querySelector("#thanksTitleName");

function tableScheduleFunction() {
    // Display Title Name
    thanksTitleName.innerHTML = getNameFunction();

    // Get all data
    const sendTo = localStorage.getItem("sendTo");
    const name = localStorage.getItem("name");
    const fifthDate = localStorage.getItem("date");
    const fifthTime = localStorage.getItem("time");
    const film = localStorage.getItem("film");
    const food = localStorage.getItem("food");

    // DATE FORMAT
    const inputDate = fifthDate;

    // ubah ke objek Date
    const dateObj = new Date(inputDate);

    // format ke bahasa Indonesia
    const formatted = new Intl.DateTimeFormat("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(dateObj);

    console.log(formatted);

    // schedule body
    tableSchedule.innerHTML = `<tr>
                    <th class='text-sm text-left poppins-bold text-pink-500 pr-2 text-shadow-lg'>Nama<span> :</span></th>
                    <td class='text-sm text-start poppins-bold text-pink-500'> ${name}</td>
                </tr>
                <tr>
                    <th class='text-sm text-left poppins-bold text-pink-500 pr-2 text-shadow-lg'>Tanggal<span> :</span></th>
                    <td class='text-sm text-start poppins-bold text-pink-500'> ${formatted}</td>
                </tr>
                <tr>
                    <th class='text-sm text-left poppins-bold text-pink-500 pr-2 text-shadow-lg'>Jam<span> :</span></th>
                    <td class='text-sm text-start poppins-bold text-pink-500'> ${fifthTime}</td>
                </tr>
                <tr>
                    <th class='text-sm text-left poppins-bold text-pink-500 pr-2 text-shadow-lg'>Film<span> :</span></th>
                    <td class='text-sm text-start poppins-bold text-pink-500'> ${film}</td>
                </tr>
                <tr>
                    <th class='text-sm text-left poppins-bold text-pink-500 pr-2 text-shadow-lg'>Makan<span> :</span></th>
                    <td class='text-sm text-start poppins-bold text-pink-500'> ${food}</td>
                </tr>`;

    const datas = [sendTo, name, formatted, fifthTime, film, food];
    return datas;
}
// Kirim button
sendMessage.addEventListener("click", function () {
    const datas = tableScheduleFunction();
    window.open(
        `https://api.whatsapp.com/send?phone=${datas[0]}&text=*Haiii!%20%F0%9F%98%84%F0%9F%92%9E%20${datas[1]}%20di%20sini*~%0AAku%20udah%20lihat%20rencana%20kamu%2C%20dan%20keliatannya%20*lucu%20banget*%20hehe.%0A*${datas[2]}*%2C%20jam%20*${datas[3]}*%2C%20nonton%20film%20*${datas[4]}*%20%F0%9F%8E%AC%2C%20habis%20itu%20makan%20*${datas[5]}*%20bareng%E2%80%A6%0AKayaknya%20bakal%20jadi%20hari%20yang%20super%20seru%20ya%20%E2%9C%A8%0AAku%20suka%20banget%20idenya%2C%20dan%20tentu%20aja%20aku%20mau%20ikut!%0ANanti%20tinggal%20kirim%20lokasi%20ya%E2%80%A6%0AAku%20udah%20nggak%20sabar%20nih%F0%9F%98%B3%F0%9F%92%97`,
        "_blank"
    );
});

// Fifth Display Script End

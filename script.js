// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



window.onscroll = function() { toggleScrollButton() };

function toggleScrollButton() {
    const scrollBtn = document.getElementById("scrollToTopBtn");
    const nav = document.getElementById("nav");
    const navB = document.querySelector(" body .nav");
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        scrollBtn.style.display = "block";
        nav.style.position = "fixed";
        navB.style.visibility = "visible";
    } else {
        scrollBtn.style.display = "none";
        nav.style.position = "";
        navB.style.visibility = "hidden";

    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

document.querySelector('.plus i').addEventListener('click', function() {
    this.classList.toggle('fa-plus');
    this.classList.toggle('fa-minus');
    document.querySelector('.modify .table').classList.toggle('close');

});

// country
const selectElement = document.getElementById('countrySelect1');
const options = selectElement.querySelectorAll('option');
const selectedOption = selectElement.options[selectElement.selectedIndex];

const value = selectedOption.value;
const role = selectedOption.dataset.role;
const select = document.querySelector("#parkSelect");

selectElement.addEventListener('change', function() {
    const selectedOption = this.options[this.selectedIndex];
    const value = selectedOption.value;

    if (value === "Kenya"){
        const country = "Kenya";
        var currentOptions = `
            <option value="" disabled selected kenya>Select a park/reserve</option>
            <option value="Masai Mara National Reserve" kenya>Masai Mara National Reserve</option>
            <option value="Amboseli National Park" kenya>Amboseli National Park</option>
            <option value="Nairobi National Park" kenya> Nairobi National Park</option>
            <option value="Tsavo East National Park" kenya>Tsavo East National Park</option>
            <option value="Samburu National Reserve" kenya>Samburu National Reserve</option>  `;
        select.innerHTML = currentOptions;
        const park = option.value
    }else if(value === 'Tanzania'){
        const country = "Tanzania";
        var currentOptions = `
        <option value="" disabled selected kenya>Select a park/reserve</option>
        <option value="Serengeti National Park" tz>Serengeti National Park</option>
        <option value="Ngorongoro Crater" tz>Ngorongoro Crater</option>
        <option value="Tarangire National Park" tz>Tarangire National Park</option>
        <option value="Lake Manyara National Park" tz>Lake Manyara National Park</option>
        <option value="Ruaha National Park" tz>Ruaha National Park</option>
    
    `;
    select.innerHTML = currentOptions;
    }
    else if(value == 'Botswana'){
        const country = "Botswana";
        var currentOptions = `
            <option value="" disabled selected kenya>Select a park/reserve</option>

            <option value="Okavango Delta"  botswana>Okavango Delta</option>
            <option value="Chobe National Park" botswana>Chobe National Park</option>
            <option value="Moremi Game Reserve" botswana>Moremi Game Reserve</option>
            <option value="Makgadikgadi Pan National Park" botswana>Makgadikgadi Pan National Park</option>
            <option value="Nxai Pan National Park" botswana>Nxai Pan National Park</option>
        
        `;
        select.innerHTML = currentOptions;
    }
    else if(value == 'South Africa'){

        const country = "South Africa";
        var currentOptions = `
                <option value="" disabled selected kenya>Select a park/reserve</option>
                <option value="" disabled selected S.A>Kruger National Park</option>
                <option value="Chobe National Park" S.A>Chobe National Park</option>
                <option value="Moremi Game Reserve" S.A>Moremi Game Reserve</option>
                <option value="Makgadikgadi Pan National Park" S.A>Makgadikgadi Pan National Park</option>
                <option value="Nxai Pan National Park" S.A>Nxai Pan National Park</option>
            
        `;
        select.innerHTML = currentOptions;
    }
    else if(value == 'Zambia'){
        const country = "Zambia";
        var currentOptions = `
            <option value="" disabled selected kenya>Select a park/reserve</option>
            <option value="South Luangwa National Park"zambia>South Luangwa National Park</option>
            <option value="Lower Zambezi National Park" zambia>Lower Zambezi National Park</option>
            <option value="Kafue National Park" zambia>Kafue National Park</option>
            <option value="Luambe National Park" zambia>Luambe National Park</option>
            <option value="North Luangwa National Park" zambia>North Luangwa National Park</option>
        
        `;
        select.innerHTML = currentOptions;
    }
    else if(value == 'Namibia'){
        const country = "Namibia";
        var currentOptions = `
            <option value="" disabled selected kenya>Select a park/reserve</option>
            <option value="Etosha National Park" >Etosha National Park</option>
            <option value="Namib-Naukluft National Park" namibia>Namib-Naukluft National Park</option>
            <option value="Skeleton Coast National Park" namibia>Skeleton Coast National Park</option>
            <option value="Bwabwata National Park" namibia>Bwabwata National Park</option>
            <option value="Waterberg Plateau Park" namibia>Waterberg Plateau Park</option>
            
        `;
        select.innerHTML = currentOptions;
        
    }
    else if(value == 'Rwanda'){
        const country = "Rwanda";
        var currentOptions = `
            <option value="" disabled selected kenya>Select a park/reserve</option>

            <option value="Volcanoes National Park"rwannda>Volcanoes National Park</option>
            <option value="Akagera National Park" rwannda>Akagera National Park</option>
            <option value="Nyungwe Forest National Park" rwannda>Nyungwe Forest National Park</option>
            <option value="Kigali City Park" rwannda>Kigali City Park</option>
            <option value="Lake Kivu" rwannda>Lake Kivu</option>
        
        `;
        select.innerHTML = currentOptions;
    }
       
});
const option = select.querySelectorAll("option");
const responce = document.getElementById('responce');

const fetchedCountry = value;
const fetchedPark = select.options[select.selectedIndex];

const startDate = document.querySelector('#startDate').value;
const endDate = document.querySelector('#endDate').value;

const start = new Date(startDate);
const end = new Date(endDate);

const differenceInMs = end - start;

const differenceInDays = differenceInMs / (1000 * 60 * 60 * 24);

console.log(`Difference: ${differenceInDays} days`);

const CountryName =document.querySelector("#CountryName");
CountryName.value = value;








function activate(elm){
    accomodation = document.querySelectorAll('#accomodation');
    accom = document.querySelectorAll('.accomodation');
    description = document.querySelectorAll("#description");
    descList= document.querySelectorAll(".decription");

    if (elm === accomodation[0]) {
        accomodation[0].classList.add('active');  
        accom[0].classList.remove('active');  
        description[0].classList.remove('active');
        descList[0].classList.add('active');

    } 
    if( elm == description[0]){
        description[0].classList.add('active');
        accomodation[0].classList.remove('active');  
        descList[0].classList.remove('active');
        accom[0].classList.add('active'); 
        
    }

    if (elm === accomodation[1]) {
        accomodation[1].classList.add('active');  
        accom[1].classList.remove('active');  
        description[1].classList.remove('active');
        descList[1].classList.add('active');

    } 
    if( elm == description[1]){
        description[1].classList.add('active');
        accomodation[1].classList.remove('active');  
        descList[1].classList.remove('active');
        accom[1].classList.add('active'); 
        
    }
    if (elm === accomodation[2]) {
        accomodation[2].classList.add('active');  
        accom[2].classList.remove('active');  
        description[2].classList.remove('active');
        descList[2].classList.add('active');

    } 
    if( elm == description[2]){
        description[2].classList.add('active');
        accomodation[2].classList.remove('active');  
        descList[2].classList.remove('active');
        accom[2].classList.add('active'); 
        
    }
    if (elm === accomodation[3]) {
        accomodation[3].classList.add('active');  
        accom[3].classList.remove('active');  
        description[3].classList.remove('active');
        descList[3].classList.add('active');

    } 
    if( elm == description[3]){
        description[3].classList.add('active');
        accomodation[3].classList.remove('active');  
        descList[3].classList.remove('active');
        accom[3].classList.add('active'); 
        
    }
    if (elm === accomodation[4]) {
        accomodation[4].classList.add('active');  
        accom[4].classList.remove('active');  
        description[4].classList.remove('active');
        descList[4].classList.add('active');

    } 
    if( elm == description[4]){
        description[4].classList.add('active');
        accomodation[4].classList.remove('active');  
        descList[4].classList.remove('active');
        accom[4].classList.add('active'); 
        
    }
    if (elm === accomodation[5]) {
        accomodation[5].classList.add('active');  
        accom[5].classList.remove('active');  
        description[5].classList.remove('active');
        descList[5].classList.add('active');

    } 
    if( elm == description[5]){
        description[5].classList.add('active');
        accomodation[5].classList.remove('active');  
        descList[5].classList.remove('active');
        accom[5].classList.add('active'); 
        
    }
    
 
}



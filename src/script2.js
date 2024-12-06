
const SignLeft = document.getElementById("SignLeft");
const SignRight = document.getElementById("SignRight");
const subBtn = document.getElementById("submitBtn");

subBtn.addEventListener('click', function(elm) {
    SignLeft.classList.toggle('active');
    SignRight.classList.toggle('active');

    // Switch between Sign Up and Sign In forms
    if (SignLeft.classList.contains('active')) {
        var currentOptions = `
            <form action="account.php" method="POST">
                <div class="login">
                    <div class="header" style="text-align: center; margin-top: 2rem;">
                        <p style="font-size:1.3rem;"><span><u>Sign In</u></span></p>
                        <p style="padding-top: 5%;margin-bottom:-1rem; font-size: 11px; color: rgb(34, 34, 34);">If already registered</p>

                    </div>
                    <div class="inputs" style="margin-top: 3rem;">
                        <div class="email">
                            <label for="phone">Phone:</label>
                            <input type="number" id="phone" name="phone" required placeholder="Start with country code">
                        </div>
                        <div class="email">
                            <label for="emailSignIn">Enter email:</label>
                            <input type="email" id="emailSignIn" name="email" required>
                        </div>
                        <div class="pass" style="margin-top: 2rem; margin-bottom: 3rem;">
                            <label for="passSignIn">Password:</label>
                            <input type="password" id="passSignIn" name="pass" required>
                        </div>
                    </div>
                    <div class="btn">
                        <button type="submit">
                            <p>Login</p>
                            <p style="font-weight: bolder;">→</p>
                        </button>
                    </div>
                </div>
            </form>
        `;
        SignLeft.innerHTML = currentOptions;
        subBtn.innerHTML = '<p>Sign Up</p>';
    } else {
        var currentOptions = `
            <div class="header" style="text-align: center; margin-top: 2rem;">
                <p style="font-size:1.3rem; margin-bottom: 1rem;"><span><u>Create your Account</u></span></p>
                <p style="margin-top: 2%; font-size: 13px; color: rgb(34, 34, 34);">Welcome! Please fill in the details to get started.</p>

            </div>
            <form action="auth.php" method="POST">
                <div class="inputs">
                    <div class="name">
                        <div class="fname">
                            <label for="fName">First Name</label>
                            <input type="text" id="fName" name="fName" required>
                        </div>
                        <div class="lname">
                            <label for="lName">Last Name:</label>
                            <input type="text" id="lName" name="lName" required>
                        </div>
                    </div>
                     <div class="email">
                        <label for="phone">Phone:</label>
                        <input type="number" id="phone" name="phone" required placeholder="Start with country code">
                    </div>
                    <div class="email">
                        <label for="emailSignUp">Email:</label>
                        <input type="email" id="emailSignUp" name="email" required>
                    </div>
                    <div class="pass">
                        <label for="passSignUp">Password:</label>
                        <input type="password" id="passSignUp" name="pass" required>
                    </div>
                </div>
                <div class="btn">
                    <button type="submit">
                        <p>Continue</p>
                        <p style="font-weight: bolder;">→</p>
                    </button>
                </div>
            </form>
        `;
        SignLeft.innerHTML = currentOptions;
        subBtn.innerHTML = '<p>Sign In</p>';
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

function submit() {
    const total = document.querySelector("#total");
    const type = document.querySelector(".Rcategory");

    type.addEventListener('change', (e) => {
        // Retrieve input values
        const adults = parseInt(document.querySelector(".selectAdult").value) || 0;
        const teens = parseInt(document.querySelector(".selectChild").value) || 0;
        const kids = parseInt(document.querySelector(".selectKid").value) || 0;

        // Calculate costs
        const adreg = adults * 8700;
        const adfirst = adults * 13800;

        const teenreg = teens * 6500;
        const teenfirst = teens * 10000;

        const kidsreg = kids * 1000;

        // Determine selected type
        const selectedValue = e.target.value;
        if (selectedValue === 'Regular') {
            total.innerHTML = adreg + teenreg + kidsreg;
        } else if (selectedValue === 'First Class') {
            total.innerHTML =  adfirst + teenfirst + kidsreg;
        }
    });
}


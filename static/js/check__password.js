var inpt = document.querySelector(".section__wrapper__input__inpt");
var press = document.querySelector(".section__wrapper__input__press");
var spans = document.querySelector(".section__wrapper__spans");
var week__span = document.querySelector(".section__wrapper__spans__week");
var medium__span = document.querySelector(".section__wrapper__spans__medium");
var strong__span = document.querySelector(".section__wrapper__spans__strong");
var para = document.querySelector(".section__wrapper__p");
var week__exp = /[a-z]/;
var medium__exp = /\d+/;
var strong__exp = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;

// =============================================================================
inpt.addEventListener("keyup", function(e) {
    if (inpt.value != "") {
        press.style.display = "block";
        if (
            inpt.value.match(week__exp) ||
            inpt.value.match(medium__exp) ||
            inpt.value.match(strong__exp)
        ) {
            spans.style.display = "block";
            week__span.style.backgroundColor = "rgb(241, 65, 65)";
            para.textContent = "Your Password is Too Week";
        }

        if (
            (inpt.value.match(week__exp) && inpt.value.match(medium__exp)) ||
            (inpt.value.match(week__exp) && inpt.value.match(strong__exp)) ||
            (inpt.value.match(medium__exp) && inpt.value.match(strong__exp))
        ) {
            spans.style.display = "block";
            week__span.style.backgroundColor = "rgb(241, 65, 65)";
            medium__span.style.backgroundColor = "rgb(228, 231, 60)";
            para.textContent = "Your Password is Medium";
        }
        if (
            inpt.value.match(week__exp) &&
            inpt.value.match(medium__exp) &&
            inpt.value.match(strong__exp)
        ) {
            spans.style.display = "block";
            week__span.style.backgroundColor = "rgb(241, 65, 65)";
            medium__span.style.backgroundColor = "rgb(228, 231, 60)";
            strong__span.style.backgroundColor = "rgb(73, 202, 101)";
            para.textContent = "Your Password is Too Strong";
        }
    } else {
        press.style.display = "none";
        spans.style.display = "none";
        para.textContent = "";
    }
});
// ===============================================================================
press.addEventListener("click", function() {
    if (inpt.type === "password") {
        press.textContent = "HIDE";
        inpt.type = "text";
    } else if (inpt.type === "text") {
        press.textContent = "SHOW";
        inpt.type = "password";
    }
});
// ===============================================================================
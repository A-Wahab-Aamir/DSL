const forThemeChanger = (themeValue) => {
    document.querySelector("#forChangingBackground").style.backgroundColor = `${themeValue}`;
    document.querySelector("#nameOfColorInHexadecimal").textContent = `${themeValue}`;



    document.querySelector("#forButtons > button:nth-child(1)").addEventListener("click", () => {
    const themeValue = document.querySelector("#forChangingBackground").style.backgroundColor;
    forThemeChanger(themeValue);
    sessionStorage.setItem("Theme", themeValue);
    sessionStorage.setItem("SavedText", "Saved");
    
    forSaveTheme();
});
};




const forSaveTheme = () => {
    let sessionStorageThemeVal = sessionStorage.getItem("Theme");
    let sessionStorageSavedValue = sessionStorage.getItem("SavedText");
    let savedOrunsavedTextContent = document.querySelector(".savedOrunsavedTextContent");
    let savedOrunsavedIcon = document.querySelector(".forSavedIcon");

    if (sessionStorageThemeVal) {
        document.querySelector("#forChangingBackground").style.backgroundColor = `${sessionStorageThemeVal}`;
        savedOrunsavedTextContent.innerText = `${sessionStorageSavedValue}`;
        savedOrunsavedIcon.innerHTML = `<i class="ri-checkbox-circle-line"></i>`;
        savedOrunsavedIcon.classList.add("forMakeItGreen");
        document.querySelector("#nameOfColorInHexadecimal").innerHTML = `${sessionStorageThemeVal}`;
    }
};
document.addEventListener("DOMContentLoaded", forSaveTheme);




const forClearTheme = () => {
    sessionStorage.clear();
    location.reload()
};

document.querySelector("#forButtons > button:nth-child(2)").addEventListener("click", forClearTheme);
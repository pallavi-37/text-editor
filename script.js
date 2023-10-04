document.addEventListener("DOMContentLoaded", function() {
    const boldBtn = document.getElementById("bold-btn");
    const italicBtn = document.getElementById("italic-btn");
    const leftAlignBtn = document.getElementById("left-align-btn");
    const centerAlignBtn = document.getElementById("center-align-btn");
    const rightAlignBtn = document.getElementById("right-align-btn");
    const fontSelector = document.getElementById("font-selector");
    const styleSelector = document.getElementById("style-selector");
    const editorContent = document.querySelector(".editor-content");

    // Event listener for the bold button
    boldBtn.addEventListener("click", function() {
        document.execCommand("bold", false, null);
    });

    // Event listener for the italic button
    italicBtn.addEventListener("click", function() {
        document.execCommand("italic", false, null);
    });

    // Event listeners for alignment buttons
    leftAlignBtn.addEventListener("click", function() {
        document.execCommand("justifyLeft", false, null);
    });

    centerAlignBtn.addEventListener("click", function() {
        document.execCommand("justifyCenter", false, null);
    });

    rightAlignBtn.addEventListener("click", function() {
        document.execCommand("justifyRight", false, null);
    });

    // Event listeners for font and style selectors
    fontSelector.addEventListener("change", function() {
        document.execCommand("fontName", false, fontSelector.value);
    });

    styleSelector.addEventListener("change", function() {
        document.execCommand("italic", false, null);
        document.execCommand("oblique", false, null);
        document.execCommand(styleSelector.value, false, null);
    });
});
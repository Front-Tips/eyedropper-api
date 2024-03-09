/* ------------------------ */
/*         Elements         */
/* ------------------------ */
const button = document.getElementById(
  "colorPicker-button"
);

const result = document.getElementById(
  "colorPicker-result"
);

const hexCode = document.getElementById("colorPicker-hex");

/* ------------------------ */
/*        Eye Dropper       */
/* ------------------------ */
// Check for Browser's support
if (typeof EyeDropper !== "undefined") {
  button.addEventListener("click", async () => {
    try {
      // Create a new EyeDropper instance
      const eyeDropper = new EyeDropper();

      // Open the EyeDropper
      const selectedColor = await eyeDropper.open();

      // Set the background color
      result.style.backgroundColor = selectedColor.sRGBHex;

      // Display the selected hex color
      hexCode.textContent = selectedColor.sRGBHex;
    } catch (error) {
      console.error(error);
    }
  });
} else {
  console.error(
    "EyeDropper API is not supported in this browser."
  );
}

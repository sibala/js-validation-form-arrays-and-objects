function generateBirthYearRangeSelectOptionsHTML(startYear, endYear, defaultYear) {
  let birthYearOptionsHTML = "";
  for (let i = startYear; i >= endYear; i--) {
      if (i === defaultYear) {
          birthYearOptionsHTML += `<option selected>${i}</option>`;
      } else {
          birthYearOptionsHTML += `<option>${i}</option>`;
      }
  }

  return birthYearOptionsHTML;
}
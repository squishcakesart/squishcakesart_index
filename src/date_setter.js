/**
 * Sets the year of the copywrite footer.
 */
function set_footer_year() 
{
  const footer = document.getElementById('copyright');
  footer.textContent = `©Copyright SquishCakesArt ${(new Date()).getFullYear()}`;
}

set_footer_year();
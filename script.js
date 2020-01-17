function Period() {

  var lastp = document.getElementById("last_period").value;
  var currp = document.getElementById("curr_period").value;
  var panel = document.querySelector('.panel')


  document.getElementById("no_period").value = currp;
  document.getElementById("n_period").value = currp;


  var date1 = new Date(lastp);
  var previous_date = date1.getTime();
  var date2 = new Date(currp);
  var current_date = date2.getTime();

  var date_diff = (current_date - previous_date);
  var seconds = (date_diff / 1000);
  var minutes = (seconds / 60);
  var hours = (minutes / 60);
  var days = (hours / 24);

  var cycle = document.getElementById("cyc_length").innerHTML = days + " days ";
  console.log(cycle);

  document.getElementById("no_period").stepUp(days - 14); //date of next ovulation 
  document.getElementById("n_period").stepUp(days); //date of next menstruation


  if (lastp == "" || currp == "") {
    alert("Please enter all values")
    return false
  }

  panel.classList.toggle('hide')

  // let panel = document.getElementsByClassName("hide");
  //   panel.style.display = "block";
  //   document.getElementsByClassName("panel").style.display = "none";

}
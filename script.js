//your JS code here. If required.
  document.getElementById("myform").addEventListener("submit",function(event) {
  	event.preventDefault();

		  const FirstName = this.elements["First Name"].value;
	  const LastName = this.elements["Last Name"].value;
	  const Phone = this.elements["Phone Number"].value;
	  const Email = this.elements["Email ID"].value;
	  const message = `First Name: ${FirstName}\n Last Name: ${LastName}\n Phone Number: ${Phone}\n Email ID: ${Email}\n`;
	  alert(message);
	  
  });


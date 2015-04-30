wdi_names = ["Alexander Mireles", "Andre Trelles", "Andrew Ham", "Ari Kanamori", "Busyra Anwar", "Carlos Meza", "Chris Garvin", "Cristal Chavez", "Daley Meistrell", "Daniel Manuel", "Jefferson Choi", "Jessica Grinberg", "John Ward", "Kate Wood", "Kevin Mehrabi", "Max Tran", "Max Plisskin", "Megan Kakitsubo", "Meryl Harden", "Mike McCready", "Nick Dalke","Niels Bischoff", "Paul Aglione", "Rahul Sidhu", "Samuel Chun", "Samuel Amiri", "Sophie Chor","Steve Soter", "Taylor Adams", "Yo Wakita"]

for(i=0; i<wdi_names.length; i++){
	console.log(wdi_names[i]);
}
var i = 0;
    function eachName(){
      console.log(wdi_16_names[i]);
      i ++; 
    }
eachName();

var namePicker = wdi_16_names[Math.floor(Math.random() * wdi_16_names.length)];
	console.log(namePicker);

	
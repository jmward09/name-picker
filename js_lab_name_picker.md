#JS Lab ~ "Name Picker"

###SETUP: 

1. choose a new directory for this lab and  ```$ mkdir random_picker" "
2. make three files 
3. app.js style.css index.html
4. Build the html basics (head, body)
5. link everything up
6. download and include [normalize.css](https://github.com/necolas/normalize.css/blob/master/normalize.css)




###Before we get real- lets git going. 
1. initialize git
2. git add -A 
3. git commit -m "initial commit"
4. git remote add origin (SSH key)
5. git push -u origin master


###GETTING REAL IN JS:
	

* make an array of strings (your fav TV shows, all your family members), or use this one. 

```

wdi_16_names = ["Alexander Mireles", "Andre Trelles", "Andrew Ham", "Ari Kanamori", "Busyra Anwar", "Carlos Meza", "Chris Garvin", "Cristal Chavez", "Daley Meistrell", "Daniel Manuel", "Jefferson Choi", "Jessica Grinberg", "John Ward", "Kate Wood", "Kevin Mehrabi", "Max Tran", "Max Plisskin", "Megan Kakitsubo", "Meryl Harden", "Mike McCready", "Nick Dalke","Niels Bischoff", "Paul Aglione", "Rahul Sidhu", "Samuel Chun", "Samuel Amiri", "Sophie Chor","Steve Soter", "Taylor Adams", "Yo Wakita"]


```

* INDEX and CONSOLE.LOG // console log A string from that array
 
```
console.log(wdi_16_names[2]);
```

* console log a different string from that array

```
console.log(wdi_16_names[5]);
```

* FOR LOOP console log all strings from that array

```
console.log(wdi_16_names); //returns the whole object

var i;
for (i = 0; i < wdi_16_names.length; i++) { 
	console.log(wdi_16_names[i]);
}
// the loop logs each string in the array
//notice the difference in what is logged

```

* FUNCTION // console log each string consecutively from that array

```

    var i = 0;
    function eachName(){
      console.log(wdi_16_names[i]);
      i ++; 
    }
    eachName();

```

* design some logic that randomly logs a different string each time

```

//Math.floor and Math.random might be useful
var pick = Math.floor(Math.random() * wdi_16_names.length)
var namePicker = wdi_16_names[pick];
console.log(namePicker);


//REFACTORED
var namePicker = wdi_16_names[Math.floor(Math.random() * wdi_16_names.length)];
console.log(namePicker);

```


###Make that git commit message count! 


```

$ git add -A 
$ git commit -m "builds javascript picker"
$ git push

```

###Connecting the DOM to INPUT

1. Create a button in HTML
2. Research how you can use that button to call a function (namePicker)
3. Write a function that uses the JS logic for selecting a random name.
3. Hook everything up so that your button is now printing a random string to the console. 


###Make that git commit message count! 


```

$ git add -A 
$ git commit -m "button prints string to console"

```


##Homework / Challenge add ons - 

1.CONNECT the DOM to OUTPUT // We want the name to render in our DOM - not in the console!!

```
document.write(namePick);

document.getElementById("chosen_one").innerHTML = "Paragraph changed!";


```


2.Rework the JS logic so that a name will not be picked twice, until all other names have been picked, 

```

array.pop()

http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_pop


```

3.Render a photo of the person who's name is picked

4.CSS Animations!
 
5.Once all names have been picked, the list will reload automatically.

6.Deploy it to bitballoon by creating a new account and dropping a zip of your random_picker directory.

7.Post a link in the group slack!






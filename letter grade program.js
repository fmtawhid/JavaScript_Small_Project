var alm, grm
alm = parseInt(prompt("Enter Your Number: "))
grm = alm/6

if (grm>=80)
    document.write("Your result is A+ mark is: " + grm)
else if (grm>=70)
    document.write("Your result is A mark is: " + grm)
else if (grm>=60)
    document.write("Your result is A- mark is: " + grm)
else if (grm>=50)
    document.write("Your result is B mark is: " + grm)
else if (grm>=40)
    document.write("Your result is C mark is: " + grm)
else if (grm>=33)
    document.write("Your result is Pass mark is: " + grm)
else
    document.write("you are faild mark is: " + grm)

function celebrationBirthday(mainCouse, dessert)
{
    console.log(`we have eaten ${mainCourse}`)
    dessert()
}

function icecreamShop(){
    console.log(`we have eaten Icecrem`)
}

celebrationBirthday('Birthday', icecreamShop)
let DATA = "secret information";

class user{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("data = ", DATA);
    }
}

class admin extends user{
    editData(){
        DATA = "some new value";
    }
}

let student1 = new user("Om", "omdarade1399@gmail.com");
let student2 = new user("Pooja", "poojadarade1504@gmail.com"); 

let teacher1 = new user("Dean", "dean123@email.com");

let admin1 = new admin("admin", "admin123@email.com");
export default new class Helpers {
    getUsersByAge(response, ageMin, ageMax) {
        const users = [];

        // Your code here
        response.users.forEach(user => {
            if (user.age >= ageMin && user.age <= ageMax) 
                users.push(user.name);
        });

        return users;
    }



   

    getUsersByRole(response, role) {
        const users = [];

        response.users.forEach(user => {
            if (user.role === role) users.push(user.name);
        });

        return users;
    }


    getUsersByCountry(response, country) {
        const users = [];

        response.users.forEach(user => {
            if (user.country === country) users.push(user.name);
        });

        return users;
    }

getUsersByBalance(response, balMin,balMax){
    const users = [];

    response.users.forEach(user => {
        if (user.balance >= balMin && user.balance <= balMax) users.push(user.name)
    });

    return users;
       
}
    

}

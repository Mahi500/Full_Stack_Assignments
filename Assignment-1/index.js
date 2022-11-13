//callback
function userDb(fn){
    setTimeout(()=> {
        console.log("getting users");
        var users= [{ id:1,
                   name:"Mahendra",
                   age:23,
                   address:"guntur"

        },{
                   id:2,
                   name:"Manoj",
                   age:21,
                   address:"guntur"
        }]
    
         
        fn(users);
        
        
    }, 5000);

    
    

}
function getUsers(users){
        //let users=userDb();
        console.log("Hello displaying the users=",users);
        displayUsersOnScreen();

    
}

userDb(getUsers);



promise
function userDb(){
 
    return new Promise(function(resolve,reject){
        setTimeout(function() {
            console.log("getting users");
            resolve([{ id:1,
                       name:"Mahendra",
                       age:23,
                       address:"guntur"

            },{
                       id:2,
                       name:"Manoj",
                       age:21,
                       address:"guntur"
            }])
            
        }, 5000);
    })

}

function getUsers(){
    userDb().then(function(res){

        console.log("Hello displaying the users=",res)
        displayUsersOnScreen();

    })
} 

function displayUsersOnScreen(){
            
        console.log("users displayed successfully");

}

getUsers();

// program to delete employee whose age is 18
var arr=[
    {
        id:1,
        age:60
    },
    {
        id:2,
        age:50
    },
    {
        id:3,
        age:40
    },
    {
        id:4,
        age:20
    }
]


for(i=0;i<arr.length;i++)
{
    if(arr[i].age == 18){

        arr.splice(i,1);
    
        
    }

}


console.log(arr);


//program to check number is palindrome or not

function palindrome(){
    var num=555;
    var s=0;
    var n;
    while(num>0)
    {
        n=num%10;
        s=s*10+n;
        num=Math.floor(num/10);
    }

    if(s===555)

    {

        document.write("palindrome");
    }
    else
    {
        document.write("Not a palindrome");
    }

}

// To remove duplicates from array

var array=[30,45,60,20,30,55];

for(i=0;i<array.length;i++){

    for(j=i+1;j<array.length;j++){

        if(array[i]===array[j]){

            array.splice(j,1);
        }


    }
}

console.log(array);



 
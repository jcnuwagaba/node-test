/*
const { resolve } = require("path");

console.log('before')

//get user
getUser(1,function(user){ 
        console.log('User: ',user);
        console.log('\n')
     
        //get Repos.
        getRepositories(user.githubuserName,(repos)=>{
        console.log(`${user.githubuserName}'s repos: ${repos}`)
        console.log('\n')

                //getCommits
                getCommits(repos[1],(commits)=>{
                console.log({repo:repos[1],commmits:commits})
                    
                })
     });
});
 
console.log('after')






function getUser(userId,callback){
    setTimeout(()=>{
        console.log('Reading a user from a database...');
        callback({userID:userId,githubuserName:'Mosh'})
    },1000);
}

function getRepositories(username,callback){
    setTimeout(()=>{
        console.log('Calling GitHub API...')
        callback(['repoOne','repoTwo','repoThree'])
},2000)

}

function getCommits(repo,callback){
    setTimeout(()=>{
        console.log('Getting Number of Commits per Repo...')
        if(repo=='repoOne'){
        callback({numberOfCommits:20})}
        else if(repo=='repoTwo'){
        callback({numberOfCommits:1250})}
        else if(repo=='repoThree'){
            callback({numberOfCommits:2000})}
        else  {
     callback('Repo not Available')}
    },2000)
}


 
//Promises 

const p = new Promise((resolve,reject)=>{
setTimeout(()=>{
    //resolve(1);
    reject(null)
},10000)
})

p.then((result)=>{
console.log('Resulting to:',result)
})
p.catch((err)=>{
    console.log('err',err)
})
*/
//modifying async functions above that have callbacks to return promises
function getUserM(userId ){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Reading a user from a database...');
            resolve({userID:userId,githubuserName:'Mosh'})
        },1000);
    })
  
}

function getRepositoriesM(username ){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Calling GitHub API...')
            resolve(['repoOne','repoTwo','repoThree'])
    },2000)
    
    })

}

function getCommitsM(repo){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Getting Number of Commits per Repo...')
            if(repo=='repoOne'){
            resolve({numberOfCommits:20})}
            else if(repo=='repoTwo'){
            resolve({numberOfCommits:1250})}
            else if(repo=='repoThree'){
                resolve({numberOfCommits:2000})}
            else  {
        reject('Repo not Available')}
        },2000)
    })
}

//  getUserM(1)
// .then((user)=>{
//     console.log(user)
// getRepositoriesM(user.githubuserName)
// .then((repos)=>{
//     console.log(repos)
// getCommitsM('repoTwo')
// .then((commits)=>{
//     console.log(commits)
//         })
//     })
//  })

//  getUserM(1)
// .then((user)=>{
// console.log(user)
// return getRepositoriesM(user.githubuserName) })

// .then((repos)=>{
// console.log(repos) 
// return getCommitsM('repoTen') })

// .then((commits)=>{
//     console.log(commits)
//         })
// .finally(()=>{
//      console.log(new Error('Something went wrong'))
// })

//async and await 
async function displayCommits(){
    try{
        const user = await getUserM(1)
    console.log(user)
    const repos =await getRepositoriesM(user.githubuserName)
    console.log(repos)
    const commits = await getCommitsM('repoOne')
    console.log(commits)

    }catch(error){
        console.log("Something went wrong",error.message)
    }
}
   
displayCommits();
let a = [
    "Initializ Hack tool......",
    "Conteting to facebook......",
    "Coneting to server 1......",
    "Hacking Server 2......",
    "Gaining access to database......",
    "Reading all data......",
    "Conection faild. Retrying....",
    "Contected successfully......",
    "Username  i am John......",
    "200K Password Tried Match not found......",
    "finally match found......",
    "accessing the account successfully......",
    "hacked the account......",
    "sending email for notification......",
    "Hacking into the system......",
    "Gaining access to all data......",
    "Making sure no one sees what I'm doing......",

]
const sleep = async (seconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true)
        }, seconds * 1000);
    })
}
const showhack = async (message) => {
    await sleep(2)
    console.log(message)
    text.innerHTML = text.innerHTML+ message +"<br>"

}

(async () => {
    for(let i=0;i<a.length;i++){
        await showhack(a[i])
    }
})()
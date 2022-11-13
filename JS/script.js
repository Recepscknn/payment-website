
// button connection
let btnDOM = document.querySelector('#btn')
btnDOM.addEventListener("click", mail)


function mail () {

// Mail göndercek olan kısım



    const nodemailer = require('nodemailer')

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        // buraya kendi mailini yazcan
        auth: {
            user: 'user.gmail.com',
            pass: 'pass',
        }

    })

    let mailOption = {
        // buraya kimden
        from: 'rseckin1234@gmail.com',
        // buraya kime
        to: 'rseckin1234@gmail.com',
        subject: 'Kullanıcı Bilgileri',
        html: '<h1>Test içerik<h1/>'
    }

    transporter.sendMail(mailOption,(err,data) =>{
        if(err) console.log(err)
        else console.log("mail göderildi")
    })
}
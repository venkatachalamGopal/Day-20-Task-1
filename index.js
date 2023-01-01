let body =document.getElementById('body')
let h3=document.createElement('h3')
h3.innerText="Search Your PINCodes ...API"
let div=document.createElement('div')
let form=document.createElement('form')
form.setAttribute('action','#')
let label=document.createElement('label')
label.setAttribute('for','pin')
label.innerText='Pincode No : '
let input=document.createElement('input')
input.setAttribute('type','text')
input.setAttribute('id','pin')
let inputBtn=document.createElement('input')
inputBtn.setAttribute('type','reset')
inputBtn.setAttribute('value','Submit')
inputBtn.setAttribute('onclick','getPincode()')
let para=document.createElement('p')
para.setAttribute('id','message')
// let para1=document.createElement('p')


let mainDiv=document.createElement('div')
mainDiv.setAttribute('id','mainDiv')



body.append(h3)
body.append(div)
body.append(para)
body.append(mainDiv)
div.appendChild(form)
form.appendChild(label)
form.appendChild(input)
form.appendChild(inputBtn)



function getPincode(){
    let pincode=document.getElementById('pin').value;
    let pinno=parseInt(pincode)
    let para=document.getElementById('message');
    let mainDiv=document.getElementById('mainDiv');
   
    fetch(`https://api.postalpincode.in/pincode/${pinno}`).then((resp)=>{
        return resp.json()
    }).then((data)=>{
       console.log(data);
       data.map((obj)=>{
        para.innerHTML=`${obj.Message} -  <span>${pinno}</span>`
        obj.PostOffice.map((obj1)=>{
        console.log(obj1.Name);
        let childDiv=document.createElement('div')
        childDiv.setAttribute('class','childDiv')
        childDiv.innerHTML=`<p class='Bname'>Branch Name : ${obj1.Name}</p>
        <p>Status : ${obj1.DeliveryStatus}</p>
        <p>Branch Type : ${obj1.BranchType}</p>
        <p>State  : ${obj1.State}</p>
        <p>Circle : ${obj1.Circle}</p>
        <p>Block  : ${obj1.Block}</p>
        <p>District  : ${obj1.District}</p>
        <p>Region : ${obj1.Region}</p>
        <p>Division : ${obj1.Division}</p>`

        mainDiv.appendChild(childDiv)

        })
       })

    }).catch((error)=>{
        let para2=document.createElement('p')
        para2.setAttribute('class','error')
        para2.innerHTML=`Enter Correct PIN no...`
        body.append(para2)
    })
 

}
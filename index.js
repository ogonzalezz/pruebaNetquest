const requestURL = "https://distributions.crowdin.net/e4f59444aa0f71d8c989027n9y0/content/es_ES/publicHome.json";
const request = new XMLHttpRequest();

function onRequestHandler(){
    if (this.readyState === 4 && this.status === 200) {
        const data = this.response;
        console.log(data);
        const step1 = document.createElement('h3');
        step1.textContent = data.publicHome.sellBlockItem1Description;
        console.log(step1.textContent);
        const text1 = document.querySelector(".text1");
        text1.appendChild(step1);
        const step2 = document.createElement('h3');
        step2.textContent = data.publicHome.sellBlockItem2Description;
        const text2 = document.querySelector(".text2");
        text2.appendChild(step2);
        const step3 = document.createElement('h3');
        step3.textContent = data.publicHome.sellBlockItem3Description;
        const text3 = document.querySelector(".text3");
        text3.appendChild(step3);
    }
}

request.addEventListener("load", onRequestHandler);
request.open("GET", requestURL);
request.responseType = 'json';
request.send();

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}

function nastaveni(){
    document.getElementById("pribeh").className = "strana_vypnuta";
    document.getElementById("nastaveni").className = "strana_viditelna";
}

function zpet(){
    let text1 = document.getElementById("vstup1").value;
    let text2 = document.getElementById("vstup2").value;
    let text3 = document.getElementById("vstup3").value;
    sessionStorage.setItem("key1", text1);
    sessionStorage.setItem("key2", text2);
    sessionStorage.setItem("key3", text3);

    if (text1 === "" || text2 === "" || text3 === ""){
        document.getElementById("error").textContent = "Něco bylo zadáno špatně.";

        document.getElementById("text1").textContent = "";
        document.getElementById("text2").textContent = "";
        document.getElementById("text3").textContent = "";
    }
    else{
        document.getElementById("text1").textContent = sessionStorage.getItem("key1");
        document.getElementById("text2").textContent = sessionStorage.getItem("key2");
        document.getElementById("text3").textContent = sessionStorage.getItem("key3");
        document.getElementById("error").textContent = "";
    }
    document.getElementById("pribeh").className = "strana_viditelna";
    document.getElementById("nastaveni").className = "strana_vypnuta";
}
function clock(){
    const now = new Date();
    let hrs = now.getHours();
    const meridiem = hrs >= 12 ? "PM" : "AM";
    hrs = hrs % 12 || 12;
    hrs = hrs.toString().padStart(2, 0);

    const min = now.getMinutes().toString().padStart(2, 0);
    const sec = now.getSeconds().toString().padStart(2, 0);
    const timestring = `${hrs} : ${min} : ${sec} `;
    document.getElementById('orasan').textContent = timestring;

}
clock();

setInterval(clock , 100);

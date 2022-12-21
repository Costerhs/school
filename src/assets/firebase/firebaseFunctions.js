const setCookie = (name) => {
    let date = new Date()
    let date1 = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1)
    document.cookie = `userName=${name};expires=${date1}`
}


const deletes = () => {
    document.cookie = "userName=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
}
const getCookie = (name) => {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
}

export { getCookie, deletes, setCookie }
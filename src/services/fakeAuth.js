const fakeAuth = {
    isAuth:false,
    login(callb) {
        this.isAuth = true;
        setTimeout(callb, 1000);
    },
    logOut(callb) {
        this.isAuth = false;
        setTimeout(callb, 1000);
    }
}

export default fakeAuth;
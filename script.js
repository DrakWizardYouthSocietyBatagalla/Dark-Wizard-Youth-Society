let UserDeta = [];
let UserDetaUpdater = [];
let Links = [{ LinkName: "home" }, { LinkName: "profile" },];
LogingUser();
//H_And_F();

UserDeta = [{ UN: 'defolt name', PN: '070 000 000', G: 'male', age: 10, EA: "none", userIndexNumber: '0000' }];

function LogingUser() {
    document.querySelector("title").innerText = 'User Loging'
    let MainC = document.querySelector(".root")
    let MainContain = document.createElement("div");
    let FormeBox = document.createElement("div");
    let FormeBoxLogo = document.createElement("div");
    let FormeBoxTitile = document.createElement("div");
    let rq0 = document.createElement("div");
    let rq1 = document.createElement("div");
    let rq2 = document.createElement("div");
    let rq3 = document.createElement("div");
    let lb0 = document.createElement("lable");
    let lb1 = document.createElement("lable");
    let lb2 = document.createElement("lable");
    let lb3 = document.createElement("lable");
    let lb4 = document.createElement("lable");
    let int0 = document.createElement("input");
    let tabIcon = document.createElement("i");
    let int1 = document.createElement("input");
    let cancleBnt = document.createElement("div");
    let submitBnt = document.createElement("div");

    MainC.innerHTML = '';
    MainContain.classList.add("FormeContain")
    MainContain.classList.add("flex")
    FormeBox.classList.add("formeContain")
    FormeBoxLogo.classList.add("FormeLogo")
    FormeBoxTitile.classList.add("FormeTitle")
    rq0.classList.add("rquadSection")
    rq1.classList.add("rquadSection")
    rq2.classList.add("rquadSection")
    rq3.classList.add("rquadSection")
    rq3.classList.add("flex")
    rq1.classList.add("flex")
    lb0.classList.add("lable")
    lb1.classList.add("lable")
    lb2.classList.add("inputBox")
    lb2.classList.add("specialType")
    lb2.classList.add("flex")
    lb3.classList.add("lable")
    lb4.classList.add("lable")
    lb3.classList.add("specialLable")
    lb3.classList.add("specialLinks")
    lb4.classList.add("specialLinks")
    lb3.classList.add("pointer")
    lb4.classList.add("pointer")
    submitBnt.classList.add("pointer")
    submitBnt.classList.add("btnPrimary")
    submitBnt.classList.add("Submit_Btn")
    cancleBnt.classList.add("Clear_btn")
    cancleBnt.classList.add("btnPrimary")
    cancleBnt.classList.add("pointer")
    tabIcon.classList.add("fa-eye-slash")
    tabIcon.classList.add("fa-solid")
    tabIcon.classList.add("pointer")
    tabIcon.addEventListener("click", () => {
        if (int1.type == 'password') {
            int1.type = 'text';
            tabIcon.classList.remove("fa-eye-slash")
            tabIcon.classList.add("fa-eye")
        } else {
            int1.type = 'password';
            tabIcon.classList.add("fa-eye-slash")
            tabIcon.classList.remove("fa-eye")
        }
    })
    FormeBoxTitile.innerHTML = 'welcome back';
    lb0.innerHTML = 'index number';
    lb1.innerHTML = 'Password';
    lb3.innerHTML = '<span class"ConfirmCricle"></span> remind me';
    lb4.innerHTML = 'forget';
    submitBnt.innerHTML = '<i class="fa-solid fa-paper-plane"></i>loging';
    cancleBnt.innerHTML = 'cancle';

    int0.placeholder = '----';
    int1.placeholder = '****';

    int1.type = 'password';

    lb4.addEventListener("click", () => {
        remind_User("u", "Updating...")
    })
    MainC.appendChild(MainContain)
    MainContain.appendChild(FormeBox)
    FormeBox.appendChild(FormeBoxLogo)
    FormeBox.appendChild(FormeBoxTitile)
    FormeBox.appendChild(rq0)
    FormeBox.appendChild(rq2)
    FormeBox.appendChild(rq3)
    FormeBox.appendChild(rq1)
    rq0.appendChild(lb0)
    rq0.appendChild(int0)
    rq1.appendChild(submitBnt)
    rq1.appendChild(cancleBnt)
    rq2.appendChild(lb1)
    rq2.appendChild(lb2)
    lb2.appendChild(int1)
    lb2.appendChild(tabIcon)
    lb2.appendChild(tabIcon)
    rq3.appendChild(lb3)
    rq3.appendChild(lb4)

    submitBnt.addEventListener("click", () => {
        if (submitBnt.innerText.toLocaleLowerCase() == 'loging') {
            if (int0.value.trim().split("").length == 4 & int1.value.trim() != "") {
                let AllDetails = [];
                submitBnt.innerHTML = '<i class="fas fa-sync fa-spin"></i> cheack';
                console.log("test");

                const DBURL = 'https://script.google.com/macros/s/AKfycbwAD10SPiDZvUZEF997rvH4kN9hy0vdfCRiRCUW7yHP1sIVJXQLBpamz5hGNe5nK2gSeQ/exec';
                fetch(DBURL).then(result => result.json()).then(data => {
                    console.log(data);
                    data.forEach((e, i) => {
                        console.log(e);
                        if (Number(int0.value.trim()) == i) {
                            // cheack user deta and update
                            console.log(e, true);
                            if (int1.value.trim() == e[1]) {
                                UserDeta = [{ UN: e[0], PN: e[1], G: e[2], age: 10, EA: "none", userIndexNumber: int0.value.trim() }];
                                setTimeout(() => { H_And_F() }, 300);
                            } else {
                                setTimeout(() => { cancleBnt.click(); }, 300); remind_User("te", "Invalid Password or index number");
                            }

                        }
                    })
                }).catch(error => { remind_User("de", "detabase error"); })
                console.log(Number(int0.value.trim()), AllDetails);

            } else { setTimeout(() => { cancleBnt.click(); }, 300); remind_User("te", "Fill all section.."); }

        }
    })
    cancleBnt.addEventListener("click", () => {
        document.querySelectorAll("input").forEach(e => {
            e.value = '';
        })
        submitBnt.innerHTML = '<i class="fa-solid fa-paper-plane"></i>loging';

    })
}

function H_And_F() {
    let MainRoot = document.querySelector(".root");
    let HederSection = document.createElement("div");
    let subRoot = document.createElement("div");
    let FooterSection = document.createElement("div");
    let HederLogoSection = document.createElement("div");
    let HederLogo = document.createElement("div");
    let HederLogoName = document.createElement("div");
    let NavigationBarListContent = document.createElement("div");
    let NavigationBarList = document.createElement("ul");
    let NavigationHambangle = document.createElement("i");
    let CopyRigth = document.createElement("div");
    let SpecialUseBtnSection = document.createElement("div");
    let SpecialUseBtn0 = document.createElement("div");
    let logOutBtn = document.createElement("div");

    MainRoot.innerHTML = "";
    logOutBtn.innerHTML = "<i></i> logout";
    logOutBtn.addEventListener("click", () => { LogOutCreateDeta() })
    HederLogoName.innerHTML = "dark wizard <br><span class='subTitle'>youth society</span>";
    CopyRigth.innerHTML = "develop by sanuja rajapaksh";
    //hambangle icon
    NavigationHambangle.addEventListener("click", () => {
        console.log(NavigationHambangle);

        if (NavigationBarListContent.classList.length == 2) {
            NavigationBarListContent.classList.add("showNavigarion");
            NavigationBarList.classList.remove("navigationHideMobile")
            SpecialUseBtnSection.classList.remove("HideMobile")
            setTimeout(() => { NavigationBarList.classList.remove("HideMobile") }, 200)
        } else {
            NavigationBarListContent.classList.remove("showNavigarion")
            NavigationBarList.classList.add("HideMobile")
            SpecialUseBtnSection.classList.add("HideMobile")

            setTimeout(() => {
                NavigationBarList.classList.add("navigationHideMobile")

            }, 200)
        }
    })
    subRoot.classList.add("root");
    HederSection.classList.add("headerSection");
    HederSection.classList.add("flex");
    FooterSection.classList.add("footerSection");
    CopyRigth.classList.add("copyrigth");
    HederLogoSection.classList.add("HederLogoSection");
    HederLogoSection.classList.add("flex");
    HederLogo.classList.add("HederLogo");
    HederLogoName.classList.add("HederLogoName");
    NavigationBarList.classList.add("NavigationList");
    NavigationBarList.classList.add("HideMobile");
    NavigationBarList.classList.add("navigationHideMobile");
    NavigationHambangle.classList.add("NavigationHambangle");
    NavigationHambangle.classList.add("fa-solid");
    NavigationHambangle.classList.add("fa-bars");
    NavigationBarListContent.classList.add("NavigationListContain");
    NavigationBarListContent.classList.add("flex");
    SpecialUseBtnSection.classList.add("iMEJANCYUSEBTNSECTION");
    SpecialUseBtnSection.classList.add("HideMobile");
    logOutBtn.classList.add("HideMobile");
    logOutBtn.classList.add("pointer");
    logOutBtn.classList.add("ImergencyExit");
    SpecialUseBtn0.classList.add("iMEJANCYUSEBTN");

    SpecialUseBtn0.innerHTML = '<i></i> log out';

    SpecialUseBtn0.addEventListener("click", () => {
        NavigationHambangle.click();
        LogOutCreateDeta();
    })
    Links.forEach((element) => {
        let { LinkName } = element;
        let NavigationBarListlINK0 = document.createElement("li");

        NavigationBarListlINK0.addEventListener("click", () => {
            document.querySelectorAll(".NavigationList li").forEach((element) => {
                element.classList.remove("selectLink")
            })
            NavigationBarListlINK0.classList.add("selectLink");
            setTimeout(() => { NavigationHambangle.click(); }, 500)
        })

        NavigationBarListlINK0.innerHTML = LinkName;
        NavigationBarListlINK0.classList.add("Link")
        NavigationBarListlINK0.classList.add("pointer")
        NavigationBarList.appendChild(NavigationBarListlINK0)

    })


    MainRoot.appendChild(HederSection)
    HederSection.appendChild(HederLogoSection)
    HederLogoSection.appendChild(HederLogo)
    HederLogoSection.appendChild(HederLogoName)
    HederSection.appendChild(NavigationHambangle)
    HederSection.appendChild(NavigationBarListContent)
    NavigationBarListContent.appendChild(NavigationHambangle)
    NavigationBarListContent.appendChild(NavigationBarList)
    NavigationBarListContent.appendChild(logOutBtn)
    NavigationBarListContent.appendChild(SpecialUseBtnSection)
    SpecialUseBtnSection.appendChild(SpecialUseBtn0)
    MainRoot.appendChild(subRoot)
    MainRoot.appendChild(FooterSection)
    FooterSection.appendChild(CopyRigth)
    UserProfile(UserDeta);

}

function LogOutCreateDeta() {
    setTimeout(() => {
        LogingUser();
        remind_User("s", "log out success")
    }, 500)
}
//------------- User Profile ----------------------------------------
function UserProfile(deta) {
    // let {UN, PN} = UserDeta[0]
    document.querySelector("title").innerHTML = `${deta[0].UN}'s Profile `;
    let btnE = [{ DName: "Account", icon: "fa-user-alt", functionCall: "accountSection" }, { DName: "payments", icon: "fa-coins", functionCall: "paymentDetails" }, { DName: "features", icon: "fa-wand-magic-sparkles", functionCall: "featuresCall" },]
    const ContentBody = document.querySelectorAll(".root")[1];
    ContentBody.innerHTML = '';
    let PB = document.createElement("div");
    let PS = document.createElement("div");
    let PIB = document.createElement("div");
    let Pdn = document.createElement("div");
    let PACTIONBTN = document.createElement("div");
    let DetaShowSection = document.createElement("div");
    PB.classList.add("sectionBox")
    PS.classList.add("PsectionBox")
    PIB.classList.add("PBall")
    Pdn.classList.add("pDisplayName")
    PACTIONBTN.classList.add("grid")
    PACTIONBTN.classList.add("actionSection")
    DetaShowSection.classList.add("DetaShowSection")
    DetaShowSection.classList.add("DETAFillSection")
    btnE.forEach(E => {
        let { DName, icon, functionCall } = E;
        let btns = document.createElement("div");
        btns.classList.add("pointer")
        btns.classList.add("AccessBtn")
        btns.innerHTML = `<i class='fa-solid  ${icon}'></i> ${DName}`

        btns.addEventListener("click", () => {
            CallNow(functionCall, DetaShowSection, "active");
            document.querySelectorAll(".selectBtn").forEach(e => {
                e.classList.remove("selectBtn")
            })
            btns.classList.add("selectBtn")
        })

        PACTIONBTN.appendChild(btns)
        console.log(functionCall);

    })
    if (PIB.style.backgroundImage == "") {
        PIB.innerHTML = `${UserDeta[0].UN.split("  ")[UserDeta[0].UN.split("  ").length - 2].split("")[0]}${UserDeta[0].UN.split("  ")[UserDeta[0].UN.split("  ").length - 1].split("")[0]}`;
    } else {
        PIB.innerHTML = "";
    }
    ContentBody.appendChild(PB);
    PB.appendChild(PS);
    PS.appendChild(PIB);
    PS.appendChild(Pdn);
    PB.appendChild(PACTIONBTN);
    PB.appendChild(DetaShowSection);
    console.log(deta);
    Pdn.innerHTML = `<div class="highligth">${deta[0].UN}</div><span class="gapS">DW${UserDeta[0].userIndexNumber}</span><div class=" accountType active">Active</div>`
    ContentBody.style.paddingTop = '2vh'


    document.querySelectorAll(".AccessBtn")[2].click();
}

function CallNow(event, PushElement, calltype) {
    PushElement.innerHTML = '';
    PushElement.classList.remove("showColors")

    if (event == 'accountSection') {
        document.querySelector("title").innerHTML = `Account Settiongs`;

        let content = document.createElement("div");
        let content2 = document.createElement("div");
        content.classList.add("grid");
        content2.classList.add("grid");
        content.classList.add("AccountSection");
        content2.classList.add("AccountSectionoTHER");
        PushElement.appendChild(content)

        let rq0 = document.createElement("div");
        let rq1 = document.createElement("div");
        let rq2 = document.createElement("div");
        let rq3 = document.createElement("div");
        let rq4 = document.createElement("div");
        let lb0 = document.createElement("lable");
        let lb1 = document.createElement("lable");
        let lb2 = document.createElement("lable");
        let lb3 = document.createElement("lable");
        let lb4 = document.createElement("lable");
        let displayBox0 = document.createElement("div");
        let displayBox1 = document.createElement("div");
        let displayBox2 = document.createElement("div");
        let displayBox3 = document.createElement("div");
        let displayBox4 = document.createElement("div");
        let int0 = document.createElement("input");

        let int3 = document.createElement("input");
        let int4 = document.createElement("input");
        let rq01 = document.createElement("div");
        let btnChange = document.createElement("div");

        let paswordChangeBox = document.createElement("div");
        let paswordChangeBoxTitle = document.createElement("div");
        let paswordChangeBoxInputPsswords = document.createElement("div");
        let paswordChangeBoxInputPssword = document.createElement("input");
        let paswordChangeBoxInputCPsswords = document.createElement("div");
        let paswordChangeBoxInputCPssword = document.createElement("input");
        let paswordChangeBoxInputPsswordLABLE = document.createElement("lable");
        let paswordChangeBoxInputcPsswordLABLE = document.createElement("lable");
        let paswordChangeBoxInputcPsswordValidationSection = document.createElement("div");
        let paswordChangeBoxInputcPsswordValidationbar = document.createElement("div");
        let paswordChangeBoxInputcPsswordValidationStates = document.createElement("div");
        let ProfolePicUpdateBox = document.createElement("div");
        let profileBoxSection = document.createElement("div");
        let profileBoxSectionMessageBox = document.createElement("div");
        let controllpanelSection = document.createElement("div");
        let controllpanelCanlebtn = document.createElement("div");
        let controllpanelUpdatebtn = document.createElement("div");

        rq0.classList.add("requadBox")
        rq1.classList.add("requadBox")
        rq2.classList.add("requadBox")
        rq3.classList.add("requadBox")
        rq4.classList.add("requadBox")
        lb0.classList.add("lable")
        lb1.classList.add("lable")
        lb2.classList.add("lable")
        lb3.classList.add("lable")
        lb4.classList.add("lable")
        displayBox0.classList.add("displayDeta")
        displayBox1.classList.add("displayDeta")
        displayBox2.classList.add("displayDeta")
        displayBox3.classList.add("displayDeta")
        displayBox4.classList.add("displayDeta")
        int0.classList.add("hide")
        int3.classList.add("hide")
        int4.classList.add("hide")

        btnChange.classList.add("Submit_Btn")
        btnChange.classList.add("btnPrimary")
        btnChange.classList.add("pointer")
        rq01.classList.add("RequadBoxChangeSection")
        paswordChangeBox.classList.add("passwordChangeBox")
        ProfolePicUpdateBox.classList.add("ProfilePicBox")
        profileBoxSection.classList.add("ProfilePicBoxSection")
        profileBoxSection.classList.add("flex")
        profileBoxSectionMessageBox.classList.add("ProfilePicBoxMessageBox")
        profileBoxSection.classList.add("pointer")
        ProfolePicUpdateBox.classList.add("otherRequad")
        paswordChangeBox.classList.add("otherRequad")
        controllpanelSection.classList.add("flex")
        controllpanelSection.classList.add("profileImageControllSection")
        controllpanelUpdatebtn.classList.add("Submit_Btn")
        controllpanelUpdatebtn.classList.add("pointer")
        controllpanelUpdatebtn.classList.add("btnPrimary")
        controllpanelCanlebtn.classList.add("btnPrimary")
        controllpanelCanlebtn.classList.add("pointer")
        controllpanelCanlebtn.classList.add("Clear_btn")
        controllpanelSection.classList.add("hide");
        paswordChangeBoxInputPsswordLABLE.classList.add("lable");
        paswordChangeBoxInputcPsswordLABLE.classList.add("lable");
        paswordChangeBoxTitle.classList.add("passwordTitleSection");
        paswordChangeBoxInputPsswords.classList.add("requadBox");
        paswordChangeBoxInputCPsswords.classList.add("requadBox");
        paswordChangeBoxInputcPsswordValidationSection.classList.add("passValidationSection");
        paswordChangeBoxInputcPsswordValidationSection.classList.add("flex");
        paswordChangeBoxInputcPsswordValidationbar.classList.add("passValidationSectionBar");
        paswordChangeBoxInputcPsswordValidationStates.classList.add("passValidationSectionstates");

        profileBoxSection.addEventListener("click", () => {
            if (document.querySelectorAll(".specialUse").length == 0) {
                var profileBoxSectionInt = document.createElement("input");
                profileBoxSectionInt.type = 'file';
                profileBoxSectionInt.setAttribute("accept", "image/*")
                profileBoxSectionInt.classList.add("specialUse");
                profileBoxSectionInt.classList.add("hide");
                profileBoxSection.appendChild(profileBoxSectionInt);

                document.querySelector('.specialUse').addEventListener("change", (e) => {

                    let file = e.target.files[0];
                    let reader = new FileReader();
                    reader.onload = function () {
                        profileBoxSection.style.backgroundImage = `url(${reader.result})`;
                        console.log(reader.result);
                    }
                    reader.readAsDataURL(file);

                });
            }
            document.querySelector(".specialUse").click();
            profileBoxSectionMessageBox.classList.add("hide")
            controllpanelSection.classList.remove("hide")

        })
        controllpanelUpdatebtn.addEventListener("click", () => {
            if (controllpanelUpdatebtn.innerHTML == 'upload') {
                document.querySelector(".PBall").innerHTML = "";
                document.querySelector(".PBall").style.backgroundImage = profileBoxSection.style.backgroundImage;
                localStorage.setItem("UserProfileImage", profileBoxSection.style.backgroundImage);
                controllpanelUpdatebtn.innerHTML = 'change';
            } else {
                controllpanelUpdatebtn.innerHTML = 'upload';
                profileBoxSection.click();
            }
        })

        controllpanelCanlebtn.addEventListener("click", () => {
            profileBoxSectionMessageBox.classList.remove("hide")
            profileBoxSection.style.backgroundImage = `url('')`;
            controllpanelSection.classList.add("hide")
        })
        lb0.innerHTML = ' <i class="fa-solid fa-user-alt"> </i>Name';
        lb1.innerHTML = ' <i class="fa-solid fa-calendar-days"> </i> Age';
        lb2.innerHTML = ' <i class="fa-solid fa-transgender"> </i> Gender';
        lb3.innerHTML = ' <i class="fa-solid fa-phone"></i> phone  number';
        lb4.innerHTML = ' <i class="fa-solid fa-envelope"></i> Email address';

        int0.placeholder = 'enter your name';
        int3.placeholder = 'enter your phone number';
        int4.placeholder = 'enter your email address';
        btnChange.innerHTML = '<i class="fas fa-pen-to-square"></i> edit';
        controllpanelCanlebtn.innerHTML = 'cancle';
        controllpanelUpdatebtn.innerHTML = 'upload';
        profileBoxSectionMessageBox.innerHTML = '<i class="fas fa-pen-to-square"></i> <br> profile image';
        paswordChangeBoxTitle.innerHTML = 'change password';
        paswordChangeBoxInputPsswordLABLE.innerHTML = 'use password';
        paswordChangeBoxInputcPsswordLABLE.innerHTML = 'new password';
        paswordChangeBoxInputcPsswordValidationbar.innerHTML = '<span></span>';
        paswordChangeBoxInputcPsswordValidationStates.innerHTML = 'wrong';

        displayBox0.innerHTML = UserDeta[0].UN;
        displayBox1.innerHTML = UserDeta[0].age;
        displayBox2.innerHTML = UserDeta[0].G;
        displayBox3.innerHTML = UserDeta[0].PN;
        displayBox4.innerHTML = UserDeta[0].EA;

        content.appendChild(rq0)
        content.appendChild(rq1)
        content.appendChild(rq2)
        content.appendChild(rq3)
        content.appendChild(rq4)

        rq0.appendChild(lb0)
        rq1.appendChild(lb1)
        rq2.appendChild(lb2)
        rq3.appendChild(lb3)
        rq4.appendChild(lb4)
        rq0.appendChild(displayBox0)
        rq1.appendChild(displayBox1)
        rq2.appendChild(displayBox2)
        rq3.appendChild(displayBox3)
        rq4.appendChild(displayBox4)
        rq0.appendChild(int0)
        rq3.appendChild(int3)
        rq4.appendChild(int4)

        content2.appendChild(ProfolePicUpdateBox)
        ProfolePicUpdateBox.appendChild(profileBoxSection)
        profileBoxSection.appendChild(profileBoxSectionMessageBox)
        content2.appendChild(paswordChangeBox)
        paswordChangeBox.appendChild(paswordChangeBoxTitle)
        paswordChangeBox.appendChild(paswordChangeBoxInputPsswords)
        paswordChangeBox.appendChild(paswordChangeBoxInputCPsswords)
        paswordChangeBoxInputPsswords.appendChild(paswordChangeBoxInputPsswordLABLE)
        paswordChangeBoxInputPsswords.appendChild(paswordChangeBoxInputPssword)
        paswordChangeBoxInputCPsswords.appendChild(paswordChangeBoxInputcPsswordLABLE)
        paswordChangeBoxInputCPsswords.appendChild(paswordChangeBoxInputCPssword)
        paswordChangeBoxInputCPsswords.appendChild(paswordChangeBoxInputcPsswordValidationSection)
        paswordChangeBoxInputcPsswordValidationSection.appendChild(paswordChangeBoxInputcPsswordValidationbar)
        paswordChangeBoxInputcPsswordValidationSection.appendChild(paswordChangeBoxInputcPsswordValidationStates)
        controllpanelSection.appendChild(controllpanelUpdatebtn)
        controllpanelSection.appendChild(controllpanelCanlebtn)
        ProfolePicUpdateBox.appendChild(controllpanelSection)

        btnChange.addEventListener("click", () => {
            if (btnChange.innerText.toLocaleLowerCase() == " edit") {
                content.classList.add("EditDeta")
                document.querySelectorAll(".requadBox input").forEach(element => { element.classList.remove("hide") })
                document.querySelectorAll(".requadBox").forEach(element => { if (element.childElementCount == 2) { element.classList.add("hide") } })
                document.querySelectorAll(".requadBox input").forEach(element => { element.parentElement.querySelector(".displayDeta").classList.add("hide") })
                btnChange.innerHTML = '<i class="fas fas fa-save"></i> save';

            } else {
                content.classList.remove("EditDeta")
                document.querySelectorAll("input").forEach(element => { element.classList.add("hide") })
                document.querySelectorAll("input").forEach(element => { element.parentElement.querySelector(".displayDeta").classList.remove("hide") })
                document.querySelectorAll(".requadBox").forEach(element => { if (element.childElementCount == 2) { element.classList.remove("hide") } })
                btnChange.innerHTML = '<i class="fas fa-pen-to-square"></i> edit';
                remind_User("s", "Details Update Success !")

            }
        })
        if (document.querySelector(".PBall").style.backgroundImage != "") {
            controllpanelSection.classList.remove("hide")
            profileBoxSectionMessageBox.classList.add("hide")
            profileBoxSection.style.backgroundImage = document.querySelector(".PBall").style.backgroundImage;
            controllpanelUpdatebtn.innerHTML = 'change';
            document.querySelector(".PBall").innerHTML = '';
        }
        PushElement.appendChild(rq01)
        rq01.appendChild(btnChange)
        PushElement.appendChild(content2)


    } else if (event == 'paymentDetails') {
        document.querySelector("title").innerHTML = `Payment History`;

        let content = document.createElement("table");
        let theder = document.createElement('thead');
        let tBody = document.createElement('tbody');
        let thr = document.createElement('tr');
        let th0 = document.createElement('th');
        let th1 = document.createElement('th');
        let th2 = document.createElement('th');
        let th3 = document.createElement('th');

        th0.innerHTML = 'date'
        th1.innerHTML = 'name'
        th2.innerHTML = 'Status'
        th3.innerHTML = 'amount'

        content.classList.add("PaymentDeta");
        PushElement.appendChild(content)
        PushElement.classList.add("showColors")

        content.appendChild(theder)
        content.appendChild(tBody)
        theder.appendChild(thr)
        thr.appendChild(th0)
        thr.appendChild(th1)
        thr.appendChild(th2)
        thr.appendChild(th3)

        {
            let tbr = document.createElement('tr');
            let td0 = document.createElement('td');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            let td3 = document.createElement('td');

            tBody.appendChild(tbr)
            tbr.appendChild(td0)
            tbr.appendChild(td1)
            tbr.appendChild(td2)
            tbr.appendChild(td3)

            td0.innerHTML = "2026/05/10";
            td1.innerHTML = "Monthly payment";
            td2.innerHTML = "paid";
            td3.innerHTML = "RS: 200.00";

        }
    } else if (event == 'featuresCall') {
        document.querySelector("title").innerHTML = `Anable feachers`;

        let contentBox = document.createElement("div");

        contentBox.classList.add("grid")
        contentBox.classList.add("FeaturesSection")
        let featuresE = [{ Fname: 'attendans Marking', icon: "fa-calendar-check", SubTitle: "attendence marking ", Ftype: 'AM' }, { Fname: 'Payment marking', icon: "fa-circle-dollar-to-slot", SubTitle: "monthly paybent marking", Ftype: 'PM' }, { Fname: 'deta Management', icon: "fa-database", SubTitle: "event manage Permision ", Ftype: 'DBM' }, { Fname: 'Report', icon: "fa-file-lines", SubTitle: "society monthly report", Ftype: 'MR' },]
        if (calltype == 'active') {
            for (let index = 0; index < featuresE.length; index++) {
                let { Fname, icon, Ftype, SubTitle } = featuresE[index];
                let box = document.createElement("div");
                let boxIS = document.createElement("div");
                let boxI = document.createElement("i");
                let boxT = document.createElement("div");
                let boxST = document.createElement("div");
                let boxTSection = document.createElement("div");

                boxI.classList.add("icon");
                boxIS.classList.add("iconBox");
                boxIS.classList.add("flex");
                boxT.classList.add("FearureTitle");
                boxST.classList.add("FearureSubTitle");
                boxTSection.classList.add("FearureSubTitleSection");
                box.classList.add("featureBox")
                box.classList.add("flex")
                box.classList.add("pointer")
                box.addEventListener("click", () => { featureApplay(document.querySelectorAll(".root")[0], Ftype) })
                boxT.innerHTML = Fname;
                boxST.innerHTML = SubTitle;
                boxI.classList.add(`${icon}`);
                boxI.classList.add('fa-solid');

                contentBox.appendChild(box);
                box.appendChild(boxIS);
                box.appendChild(boxTSection);
                boxTSection.appendChild(boxT);
                boxTSection.appendChild(boxST);
                boxIS.appendChild(boxI);
            }
        }
        console.log(contentBox);

        PushElement.appendChild(contentBox)
    }
}
function featureApplay(appendElement, type) {
    appendElement.innerHTML = '';
    let AllMembersDeta = [];
    if (type == "AM" || type == "PM") {
        const url = "https://script.google.com/macros/s/AKfycbwAD10SPiDZvUZEF997rvH4kN9hy0vdfCRiRCUW7yHP1sIVJXQLBpamz5hGNe5nK2gSeQ/exec";
        try {
            fetch(url).then(res => res.json()).then(data => {
                console.log(data);
                let index = "";
                data.forEach((element, i) => {
                    if (i > 0) {


                        if (`${i}`.split("").length == 1) {
                            index = `000${i}`;
                        } if (`${i}`.split("").length == 2) {
                            index = `00${i}`;
                        } if (`${i}`.split("").length == 3) {
                            index = `0${i}`;
                        } if (`${i}`.split("").length == 4) {
                            index = `${i}`;
                        }
                        let PersonDeta = { indexNumber: index, UserName: element[0] };
                        AllMembersDeta.push(PersonDeta)
                    }
                });
            }).catch(error => { remind_User("de", "detabase error"); })

        } catch (error) {
            remind_User("de", "detabase error");
        }
    }
    if (type == 'AM') {
        let AttendenceMarking = [];
        document.querySelector("title").innerHTML = 'Attendense Marking';
        let navSectionBox = document.createElement("div");
        let BackToBtn = document.createElement("div");
        let FormeSection = document.createElement("div");
        let FormeConteain = document.createElement("div");
        let FormeLogo = document.createElement("div");
        let FormeTitle = document.createElement("div");
        let rq0 = document.createElement("div");
        let rq1 = document.createElement("div");
        let rq2 = document.createElement("div");
        let rq3 = document.createElement("div");
        let rq4 = document.createElement("div");
        let rq5 = document.createElement("div");
        let lb0 = document.createElement("div");
        let lb1 = document.createElement("div");
        let lb2 = document.createElement("div");
        let lb3 = document.createElement("div");
        let lb4 = document.createElement("div");
        let int0 = document.createElement("input");
        let int1 = document.createElement("div");
        let int2 = document.createElement("input");
        let int3 = document.createElement("input");
        let btnSubmit = document.createElement("div");
        let btnclear = document.createElement("div");

        navSectionBox.classList.add("navsectioin")
        navSectionBox.classList.add("flex")
        FormeSection.classList.add("FormeSection")
        FormeSection.classList.add("flex")
        BackToBtn.classList.add("BackBtn")
        BackToBtn.classList.add("btnPrimary")
        BackToBtn.classList.add("pointer")
        FormeConteain.classList.add("formeContain")
        FormeLogo.classList.add("FormeLogo")
        FormeTitle.classList.add("FormeTitle")
        btnSubmit.classList.add("btnPrimary")
        btnSubmit.classList.add("Submit_Btn")
        btnSubmit.classList.add("pointer")
        btnclear.classList.add("btnPrimary")
        btnclear.classList.add("pointer")
        btnclear.classList.add("Clear_btn")
        rq0.classList.add("rquadSection")
        rq1.classList.add("rquadSection")
        rq2.classList.add("rquadSection")
        rq3.classList.add("rquadSection")
        rq4.classList.add("rquadSection")
        rq5.classList.add("rquadSection")
        rq2.classList.add("hide")
        rq3.classList.add("hide")
        rq4.classList.add("hide")
        rq5.classList.add("hide")
        rq0.classList.add("flex")
        lb0.classList.add("lable")
        lb1.classList.add("lable")
        lb2.classList.add("lable")
        lb3.classList.add("lable")
        lb4.classList.add("lable")
        lb2.classList.add("inputBox")
        lb2.classList.add("hide")
        int1.classList.add("inputBox")

        btnSubmit.innerHTML = '<i class="fas fa-search"></i>search'
        btnclear.innerHTML = '<i></i> cancle'

        BackToBtn.innerHTML = '<i class="fa-solid fa-angle-left"></i> Back';
        FormeTitle.innerHTML = 'Attendence marking';

        lb0.innerHTML = '<i></i> Index number';
        int0.placeholder = 'Index number';
        lb1.innerHTML = 'Name';

        lb3.innerHTML = 'New Event Name';
        lb4.innerHTML = 'Select Date';
        int2.placeholder = "Event Name";
        int3.placeholder = "date";
        int2.type = "text";
        int3.type = "date";

        BackToBtn.addEventListener("click", () => {
            rq1.classList.add("hide")
            rq3.classList.remove("hide")
            rq4.classList.remove("hide")
            btnSubmit.innerHTML = '<i class="fas fa-sync"></i>Add deta';
            // back();
        })
        btnSubmit.addEventListener("click", () => {
            if (btnSubmit.innerText.toLocaleLowerCase() == 'search') {
                if (int0.value.trim().split("").length == 4 & 0 != Number(int0.value.trim()) & Number(int0.value.trim()) <= AllMembersDeta.length) {
                    for (let index = 0; index < AllMembersDeta.length; index++) {
                        const element = AllMembersDeta[index];
                        let { indexNumber, UserName } = element;
                        if (int0.value.trim() == indexNumber) {
                            btnSubmit.innerHTML = '<i class="fa-solid fa-paper-plane"></i>Mark';
                            rq2.classList.remove("hide")
                            int0.classList.add("hide")
                            lb2.classList.remove("hide")
                            lb2.innerHTML = `DW${int0.value.trim()}`;
                            int1.innerHTML = UserName
                        }
                    }
                    console.log(true);

                } else {
                    remind_User("te", "invalid Index Number");
                }
            } else if (btnSubmit.innerText.toLocaleLowerCase() == 'mark') {
                if (AttendenceMarking.indexOf(`${lb2.innerHTML.split("DW")[1]}`) == -1) {
                    AttendenceMarking.push(lb2.innerHTML.split("DW")[1]);

                    btnSubmit.innerHTML = '<i class="fas fa-search"></i>search';
                    rq2.classList.add("hide")
                    int0.classList.remove("hide")
                    lb2.classList.add("hide")
                    lb2.innerHTML = `}`;
                    int1.innerHTML = ""
                    btnclear.click();
                    remind_User("s", "attendence marking succes...");
                    console.log(AttendenceMarking);


                } else {
                    remind_User("e", "alredy mark");
                    btnclear.click();
                }
            } else if (btnSubmit.innerText.toLocaleLowerCase() == 'add deta') {

                if (int2.value.trim() != "" & int3.value != "" & AttendenceMarking.length > 3) {
                    console.log("Add Deta");
                    let attendenceE = "";
                    AttendenceMarking.forEach((e) => {
                        attendenceE += `${e},`
                    })

                    if (document.querySelectorAll("form").length == 0) {
                        let formeCreateNew = document.createElement("form");
                        let intDeta0 = document.createElement("input");
                        let intDeta1 = document.createElement("input");
                        let intDeta2 = document.createElement("input");
                        let intDeta3 = document.createElement("input");
                        let btnPostDeta = document.createElement("button");

                        formeCreateNew.classList.add("hide");

                        btnPostDeta.type = 'submit';
                        intDeta0.name = 'Date';
                        intDeta1.name = 'Type';
                        intDeta2.name = 'Deta';
                        intDeta3.name = 'Name';
                        intDeta1.value = "Attendence Marking";

                        btnPostDeta.innerHTML = "Post Deta";
                        formeCreateNew.setAttribute("name", "submit-to-google-sheet");
                        document.querySelector("body").appendChild(formeCreateNew);
                        formeCreateNew.appendChild(intDeta0);
                        formeCreateNew.appendChild(intDeta1);
                        formeCreateNew.appendChild(intDeta2);
                        formeCreateNew.appendChild(intDeta3);
                        formeCreateNew.appendChild(btnPostDeta);

                        intDeta2.value = attendenceE;
                        intDeta1.value = "Attendence Marking ";
                        intDeta3.value = int2.value.trim();
                        intDeta0.value = int3.value;

                        const scriptURL = 'https://script.google.com/macros/s/AKfycbzWPuPm9uT2mkpHfsKVuJ6fkbNrfjcd28SONLpWsAwq_oda33MsTmtJqH3I3HOY1gbf/exec'
                        const form = document.forms['submit-to-google-sheet']

                        form.addEventListener('submit', e => {
                            e.preventDefault()

                            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                .then(response => {
                                    if (response.status === 200) {
                                        console.log('Success!', response)
                                        document.forms['submit-to-google-sheet'].reset()
                                        setTimeout(() => {
                                            remind_User("s", "Deta Update Success");
                                        }, 200);
                                        setTimeout(() => {
                                            back()
                                        }, 400);
                                    }
                                })
                                .catch(error => {
                                    console.clear(); setTimeout(() => {
                                        remind_User("e", "Please Try Again Later")
                                    }, 200);
                                });
                        })
                        btnPostDeta.click();
                    }

                    console.log(attendenceE);

                } else {
                    remind_User("e", "fill all section")
                }
            }

        })
        btnclear.addEventListener("click", () => {
            document.querySelectorAll("input").forEach((e) => {
                e.value = "";
            })

            rq1.classList.remove("hide")
            rq3.classList.add("hide")
            rq4.classList.add("hide")

            btnSubmit.innerHTML = '<i class="fas fa-search"></i>search'
            rq2.classList.add("hide")
            int0.classList.remove("hide")
            lb2.classList.add("hide")
            lb2.innerHTML = `defolt name`;
            int1.innerHTML = ""

        })
        appendElement.appendChild(navSectionBox)
        appendElement.appendChild(FormeSection)
        navSectionBox.appendChild(BackToBtn)
        FormeSection.appendChild(FormeConteain)
        FormeConteain.appendChild(FormeLogo)
        FormeConteain.appendChild(FormeTitle)
        FormeConteain.appendChild(rq1)
        FormeConteain.appendChild(rq2)
        FormeConteain.appendChild(rq3)
        FormeConteain.appendChild(rq4)
        FormeConteain.appendChild(rq5)

        FormeConteain.appendChild(rq0)
        rq0.appendChild(btnSubmit)
        rq0.appendChild(btnclear)
        rq1.appendChild(lb0)
        rq1.appendChild(int0)
        rq1.appendChild(lb2)
        rq2.appendChild(lb1)
        rq2.appendChild(int1)
        rq3.appendChild(lb3)
        rq3.appendChild(int2)
        rq4.appendChild(lb4)
        rq4.appendChild(int3)
    } else if (type == 'PM') {
        document.querySelector("title").innerHTML = 'Payment Marking';
        let navSectionBox = document.createElement("div");
        let BackToBtn = document.createElement("div");
        let FormeSection = document.createElement("div");
        let FormeConteain = document.createElement("div");
        let FormeLogo = document.createElement("div");
        let FormeTitle = document.createElement("div");
        let rq0 = document.createElement("div");
        let rq1 = document.createElement("div");
        let rq2 = document.createElement("div");
        let rq3 = document.createElement("div");
        let lb0 = document.createElement("lable");
        let lb1 = document.createElement("lable");
        let lb2 = document.createElement("lable");
        let int0 = document.createElement("input");
        let intlb0 = document.createElement("div");
        let intlb1 = document.createElement("div");
        let intlb2 = document.createElement("div");
        let submitBtn = document.createElement("div");
        let canclebtn = document.createElement("div");
        let PayMentsBeforMonthDeta = [];
        let AttendenceMarkingDeta = [];

        const DBURL = 'https://script.google.com/macros/s/AKfycbzWPuPm9uT2mkpHfsKVuJ6fkbNrfjcd28SONLpWsAwq_oda33MsTmtJqH3I3HOY1gbf/exec';
        fetch(DBURL).then(result => result.json()).then(data => {
            console.log(data);
            if (data[1] == 'Payment Marking') {
                PayMentsBeforMonthDeta.push(data)
            }
            if (data[1] == 'Attendence Marking ') {
                AttendenceMarkingDeta.push(data)
            }
        }).catch(error => { remind_User("de", "detabase error"); })
        console.log(AttendenceMarkingDeta);

        navSectionBox.classList.add("navsectioin")
        navSectionBox.classList.add("flex")
        FormeSection.classList.add("FormeSection")
        FormeSection.classList.add("flex")
        BackToBtn.classList.add("BackBtn")
        BackToBtn.classList.add("btnPrimary")
        BackToBtn.classList.add("pointer")
        FormeConteain.classList.add("formeContain")
        FormeLogo.classList.add("FormeLogo")
        FormeTitle.classList.add("FormeTitle")
        rq0.classList.add("rquadSection")
        rq1.classList.add("rquadSection")
        rq1.classList.add("flex")
        rq2.classList.add("rquadSection")
        rq3.classList.add("rquadSection")
        rq2.classList.add("hide")
        rq3.classList.add("hide")
        lb0.classList.add("lable")
        lb1.classList.add("lable")
        lb2.classList.add("lable")
        intlb0.classList.add("lable")
        intlb0.classList.add("inputBox")
        intlb0.classList.add("hide")
        intlb1.classList.add("lable")
        intlb1.classList.add("inputBox")
        intlb2.classList.add("lable")
        intlb2.classList.add("inputBox")
        submitBtn.classList.add("pointer")
        submitBtn.classList.add("btnPrimary")
        submitBtn.classList.add("Submit_Btn")
        canclebtn.classList.add("Clear_btn")
        canclebtn.classList.add("btnPrimary")
        canclebtn.classList.add("pointer")
        BackToBtn.innerHTML = '<i class="fa-solid fa-angle-left"></i> Back';
        FormeTitle.innerHTML = 'Payment marking';

        lb0.innerHTML = 'index number';
        lb1.innerHTML = 'name';
        lb2.innerHTML = 'payment Note';
        int0.placeholder = 'index number';
        submitBtn.innerHTML = '<i class="fas fa-search"></i>search';
        canclebtn.innerHTML = '<i class=""></i> cancle';

        appendElement.appendChild(navSectionBox)
        appendElement.appendChild(FormeSection)
        navSectionBox.appendChild(BackToBtn)
        FormeSection.appendChild(FormeConteain)
        FormeConteain.appendChild(FormeLogo)
        FormeConteain.appendChild(FormeTitle)
        FormeConteain.appendChild(rq0)
        FormeConteain.appendChild(rq2)
        FormeConteain.appendChild(rq3)
        FormeConteain.appendChild(rq1)
        rq0.appendChild(lb0)
        rq0.appendChild(int0)
        rq0.appendChild(intlb0)
        rq1.appendChild(submitBtn)
        rq1.appendChild(canclebtn)
        rq2.appendChild(lb1)
        rq2.appendChild(intlb1)
        rq3.appendChild(lb2)
        rq3.appendChild(intlb2)
        let PaymentDetails_Users = [];
        submitBtn.addEventListener("click", () => {
            if (submitBtn.innerText.toLocaleLowerCase() == 'search') {
                if (int0.value.trim().split("").length == 4 & 0 != Number(int0.value.trim()) & Number(int0.value.trim()) <= AllMembersDeta.length) {
                    for (let index = 0; index < AllMembersDeta.length; index++) {
                        const element = AllMembersDeta[index];
                        let { indexNumber, UserName } = element;
                        if (int0.value.trim() == indexNumber) {
                            submitBtn.innerHTML = '<i class="fas fa-credit-card fa-stack-1"></i>add payment';
                            rq2.classList.remove("hide")
                            rq3.classList.remove("hide")
                            int0.classList.add("hide")
                            intlb0.classList.remove("hide")
                            intlb0.innerHTML = `DW${int0.value.trim()}`;
                            intlb1.innerHTML = UserName;
                            if (PayMentsBeforMonthDeta.length == 1 || PayMentsBeforMonthDeta.length == 0) {
                                let intContain0 = document.createElement("div");
                                let intContain1 = document.createElement("div");
                                let intContain2 = document.createElement("div");

                                intContain0.innerHTML = 'month RS: 200';
                                intContain1.innerHTML = 'Aries RS: 000';
                                intContain2.innerHTML = 'total RS: 200';

                                intlb2.appendChild(intContain0)
                                intlb2.appendChild(intContain1)
                                intlb2.appendChild(intContain2)
                            }
                        }
                    }
                    console.log(true);

                } else {
                    remind_User("te", "invalid Index Number");
                }
            } else if (submitBtn.innerText.toLocaleLowerCase() == 'add payment') {
                PaymentDetails_Users.push({ UserIndex: int0.value.trim(), ariesCount: 0 })
                canclebtn.click();
                console.log(PaymentDetails_Users);

            }
        })
        canclebtn.addEventListener("click", () => {
            submitBtn.innerHTML = '<i class="fas fa-search"></i>search';
            intlb2.innerHTML = '';
            rq2.classList.add("hide")
            rq3.classList.add("hide")
            int0.classList.remove("hide");
            int0.value = '';
            intlb0.innerHTML = '';
            intlb1.innerHTML = '';
            intlb0.classList.add("hide")

        })
        BackToBtn.addEventListener("click", () => {
            back();

        })
    } else if (type == 'MR') {
        document.querySelector("title").innerHTML = 'Society Monthly Report';
        let navSectionBox = document.createElement("div");
        let BackToBtn = document.createElement("div");
        BackToBtn.innerHTML = '<i class="fa-solid fa-angle-left"></i> Back';
        let DisplayBoxSection = document.createElement("div");
        let DisplayElements = [{ Ename: "Total Income", Icon: 'fa-money-bill-trend-up', detaType: "DetaSell", subTitle: "month to tatal income", detabase: "" }, { Ename: "Attendence", Icon: 'fa-calendar-check', detaType: "DetaSell", subTitle: "Test message", detabase: "" }, { Ename: " fees", Icon: 'fa-id-card-clip', detaType: "DetaSell", subTitle: "Test message", detabase: "" }, { Ename: "invest", Icon: 'fa-chart-line', detaType: "DetaSell", subTitle: "Test message", detabase: "" }, { Ename: "Total", Icon: 'fa-hand-holding-dollar', detaType: "DetaSell", subTitle: "Test message", detabase: "" }, { Ename: "1 arias ", Icon: 'fa-hand-holding-dollar', detaType: "DetaSell", subTitle: "Test message", detabase: "" }, { Ename: "2 Arias ", Icon: 'fa-hand-holding-dollar', detaType: "DetaSell", subTitle: "Test message", detabase: "" },]
        DisplayBoxSection.classList.add("displayBoxSection")
        DisplayBoxSection.classList.add("grid")

        navSectionBox.classList.add("navsectioin")
        navSectionBox.classList.add("flex")
        BackToBtn.classList.add("BackBtn")
        BackToBtn.classList.add("btnPrimary")
        BackToBtn.classList.add("pointer")

        appendElement.appendChild(navSectionBox)
        appendElement.appendChild(DisplayBoxSection)
        navSectionBox.appendChild(BackToBtn)
        DisplayElements.forEach((e, i) => {
            let { detaType, Icon, Ename, subTitle } = e;
            let Box = document.createElement("div")
            let Text_Section = document.createElement("div")
            let TitleSecton = document.createElement("div")
            let Sub_Title = document.createElement("div")
            let DetaValue = document.createElement("div")

            Text_Section.classList.add("TextSection");
            TitleSecton.classList.add("FearureTitle");
            Sub_Title.classList.add("FearureSubTitle");

            TitleSecton.innerHTML = `<i class="fa-solid ${Icon}"></i> ${Ename}`;
            Sub_Title.innerHTML = `${subTitle}`;
            DetaValue.innerHTML = " _ _ _ ";

            Text_Section.appendChild(TitleSecton)
            Text_Section.appendChild(Sub_Title)
            Box.appendChild(Text_Section)
            Box.appendChild(DetaValue)
            DisplayBoxSection.appendChild(Box)

            Box.classList.add("gridBox")
            DetaValue.classList.add("Deta_Value")
            if (i == 2) {
                DetaValue.innerHTML = "RS: 200 . 00 "
            } if (i == 0) {
                Box.classList.add("MainTagBox");
                let detaTableMessage = document.createElement("div");
                let detaTable = document.createElement("table");
                let detaTableTH = document.createElement('thead');
                let detaTableTB = document.createElement('tbody');
                let TH0 = document.createElement('th');
                let TH1 = document.createElement('th');
                let TH2 = document.createElement('th');

                detaTableMessage.innerHTML = "last month Income";
                TH0.innerHTML = "name";
                TH1.innerHTML = "Month";
                TH2.innerHTML = "Price";
                const url = "https://script.google.com/macros/s/AKfycbzWPuPm9uT2mkpHfsKVuJ6fkbNrfjcd28SONLpWsAwq_oda33MsTmtJqH3I3HOY1gbf/exec";
                try {
                    fetch(url).then(res => res.json()).then(data => {
                        console.log(data);
                        let index = "";
                        data.forEach((element, i) => {
                            if (i > 0) {
                                console.log(data);

                            }
                        });
                    }).catch(error => { remind_User("de", "detabase error"); })

                } catch (error) {
                    remind_User("de", "detabase error");
                }
                detaTableMessage.classList.add("detaTabale_Notice")

                Box.appendChild(detaTableMessage)
                Box.appendChild(detaTable)
                detaTable.appendChild(detaTableTH)
                detaTable.appendChild(detaTableTB)
                detaTableTH.appendChild(TH0)
                detaTableTH.appendChild(TH1)
                detaTableTH.appendChild(TH2)

            } else if (Ename == 'Attendence') {
                const url = "https://script.google.com/macros/s/AKfycbzWPuPm9uT2mkpHfsKVuJ6fkbNrfjcd28SONLpWsAwq_oda33MsTmtJqH3I3HOY1gbf/exec";
                try {
                    fetch(url).then(res => res.json()).then(data => {
                        console.log(data);
                        let index = "";
                        saltDeta(data)
                    }).catch(error => { remind_User("de", "detabase error"); })

                } catch (error) {
                    remind_User("de", "detabase error");
                }
                function saltDeta(errorCall) {
                    console.log(errorCall);
                    let AttendenceDetails = [];
                    errorCall.forEach((element) => {
                        if (element[1] == 'Attendence Marking ') {
                            console.log(element);
                            AttendenceDetails.push(element);
                        }
                        if (AttendenceDetails.length == 0) {
                            DetaValue.innerHTML = " _ _ _ ";
                        } else {
                            console.log(AttendenceDetails[AttendenceDetails.length - 1][3].split(",").length - 1);
                            let count = AttendenceDetails[AttendenceDetails.length - 1][3].split(",").length - 1;
                            for (let index = 0; index < count + 1; index++) {
                                DetaValue.innerHTML = index;
                            }
                            if (Number(AttendenceDetails[AttendenceDetails.length - 1][0].split("-")[1]) - 1 == new Date().getMonth()) {
                                console.log('this month');
                                Sub_Title.innerHTML = `this month count`;
                            } else
                                if (Number(AttendenceDetails[AttendenceDetails.length - 1][0].split("-")[1]) - 1 == new Date().getMonth() - 1) {
                                    console.log('this month');
                                    Sub_Title.innerHTML = `before month count`;
                                }
                        }
                    })

                }
            }
        })
        BackToBtn.addEventListener("click", () => {
            back();

        })
    } else if (type == 'DBM') {
        document.querySelector("title").innerHTML = 'Access Management';
        let navSectionBox = document.createElement("div");
        let BackToBtn = document.createElement("div");
        let DetaContentSection = document.createElement("div");
        let DetaContentSectionTable = document.createElement("table");
        let DetaContentSectionTableHeder = document.createElement('thead');
        let DetaContentSectionTableBody = document.createElement('tbody');
        let DetaContentSectionTH0 = document.createElement('th');
        let DetaContentSectionTH1 = document.createElement('th');
        let DetaContentSectionTH2 = document.createElement('th');

        BackToBtn.innerHTML = '<i class="fa-solid fa-angle-left"></i> Back';

        DetaContentSectionTH0.innerHTML = "Type"
        DetaContentSectionTH1.innerHTML = "Permiton Users"
        DetaContentSectionTH2.innerHTML = "Access"

        navSectionBox.classList.add("navsectioin")
        navSectionBox.classList.add("flex")
        BackToBtn.classList.add("BackBtn")
        BackToBtn.classList.add("btnPrimary")
        BackToBtn.classList.add("pointer")
        DetaContentSection.classList.add("detaEnterSection")

        {
            for (let index = 0; index < 10; index++) {
                let DETAROW = document.createElement("tr")
                let DETA0 = document.createElement("td")
                let DETA1 = document.createElement("td")
                let DETA2 = document.createElement("td")
                DETA0.innerHTML = "TEST 01"
                DETA1.innerHTML = "TEST 02"
                DETA2.innerHTML = "TEST 03"
                DETAROW.appendChild(DETA0)
                DETAROW.appendChild(DETA1)
                DETAROW.appendChild(DETA2)
                DetaContentSectionTableBody.appendChild(DETAROW)
            }
        }

        appendElement.appendChild(navSectionBox)
        appendElement.appendChild(DetaContentSection)
        DetaContentSection.appendChild(DetaContentSectionTable)
        DetaContentSectionTable.appendChild(DetaContentSectionTableHeder)
        DetaContentSectionTable.appendChild(DetaContentSectionTableBody)
        DetaContentSectionTableHeder.appendChild(DetaContentSectionTH0)
        DetaContentSectionTableHeder.appendChild(DetaContentSectionTH1)
        DetaContentSectionTableHeder.appendChild(DetaContentSectionTH2)
        navSectionBox.appendChild(BackToBtn)

        BackToBtn.addEventListener("click", () => {
            back();

        })
    }
    function back() {
        appendElement.innerHTML = ''
        let box = document.createElement("div");
        appendElement.appendChild(box)
        box.classList.add("root")

        H_And_F();
    }
}

function remind_User(type, message) {
    let RBS = document.createElement("div");
    let PB = document.createElement("div");
    let TS = document.createElement("div");
    let icon = document.createElement("i");
    let RBM = document.createElement("div");
    RBS.classList.add("RemindBox")
    PB.classList.add("Progresbar")
    TS.classList.add("flex")
    TS.classList.add("TextSection")
    RBM.classList.add("RememberMessage")
    icon.classList.add("fa-solid")
    document.querySelector("body").appendChild(RBS);
    RBS.appendChild(TS);
    RBS.appendChild(PB);
    TS.appendChild(icon);
    TS.appendChild(RBM);
    RBM.innerHTML = message;
    if (type == 's') {
        PB.style.background = 'yellowgreen';
        icon.classList.add("fa-diagram-successor");

    } if (type == 'e') {
        PB.style.background = 'red';
        icon.classList.add("fa-triangle-exclamation");
    } if (type == 'te') {
        PB.style.background = 'blue';
        icon.classList.add("fa-warning");

    }
    if (type == 'de') {
        PB.style.background = 'purple';
        icon.classList.add("fa-server");
    }
    if (type == 'u') {
        PB.style.background = 'yellow';
        icon.classList.add("fa-spin");
        icon.classList.add("fa-sync");
    }
    setTimeout(() => {
        PB.style.width = "0%"
        RBS.style.right = "10vh"
    }, 200);

    setTimeout(() => {
        RBS.style.right = "-100vh"
    }, 1300);
    setTimeout(() => {
        RBS.remove();
        manageErrors();
    }, 1400);
    console.log("Remember User");
    manageErrors();

}
function manageErrors() {
    let Top = 5;
    document.querySelectorAll(".RemindBox").forEach(element => {
        element.style.top = `${Top}vh`;
        Top += 7;
    });
}

window.addEventListener("online", () => {
    console.log("online");
})
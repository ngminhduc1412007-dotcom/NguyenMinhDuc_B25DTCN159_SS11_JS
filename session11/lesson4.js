const devices = [
    {
        id: 1,
        name: "Den phong ngu",
        power: 20,
        isOn: false,
        connected: true
    },
    {
        id: 2,
        name: "May pha ca phe",
        power: 1000,
        isOn: false,
        connected: true
    },
    {
        id: 3,
        name: "Dieu hoa",
        power: 2000,
        isOn: true,
        connected: true
    },
    {
        id: 4,
        name: "Tivi",
        power: 150,
        isOn: true,
        connected: true
    }
];

const MAX_POWER = 3000;

function createDevice(list, dev) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].id === dev.id) {
            console.log("Thiet bi da ton tai!");
            return false;
        }
    }

    if (dev.power === undefined || dev.power <= 0) {
        console.log("Cong suat khong hop le!");
        return false;
    }

    list.push(dev);
    console.log("Them thiet bi thanh cong!");
    return true;
}

function calculateEnergy(list) {
    let totalPower = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i].isOn && list[i].connected) {
            totalPower = totalPower + list[i].power;
        }
    }
    console.log("Tong cong suat:", totalPower, "W");
    return totalPower;
}

function checkSafety(list) {
    let totalPower = calculateEnergy(list);
    if (totalPower > MAX_POWER) {
        console.log("CANH BAO: Qua tai cong suat!");

        for (let i = 0; i < list.length; i++) {
            if (list[i].isOn && list[i].power >= 1000) {
                list[i].isOn = false;
                console.log("Da ngat:", list[i].name);
            }
        }
    }

    for (let j = 0; j < list.length; j++) {
        if (!list[j].connected && list[j].isOn) {
            list[j].isOn = false;
            console.log("Ngat thiet bi loi:", list[j].name);
        }
    }
}

function triggerScene(list, sceneName) {
    if (sceneName === "GoodMorning") {
        for (let i = 0; i < list.length; i++) {
            if (list[i].name === "Den phong ngu" || list[i].name === "May pha ca phe") {
                if (list[i].connected) {
                    list[i].isOn = true;
                }
            }
        }
    } else if (sceneName === "LeaveHome") {
        for (let j = 0; j < list.length; j++) {
            if (list[j].power >= 1000 || list[j].name === "Den phong ngu") {
                list[j].isOn = false;
            }
        }
    } else if (sceneName === "SleepMode") {
        for (let k = 0; k < list.length; k++) {
            if (list[k].name === "Den phong ngu" || list[k].name === "Tivi" || list[k].name === "May pha ca phe") {
                list[k].isOn = false;
            }
        }
    } else {
        console.log("Ngu canh khong ton tai!");
        return false;
    }
    checkSafety(list);
    console.log("Da kich hoat ngu canh:", sceneName);
    return true;
}

function printReport(list) {
    console.log("===== BAO CAO SMART HOME =====");

    for (let i = 0; i < list.length; i++) {
        console.log(
            "Ten:", list[i].name,
            "| Trang thai:", list[i].isOn ? "ON" : "OFF",
            "| Cong suat:", list[i].power, "W",
            "| Ket noi:", list[i].connected ? "OK" : "ERROR"
        );
    }
    calculateEnergy(list);
}

console.log("===== GOOD MORNING =====");
triggerScene(devices, "GoodMorning");

console.log("===== LEAVE HOME =====");
triggerScene(devices, "LeaveHome");

console.log("===== BAO CAO CUOI =====");
printReport(devices);
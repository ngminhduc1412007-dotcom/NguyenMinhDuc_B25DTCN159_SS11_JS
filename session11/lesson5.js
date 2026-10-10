let devices = [
    {
        id: "DEV01",
        name: "Dieu hoa",
        power: 1500,
        isActive: true
    },
    {
        id: "DEV02",
        name: "Quat",
        power: 60,
        isActive: true
    },
    {
        id: "DEV03",
        name: "Den",
        power: 40,
        isActive: true
    }
];

const findDeviceById = (list, id) => {
    for (let i = 0; i < list.length; i++) {
        if (list[i].id === id) {
            return list[i];
        }
    }
    return null;
};

const updateDeviceState = (list, id, updates) => {
    let device = findDeviceById(list, id);
    if (device === null) {
        console.log("Khong tim thay thiet bi:", id);
        return false;
    }

    if (updates.isActive !== undefined) {
        device.isActive = updates.isActive;
    }

    if (updates.power !== undefined) {
        if (updates.power < 0) {
            console.log("Cong suat khong hop le!");
            return false;
        }
        device.power = updates.power;
    }
    console.log("Cap nhat thanh cong:", device.name);
    return true;
};

const calculateActivePower = (list) => {
    let totalPower = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i].isActive === true) {
            totalPower = totalPower + list[i].power;
        }
    }
    return totalPower;
};

const printDevices = (list) => {
    for (let i = 0; i < list.length; i++) {
        console.log(
            list[i].id,
            "| Ten:", list[i].name,
            "| Cong suat:", list[i].power + "W",
            "| Trang thai:", list[i].isActive
        );
    }
};

console.log("===== TRUOC KHI CAP NHAT =====");
printDevices(devices);
console.log(
    "Tong cong suat:",
    calculateActivePower(devices),
    "W"
);

updateDeviceState(devices, "DEV01", {isActive: false});
updateDeviceState(devices, "DEV03", {power: 0});
console.log("===== SAU KHI CAP NHAT =====");
printDevices(devices);
console.log(
    "Tong cong suat:",
    calculateActivePower(devices),
    "W"
);
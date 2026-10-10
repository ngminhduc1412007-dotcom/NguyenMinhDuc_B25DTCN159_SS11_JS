const isValidDevice = (device) => {
  return (device &&
    typeof device.name === 'string' && device.name.trim() !== '' &&
    typeof device.room === 'string' && device.room.trim() !== '' &&
    typeof device.powerWatts === 'number' && device.powerWatts > 0
  );
};

const createDevice = (list, newDev) => {
  if (!isValidDevice(newDev)) {
    console.log(`Du lieu khong hop le`);
    return false;
  }
  
  const nextIdNum = list.length > 0 ? parseInt(list[list.length - 1].id.replace('DEV_', '')) + 1 : 1;
  const newId = `DEV_${String(nextIdNum).padStart(3, '0')}`;

  const deviceToAdd = {
    id: newId,
    name: newDev.name,
    room: newDev.room,
    powerWatts: newDev.powerWatts,
    isActive: newDev.isActive !== undefined ? newDev.isActive : false
  };

  list.push(deviceToAdd);
  console.log(`Da them thiet bi `, deviceToAdd);
  return true;
};

const readDevicesByRoom = (list, roomName) => {
  const result = list.filter(device => device.room.toLowerCase() === roomName.toLowerCase());
  return result;
};

const updateDevice = (list, id, updatedData) => {
  const targetDevice = list.find(device => device.id === id);
  if (!targetDevice) {
    console.log(`Khong tim thay thiet bi ma ${id}!`);
    return false;
  }

  if (updatedData.name !== undefined && updatedData.name.trim() !== '') {
    targetDevice.name = updatedData.name;
  }
  if (updatedData.room !== undefined && updatedData.room.trim() !== '') {
    targetDevice.room = updatedData.room;
  }
  if (updatedData.powerWatts !== undefined && updatedData.powerWatts >= 0) {
    targetDevice.powerWatts = updatedData.powerWatts;
  }
  if (updatedData.isActive !== undefined) {
    targetDevice.isActive = updatedData.isActive;
  }

  console.log(`Da cap nhat thiet bi ${id}:`, targetDevice);
  return true;
};

const deleteDevice = (list, id) => {
  const index = list.findIndex(device => device.id === id);
  if (index === -1) {
    console.log(`Khong tim thay thiet bi ma ${id}`);
    return false;
  }

  const removed = list.splice(index, 1);
  console.log(`Xoa thiet bi `, removed[0]);
  return true;
};

const smartHomeDevices = [];

console.log("--- 1. KIỂM THỬ THÊM THIẾT BỊ ---");
createDevice(smartHomeDevices, { name: "Đèn phòng khách", room: "Phòng khách", powerWatts: 15, isActive: true });
createDevice(smartHomeDevices, { name: "Điều hòa", room: "Phòng ngủ", powerWatts: 1200 });
createDevice(smartHomeDevices, { name: "Quạt treo tường", room: "Phòng khách", powerWatts: 45 });

console.log("--- 2. XEM DANH SÁCH THEO PHÒNG (Phòng khách) ---");
console.log(readDevicesByRoom(smartHomeDevices, "Phòng khách"));

console.log("--- 3. CẬP NHẬT AN TOÀN (Test lỗi Falsy: Tắt đèn isActive = false) ---");
updateDevice(smartHomeDevices, "DEV_001", { isActive: false, powerWatts: 0 });

console.log("--- 4. XÓA THIẾT BỊ (DEV_003) ---");
deleteDevice(smartHomeDevices, "DEV_003");

console.log("--- 5. DANH SÁCH THIẾT BỊ CUỐI CÙNG ---");
console.log(smartHomeDevices);
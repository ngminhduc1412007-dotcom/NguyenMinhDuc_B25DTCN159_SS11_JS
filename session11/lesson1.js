const updateDevice = (devices, targetId, updatedData) => {
  const targetDevice = findDeviceById(devices, targetId);
  if (targetDevice === null) return false;

  // Kiểm tra thuộc tính name trước khi cập nhật
  if (updatedData.name !== undefined) {
    targetDevice.name = updatedData.name;
  }

  // Sử dụng !== undefined để xử lý giá trị fasle
  if (updatedData.isActive !== undefined) {
    targetDevice.isActive = updatedData.isActive;
  }

  // Sử dụng !== undefined để xử lý giá trị false
  if (updatedData.powerWatts !== undefined) {
    targetDevice.powerWatts = updatedData.powerWatts;
  }

  return true;
};
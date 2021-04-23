import EquipmentUpgrade from "./EquipmentUpgrade";
function upgradePeople(type) {
    if (type === 'keyboard') {
        return new EquipmentUpgrade(1, 5);
    } else if (type === 'monitor') {
        return new EquipmentUpgrade(3, 10);
    }
}

const emailDarseConfig = { serverId: 4127, active: true };

const emailDarseHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_4127() {
    return emailDarseConfig.active ? "OK" : "ERR";
}

console.log("Module emailDarse loaded successfully.");
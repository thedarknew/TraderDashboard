///// Get Crypto Prices - START /////


// Get BTC Price - START //
let BTCws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
let BTCPriceElement = document.getElementById('BTCPriceElement');
let lastBTCPrice = null;


BTCws.onmessage = (event) => {
    let BTCPriceObject = JSON.parse(event.data);
    let price = parseFloat(BTCPriceObject.p).toFixed(2);

    BTCPriceElement.innerText = price;

    BTCPriceElement.style.color = !lastBTCPrice || lastBTCPrice === price ? 'black' : price > lastETHPrice ? 'green' : 'red';

    lastBTCPrice = price
}
// Get BTC Price - END //

// Get ETH Price - START //
let ETHws = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade');
let ETHPriceElement = document.getElementById('ETHPriceElement');
let lastETHPrice = null;


ETHws.onmessage = (event) => {
    let ETHPriceObject = JSON.parse(event.data);
    let price = parseFloat(ETHPriceObject.p).toFixed(2);

    ETHPriceElement.innerText = price;

    ETHPriceElement.style.color = !lastETHPrice || lastETHPrice === price ? 'black' : price > lastETHPrice ? 'green' : 'red';

    lastETHPrice = price
}
// Get ETH Price - END //

// Get BNB Price - START //
let BNBws = new WebSocket('wss://stream.binance.com:9443/ws/bnbusdt@trade');
let BNBPriceElement = document.getElementById('BNBPriceElement');
let lastBNBPrice = null;


BNBws.onmessage = (event) => {
    let BNBPriceObject = JSON.parse(event.data);
    let price = parseFloat(BNBPriceObject.p).toFixed(2);

    BNBPriceElement.innerText = price;

    BNBPriceElement.style.color = !lastBNBPrice || lastBNBPrice === price ? 'black' : price > lastETHPrice ? 'green' : 'red';

    lastBNBPrice = price
}
// Get BNB Price - END //

// Get SOL Price - START //
let SOLws = new WebSocket('wss://stream.binance.com:9443/ws/solusdt@trade');
let SOLPriceElement = document.getElementById('SOLPriceElement');
let lastSOLPrice = null;


SOLws.onmessage = (event) => {
    let SOLPriceObject = JSON.parse(event.data);
    let price = parseFloat(SOLPriceObject.p).toFixed(2);

    SOLPriceElement.innerText = price;

    SOLPriceElement.style.color = !lastSOLPrice || lastSOLPrice === price ? 'black' : price > lastETHPrice ? 'green' : 'red';

    lastSOLPrice = price   
}
// Get SOL Price - END //

// Get XMR Price - START //
let XMRws = new WebSocket('wss://stream.binance.com:9443/ws/xmrusdt@trade');
let XMRPriceElement = document.getElementById('XMRPriceElement');
let lastXMRPrice = null;


XMRws.onmessage = (event) => {
    let XMRPriceObject = JSON.parse(event.data);
    let price = parseFloat(XMRPriceObject.p).toFixed(2);

    XMRPriceElement.innerText = price;

    XMRPriceElement.style.color = !lastXMRPrice || lastXMRPrice === price ? 'black' : price > lastETHPrice ? 'green' : 'red';

    lastXMRPrice = price   
}
// Get XMR Price - END //


///// Get Crypto Prices - END ///// 




// Make the Crypto Prices Div draggable
const CryptoPricesDiv = document.querySelector(".CryptoPricesDiv"),
header = CryptoPricesDiv.querySelector("header");

function onDrag({movementX, movementY}) {
    let getStyle = window.getComputedStyle(CryptoPricesDiv);
    let left = parseInt(getStyle.left);
    let top = parseInt(getStyle.top);
    CryptoPricesDiv.style.left = `${left + movementX}px`;
    CryptoPricesDiv.style.top = `${top + movementY}px`;
}

header.addEventListener("mousedown", () => {
    header.classList.add("active");
    header.addEventListener("mousemove", onDrag);
});

document.addEventListener("mouseup", () => {
    header.classList.remove("active");
    header.removeEventListener("mousemove", onDrag);
});
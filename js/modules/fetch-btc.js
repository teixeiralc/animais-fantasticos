export default function initFetchBitcoin() {}

async function fetchBTC() {
  try {
    const btcResponse = fetch("https://blockchain.info/ticker");
    const btcJSON = await (await btcResponse).json();
    const btcBRLSell = btcJSON.BRL.sell;

    const btcPreco = document.querySelector(".btc-preco");
    btcPreco.innerText = (1000 / btcBRLSell).toFixed(4);
  } catch (erro) {
    console.log(Error(erro));
  }
}

fetchBTC();

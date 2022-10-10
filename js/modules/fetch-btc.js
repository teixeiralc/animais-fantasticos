export default async function initFetchBitcoin(url, target) {
  try {
    const btcResponse = fetch(url);
    const btcJSON = await (await btcResponse).json();
    const btcBRLSell = btcJSON.BRL.sell;

    const btcPreco = document.querySelector(target);
    btcPreco.innerText = (1000 / btcBRLSell).toFixed(4);
  } catch (erro) {
    console.log(Error(erro));
  }
}

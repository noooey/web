import React, { useState, useEffect } from 'react';

function Coin() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [amount, setAmount] = useState(0);
    const [selected, setSelected] = useState(38486.804909584);
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then((response) => response.json())
        .then((json) => {
            setCoins(json);
            setLoading(false);})
    }, [])
    const onChange = (e) => {
        setAmount(e.target.value);
    }
    const handleOption = (e) => {
        setSelected(e.target.value);
    }
    return(
        <>
            <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
            {loading ? (<strong>Loading...</strong>) : (<select onChange={handleOption}>
                {coins.map(coin => <option key={coin.id} value={coin.quotes.USD.price}>{coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD</option>)}
            </select>)}
            <div>
                <input value={amount} type="number" placeholder='how much money?' onChange={onChange}></input>
                <br />You can get {amount !== 0 ? selected / amount : null}
            </div>
        </>
    )
}

export default Coin;
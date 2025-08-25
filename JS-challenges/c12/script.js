function Click() {
  let prevPrice = window
    .prompt("What was the previous price of the product?")
    // prevent from future NaN errors
    .replace(/,/g, "");
  let currentPrice = window
    .prompt("What is the current price of the product?")
    .replace(/,/g, "");
  const res = document.getElementById("res");

  if (prevPrice === null || currentPrice === null) {
    // handle cancel
    res.innerHTML = "You canceled the test.";
    return;
  }

  if (prevPrice.trim() === "" || currentPrice.trim() === "") {
    // handle empty input
    res.innerHTML =
      "Please enter a valid number (e.g., <strong>20</strong> or <strong>20.00</strong>)";
    return;
  }

  currentPrice = Number(currentPrice.trim());
  prevPrice = Number(prevPrice.trim());

  if (currentPrice > prevPrice) {
    let priceChange = (currentPrice - prevPrice).toLocaleString(undefined, {
      style: "currency",
      currency: "USD",
    });
    let perc = ((currentPrice - prevPrice) / prevPrice).toLocaleString(
      // calculate the percentage
      undefined,
      {
        style: "percent",
        maximumFractionDigits: 2,
      }
    );
    currentPrice = currentPrice.toLocaleString(undefined, {
      style: "currency",
      currency: "USD",
    });
    prevPrice = prevPrice.toLocaleString(undefined, {
      style: "currency",
      currency: "USD",
    });
    res.innerHTML = `
        <h1>Analyzing the informed values...</h1>
        <p>The product used to cost <strong>${prevPrice}</strong> and now it costs <strong>${currentPrice}</strong></p>
        <p>Today the product is more expensive.</p>
        <p>The price increased by <strong>${priceChange}</strong> compared to the previous price.</p>
        <p>An increase of <strong>${perc}</strong>.</p>
    `;
  } else {
    let priceChange = (prevPrice - currentPrice).toLocaleString(undefined, {
      style: "currency",
      currency: "USD",
    });
    let perc = (((currentPrice - prevPrice) / prevPrice) * -1).toLocaleString(
      // calculate the percentage and turns it to positive value
      undefined,
      {
        style: "percent",
        maximumFractionDigits: 2,
      }
    );
    currentPrice = currentPrice.toLocaleString(undefined, {
      style: "currency",
      currency: "USD",
    });
    prevPrice = prevPrice.toLocaleString(undefined, {
      style: "currency",
      currency: "USD",
    });
    res.innerHTML = `
        <h1>Analyzing the informed values...</h1>
        <p>The product used to cost <strong>${prevPrice}</strong> and now it costs <strong>${currentPrice}</strong></p>
        <p>Today the product is cheaper.</p>
        <p>The price decreased by <strong>${priceChange}</strong> compared to the previous price.</p>
        <p>A decrease of <strong>${perc}</strong>.</p>
    `;
  }
}

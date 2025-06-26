
const productData = {
  "cell phone": {
    name: "Samsung S25 Ultra",
    price: "₹1,29,999",
  },
  "bottle": {
    name: "Smart Water Bottle",
    price: "₹400",
  },
  "laptop": {
    name: "Book",
    price: "₹150",
  },
};

export const renderPredictions = (predictions, ctx, setProduct) => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  const font = "16px sans-serif";
  ctx.font = font;
  ctx.textBaseline = "top";

  let detectedProduct = null;

  predictions.forEach((prediction) => {
    const [x, y, width, height] = prediction["bbox"];
    const productClass = prediction.class;
    const isProduct = Object.keys(productData).includes(productClass);

    // Draw bounding box
    ctx.strokeStyle = isProduct ? "#00FF00" : "#00FFFF";
    ctx.lineWidth = 4;
    ctx.strokeRect(x, y, width, height);

    // Fill for products
    ctx.fillStyle = isProduct ? "rgba(0, 255, 0, 0.2)" : "rgba(0, 255, 255, 0.2)";
    ctx.fillRect(x, y, width, height);

    // Label background
    ctx.fillStyle = isProduct ? "#00FF00" : "#00FFFF";
    const textWidth = ctx.measureText(productClass).width;
    const textHeight = parseInt(font, 10);
    ctx.fillRect(x, y, textWidth + 4, textHeight + 4);

    // Text
    ctx.fillStyle = "#000000";
    ctx.fillText(productClass, x, y);

    if (isProduct && !detectedProduct) {
      detectedProduct = productData[productClass];
    }
  });

  // Update detected product info
  if (detectedProduct) {
    setProduct(detectedProduct);

  }
};


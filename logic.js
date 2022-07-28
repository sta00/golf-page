let amount = 1;
let currentSizeId;
let imageIndex = 0;

window.onload = function () {
    const imageElm = document.getElementById("imageSection");
    imageElm.addEventListener('swipeleft', prevImage);
    imageElm.addEventListener('swiperight', nextImage);
}

const handleFavoriteClick = () => {
    const heartElm = document.getElementById("heartIconI");
    const isAlreadyClicked = heartElm.className === "fa fa-heart-o"
    if (isAlreadyClicked) {
        document.getElementById("heartIconI").className = "fa fa-heart redColor";
    } else {
        document.getElementById("heartIconI").className = "fa fa-heart-o";
    }
}
const updateAmountLabel = () => document.getElementById("amount").innerText = amount.toString();

const decrementAmount = () => {
    if (amount > 1) {
        amount--
        updateAmountLabel()
    }
}

const incrementAmount = () => {
    if (amount < 10) {
        amount++;
        updateAmountLabel()
    }
}

const changeItemSize = (id, price) => {
    const sizeElm = document.getElementById(id);
    sizeElm.classList.add("lightGreyBackground");
    if (currentSizeId) {
        const currentSizeElm = document.getElementById(currentSizeId);
        currentSizeElm.classList.remove("lightGreyBackground")
    }
    currentSizeId = id;
    updatePriceLabel(price);
    updateItemImages(id);
}

const updatePriceLabel = (price) => {
    const priceLabel = document.getElementById("itemPrice");
    priceLabel.innerText = " ₪" + price;
}

const updateItemImages = (id) => {
    for (let i = 1; i < 7; i++) {
        const imageElm = document.getElementById(`itemImage${i}`);
        imageElm.src = sizeList[id][i - 1];
    }
}

const nextImage = () => {
    if (sizeList[currentSizeId || "size1"].length - 1 > imageIndex) {
        const mainImage = document.getElementById("itemImage1");
        mainImage.src = sizeList[currentSizeId || "size1"][imageIndex + 1];
        imageIndex++;
    }
}

const prevImage = () => {
    if (imageIndex >= 1) {
        const mainImage = document.getElementById("itemImage1");
        mainImage.src = sizeList[currentSizeId][imageIndex - 1];
        imageIndex--
    }
}

const sizeList = {
    size1: [
        "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/6/5668029_101_a-16437966571932650.jpg",
        "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/6/5668029_101_a-16437966571932650.jpg",
        "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/6/5668029_101_a-16437966571932650.jpg",
        "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/6/5668029_101_a-16437966571932650.jpg",
        "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/6/5668029_101_a-16437966571932650.jpg",
        "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/6/5668029_101_a-16437966571932650.jpg",
    ],
    size2: [
        "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/6/5667906_101_a-16437966322419361.jpg",
        "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/6/5667906_101_b-16437966333295780.jpg",
        "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/6/5667906_101_c-16437966332873459.jpg",
        "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/6/5667906_101_c-16437966332873459.jpg",
        "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/6/5667906_101_e-16437966353462080.jpg",
        "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/6/5667906_101_f-16437966373549324.jpg",
    ],
    size3: [
        "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/6/5668011_144_a-16479533702085581.jpg",
        "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/6/5668011_144_a-16479533702085581.jpg",
        "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/6/5668011_144_a-16479533702085581.jpg",
        "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/6/5668011_144_a-16479533702085581.jpg",
        "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/6/5668011_144_a-16479533702085581.jpg",
        "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/6/5668011_144_a-16479533702085581.jpg",
    ],
    size4: [
        "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/1/5169104_170_a-16479533562513055.jpg",
        "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/1/5169104_170_a-16479533562513055.jpg",
        "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/1/5169104_170_a-16479533562513055.jpg",
        "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/1/5169104_170_a-16479533562513055.jpg",
        "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/1/5169104_170_a-16479533562513055.jpg",
        "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/1/5169104_170_a-16479533562513055.jpg",
    ],
    size5: [
        "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/1/5169100_133_a-16498401722717037.jpg",
        "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/1/5169100_133_a-16498401722717037.jpg",
        "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/1/5169100_133_a-16498401722717037.jpg",
        "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/1/5169100_133_a-16498401722717037.jpg",
        "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/1/5169100_133_a-16498401722717037.jpg",
        "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/5/1/5169100_133_a-16498401722717037.jpg",
    ],
    size6: [
        "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/4/5/4569105_133_a-1625728644852887.jpg",
        "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/4/5/4569105_133_a-1625728644852887.jpg",
        "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/4/5/4569105_133_a-1625728644852887.jpg",
        "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/4/5/4569105_133_a-1625728644852887.jpg",
        "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/4/5/4569105_133_a-1625728644852887.jpg",
        "https://www.golfco.co.il/pub/media/catalog/product/cache/a1ead2c2961e2ce13911c89cbb3a882f/4/5/4569105_133_a-1625728644852887.jpg",
    ]
}


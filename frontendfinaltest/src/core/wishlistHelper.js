export const addItemWL = (item, next) => {
    let wishlist = [];
    if (typeof window !== "undefined") {
        if (localStorage.getItem("wishlist")) {
            wishlist = JSON.parse(localStorage.getItem("wishlist"));
            
        }
        wishlist.push({
            ...item,
            count: 1
        });

     

        wishlist = Array.from(new Set(wishlist.map(p => p._id))).map(id => {
            return wishlist.find(p => p._id === id);
        });

        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        next();
    }
};

export const itemTotalWL = () => {
    if (typeof window !== "undefined") {
        if (localStorage.getItem("wishlist")) {
            return JSON.parse(localStorage.getItem("wishlist")).length;
        }
    }
    return 0;
};

export const getWishList = () => {
    if (typeof window !== "undefined") {
        if (localStorage.getItem("wishlist")) {
            return JSON.parse(localStorage.getItem("wishlist"));
        }
    }
    return [];
};

export const updateItemWL = (productId, count) => {
    let wishlist = [];
    if (typeof window !== "undefined") {
        if (localStorage.getItem("wishlist")) {
            wishlist = JSON.parse(localStorage.getItem("wishlist"));
        }

        wishlist.map((product, i) => {
            if (product._id === productId) {
                wishlist[i].count = count;
            }
        });

        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
};

export const removeItemWL = productId => {
    let wishlist = [];
    if (typeof window !== "undefined") {
        if (localStorage.getItem("wishlist")) {
            wishlist = JSON.parse(localStorage.getItem("wishlist"));
        }

        wishlist.map((product, i) => {
            if (product._id === productId) {
                wishlist.splice(i, 1);
            }
        });

        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
    return wishlist;
};

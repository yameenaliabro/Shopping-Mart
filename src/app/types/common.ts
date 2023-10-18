export type getCarousel = {
    carousel: [
        {
            heading: string;
            title: string;
            image: string;
            image2: string;
        },
    ];
};

export type CartItem = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    quantity?: number;
};

export type CartState = {
    length: string | undefined;
    item: CartItem[];
    totalItems: number;
    totalPrice: number;
};

export type CartAction =
    | { type: "ADD_TO_CART"; payload: CartItem & { price: number } }
    | { type: "REMOVE_CART"; payload: CartItem & { price: number } }
    | { type: "CLEAR_CART" };

export type CartContextProp = {
    cart: CartState;
    dispatch: React.Dispatch<CartAction>;
};

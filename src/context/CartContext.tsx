import {
  createContext,
  type PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { products, shippingCost, type Product } from "../data/products";

type Cart = Record<string, number>;

export type CartItem = {
  product: Product;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  subtotal: number;
  total: number;
  totalQuantity: number;
  addItem: (productId: string) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
};

const storageKey = "bluecase-cart";

export const CartContext = createContext<CartContextValue | null>(null);

function readInitialCart(): Cart {
  if (typeof window === "undefined") {
    return {};
  }

  try {
    const savedCart = window.localStorage.getItem(storageKey);
    return savedCart ? (JSON.parse(savedCart) as Cart) : {};
  } catch {
    return {};
  }
}

export function CartProvider({ children }: PropsWithChildren) {
  const [cart, setCart] = useState<Cart>(readInitialCart);

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(cart));
  }, [cart]);

  const addItem = useCallback((productId: string) => {
    setCart((currentCart) => ({
      ...currentCart,
      [productId]: (currentCart[productId] ?? 0) + 1,
    }));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    setCart((currentCart) => {
      const nextCart = { ...currentCart };

      if (quantity <= 0) {
        delete nextCart[productId];
      } else {
        nextCart[productId] = quantity;
      }

      return nextCart;
    });
  }, []);

  const removeItem = useCallback((productId: string) => {
    setCart((currentCart) => {
      const nextCart = { ...currentCart };
      delete nextCart[productId];
      return nextCart;
    });
  }, []);

  const clearCart = useCallback(() => {
    setCart({});
  }, []);

  const value = useMemo<CartContextValue>(() => {
    const items = Object.entries(cart)
      .map(([productId, quantity]) => {
        const product = products.find((item) => item.id === productId);
        return product ? { product, quantity } : null;
      })
      .filter((item): item is CartItem => Boolean(item));

    const subtotal = items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0,
    );
    const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
    const total = subtotal > 0 ? subtotal + shippingCost : 0;

    return {
      items,
      subtotal,
      total,
      totalQuantity,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
    };
  }, [addItem, cart, clearCart, removeItem, updateQuantity]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

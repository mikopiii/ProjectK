import { Link } from "wouter";
import { ArrowLeft, Trash2, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cartContext";

export default function Cart() {
  const { items, removeFromCart, updateQuantity } = useCart();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-background min-h-screen pb-12">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link href="/">
          <Button variant="ghost" size="icon" className="mb-6 hover:bg-primary/10 hover:text-primary" data-testid="button-back">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>

        <div className="bg-card rounded-xl shadow-sm border border-border overflow-hidden">
          {/* Header */}
          <div className="bg-primary/10 p-6 md:p-8 border-b border-border">
            <h1 className="font-heading font-bold text-3xl md:text-4xl text-primary">Shopping Cart</h1>
            <p className="text-muted-foreground mt-2">{items.length} item(s) in cart</p>
          </div>

          {/* Cart Content */}
          <div className="p-6 md:p-8">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg mb-6">Your cart is empty</p>
                <Link href="/">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            ) : (
              <>
                {/* Cart Items */}
                <div className="space-y-4 mb-8">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 p-4 bg-input rounded-lg border border-border items-start"
                      data-testid={`cart-item-${item.id}`}
                    >
                      {/* Image */}
                      <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border border-border bg-background">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-foreground text-sm md:text-base line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="text-primary font-bold text-base md:text-lg mt-1">
                          ₱{item.price.toLocaleString()}
                        </p>
                      </div>

                      {/* Quantity & Actions */}
                      <div className="flex flex-col gap-3 items-end w-full md:w-auto">
                        <div className="flex gap-2 w-full md:w-auto justify-between md:justify-end">
                          {/* Quantity Selector */}
                          <div className="flex border border-border rounded-md bg-background">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="px-2 py-1 hover:bg-input text-muted-foreground"
                              data-testid={`button-decrease-quantity-${item.id}`}
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="px-3 py-1 text-sm font-medium text-foreground">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-2 py-1 hover:bg-input text-muted-foreground"
                              data-testid={`button-increase-quantity-${item.id}`}
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          {/* Remove Button */}
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="px-3 py-1 bg-destructive/10 hover:bg-destructive/20 text-destructive rounded-md transition-colors flex items-center gap-1"
                            data-testid={`button-remove-${item.id}`}
                          >
                            <Trash2 className="w-4 h-4" />
                            <span className="text-xs font-semibold hidden sm:inline">Remove</span>
                          </button>
                        </div>

                        {/* Subtotal */}
                        <p className="text-foreground font-bold text-sm w-full text-right">
                          ₱{(item.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Checkout Section */}
                <div className="border-t border-border pt-6">
                  <div className="flex justify-between items-center mb-6 p-4 bg-input rounded-lg">
                    <span className="font-bold text-lg text-foreground">Total:</span>
                    <span className="text-2xl font-bold text-primary">₱{total.toLocaleString()}</span>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-auto py-3 text-base" data-testid="button-checkout">
                    Proceed to Checkout
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

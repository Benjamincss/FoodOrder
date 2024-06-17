<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Support\Str;
use App\Models\Cart;
use App\Models\CartItem;


class CartController extends Controller
{


    public function addToCart(Request $request, $orderId)
    {
        // POST /orders/{order}/products

        /** @var Cart $cart */

        //$sessionId = $request->session()->getId();
        //$cart = Cart::firstOrCreate(['session_id' => $sessionId]);


        $order = Product::find($orderId);
        if (!$order) {
            return response()->json(['message' => 'Order not found']);
        }
  $productsFromFront = $request->json();


        //$quantity = $request->input('quantity'); // Get quantity from the request
        // Fetch products in DB to ensure that frontend send available products

        foreach ($productsFromFront as $product) {
            $order->products()->attach($product['id'], [
                'quantity' => $product['quantity'],
                //'price_in_cents' => $order->price_in_cents
            ]);
        }






        return response()->json(['message' => 'Product added to cart successfully']);
    }

    public function getCart(Request $request)
    {
        // Utilisez l'identifiant de session au lieu de l'utilisateur
        dd(session('id'));
        $sessionId = $request->session()->getId();

        // Récupérer le panier de l'utilisateur, ou en créer un nouveau s'il n'en existe pas
        $cart = Cart::firstOrCreate(['session_id' => $sessionId]);

        // Récupérer tous les éléments du panier avec les détails du produit
        $cartItems = CartItem::where('cart_id', $cart->id)->with('product')->get();

        // Ajouter les éléments du panier à l'objet panier
        $cart->items = $cartItems;

        return response()->json($cart);
    }


    public function Getcarttotal(Request $request){
        $userId = $request->user() ? $request->user()->id : null;
        $cart = Cart::firstOrCreate(['user_id' => $userId]);

        $cartItems = CartItem::where('cart_id', $cart->id)->get();

        $total = 0;
        foreach ($cartItems as $item) {
            $total += $item->price_in_cents * $item->quantity;
        }

        return response()->json(['total' => $total]);
    }

    public function removeFromCart(Request $request, $productId)
    {
        $userId = $request->user() ? $request->user()->id : null;
        $cart = Cart::where('user_id', $userId)->first();

        if (!$cart) {
            return response()->json(['message' => 'No cart found for this user']);
        }

        $cartItem = CartItem::where('cart_id', $cart->id)->where('product_id', $productId)->first();

        if (!$cartItem) {
            return response()->json(['message' => 'Product not found in cart']);
        }

        $cartItem->delete();

        return response()->json(['message' => 'Product removed from cart successfully']);
    }
}

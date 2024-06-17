<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request; // Ajoutez cette ligne
use App\Http\Requests\StoreOrderRequest;
use App\Http\Requests\UpdateOrderRequest;
use App\Models\Order;
use App\Models\User;

class OrderController extends Controller
{


    public function getOrdersPerDay()
    {
        $ordersPerDay = Order::getOrdersPerDay();

        return response()->json($ordersPerDay);
    }




    /**
     * Display a listing of the resource.
     */
    public function index()
    {

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {



    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreOrderRequest $request)
    {
;



        $request->validate([

            'status' => 'required',
            'total_amount' => 'required',
            'orderType' => 'required',
            'user_id' => 'required',
            'name' => 'required',


        ]);

        $order = new Order;


        $order->status = $request->status;
        $order->total_amount = $request->total_amount;
        $order->user_id = $request->user_id;
        $order->name = $request->name;
        $order->delivery_address = $request->   orderType;
        $order->save();

    }


    public function  getOrdersWithHighestTotal(){
 $allorder = Order::where('total_amount', '<',100 ) ->where('status', 'finis')->select('name' ,'status', 'user_id', 'total_amount')->with('user')->get();

   return response()->json(
       $allorder
   );

    }






    public function showOrders($userId)
    {
        //$orders = Order::query()->where('user_id', $userId)->get();
        $user = User::with('orders')->findOrFail($userId);
        //$orders = $user->orders;

        return response()->json([
            'orders' => $user->orders
        ]);
    }



    /**
     * Display the specified resource.
     */
    public function show(Order $order)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Order $order)
    {
        $order->status = $request->get('status');
        $order->save();

        return response()->json(['status' => 'success']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Order $order)
    {
        //
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('status');
            $table->foreignIdFor(\App\Models\User::class)->nullable()->constrained();
            $table->decimal('total_amount', 10, 2);
            $table->unsignedBigInteger('payment_id')->nullable();
            $table->string('delivery_address')->nullable();
            $table->boolean('is_delivered')->default(false);
            $table->boolean('is_paid')->default(false);
            $table->boolean('is_cancelled')->default(false);
            $table->boolean('take_away')->default(false);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};

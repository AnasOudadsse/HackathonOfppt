<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('actions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('entreprises_id')->constrained()->onDelete('cascade');
            $table->foreignId('intervenants_id')->constrained()->onDelete('cascade');
            $table->foreignId('etablissements_id')->constrained()->onDelete('cascade');
            $table->dateTime('date_debut_prev');
            $table->dateTime('date_fin_prev');
            $table->float('prix_real');
            $table->dateTime('date_debut_real');
            $table->dateTime('date_fin_real');
            $table->String('exercise');
            $table->integer('nbparticipant');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('actions');
    }
};

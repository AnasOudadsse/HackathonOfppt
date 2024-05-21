<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Etablissement extends Model
{
    use HasFactory;
    public function users(){
        return $this->hasMany(User::class);
    }
    public function plans(){
        return $this->hasMany(Plan::class);
    }
}
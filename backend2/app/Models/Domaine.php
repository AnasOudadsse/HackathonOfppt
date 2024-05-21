<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Domaine extends Model
{
    use HasFactory;
    public function diplomes(){
        return $this->hasMany(Diplome::class);
    }
    public function certificats(){
        return $this->hasMany(Certificats::class);
    }
    
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Intervenant extends Model
{
    use HasFactory;
    public function diplomes(){
        return $this->hasMany(Diplome::class);
    }
    public function certifications(){
        return $this->hasMany(Certification::class);
    }
}

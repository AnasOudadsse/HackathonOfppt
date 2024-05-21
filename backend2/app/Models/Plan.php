<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Plan extends Model
{
    use HasFactory;
    public function theme(){
        return $this->belongsTo(Theme::class);
    }
    public function etablissement(){
        return $this->belongsTo(etablissement::class);
    }
    public function entreprises(){
        return $this->belongsToMany(etablissement::class);
    }
}

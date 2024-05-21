<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Certification extends Model
{
    use HasFactory;
    public function intervenants(){
        return $this->belongsToMany(Intervenant::class);
    }
    public function domaine(){
        return $this->belongsTo(Domaine::class);
    }
}

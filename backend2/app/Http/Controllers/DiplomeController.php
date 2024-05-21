<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Diplome;
use Illuminate\Support\Facades\Validator;

class DiplomeController extends Controller
{
    public function index()
    {
        $diplomes = Diplome::all();
        return response()->json(['diplomes' => $diplomes], 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'domaines_id' => 'required|exists:domaines,id',
            'intitule_diplome' => 'required|max:45',
            'organisme_diplome' => 'required|max:45',
            'type_diplome' => 'required|max:45',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $diplome = Diplome::create($request->all());

        return response()->json(['diplome' => $diplome], 201);
    }

    public function show(Diplome $diplome)
    {
        return response()->json(['diplome' => $diplome], 200);
    }

    public function update(Request $request, Diplome $diplome)
    {
        $validator = Validator::make($request->all(), [
            'domaines_id' => 'exists:domaines,id',
            'intitule_diplome' => 'max:45',
            'organisme_diplome' => 'max:45',
            'type_diplome' => 'max:45',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $diplome->update($request->all());

        return response()->json(['diplome' => $diplome], 200);
    }

    public function destroy(Diplome $diplome)
    {
        $diplome->delete();

        return response()->json(null, 204);
    }
}

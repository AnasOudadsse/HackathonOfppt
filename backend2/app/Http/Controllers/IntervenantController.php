<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Intervenant;
use Illuminate\Support\Facades\Validator;

class IntervenantController extends Controller
{
    public function index()
    {
        $intervenants = Intervenant::all();
        return response()->json(['intervenants' => $intervenants], 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'etablissements_id' => 'required|exists:etablissements,id',
            'users_id' => 'required|exists:users,id',
            'matricule' => 'required|max:45',
            'nom' => 'required|max:45',
            'prenom' => 'required|max:45',
            'datenaissance' => 'required|date',
            'status' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $intervenant = Intervenant::create($request->all());

        return response()->json(['intervenant' => $intervenant], 201);
    }

    public function show(Intervenant $intervenant)
    {
        return response()->json(['intervenant' => $intervenant], 200);
    }

    public function update(Request $request, Intervenant $intervenant)
    {
        $validator = Validator::make($request->all(), [
            'etablissements_id' => 'exists:etablissements,id',
            'users_id' => 'exists:users,id',
            'matricule' => 'max:45',
            'nom' => 'max:45',
            'prenom' => 'max:45',
            'datenaissance' => 'date',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $intervenant->update($request->all());

        return response()->json(['intervenant' => $intervenant], 200);
    }

    public function destroy(Intervenant $intervenant)
    {
        $intervenant->delete();

        return response()->json(null, 204);
    }
}

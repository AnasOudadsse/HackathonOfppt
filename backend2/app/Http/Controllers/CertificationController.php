<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Certification;
use Illuminate\Support\Facades\Validator;

class CertificationController extends Controller
{
    public function index()
    {
        $certifications = Certification::all();
        return response()->json(['certifications' => $certifications], 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'domaines_id' => 'required|exists:domaines,id',
            'intitule_certification' => 'required|max:45',
            'organisme_certification' => 'required|max:45',
            'type_certification' => 'required|max:45',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $certification = Certification::create($request->all());

        return response()->json(['certification' => $certification], 201);
    }

    public function show(Certification $certification)
    {
        return response()->json(['certification' => $certification], 200);
    }

    public function update(Request $request, Certification $certification)
    {
        $validator = Validator::make($request->all(), [
            'domaines_id' => 'exists:domaines,id',
            'intitule_certification' => 'max:45',
            'organisme_certification' => 'max:45',
            'type_certification' => 'max:45',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $certification->update($request->all());

        return response()->json(['certification' => $certification], 200);
    }

    public function destroy(Certification $certification)
    {
        $certification->delete();

        return response()->json(null, 204);
    }
}

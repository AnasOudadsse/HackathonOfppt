<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Theme;
use Illuminate\Support\Facades\Validator;

class ThemeController extends Controller
{
    // Display a listing of the resource.
    public function index()
    {
        $themes = Theme::all();
        return response()->json(['themes' => $themes], 200);
    }

       public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'domaines_id' => 'required|exists:domaines,id',
            'intitule_theme' => 'required|max:255',
            'duree_formation' => 'required|integer',
            'status' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $theme = Theme::create($request->all());

        return response()->json(['theme' => $theme], 201);
    }

        function show(Theme $theme)
            {
                return response()->json(['theme' => $theme], 200);
            }

      public function update(Request $request, Theme $theme)
        {
            $validator = Validator::make($request->all(), [
                'domaines_id' => 'exists:domaines,id',
                'intitule_theme' => 'max:255',
                'duree_formation' => 'integer',
                ]);

            if ($validator->fails()) {
                return response()->json(['error' => $validator->errors()], 400);
            }

            $theme->update($request->all());

            return response()->json(['theme' => $theme], 200);
        }

   
    public function destroy(Theme $theme)
        {
            $theme->delete();

            return response()->json(null, 204);
        }
}

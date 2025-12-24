<?php

use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/articles', function () {
    return response()->json([
        'status' => 'success',
        'articles' => Article::paginate(10)

    ]);
});

Route::post('/articles/{id}', function (Request $request, $id) {
    $article = Article::findOrFail($id);

    $article->update([
        'summary' => $request->summary,
        'sentiment' => $request->sentiment
    ]);

    return response()->json([
        'status' => 'updated',
        'article' => $article
    ]);
});

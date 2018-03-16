<?php

require 'vendor/autoload.php';

$client = new GuzzleHttp\Client(['base_uri' => 'http://localhost:8081']);

$posts = [
	['id' => 0, 'title' => 'Post-1', 'content' => 'Lorem ipsum dolor sit amet'],
	['id' => 1, 'title' => 'Post-2', 'content' => 'Lorem ipsum dolor sit amet 1']
];

$response = $client->get('/blog', [
	'query' => [
		'title' => 'Blog',
		'view' => 'Blog',
		'params' => compact('posts')
	]
]);

echo $response->getBody()->getContents();

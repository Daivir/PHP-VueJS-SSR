<?php

require 'vendor/autoload.php';

$client = new GuzzleHttp\Client(['base_uri' => 'http://localhost:3000']);

$posts = [
	['id' => 0, 'title' => 'Post-1', 'content' => 'Lorem ipsum dolor sit amet'],
	['id' => 1, 'title' => 'Post-2', 'content' => 'Lorem ipsum dolor sit amet 1']
];

$brand = 'Brand';

$response = $client->post('/blog', [
	'query' => [
	    'view' => 'Blog',
	    'host' => $_SERVER['HTTP_HOST'],
		'title' => "$brand | My Articles",
		'params' => compact('posts')
	]
]);

echo $response->getBody()->getContents();

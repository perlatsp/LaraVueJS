<?php

use Faker\Generator as Faker;

$factory->define(\App\Product::class, function (Faker $faker) {
    return [
        'title'=>$faker->sentence,
        'description'=>$faker->paragraph(rand(10,100)),
        'price'=>rand(14,9999),
        'image'=>$faker->imageUrl(1024,860)
    ];
});

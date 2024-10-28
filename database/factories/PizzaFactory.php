<?php

namespace Database\Factories;

use App\Models\Pizza;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Arr;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\pizza>
 */
class PizzaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $toppingChoices = [
            'Extra Chesse',
            'Black Olives',
            'Pepperoni',
            'Sausage',
            'Anchovies',
            'Jalapenios',
            'Onion',
            'Chicken',
            'Ground Beef',
            'Green Peppers',
        ];

        $toppings = [];

        for($i = 1; $i <= rand(1, 4); $i++){
            $toppings[] = Arr::random($toppingChoices);
        }

        $toppings  = array_unique($toppings);


        return [
            'id' => rand(11111, 99999),
            'user_id' => rand(1, 10),
            'size' => Arr::random(['Small', 'Medium', 'Large', 'Extra-Large']),
            'crust' => Arr::random(['Normal','Thin','Garlic']),
            'toppings' => $toppings,
            'status' => Arr::random(['Ordered', 'Prepping', 'Baking', 'Ready']),
        ];
    }
}

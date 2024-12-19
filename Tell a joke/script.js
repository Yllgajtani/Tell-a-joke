const express = require('express');
const cors = require('cors');
const app = express();
const port = 2424;

app.use(cors());


const jokes = [
    {
        joke: "Why don't skeletons fight each other? They don't have the guts.",
        imageUrl: "https://example.com/skeleton.jpg"
    },
    {
        joke: "Why did the scarecrow win an award? Because he was outstanding in his field.",
        imageUrl: "https://example.com/scarecrow.jpg"
    },
    {
        joke: "I'm reading a book on anti-gravity. It's impossible to put down!",
        imageUrl: "https://example.com/anti-gravity.jpg"
    },
    {
        joke: "Why don't eggs tell jokes? Because they'd crack each other up.",
        imageUrl: "https://example.com/eggs.jpg"
    },
    {
        joke: "I told my wife she was drawing her eyebrows too high. She looked surprised.",
        imageUrl: "https://example.com/eyebrows.jpg"
    },
    {
        joke: "What do you call fake spaghetti? An impasta!",
        imageUrl: "https://example.com/impasta.jpg"
    },
    {
        joke: "Why was the math book sad? Because it had too many problems.",
        imageUrl: "https://example.com/mathbook.jpg"
    },
    {
        joke: "I used to play piano by ear, but now I use my hands.",
        imageUrl: "https://example.com/piano.jpg"
    },
    {
        joke: "What did the left eye say to the right eye? Between you and me, something smells.",
        imageUrl: "https://example.com/eyes.jpg"
    },
    {
        joke: "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
        imageUrl: "https://example.com/golfer.jpg"
    },
    {
        joke: "Why do cows have hooves instead of feet? Because they lactose.",
        imageUrl: "https://example.com/cow.jpg"
    },
    {
        joke: "I'm on a seafood diet. I see food and I eat it.",
        imageUrl: "https://example.com/seafood.jpg"
    },
    {
        joke: "I once tried to grab the fog, but I mist.",
        imageUrl: "https://example.com/fog.jpg"
    },
    {
        joke: "Why dont oysters share their pearls? Because theyre shellfish.",
        imageUrl: "https://example.com/oysters.jpg"
    },
    {
        joke: "I told my computer I needed a break, and now it wont stop sending me Kit-Kats.",
        imageUrl: "https://example.com/computer.jpg"
    },
    {
        joke: "Why can't you hear a pterodactyl go to the bathroom? Because the P is silent.",
        imageUrl: "https://imgs.search.brave.com/oNj-2NBhEdnh9mleUFaQN18qHLaaCF6vO7lsBPhaM38/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODY0/MzQ4NTAvcGhvdG8v/bWFyay1zdGVpbmJl/cmctb2YtaW1nLXdh/bGtzLXdpdGgtdGln/ZXItd29vZHMtZHVy/aW5nLWEtcHJhY3Rp/Y2Utcm91bmQtcHJp/b3ItdG8tdGhlLXN0/YXJ0LW9mLXRoZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/LU9HSGhkdGJaU2ZD/X3ZaR0Y3ZEJoQWJU/ZG1rNlJRampZYVZp/ZVhtZVFuRT0"
    },
    {
        joke: "What did the ocean say to the beach? Nothing, it just waved.",
        imageUrl: "https://imgs.search.brave.com/oNj-2NBhEdnh9mleUFaQN18qHLaaCF6vO7lsBPhaM38/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODY0/MzQ4NTAvcGhvdG8v/bWFyay1zdGVpbmJl/cmctb2YtaW1nLXdh/bGtzLXdpdGgtdGln/ZXItd29vZHMtZHVy/aW5nLWEtcHJhY3Rp/Y2Utcm91bmQtcHJp/b3ItdG8tdGhlLXN0/YXJ0LW9mLXRoZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/LU9HSGhkdGJaU2ZD/X3ZaR0Y3ZEJoQWJU/ZG1rNlJRampZYVZp/ZVhtZVFuRT0"
    },
    {
        joke: "I couldn't figure out how to put my seatbelt on, then it clicked.",
        imageUrl: "https://imgs.search.brave.com/oNj-2NBhEdnh9mleUFaQN18qHLaaCF6vO7lsBPhaM38/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODY0/MzQ4NTAvcGhvdG8v/bWFyay1zdGVpbmJl/cmctb2YtaW1nLXdh/bGtzLXdpdGgtdGln/ZXItd29vZHMtZHVy/aW5nLWEtcHJhY3Rp/Y2Utcm91bmQtcHJp/b3ItdG8tdGhlLXN0/YXJ0LW9mLXRoZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/LU9HSGhkdGJaU2ZD/X3ZaR0Y3ZEJoQWJU/ZG1rNlJRampZYVZp/ZVhtZVFuRT0"
    },
    {
        joke: "Why did the tomato turn red? Because it saw the salad dressing!",
        imageUrl: "https://imgs.search.brave.com/oNj-2NBhEdnh9mleUFaQN18qHLaaCF6vO7lsBPhaM38/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODY0/MzQ4NTAvcGhvdG8v/bWFyay1zdGVpbmJl/cmctb2YtaW1nLXdh/bGtzLXdpdGgtdGln/ZXItd29vZHMtZHVy/aW5nLWEtcHJhY3Rp/Y2Utcm91bmQtcHJp/b3ItdG8tdGhlLXN0/YXJ0LW9mLXRoZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/LU9HSGhkdGJaU2ZD/X3ZaR0Y3ZEJoQWJU/ZG1rNlJRampZYVZp/ZVhtZVFuRT0"
    },
    {
        joke: "What do you call cheese that isn't yours? Nacho cheese.",
        imageUrl: "https://imgs.search.brave.com/oNj-2NBhEdnh9mleUFaQN18qHLaaCF6vO7lsBPhaM38/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODY0/MzQ4NTAvcGhvdG8v/bWFyay1zdGVpbmJl/cmctb2YtaW1nLXdh/bGtzLXdpdGgtdGln/ZXItd29vZHMtZHVy/aW5nLWEtcHJhY3Rp/Y2Utcm91bmQtcHJp/b3ItdG8tdGhlLXN0/YXJ0LW9mLXRoZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/LU9HSGhkdGJaU2ZD/X3ZaR0Y3ZEJoQWJU/ZG1rNlJRampZYVZp/ZVhtZVFuRT0"
    }
];


app.get('/joke',(req,res)=>{

const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
res.json({randomJoke})
});

app.listen(port,()=>{
    console.log(`Serveri eshte online ne porten: http://localhost:${port}`);
})
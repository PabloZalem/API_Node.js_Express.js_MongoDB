const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 8000;

app.use(express.json());

mongoose.connect('mongodb+srv://zalempablo:pablo1764@cluster0.qunzx9j.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0')

const Filmes = mongoose.model('Filmes',
    {
        title: String,
        description: String,
        image_url: String,
        trailer_url: String
    }
);


app.get('/filmes', async(req, res) => {
    const filmes = await Filmes.find();
    res.send(filmes)[0];
});

app.post('/filme', async (req, res) => {
    const filme = new Filmes({
        title: req.body.title,
        description: req.body.description,
        image_url: req.body.image_url,
        trailer_url: req.body.trailer_url
    });

    await filme.save();
    return res.send(filme);
});

app.delete('/filme/:id', async (req, res) => {
    const filme = await Filmes.findById(req.params.id);
    return res.send(filme);
});

app.put('/filme/:id', async (req, res) => {
    const filme = await Filmes.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        description: req.body.description,
        image_url: req.body.image_url,
        trailer_url: req.body.trailer_url
    });

    return res.send(filme);
});

app.listen(port, () => {
    console.log('Port is running')
});
const mongoose = require('mongoose');

async function main() {
    try {
        await mongoose.connect("mongodb://jvnogueira811:AE82ICmjt9R5foWo@ac-jv6hpox-shard-00-00.u5leh7z.mongodb.net:27017,ac-jv6hpox-shard-00-01.u5leh7z.mongodb.net:27017,ac-jv6hpox-shard-00-02.u5leh7z.mongodb.net:27017/?ssl=true&replicaSet=atlas-atmpsf-shard-0&authSource=admin&retryWrites=true&w=majority");
        console.log('Conectado ao banco');
    } catch (error) {
        console.log(`Erro: ${error}`);
    }
}

// AE82ICmjt9R5foWo

module.exports = main;
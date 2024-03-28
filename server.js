import Routes from "./routs.js"
import Fastify from 'fastify'
const fastify = Fastify({
    logger: true
})
//import database

//fastify.register(Routes)

fastify.register(import('@fastify/mysql'),{
    connectionString: 'mysql://root:12345678@localhost/automoveis'
})

fastify.get('/busca/marca/:id', function(req, res){
    fastify.mysql.query(
        `SELECT Nome FROM TabelaMarca WHERE MarcaID = ('${req.params.id}')`,
        function onResult(error, result){
            res.send(error || result)
        }
    );
})

fastify.get('/busca/veiculo/:id', function(req, res){
    fastify.mysql.query(
        `SELECT * FROM TabelaVeiculo WHERE VeiculoID = ('${req.params.id}')`,
        function onResult(error, result){
            res.send(error || result)
        }
    )
})

fastify.get('busca/veiculo/all', function(req, res){
    fastify.mysql.query(
        'SELECT * FROM TabelaVeiculo',
        function onResult(error, result){
            res.send(error || result)
        }
    )
})

fastify.post('/cadastro/marca', function(req,res){
    fastify.mysql.query(
      `INSERT INTO TabelaMarca (Nome) VALUES ('${req.body.Nome}')`,
        function onResult(error, result){
            res.send(error || "Marca cadastrada")
        }
    );
})





try {
    await fastify.listen({ port: 3000 })
} catch (err) {
    fastify.log.error(err)
    process.exit(1)
}
async function routes (fastify, options) {

/*    const carros = {}
    const marcas = {}
    let id = 0
    function existeID(id){
        return carros[id] != null

    }

    fastify.get('/:id', async function (req, res) {
        //funcao res.json(carros) retornava que res.json não era uma função, utilizar return
        let id = req.params.id
        if(existeID(id)){
            return carros[id]
        }else{
            res.send("Veiculo inexistente!")
        }
    })

    /*fastify.get('/exibe/carros', async function(req, res){
        return carros
    })

    fastify.get('/exibe/marcas', async function(req, res){
        return marcas
    })*/

    /*fastify.post('/adicionar/carro', async function(req, res){
        let c = req.body

        const carro = {
            nome: c.nome,
            marca: c.marca,
            placa: c.placa,
        }

        carros[id] = carro
        res.send(`Veiculo de número ${id} cadastrado`)
        id++
    })

    fastify.post('/adicionar/marca', async function(req, res){
        let m = req.body
        const marca = {
            nome: m.nome
        }
        marcas[id] = marca
        res.send(`Marca de número ${id} cadastrada`)
        id++
    })

    fastify.delete('/delete/:id', async function(req, res){
        let id = req.params.id
        if(existeID(id)){
            carros[id] = carros[id+1]
            res.send("Veiculo excluído")
        }else{
            res.send("Veiculo inexistente")
        }
    })

    fastify.put('/update/:id', async function(req, res){
        let id = req.params.id
        if(existeID(id)){
            let c = req.body
            const carro = {
                nome: c.nome,
                marca: c.marca,
                placa: c.placa,
            }
            carros[id] = carro
            res.send("Alteração realizada com sucesso")
        } else{
            res.send("Veiculo inexistente: impossível alterar")
        }
    })

     */
}

export default routes;

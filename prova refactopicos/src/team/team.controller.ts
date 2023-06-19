import timeService from "./team.service"

class PokemonController {
    async create(req, res) {
        const {nomeTreinador, time} = req.body
        try {
            await timeService.create(nomeTreinador, time)
            res.send('ok')
        } catch (error) {
            console.log(error)
        }
    }

    async find(req, res){
        try {
            const times = await timeService.find()
            res.json(times)
        } catch (error) {
            console.log(error)
        }
    }

    async findByTrainerName(req, res){
        const {nomeTreinador} = req.params
        
        try {
            const time = await timeService.findByTrainerName(nomeTreinador)
            res.json(time)
        } catch (error) {
            console.log(error)
        }
    }

    async update(req, res) {
        const {nomeTreinador, newData} = req.body

        try {
            const updatedtime = await timeService.update(nomeTreinador, newData)
            res.json(updatedtime)
        } catch (error) {
            console.log(error)
        }
    }

    async delete(req, res) {
        const {nomeTreinador} = req.params

        try {
            const deletetime = await timeService.delete(nomeTreinador)
            res.json(deletetime)
        } catch (error) {
            console.log(error)
        }
    }
}

export default new PokemonController()

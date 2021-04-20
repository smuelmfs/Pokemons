const { Treinador } = require ('../models');
const { Op } = require ('sequelize')
class TreinadorController {

    async create(req,res){
        try{
            let treinador = {
                nome: req.body.nome,
                idade: Number(req.body.idade),
                level: Number(req.body.level),
                pokemonpreferido: req.body.pokemonpreferido
            }
           const TreinadorResult = await Treinador.create(treinador)
           return res.status(200).json(TreinadorResult)
        }
        catch (e){
            return res.status(400).json({error: e.message})
        }
    }
    async getAll(req,res){
        try{
            const treinadores =  await Treinador.findAll();
            return res.status(200).json(treinadores);
        }
        catch (e){
            return res.status(400).json({error: e.message})
        }
    }
    async getOne(req,res){
        try{
            const treinador =  await Treinador.findByPk(req.params.id);
            return res.status(200).json(treinador)
        }catch(e){
            return res.status(400).json({error: e.message})
        }
    }
    async update(req,res){
        try{
            const treinador = await Treinador.findByPk(req.params.id)
            if(treinador){
            await treinador.update(req.body);
                return res.status(200).json(treinador)
            }
            else{
                return res.status(200).json({mensagem: "Treinador não encontrado"})
            }
        }catch(e){
            return res.status(400).json({error: e.message})
        }
    }
    async delete(req,res){
        try{const treinador = await Treinador.findByPk(req.params.id)
            if(treinador){
            await treinador.destroy(req.body);
                return res.status(200).json(treinador)
            }
            else{
                return res.status(200).json({mensagem: "Treinador não encontrado para ser deletado"})
            }
        }
        catch{
            return res.status(400).json({error: e.message})
        }
    }
    async getAllByNome(req,res){
        let nome = '%' + req.query.nome + '%'
        try{
            const treinadores = await Treinador.findAll({
                where: {
                   nome: {
                       [Op.like]: nome
                       //[Op.eq]://
                     }
                }
            });
            if (treinadores)
            return res.status(200).json(treinadores);
            else
            return res.status(200).json({mensagem: 'Não foram encontrados Treinadores'})
        }
        catch{
            return res.status(400).json({error: e.message})
        }
    }
}

module.exports = new TreinadorController()
const taskmodel = require('../model/taskmodel');
const {
    isPast
} = require('date-fns');



const Taskvalidation = async (req, res, next) => {
    const {
        macaddress,
        type,
        title,
        description,
        when
    } = req.body;
    if (!macaddress)
        return res.status(400).json({
            error: 'Macaddress é obrigatorio'
        })
    else if (!type)
        return res.status(400).json({
            error: 'Tipo é obrigatorio'
        })
    else if (!title)
        return res.status(400).json({
            error: 'Titulo é obrigatorio'
        })
    else if (!description)
        return res.status(400).json({
            error: 'Descrição é obrigatorio'
        })
    else if (!when)
        return res.status(400).json({
            error: 'Data e hora são obrigatorios'
        })
    
    else {
        let exist;

        if (req.params.id) {
            exist = await taskmodel.findOne({
                '_id': {
                    '$ne': req.params.id
                },
                'when': {
                    '$eq': new Date(when)
                },
                'macaddress': {
                    '$in': macaddress
                }
            });
        } else {
            if (isPast(new Date(when)))
        return res.status(400).json({
            error: 'escolha uma data e hora futura'
        })
            exist = await taskmodel.findOne({
                'when': {
                    '$eq': new Date(when)
                },
                'macaddress': {
                    '$in': macaddress
                }
            });

        }
        if (exist) {
            return res.status(400).json({
                error: 'já existe uma tarefa nesse dia e horarios'
            })
        }

        next();
    }


}

module.exports = Taskvalidation
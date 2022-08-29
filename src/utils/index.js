
export function createResource(req, res, model) {

    const despesa = new model(req.body);
    const mesAtual = new Date().getMonth() + 1;
    const anoAtual = new Date().getFullYear();
    const { descricao, valor, data } = req.body;

    if (!descricao || !valor || !data) {
        res.status(422).json({ error: "Campos vazios!", message: "Todos os campos são obrigatórios!" });
        return;
    };

    model.find({
        descricao: descricao,
        data: {
            $gte: new Date(`${anoAtual}-${mesAtual}-01`),
            $lte: new Date(`${anoAtual}-${mesAtual}-31`)
        }

    })
        .exec((error, result) => {

            if (error) {
                res.status(500).send({ message: 'erro ao cadastrar!', error: error });
            }

            if (result.length > 0) {
                res.status(422).json({ message: "Descrição já cadastrada" });
                return;
            }

            despesa.save((error) => {
                if (error) {
                    res.status(500).send({ message: 'erro ao cadastrar!', error: error });
                    return;
                }

                res.status(201).send({ message: "Operação realizada com sucesso!" })

            });

        });

}

export function getAllResources(req, res, model) {
    model.find()
        .exec((error, resource) => {

            if (error) {
                res.status(500).send({ message: "Erro recuperar resultados", error: error.message });
                return;
            }

            res.status(200).json(resource);
        })
}

export function getResourceById(req, res, model) {
    const id = req.params.id;

    model.findById(id)
        .exec((error, resource) => {

            if (!resource || error) {
                res.status(404).send({ message: "Nenhum resultado encontrado" });
                return;
            }
            res.status(200).json(resource);
        })
}

export function updateResource(req, res, model) {
    let mesAtual = new Date().getMonth() + 1;
    let anoAtual = new Date().getFullYear();
    const { descricao, valor, data } = req.body;
    const id = req.params.id;

    if (!descricao || !valor || !data) {
        res.status(422).json({ error: "Campos vazios!", message: "Todos os campos são obrigatórios!" });
        return;
    };


    model.find(
        {
            descricao: descricao,
            data: {
                $gte: new Date(`${anoAtual}-${mesAtual}-01`),
                $lte: new Date(`${anoAtual}-${mesAtual}-31`)
            }
        }
    )
        .exec((error, resource) => {

            if (error) {
                res.status(500).send({ message: 'erro ao cadastrar!', error: error });
                return;
            }

            if (resource.length > 0) {
                res.status(422).json({ message: "Descrição já cadastrada" });
                return;
            }
            model.findByIdAndUpdate(id, { $set: req.body }, (error) => {
                if (error) {
                    res.status(500).send({ message: 'erro ao atualizar', error: error });
                    return;
                }

                res.status(200).send({ message: "Atualização realizada com sucesso!" });
            });
        });
}

export function deleteResource(req, res, model) {
    const id = req.params.id;

    model.findByIdAndDelete(id, (error) => {
        if (!error) {
            res.status(200).send({ message: "Item removido com sucesso!" });

        } else {
            res.status(500).send({ message: error.message })
        }
    })
}
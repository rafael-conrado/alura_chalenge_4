import receitas from '../models/Receita.js';

const Validations = {

    descricaoValida: function (descricao) {

        receitas.find({ 'descricao': descricao })
            .exec((error, data) => {
                
            });
    }
}




console.log(Validations.descricaoValida());
export default Validations;
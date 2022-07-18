const listaAlunos = [{nome:"sidcley",email:"sid@uol.com.br"}];

const AlunosController = {
   index: (req, res) => {
       return res.render("alunos");
   },
    viewAlunos: (req, res) => {
        res.render("alunosLista");
     },
    addAlunos: (req, res) => {
//    const alunos = req.body;
//    listaAlunos.push({nome:alunos.nome, nome:alunos.email});
     
     
         
     res.render("alunosAdd");
     }     
};

module.exports = AlunosController;

